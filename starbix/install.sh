#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# 🌟 STARBIX INSTALLER v1.0
# ═══════════════════════════════════════════════════════════════════════════════
# A fully local AI companion that runs on YOUR machine
# Zero API keys. Zero cloud costs. Full privacy.
# ═══════════════════════════════════════════════════════════════════════════════

set -e

# ═══════════════════════════════════════════════════════════════════════════════
# CONFIGURATION VARIABLES (User will be prompted)
# ═══════════════════════════════════════════════════════════════════════════════

STARBIX_VERSION="1.0.0"
STARBIX_HOME="${HOME}/.starbix"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="/tmp/starbix-install.log"

# Default values (will be replaced by user input)
TELEGRAM_BOT_TOKEN=""
TELEGRAM_USER_ID=""
GATEWAY_TOKEN=$(head -c 24 /dev/urandom | xxd -p)
INSTALL_VSCODE="no"
INSTALL_MODEL="qwen3:4b"

# ═══════════════════════════════════════════════════════════════════════════════
# COLORS & FORMATTING
# ═══════════════════════════════════════════════════════════════════════════════

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color
BOLD='\033[1m'

print_banner() {
    echo -e "${PURPLE}"
    cat << 'EOF'
   _____ _______       _____  ____ _______   __
  / ____|__   __|/\   |  __ \|  _ \_   _\ \ / /
 | (___    | |  /  \  | |__) | |_) || |  \ V / 
  \___ \   | | / /\ \ |  _  /|  _ < | |   > <  
  ____) |  | |/ ____ \| | \ \| |_) || |_ / . \ 
 |_____/   |_/_/    \_\_|  \_\____/|_____/_/ \_\
                                                
  🌟 Your Local AI Companion — v1.0.0 🌟
EOF
    echo -e "${NC}"
}

info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
success() { echo -e "${GREEN}✅ $1${NC}"; }
warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
error() { echo -e "${RED}❌ $1${NC}"; }
step() { echo -e "${CYAN}➤ $1${NC}"; }

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

# ═══════════════════════════════════════════════════════════════════════════════
# SYSTEM DETECTION
# ═══════════════════════════════════════════════════════════════════════════════

detect_system() {
    step "Detecting system configuration..."
    
    # OS Detection
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        if [ -f /etc/os-release ]; then
            . /etc/os-release
            OS="$ID"
            OS_VERSION="$VERSION_ID"
            OS_NAME="$PRETTY_NAME"
        else
            OS="linux"
            OS_NAME="Unknown Linux"
        fi
        PLATFORM="linux"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        OS="macos"
        OS_VERSION=$(sw_vers -productVersion)
        OS_NAME="macOS $OS_VERSION"
        PLATFORM="macos"
    else
        error "Unsupported OS: $OSTYPE"
        exit 1
    fi
    
    # Architecture
    ARCH=$(uname -m)
    
    # GPU Detection
    GPU="none"
    VRAM=0
    
    if command -v nvidia-smi &> /dev/null; then
        GPU="nvidia"
        VRAM=$(nvidia-smi --query-gpu=memory.total --format=csv,noheader,nounits 2>/dev/null | head -1 || echo "0")
        GPU_NAME=$(nvidia-smi --query-gpu=name --format=csv,noheader 2>/dev/null | head -1 || echo "Unknown NVIDIA")
    elif [[ "$PLATFORM" == "macos" ]]; then
        if [[ "$ARCH" == "arm64" ]]; then
            GPU="apple-silicon"
            # Get unified memory (GPU uses system RAM)
            VRAM=$(sysctl -n hw.memsize 2>/dev/null | awk '{print int($1/1024/1024/1024)}')
            GPU_NAME="Apple Silicon (M-series)"
        fi
    elif command -v rocm-smi &> /dev/null; then
        GPU="amd"
        GPU_NAME="AMD GPU (ROCm)"
    fi
    
    # RAM Detection
    if [[ "$PLATFORM" == "macos" ]]; then
        RAM_MB=$(sysctl -n hw.memsize | awk '{print int($1/1024/1024)}')
    else
        RAM_MB=$(free -m | awk '/^Mem:/{print $2}')
    fi
    RAM_GB=$((RAM_MB / 1024))
    
    # Display detected configuration
    echo ""
    info "System detected:"
    echo "   • OS: $OS_NAME ($ARCH)"
    echo "   • RAM: ${RAM_GB}GB"
    echo "   • GPU: ${GPU_NAME:-CPU only}"
    [[ "$VRAM" -gt 0 ]] && echo "   • VRAM: ${VRAM}GB"
    echo ""
    
    log "System: $OS_NAME, RAM: ${RAM_GB}GB, GPU: $GPU ($VRAM GB VRAM)"
}

