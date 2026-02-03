#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# ⚔️ THERION TOOL CALL VALIDATOR — AUTOFIX PARSING VERIFICATION
# ═══════════════════════════════════════════════════════════════════════════════
# Monitors OpenClaw responses for leaked tool call XML that bypassed Ollama's
# OpenAI compatibility layer translation.
#
# PROBLEM: Hermes3/local models output <tool_call> XML format, which Ollama
#          SHOULD translate to OpenAI's tool_calls array. When this fails,
#          raw XML leaks into chat responses.
#
# USAGE:
#   ./tool-call-validator.sh           # One-time scan
#   ./tool-call-validator.sh --watch   # Continuous monitoring
#   ./tool-call-validator.sh --fix     # Auto-fix leaked XML in sessions
# ═══════════════════════════════════════════════════════════════════════════════

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

OPENCLAW_DIR="$HOME/.openclaw"
LOG_FILE="/tmp/openclaw/openclaw.log"
SESSIONS_DIR="$OPENCLAW_DIR/agents/main/sessions"

# Patterns that indicate leaked tool call XML
LEAK_PATTERNS=(
    '<tool_call>'
    '</tool_call>'
    '<function_call>'
    '</function_call>'
    '<invoke name='
    '</invoke>'
    '<tools>'
    '</tools>'
    '"name":\s*"[^"]+",\s*"arguments":'
    '\[Tool Call:'
    '\[Tool Result'
)

print_header() {
    echo -e "${CYAN}╔══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║ ⚔️  THERION TOOL CALL VALIDATOR                              ║${NC}"
    echo -e "${CYAN}╚══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
}

check_file_for_leaks() {
    local file="$1"
    local found_issues=0
    
    for pattern in "${LEAK_PATTERNS[@]}"; do
        if grep -qE "$pattern" "$file" 2>/dev/null; then
            if [[ $found_issues -eq 0 ]]; then
                echo -e "${RED}[LEAK DETECTED]${NC} $file"
                found_issues=1
            fi
            echo -e "  ${YELLOW}Pattern:${NC} $pattern"
            grep -n -E "$pattern" "$file" 2>/dev/null | head -3 | while read line; do
                echo -e "    ${BLUE}→${NC} $line"
            done
        fi
    done
    
    return $found_issues
}

scan_sessions() {
    echo -e "${BLUE}[SCANNING]${NC} Sessions directory..."
    local total_issues=0
    
    if [[ -d "$SESSIONS_DIR" ]]; then
        find "$SESSIONS_DIR" -name "*.json" -type f 2>/dev/null | while read file; do
            if ! check_file_for_leaks "$file"; then
                ((total_issues++)) || true
            fi
        done
    else
        echo -e "${YELLOW}[WARN]${NC} Sessions directory not found: $SESSIONS_DIR"
    fi
    
    return $total_issues
}

scan_logs() {
    echo -e "${BLUE}[SCANNING]${NC} Recent logs..."
    
    if [[ -f "$LOG_FILE" ]]; then
        # Check last 500 lines
        local temp_file=$(mktemp)
        tail -500 "$LOG_FILE" > "$temp_file"
        
        if ! check_file_for_leaks "$temp_file"; then
            echo -e "${RED}[ISSUES IN LOGS]${NC} Tool call XML found in recent log entries"
        fi
        
        rm -f "$temp_file"
    else
        echo -e "${YELLOW}[WARN]${NC} Log file not found: $LOG_FILE"
    fi
}

watch_mode() {
    echo -e "${GREEN}[WATCHING]${NC} Monitoring for tool call leaks... (Ctrl+C to stop)"
    echo ""
    
    if [[ ! -f "$LOG_FILE" ]]; then
        echo -e "${RED}[ERROR]${NC} Log file not found: $LOG_FILE"
        exit 1
    fi
    
    # Build regex for all patterns
    local regex=$(printf "%s|" "${LEAK_PATTERNS[@]}")
    regex="${regex%|}"  # Remove trailing |
    
    tail -f "$LOG_FILE" 2>/dev/null | grep --line-buffered -E "$regex" | while read line; do
        echo -e "${RED}[LEAK]${NC} $(date '+%H:%M:%S') $line"
    done
}

