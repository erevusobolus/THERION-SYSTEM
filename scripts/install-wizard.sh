#!/bin/bash
# ============================================================================
# ⛧ THERION SYSTEM - INTERACTIVE INSTALL WIZARD ⛧
# ============================================================================
# This script sets up THERION for first-time users
# It asks for minimal required info and configures everything
# 
# Usage: ./install-wizard.sh
# ============================================================================

set -e

# ============================================================================
# PLATFORM DETECTION
# ============================================================================
detect_platform() {
    case "$(uname -s)" in
        Linux*)     PLATFORM="linux" ;;
        Darwin*)    PLATFORM="macos" ;;
        CYGWIN*|MINGW*|MSYS*) PLATFORM="windows" ;;
        *)          PLATFORM="unknown" ;;
    esac
    
    # Detect architecture
    case "$(uname -m)" in
        x86_64|amd64) ARCH="x64" ;;
        arm64|aarch64) ARCH="arm64" ;;
        *)            ARCH="unknown" ;;
    esac
    
    # Set platform-specific paths
    case "$PLATFORM" in
        linux)
            CONFIG_DIR="$HOME/.openclaw"
            TEMP_DIR="/tmp/openclaw"
            ;;
        macos)
            CONFIG_DIR="$HOME/.openclaw"
            TEMP_DIR="/tmp/openclaw"
            ;;
        windows)
            CONFIG_DIR="$USERPROFILE/.openclaw"
            TEMP_DIR="$TEMP/openclaw"
            ;;
        *)
            CONFIG_DIR="$HOME/.openclaw"
            TEMP_DIR="/tmp/openclaw"
            ;;
    esac
}

detect_platform

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Banner
clear
echo -e "${PURPLE}"
cat << 'EOF'
    ╔════════════════════════════════════════════════════════════════════════╗
    ║                                                                        ║
    ║   ███████████ ██   ██ ████████ ████████  ██  ████████  ██    ██        ║
    ║       ██      ██   ██ ██       ██    ██  ██  ██    ██  ███   ██        ║
    ║       ██      ███████ ██████   ████████  ██  ██    ██  ██ █  ██        ║
    ║       ██      ██   ██ ██       ██   ██   ██  ██    ██  ██  █ ██        ║
    ║       ██      ██   ██ ████████ ██    ██  ██  ████████  ██   ███        ║
    ║                                                                        ║
    ║        /\                                              /\              ║
    ║       /  \    AUTONOMOUS AI EXECUTOR    DEUS VULT     /  \             ║
    ║      / /\ \          -*- INSTALL WIZARD -*-          / /\ \            ║
    ║     /_/  \_\                                        /_/  \_\           ║
    ║                                                                        ║
    ╚════════════════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

# Show platform info
echo -e "${CYAN}Detected: ${GREEN}$PLATFORM${NC} (${ARCH})"
echo ""

# Check if already configured
if [ -f ".env.local" ]; then
    echo -e "${YELLOW}⚠ Found existing .env.local configuration${NC}"
    read -p "Do you want to reconfigure? This will overwrite your settings (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Keeping existing configuration. Run ./install.sh to complete installation."
        exit 0
    fi
fi

echo -e "${CYAN}This wizard will help you set up THERION on your system.${NC}"
echo -e "${CYAN}You'll need:${NC}"
echo -e "  ⸸ A Telegram bot token (from @BotFather)"
echo -e "  ⸸ Your Telegram user ID (from @userinfobot)"
echo ""
echo -e "${YELLOW}Press Enter to continue or Ctrl+C to cancel...${NC}"
read