# ═══════════════════════════════════════════════════════════════════════════════
# MODEL SELECTION BASED ON HARDWARE
# ═══════════════════════════════════════════════════════════════════════════════

select_model() {
    step "Selecting optimal AI model for your hardware..."
    
    # Determine best model based on VRAM/RAM
    if [[ "$GPU" == "nvidia" ]] || [[ "$GPU" == "apple-silicon" ]]; then
        if [[ "$VRAM" -ge 8 ]]; then
            INSTALL_MODEL="qwen3:8b"
            MODEL_DESC="Qwen3 8B — Best quality (requires 8GB+ VRAM)"
        elif [[ "$VRAM" -ge 4 ]]; then
            INSTALL_MODEL="qwen3:4b"
            MODEL_DESC="Qwen3 4B — Balanced (requires 4GB+ VRAM)"
        else
            INSTALL_MODEL="qwen3:1.5b"
            MODEL_DESC="Qwen3 1.5B — Lightweight (low VRAM)"
        fi
    else
        # CPU-only mode
        if [[ "$RAM_GB" -ge 16 ]]; then
            INSTALL_MODEL="qwen3:4b"
            MODEL_DESC="Qwen3 4B — CPU mode (slower but capable)"
        else
            INSTALL_MODEL="qwen3:1.5b"
            MODEL_DESC="Qwen3 1.5B — CPU mode (lightweight)"
        fi
    fi
    
    info "Recommended model: ${BOLD}$INSTALL_MODEL${NC}"
    echo "   $MODEL_DESC"
    echo ""
    
    read -p "Use recommended model? [Y/n]: " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Nn]$ ]]; then
        echo ""
        echo "Available models:"
        echo "  1) qwen3:1.5b  — Lightweight (2GB RAM/VRAM)"
        echo "  2) qwen3:4b    — Balanced (4GB RAM/VRAM)"
        echo "  3) qwen3:8b    — High Quality (8GB RAM/VRAM)"
        echo "  4) custom      — Enter custom model name"
        echo ""
        read -p "Select [1-4]: " model_choice
        case $model_choice in
            1) INSTALL_MODEL="qwen3:1.5b" ;;
            2) INSTALL_MODEL="qwen3:4b" ;;
            3) INSTALL_MODEL="qwen3:8b" ;;
            4) read -p "Enter model name: " INSTALL_MODEL ;;
        esac
    fi
    
    success "Selected model: $INSTALL_MODEL"
    log "Model selected: $INSTALL_MODEL"
}

# ═══════════════════════════════════════════════════════════════════════════════
# DEPENDENCY INSTALLATION
# ═══════════════════════════════════════════════════════════════════════════════

install_dependencies() {
    step "Installing system dependencies..."
    
    case "$OS" in
        ubuntu|debian|pop)
            sudo apt update
            sudo apt install -y curl jq git nodejs npm python3 python3-pip
            # Install ddgr for web search
            if ! command -v ddgr &> /dev/null; then
                sudo apt install -y ddgr || pip3 install --user ddgr
            fi
            ;;
        fedora)
            sudo dnf install -y curl jq git nodejs npm python3 python3-pip
            pip3 install --user ddgr
            ;;
        arch|manjaro)
            sudo pacman -S --noconfirm curl jq git nodejs npm python python-pip
            pip install --user ddgr
            ;;
        macos)
            if ! command -v brew &> /dev/null; then
                warning "Homebrew not found. Installing..."
                /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            fi
            brew install curl jq git node python3 ddgr
            ;;
        *)
            warning "Unknown OS. Please manually install: curl jq git nodejs npm python3 ddgr"
            ;;
    esac
    
    success "System dependencies installed"
    log "Dependencies installed for $OS"
}