fix_session_leaks() {
    echo -e "${BLUE}[FIX MODE]${NC} Attempting to clean leaked XML from sessions..."
    
    if [[ ! -d "$SESSIONS_DIR" ]]; then
        echo -e "${RED}[ERROR]${NC} Sessions directory not found"
        exit 1
    fi
    
    local fixed_count=0
    
    find "$SESSIONS_DIR" -name "*.json" -type f 2>/dev/null | while read file; do
        local temp_file="${file}.tmp"
        local modified=false
        
        # Use Python for JSON-aware cleaning
        python3 << PYEOF
import json
import re
import sys

def clean_tool_leaks(text):
    if not isinstance(text, str):
        return text
    
    # Remove <tool_call>...</tool_call> blocks
    text = re.sub(r'<tool_call>[\s\S]*?</tool_call>', '', text)
    text = re.sub(r'<function_call>[\s\S]*?</function_call>', '', text)
    text = re.sub(r'<invoke[^>]*>[\s\S]*?</invoke>', '', text)
    text = re.sub(r'<tools>[\s\S]*?</tools>', '', text)
    text = re.sub(r'\[Tool Call:[^\]]*\][\s\S]*?(?=\[Tool |\n\n|$)', '', text)
    text = re.sub(r'\[Tool Result[^\]]*\][\s\S]*?(?=\[Tool |\n\n|$)', '', text)
    
    # Clean up extra whitespace
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()

def process_messages(data):
    modified = False
    if isinstance(data, dict):
        for key, value in data.items():
            if key in ('content', 'text', 'message') and isinstance(value, str):
                cleaned = clean_tool_leaks(value)
                if cleaned != value:
                    data[key] = cleaned
                    modified = True
            elif isinstance(value, (dict, list)):
                if process_messages(value):
                    modified = True
    elif isinstance(data, list):
        for item in data:
            if process_messages(item):
                modified = True
    return modified

try:
    with open("$file", 'r') as f:
        data = json.load(f)
    
    if process_messages(data):
        with open("$temp_file", 'w') as f:
            json.dump(data, f, indent=2)
        print("MODIFIED")
    else:
        print("CLEAN")
except Exception as e:
    print(f"ERROR: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF
        
        result=$?
        if [[ -f "$temp_file" ]]; then
            mv "$temp_file" "$file"
            echo -e "${GREEN}[FIXED]${NC} $file"
            ((fixed_count++)) || true
        fi
    done
    
    echo -e "${GREEN}[DONE]${NC} Fixed $fixed_count files"
}

validate_tool_schemas() {
    echo -e "${BLUE}[VALIDATING]${NC} Tool function schemas..."
    
    # Check if OpenClaw is running
    if ! curl -s "http://127.0.0.1:18789/health" > /dev/null 2>&1; then
        echo -e "${YELLOW}[WARN]${NC} OpenClaw gateway not responding"
        return
    fi
    
    # Get status and extract tool info
    openclaw status 2>/dev/null | grep -iE "tool|function" || echo -e "${GREEN}[OK]${NC} No tool issues in status"
}

main() {
    print_header
    
    case "${1:-scan}" in
        --watch|-w)
            watch_mode
            ;;
        --fix|-f)
            fix_session_leaks
            ;;
        --validate|-v)
            validate_tool_schemas
            ;;
        scan|--scan|-s|*)
            scan_sessions
            echo ""
            scan_logs
            echo ""
            echo -e "${GREEN}[TIP]${NC} Run with --watch for continuous monitoring"
            echo -e "${GREEN}[TIP]${NC} Run with --fix to clean leaked XML from sessions"
            ;;
    esac
}

main "$@"