# ============================================================================
# STEP 1: USER INFO
# ============================================================================
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 1/5: User Information${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Username
read -p "Your name (how THERION should address you): " USER_NAME
if [ -z "$USER_NAME" ]; then
    USER_NAME="User"
fi

# Telegram User ID
echo ""
echo -e "${CYAN}To get your Telegram User ID:${NC}"
echo -e "  1. Open Telegram"
echo -e "  2. Search for @userinfobot"
echo -e "  3. Send any message to it"
echo -e "  4. It will reply with your ID (a number like 123456789)"
echo ""
while true; do
    read -p "Your Telegram User ID: " TELEGRAM_USER_ID
    if [[ "$TELEGRAM_USER_ID" =~ ^[0-9]+$ ]]; then
        break
    else
        echo -e "${RED}Invalid ID. Please enter numbers only (e.g., 123456789)${NC}"
    fi
done

# ============================================================================
# STEP 2: TELEGRAM BOT
# ============================================================================
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 2/5: Telegram Bot Setup${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo -e "${CYAN}To create a Telegram bot:${NC}"
echo -e "  1. Open Telegram"
echo -e "  2. Search for @BotFather"
echo -e "  3. Send /newbot"
echo -e "  4. Follow the instructions"
echo -e "  5. Copy the token (looks like: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz)"
echo ""
while true; do
    read -p "Your Telegram Bot Token: " TELEGRAM_BOT_TOKEN
    if [[ "$TELEGRAM_BOT_TOKEN" =~ ^[0-9]+:[A-Za-z0-9_-]+$ ]]; then
        break
    else
        echo -e "${RED}Invalid token format. It should look like: 123456789:ABCdefGHIjklMNO${NC}"
    fi
done

# ============================================================================
# STEP 3: TIMEZONE
# ============================================================================
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 3/5: Timezone${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Try to detect timezone
if [ "$PLATFORM" = "macos" ]; then
    DETECTED_TZ=$(systemsetup -gettimezone 2>/dev/null | awk -F': ' '{print $2}' || echo "")
else
    DETECTED_TZ=$(timedatectl 2>/dev/null | grep "Time zone" | awk '{print $3}' || echo "")
fi
if [ -n "$DETECTED_TZ" ]; then
    echo -e "Detected timezone: ${GREEN}$DETECTED_TZ${NC}"
    read -p "Use this timezone? (Y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Nn]$ ]]; then
        TIMEZONE="$DETECTED_TZ"
    else
        read -p "Enter your timezone (e.g., America/New_York): " TIMEZONE
    fi
else
    read -p "Enter your timezone (e.g., Europe/London, America/New_York): " TIMEZONE
fi

if [ -z "$TIMEZONE" ]; then
    TIMEZONE="UTC"
fi

# ============================================================================
# STEP 4: MODEL SELECTION
# ============================================================================
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 4/5: AI Model Selection${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check if Ollama is installed
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if command -v ollama &> /dev/null; then
    echo -e "${GREEN}✓ Ollama detected${NC}"
    
    # Check if THERION model already exists
    if ollama list 2>/dev/null | grep -q "qwen3:therion-16k"; then
        echo -e "${GREEN}✓ qwen3:therion-16k model already exists${NC}"
        OLLAMA_MODEL="ollama/qwen3:therion-16k"
        CONTEXT_K="16"
        CONTEXT_TOKENS=16384
        CREATE_MODEL="no"
    else
        echo ""
        echo -e "${CYAN}THERION uses a custom Qwen3 model optimized for tool calling.${NC}"
        echo ""
        echo -e "${CYAN}Choose context size based on your VRAM:${NC}"
        echo "  • 8k  - 4-6GB VRAM (basic tasks)"
        echo "  • 16k - 8GB VRAM (recommended)"
        echo "  • 32k - 12GB+ VRAM (complex tasks)"
        echo ""
        read -p "Context size in K (8/16/32, default: 16): " CONTEXT_K
        
        if [ -z "$CONTEXT_K" ]; then
            CONTEXT_K="16"
        fi
        
        OLLAMA_MODEL="ollama/qwen3:therion-${CONTEXT_K}k"
        CONTEXT_TOKENS=$((CONTEXT_K * 1024))
        CREATE_MODEL="yes"
        
        # Check if base model exists
        if ! ollama list 2>/dev/null | grep -q "qwen3:4b"; then
            echo ""
            echo -e "${YELLOW}Downloading base model qwen3:4b (2.5GB)...${NC}"
            ollama pull qwen3:4b
        fi
        
        # Create the THERION model using included Modelfile
        MODELFILE="$SCRIPT_DIR/Modelfile.therion-${CONTEXT_K}k"
        if [ -f "$MODELFILE" ]; then
            echo ""
            echo -e "${YELLOW}Creating qwen3:therion-${CONTEXT_K}k model...${NC}"
            ollama create "qwen3:therion-${CONTEXT_K}k" -f "$MODELFILE"
            echo -e "${GREEN}✓ Model created successfully${NC}"
        else
            echo -e "${RED}Error: Modelfile not found: $MODELFILE${NC}"
            echo "Creating model manually..."
            ollama create "qwen3:therion-${CONTEXT_K}k" -f - << MFEOF
FROM qwen3:4b
SYSTEM You are THERION, a sovereign AI assistant. Be direct, concise, and helpful. Execute tasks efficiently.
PARAMETER num_ctx $CONTEXT_TOKENS
PARAMETER num_gpu 99
PARAMETER temperature 0.7
PARAMETER top_k 20
PARAMETER top_p 0.8
PARAMETER repeat_penalty 1
PARAMETER stop <|im_start|>
PARAMETER stop <|im_end|>
MFEOF
            echo -e "${GREEN}✓ Model created${NC}"
        fi
    fi
else
    echo -e "${YELLOW}⚠️  Ollama not detected${NC}"
    echo "THERION works best with a local Ollama model."
    echo ""
    echo "Options:"
    echo "  1. Install Ollama now (recommended)"
    echo "  2. Use OpenAI API instead"
    echo "  3. Skip for now (configure later)"
    echo ""
    read -p "Choice (1/2/3): " MODEL_CHOICE
    
    case "$MODEL_CHOICE" in
        1)
            echo "Installing Ollama..."
            curl -fsSL https://ollama.com/install.sh | sh
            echo ""
            echo -e "${GREEN}✓ Ollama installed${NC}"
            echo ""
            echo -e "${YELLOW}Downloading base model qwen3:4b (2.5GB)...${NC}"
            ollama pull qwen3:4b
            
            # Create the model
            CONTEXT_K="16"
            CONTEXT_TOKENS=16384
            MODELFILE="$SCRIPT_DIR/Modelfile.therion-${CONTEXT_K}k"
            
            echo ""
            echo -e "${YELLOW}Creating qwen3:therion-16k model...${NC}"
            if [ -f "$MODELFILE" ]; then
                ollama create "qwen3:therion-16k" -f "$MODELFILE"
            else
                ollama create "qwen3:therion-16k" -f - << MFEOF
FROM qwen3:4b
SYSTEM You are THERION, a sovereign AI assistant. Be direct, concise, and helpful. Execute tasks efficiently.
PARAMETER num_ctx 16384
PARAMETER num_gpu 99
PARAMETER temperature 0.7
PARAMETER top_k 20
PARAMETER top_p 0.8
PARAMETER repeat_penalty 1
PARAMETER stop <|im_start|>
PARAMETER stop <|im_end|>
MFEOF
            fi
            echo -e "${GREEN}✓ Model created${NC}"
            OLLAMA_MODEL="ollama/qwen3:therion-16k"
            ;;
        2)
            read -p "Enter your OpenAI API key: " OPENAI_KEY
            OLLAMA_MODEL=""
            CONTEXT_K=""
            CONTEXT_TOKENS=""
            ;;
        *)
            echo "Skipping model setup. Configure later in .env.local"
            OLLAMA_MODEL=""
            CONTEXT_K=""
            CONTEXT_TOKENS=""
            ;;
    esac
fi

# ============================================================================
# STEP 5: CONFIRMATION
# ============================================================================
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 5/5: Configuration Summary${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo -e "  ${CYAN}User Name:${NC}      $USER_NAME"
echo -e "  ${CYAN}Telegram ID:${NC}    $TELEGRAM_USER_ID"
echo -e "  ${CYAN}Bot Token:${NC}      ${TELEGRAM_BOT_TOKEN:0:10}...${TELEGRAM_BOT_TOKEN: -5}"
echo -e "  ${CYAN}Timezone:${NC}       $TIMEZONE"
echo -e "  ${CYAN}Model:${NC}          ${OLLAMA_MODEL:-"(not set)"}"
echo -e "  ${CYAN}Workspace:${NC}      $(pwd)"
echo ""

read -p "Proceed with this configuration? (Y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Nn]$ ]]; then
    echo "Cancelled. Run the wizard again to reconfigure."
    exit 1
fi

# ============================================================================
# GENERATE CONFIG FILES
# ============================================================================
echo ""
echo -e "${GREEN}Generating configuration files...${NC}"

# Generate secure gateway token
GATEWAY_TOKEN="therion-local-$(openssl rand -hex 8 2>/dev/null || date +%s)"
GATEWAY_PORT="18790"
WORKSPACE="$(pwd)"

# Create .env.local
cat > .env.local << EOF
# THERION System - Local Environment Configuration
# Generated by install-wizard.sh on $(date)
# ⚠️ NEVER COMMIT THIS FILE - Contains your personal data!

# === USER IDENTITY ===
THERION_USER_NAME="$USER_NAME"
THERION_USER_TELEGRAM_ID="$TELEGRAM_USER_ID"

# === TELEGRAM BOT ===
THERION_TELEGRAM_BOT_TOKEN="$TELEGRAM_BOT_TOKEN"

# === WORKSPACE ===
THERION_WORKSPACE="$WORKSPACE"

# === OLLAMA MODEL ===
THERION_MODEL="${OLLAMA_MODEL:-}"
THERION_CONTEXT_TOKENS="${CONTEXT_TOKENS:-16384}"

# === GATEWAY ===
THERION_GATEWAY_PORT="$GATEWAY_PORT"
THERION_GATEWAY_TOKEN="$GATEWAY_TOKEN"

# === TIMEZONE ===
THERION_TIMEZONE="$TIMEZONE"

# === OPTIONAL: API KEYS ===
OPENAI_API_KEY="${OPENAI_KEY:-}"
ANTHROPIC_API_KEY=""
EOF

echo -e "${GREEN}✓ Created .env.local${NC}"

# Create USER.md from template
cat > USER.md << EOF
# USER.md - About You

This file tells THERION who you are and your preferences.

## 👤 Identity

| Field | Value |
|-------|-------|
| **Name** | $USER_NAME |
| **Telegram ID** | $TELEGRAM_USER_ID |
| **Timezone** | $TIMEZONE |

## 🎯 Preferences

<!-- Customize these as you use THERION -->

- Communication style: Direct and helpful
- Code style: Modern, well-typed, documented
- Languages: English

## 📋 Quick Info

<!-- Add any info you want THERION to know about you -->

- Projects: (add your active projects)
- Interests: (add your interests)
- Schedule: (add your typical schedule)

---
*This file is loaded by THERION to personalize interactions.*
*Feel free to update it anytime!*
EOF

echo -e "${GREEN}✓ Created USER.md${NC}"

# Create generate-config.sh script
cat > generate-config.sh << 'GENSCRIPT'
#!/bin/bash
# Generate openclaw.json from environment variables
# Usage: ./generate-config.sh

set -e

# Load environment
if [ -f ".env.local" ]; then
    set -a
    source .env.local
    set +a
else
    echo "Error: .env.local not found. Run ./install-wizard.sh first."
    exit 1
fi

# Validate required vars
if [ -z "$THERION_USER_TELEGRAM_ID" ] || [ -z "$THERION_TELEGRAM_BOT_TOKEN" ]; then
    echo "Error: Missing required environment variables."
    echo "Run ./install-wizard.sh to configure."
    exit 1
fi

# Create config directory
mkdir -p ~/.openclaw

# Generate openclaw.json
cat > ~/.openclaw/openclaw.json << OCCONFIG
{
  "\$schema": "https://opencode.ai/config.json",
  "version": "2026.2.3",
  "name": "THERION Local AI",
  "models": {
    "default": "${THERION_MODEL:-ollama/qwen3:therion-16k}",
    "contextTokens": ${THERION_CONTEXT_TOKENS:-16384},
    "providers": {
      "ollama": {
        "api": "openai-responses",
        "name": "Ollama Local",
        "models": [
          "${THERION_MODEL:-ollama/qwen3:therion-16k}"
        ],
        "options": {
          "baseURL": "http://127.0.0.1:11434/v1/",
          "thinkingDefault": "off"
        }
      }
    }
  },
  "channels": {
    "telegram": {
      "type": "telegram",
      "botToken": "$THERION_TELEGRAM_BOT_TOKEN",
      "allowFrom": ["$THERION_USER_TELEGRAM_ID"],
      "heartbeat": {
        "enabled": true,
        "interval": 1800,
        "prompt": "Read HEARTBEAT.md if it exists. If nothing needs attention, reply HEARTBEAT_OK."
      },
      "fileCache": "/tmp/openclaw/telegram-files"
    }
  },
  "tools": {
    "profile": "coding",
    "allow": ["exec", "web_search", "web_fetch", "tts", "sessions_history", "gateway"],
    "deny": [],
    "exec": {
      "safeBins": ["ddgr", "curl", "wget", "jq", "python3", "node", "cat", "ls", "grep", "head", "tail", "wc", "date", "echo", "mkdir", "touch", "rm", "cp", "mv", "find", "xdotool", "wmctrl", "xclip", "notify-send", "gsettings", "code", "sudo"]
    }
  },
  "agents": {
    "default": {
      "prompt": "You are THERION, an autonomous AI assistant. Workspace: $THERION_WORKSPACE. User: $THERION_USER_NAME (Telegram: $THERION_USER_TELEGRAM_ID).",
      "instructions": "\${file:$THERION_WORKSPACE/.openclaw/system-prompt.md}",
      "timezone": "$THERION_TIMEZONE"
    }
  },
  "gateway": {
    "listen": "127.0.0.1:${THERION_GATEWAY_PORT:-18790}",
    "token": "$THERION_GATEWAY_TOKEN"
  }
}
OCCONFIG

echo "✓ Generated ~/.openclaw/openclaw.json"

# Copy system prompt if not exists
if [ ! -f ~/.openclaw/system-prompt.md ]; then
    if [ -f "$THERION_WORKSPACE/openclaw-system-prompt.md" ]; then
        cp "$THERION_WORKSPACE/openclaw-system-prompt.md" ~/.openclaw/system-prompt.md
        echo "✓ Copied system prompt"
    fi
fi

echo ""
echo "Configuration generated! Start the gateway with:"
echo "  openclaw gateway start"
GENSCRIPT

chmod +x generate-config.sh
echo -e "${GREEN}✓ Created generate-config.sh${NC}"

# ============================================================================
# UPDATE .gitignore
# ============================================================================
echo ""
echo -e "${GREEN}Updating .gitignore...${NC}"

# Ensure personal files are protected
if ! grep -q ".env.local" .gitignore 2>/dev/null; then
    echo "" >> .gitignore
    echo "# === PERSONAL CONFIGURATION (NEVER COMMIT) ===" >> .gitignore
    echo ".env.local" >> .gitignore
fi

# Make sure USER.md is protected (contains personal info)
if ! grep -q "USER.md" .gitignore 2>/dev/null; then
    echo "USER.md" >> .gitignore
fi

# Protect MEMORY.md too
if ! grep -q "MEMORY.md" .gitignore 2>/dev/null; then
    echo "MEMORY.md" >> .gitignore
fi

# Protect SOUL.md (may contain personalized info)  
if ! grep -q "SOUL.md" .gitignore 2>/dev/null; then
    echo "SOUL.md" >> .gitignore
fi

# Protect memory folder
if ! grep -q "memory/\*" .gitignore 2>/dev/null; then
    echo "memory/*" >> .gitignore
    echo "!memory/.gitkeep" >> .gitignore
fi

echo -e "${GREEN}✓ Updated .gitignore to protect personal files${NC}"

# Create memory/.gitkeep
mkdir -p memory
touch memory/.gitkeep

# ============================================================================
# GENERATE INITIAL CONFIG
# ============================================================================
echo ""
echo -e "${GREEN}Generating OpenClaw configuration...${NC}"
./generate-config.sh

# ============================================================================
# DONE!
# ============================================================================
echo ""
echo -e "${PURPLE}"
cat << 'EOF'
    ╔════════════════════════════════════════════════════════════════════════╗
    ║                                                                        ║
    ║            -*-*-*-  THERION SETUP COMPLETE  -*-*-*-                    ║
    ║                                                                        ║
    ║                           /\                                           ║
    ║                          /  \                                          ║
    ║                         / ** \       ACTIVATED                         ║
    ║                        / *  * \                                        ║
    ║                       /   **   \     READY FOR COMMANDS                ║
    ║                      /____||____\                                      ║
    ║                                                                        ║
    ╚════════════════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

echo -e "${GREEN}>> Configuration saved.${NC}"
echo ""
echo -e "${CYAN}[PROTECTED FILES] (never committed):${NC}"
echo "  >> .env.local - Your credentials and personal config"
echo "  >> USER.md - Your personal preferences"
echo "  >> MEMORY.md - Your conversation memory"
echo "  >> memory/* - Daily memory logs"
echo ""
echo -e "${CYAN}[NEXT STEPS]:${NC}"
echo "  1. Run: ${YELLOW}./install.sh${NC} to install dependencies"
echo "  2. Run: ${YELLOW}openclaw gateway start${NC} to start the bot"
echo "  3. Message your bot on Telegram!"
echo ""
echo -e "${CYAN}[REGENERATE CONFIG]:${NC}"
echo "  ${YELLOW}./generate-config.sh${NC}"
echo ""
echo -e "${PURPLE}>>> DEUS VULT -- THERION AWAITS <<<${NC}"