install_ollama() {
    step "Installing Ollama (local LLM runtime)..."
    
    if command -v ollama &> /dev/null; then
        info "Ollama already installed"
        ollama --version
    else
        info "Downloading Ollama..."
        curl -fsSL https://ollama.com/install.sh | sh
        success "Ollama installed"
    fi
    
    # Start Ollama if not running
    if ! pgrep -x "ollama" > /dev/null; then
        info "Starting Ollama service..."
        if [[ "$PLATFORM" == "linux" ]] && command -v systemctl &> /dev/null; then
            sudo systemctl enable ollama
            sudo systemctl start ollama
        else
            # macOS or non-systemd Linux
            nohup ollama serve > /tmp/ollama.log 2>&1 &
        fi
        sleep 3
    fi
    
    success "Ollama is running"
    log "Ollama installed and running"
}

download_model() {
    step "Downloading AI model: $INSTALL_MODEL..."
    info "This may take several minutes depending on your connection"
    
    ollama pull "$INSTALL_MODEL"
    
    success "Model downloaded: $INSTALL_MODEL"
    log "Model downloaded: $INSTALL_MODEL"
}

# ═══════════════════════════════════════════════════════════════════════════════
# TELEGRAM SETUP
# ═══════════════════════════════════════════════════════════════════════════════

setup_telegram() {
    step "Setting up Telegram integration..."
    echo ""
    info "STARBIX uses Telegram to chat with you on-the-go."
    echo ""
    
    echo -e "${YELLOW}📱 To create a Telegram bot:${NC}"
    echo "   1. Open Telegram and message @BotFather"
    echo "   2. Send /newbot and follow prompts"
    echo "   3. Copy the API token it gives you"
    echo ""
    
    while [[ -z "$TELEGRAM_BOT_TOKEN" ]]; do
        read -p "Paste your bot token (or 'skip' to configure later): " TELEGRAM_BOT_TOKEN
        if [[ "$TELEGRAM_BOT_TOKEN" == "skip" ]]; then
            TELEGRAM_BOT_TOKEN=""
            warning "Telegram will be disabled. Edit ~/.starbix/config.json later."
            return
        fi
    done
    
    echo ""
    echo -e "${YELLOW}🆔 To find your Telegram user ID:${NC}"
    echo "   1. Message @userinfobot on Telegram"
    echo "   2. It will reply with your ID"
    echo ""
    
    while [[ -z "$TELEGRAM_USER_ID" ]]; do
        read -p "Enter your Telegram user ID: " TELEGRAM_USER_ID
        if ! [[ "$TELEGRAM_USER_ID" =~ ^[0-9]+$ ]]; then
            error "User ID must be a number"
            TELEGRAM_USER_ID=""
        fi
    done
    
    success "Telegram configured"
    log "Telegram configured: bot token and user ID set"
}

# ═══════════════════════════════════════════════════════════════════════════════
# VS CODE SETUP
# ═══════════════════════════════════════════════════════════════════════════════

setup_vscode() {
    step "VS Code Integration (Optional)"
    echo ""
    info "STARBIX can integrate with VS Code for AI-assisted coding."
    
    read -p "Install VS Code extensions for STARBIX? [y/N]: " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        INSTALL_VSCODE="yes"
        
        # Check if VS Code is installed
        if ! command -v code &> /dev/null; then
            warning "VS Code not found. Please install it from: https://code.visualstudio.com"
        else
            info "Installing recommended extensions..."
            
            # Core extensions
            code --install-extension github.copilot 2>/dev/null || true
            code --install-extension github.copilot-chat 2>/dev/null || true
            code --install-extension automatalabs.copilot-mcp 2>/dev/null || true
            code --install-extension ms-python.python 2>/dev/null || true
            code --install-extension usernamehw.errorlens 2>/dev/null || true
            
            success "VS Code extensions installed"
        fi
    fi
    
    log "VS Code setup: $INSTALL_VSCODE"
}

# ═══════════════════════════════════════════════════════════════════════════════
# CONFIGURATION GENERATION
# ═══════════════════════════════════════════════════════════════════════════════

