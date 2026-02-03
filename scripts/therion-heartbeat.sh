#!/usr/bin/env bash
# ⚔️ THERION PROACTIVE AGENT HEARTBEAT ⚔️
# Runs periodically to check on things and take initiative

# Auto-detect workspace from script location
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE="$(dirname "$SCRIPT_DIR")"
MEMORY_DIR="$WORKSPACE/memory"
STATE_FILE="$MEMORY_DIR/proactive-state.json"

# Ensure memory dir exists
mkdir -p "$MEMORY_DIR"

# Initialize state if doesn't exist
if [ ! -f "$STATE_FILE" ]; then
    echo '{"lastCheck":0,"tasksTracked":[]}' > "$STATE_FILE"
fi

# Get current timestamp
NOW=$(date +%s)

# Check if we should do proactive work (every 30 minutes)
LAST_CHECK=$(jq -r '.lastCheck' "$STATE_FILE")
TIME_DIFF=$((NOW - LAST_CHECK))

if [ $TIME_DIFF -lt 1800 ]; then
    echo "⏰ Too soon since last check ($TIME_DIFF seconds ago)"
    exit 0
fi

echo "🔍 Proactive heartbeat starting..."

# Update last check time
jq ".lastCheck = $NOW" "$STATE_FILE" > "$STATE_FILE.tmp" && mv "$STATE_FILE.tmp" "$STATE_FILE"

# Proactive tasks
echo "✅ Heartbeat complete at $(date)"