generate_config() {
    step "Generating STARBIX configuration..."
    
    # Create directories
    mkdir -p "$STARBIX_HOME"
    mkdir -p "$STARBIX_HOME/memory"
    mkdir -p "$STARBIX_HOME/skills"
    mkdir -p "$STARBIX_HOME/mcp-tools"
    mkdir -p "$STARBIX_HOME/logs"
    
    # Generate config from template
    INSTALL_TIMESTAMP=$(date -Iseconds)
    
    # Create main config
    cat > "$STARBIX_HOME/config.json" << EOF
{
  "meta": {
    "version": "$STARBIX_VERSION",
    "installedAt": "$INSTALL_TIMESTAMP",
    "platform": "$PLATFORM"
  },
  
  "identity": {
    "name": "STARBIX",
    "displayName": "🌟 STARBIX",
    "personality": "friendly, helpful, proactive",
    "systemPromptFile": "$STARBIX_HOME/soul.md"
  },
  
  "models": {
    "mode": "merge",
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "$INSTALL_MODEL",
            "name": "STARBIX Brain",
            "reasoning": false,
            "input": ["text"],
            "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
            "contextWindow": 32768,
            "maxTokens": 4096
          }
        ]
      }
    }
  },
  
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/$INSTALL_MODEL",
        "fallbacks": []
      },
      "workspace": "$STARBIX_HOME",
      "contextTokens": 16384,
      "maxConcurrent": 2,
      "timeoutSeconds": 300,
      "thinkingDefault": "medium",
      "typingMode": "instant",
      "sandbox": { "mode": "off" },
      "autonomy": {
        "enabled": true,
        "maxTurnsPerRun": 15,
        "continueOnToolSuccess": true,
        "stopOnRepeatedFailure": 3
      },
      "heartbeat": {
        "enabled": true,
        "intervalMinutes": 30,
        "proactiveMode": true,
        "stateFile": "memory/heartbeat-state.json"
      },
      "memorySearch": { "enabled": true },
      "compaction": {
        "memoryFlush": {
          "enabled": true,
          "softThresholdTokens": 6000
        }
      }
    },
    "list": [
      {
        "id": "main",
        "default": true,
        "identity": {
          "name": "STARBIX",
          "systemPromptFile": "$STARBIX_HOME/soul.md"
        },
        "groupChat": {
          "mentionPatterns": ["@starbix", "starbix", "STARBIX"]
        }
      }
    ]
  },
  
  "tools": {
    "allow": ["exec", "tts", "files_read", "files_write", "files_list"],
    "deny": [],
    "exec": {
      "host": "gateway",
      "security": "safe",
      "ask": "off",
      "notifyOnExit": true,
      "pathPrepend": [
        "$STARBIX_HOME/mcp-tools",
        "$HOME/.local/bin",
        "/usr/local/bin",
        "/usr/bin",
        "/bin"
      ],
      "safeBins": [
        "ddgr", "curl", "wget", "jq", "python3", "node",
        "cat", "ls", "head", "tail", "grep", "echo", "date"
      ]
    }
  },
  
  "messages": {
    "responsePrefix": "",
    "queue": { "mode": "collect", "debounceMs": 800, "cap": 15, "drop": "summarize" },
    "inbound": { "debounceMs": 1000 },
    "ackReaction": "🤔",
    "ackReactionScope": "direct",
    "removeAckAfterReply": true
  },
  
  "commands": {
    "native": "auto",
    "nativeSkills": "auto",
    "text": true,
    "bash": true,
    "config": true,
    "debug": true,
    "restart": true
  },
  
  "channels": {
    "telegram": {
      "enabled": ${TELEGRAM_BOT_TOKEN:+true}${TELEGRAM_BOT_TOKEN:-false},
      "dmPolicy": "allowlist",
      "botToken": "${TELEGRAM_BOT_TOKEN:-YOUR_BOT_TOKEN_HERE}",
      "allowFrom": ["${TELEGRAM_USER_ID:-YOUR_USER_ID_HERE}"],
      "groupPolicy": "disabled",
      "historyLimit": 50,
      "streamMode": "partial",
      "mediaMaxMb": 10,
      "retry": { "attempts": 5, "minDelayMs": 300, "maxDelayMs": 15000, "jitter": 0.1 },
      "network": { "autoSelectFamily": false },
      "actions": { "reactions": true, "sendMessage": true },
      "linkPreview": true
    }
  },
  
  "gateway": {
    "port": 18790,
    "mode": "local",
    "bind": "loopback",
    "controlUi": { "enabled": true },
    "auth": {
      "mode": "token",
      "token": "$GATEWAY_TOKEN"
    }
  },
  
  "logging": {
    "level": "info",
    "file": "/tmp/starbix/starbix.log",
    "consoleLevel": "info",
    "consoleStyle": "pretty",
    "redactSensitive": "on"
  },
  
  "skills": {
    "load": { "extraDirs": ["$STARBIX_HOME/skills"] }
  },
  
  "cron": { "enabled": true },
  "browser": { "enabled": false }
}
EOF
    
    # Copy soul file
    cp "$SCRIPT_DIR/config/soul.md" "$STARBIX_HOME/soul.md"
    
    # Create empty memory files
    echo '{"lastChecks": {}}' > "$STARBIX_HOME/memory/heartbeat-state.json"
    
    success "Configuration generated at $STARBIX_HOME"
    log "Config generated at $STARBIX_HOME"
}

# ═══════════════════════════════════════════════════════════════════════════════
# OPENCLAW INSTALLATION
# ═══════════════════════════════════════════════════════════════════════════════

install_openclaw() {
    step "Installing OpenClaw gateway..."
    
    cd "$STARBIX_HOME"
    
    # Create package.json
    cat > "$STARBIX_HOME/package.json" << 'EOF'
{
  "name": "starbix-gateway",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "openclaw": "latest"
  }
}
EOF
    
    npm install
    
    success "OpenClaw gateway installed"
    log "OpenClaw installed"
}

# ═══════════════════════════════════════════════════════════════════════════════
# SYSTEMD SERVICE
# ═══════════════════════════════════════════════════════════════════════════════

setup_service() {
    step "Setting up STARBIX service..."
    
    if [[ "$PLATFORM" == "linux" ]] && command -v systemctl &> /dev/null; then
        mkdir -p ~/.config/systemd/user/
        
        NODE_PATH=$(which node)
        
        cat > ~/.config/systemd/user/starbix.service << EOF
[Unit]
Description=STARBIX Local AI Companion
After=network-online.target ollama.service
Wants=network-online.target

[Service]
Type=simple
ExecStart=$NODE_PATH $STARBIX_HOME/node_modules/openclaw/openclaw-gateway.js
Restart=always
RestartSec=5
WorkingDirectory=$STARBIX_HOME
Environment="HOME=$HOME"
Environment="PATH=$PATH"
Environment=OPENCLAW_CONFIG=$STARBIX_HOME/config.json
Environment=OPENCLAW_GATEWAY_PORT=18790
Environment=OPENCLAW_GATEWAY_TOKEN=$GATEWAY_TOKEN

[Install]
WantedBy=default.target
EOF
        
        systemctl --user daemon-reload
        systemctl --user enable starbix
        
        success "Systemd service installed"
        info "Start with: systemctl --user start starbix"
    else
        # Create simple start script for non-systemd systems
        cat > "$STARBIX_HOME/start.sh" << EOF
#!/bin/bash
cd "$STARBIX_HOME"
export OPENCLAW_CONFIG="$STARBIX_HOME/config.json"
export OPENCLAW_GATEWAY_PORT=18790
export OPENCLAW_GATEWAY_TOKEN="$GATEWAY_TOKEN"
node node_modules/openclaw/openclaw-gateway.js
EOF
        chmod +x "$STARBIX_HOME/start.sh"
        
        success "Start script created at $STARBIX_HOME/start.sh"
    fi
    
    # Create CLI wrapper
    cat > "$HOME/.local/bin/starbix" << 'EOF'
#!/bin/bash
STARBIX_HOME="$HOME/.starbix"

case "$1" in
    start)
        if command -v systemctl &> /dev/null; then
            systemctl --user start starbix
        else
            nohup "$STARBIX_HOME/start.sh" > /tmp/starbix/starbix.log 2>&1 &
            echo "STARBIX started (PID: $!)"
        fi
        ;;
    stop)
        if command -v systemctl &> /dev/null; then
            systemctl --user stop starbix
        else
            pkill -f "openclaw-gateway"
        fi
        ;;
    restart)
        $0 stop
        sleep 2
        $0 start
        ;;
    status)
        if command -v systemctl &> /dev/null; then
            systemctl --user status starbix
        else
            pgrep -f "openclaw-gateway" && echo "STARBIX is running" || echo "STARBIX is stopped"
        fi
        ;;
    logs)
        tail -f /tmp/starbix/starbix.log
        ;;
    config)
        ${EDITOR:-nano} "$STARBIX_HOME/config.json"
        ;;
    chat)
        shift
        curl -s -X POST "http://localhost:18790/chat" \
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer $(jq -r '.gateway.auth.token' $STARBIX_HOME/config.json)" \
            -d "{\"message\": \"$*\"}" | jq -r '.response'
        ;;
    *)
        echo "STARBIX CLI"
        echo ""
        echo "Commands:"
        echo "  start    - Start STARBIX"
        echo "  stop     - Stop STARBIX"
        echo "  restart  - Restart STARBIX"
        echo "  status   - Check if running"
        echo "  logs     - View live logs"
        echo "  config   - Edit configuration"
        echo "  chat <msg> - Send a message"
        ;;
esac
EOF
    chmod +x "$HOME/.local/bin/starbix"
    
    log "Service and CLI installed"
}

# ═══════════════════════════════════════════════════════════════════════════════
# MCP TOOLS INSTALLATION
# ═══════════════════════════════════════════════════════════════════════════════

install_mcp_tools() {
    step "Installing MCP tools (cognitive extensions)..."
    
    # Copy MCP tools from source
    if [ -d "$SCRIPT_DIR/../mcp-therion-tools" ]; then
        cp -r "$SCRIPT_DIR/../mcp-therion-tools/"* "$STARBIX_HOME/mcp-tools/"
        chmod +x "$STARBIX_HOME/mcp-tools/"*
        success "MCP tools installed"
    else
        warning "MCP tools source not found. Skipping."
    fi
    
    log "MCP tools installed"
}

# ═══════════════════════════════════════════════════════════════════════════════
# FINAL STEPS
# ═══════════════════════════════════════════════════════════════════════════════

print_success() {
    echo ""
    echo -e "${GREEN}════════════════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}  🌟 STARBIX INSTALLED SUCCESSFULLY! 🌟${NC}"
    echo -e "${GREEN}════════════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo -e "${CYAN}Quick Start:${NC}"
    echo ""
    echo "  1. Start STARBIX:"
    echo -e "     ${BOLD}starbix start${NC}"
    echo ""
    echo "  2. Check status:"
    echo -e "     ${BOLD}starbix status${NC}"
    echo ""
    echo "  3. Chat via terminal:"
    echo -e "     ${BOLD}starbix chat \"Hello STARBIX!\"${NC}"
    echo ""
    if [[ -n "$TELEGRAM_BOT_TOKEN" ]]; then
        echo "  4. Chat via Telegram:"
        echo "     Open your bot and send a message!"
        echo ""
    fi
    echo -e "${CYAN}Configuration:${NC}"
    echo "  • Config file: $STARBIX_HOME/config.json"
    echo "  • Personality: $STARBIX_HOME/soul.md"
    echo "  • Logs: /tmp/starbix/starbix.log"
    echo ""
    echo -e "${CYAN}Documentation:${NC}"
    echo "  • README: $SCRIPT_DIR/README.md"
    echo "  • Modding: $SCRIPT_DIR/MODDING.md"
    echo ""
    echo -e "${PURPLE}Enjoy your new AI companion! 🌟${NC}"
    echo ""
}

# ═══════════════════════════════════════════════════════════════════════════════
# MAIN INSTALLATION FLOW
# ═══════════════════════════════════════════════════════════════════════════════

main() {
    print_banner
    
    echo ""
    info "Welcome to STARBIX installer!"
    info "This will set up a local AI companion on your machine."
    echo ""
    
    read -p "Continue with installation? [Y/n]: " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Nn]$ ]]; then
        echo "Installation cancelled."
        exit 0
    fi
    
    # Create log directory
    mkdir -p /tmp/starbix
    echo "Installation started at $(date)" > "$LOG_FILE"
    
    # Run installation steps
    detect_system
    select_model
    install_dependencies
    install_ollama
    download_model
    setup_telegram
    setup_vscode
    generate_config
    install_openclaw
    install_mcp_tools
    setup_service
    
    print_success
}

# Run main if executed directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi
