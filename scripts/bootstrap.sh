#!/bin/bash
#═══════════════════════════════════════════════════════════════════════════════
#  ⚔️ THERION SYSTEM - ONE-COMMAND BOOTSTRAP INSTALLER ⚔️
#  
#  Run this with: curl -fsSL https://raw.githubusercontent.com/erevusobolus/THERION-SYSTEM/main/scripts/bootstrap.sh | bash
#  
#  This script will:
#  1. Install system dependencies (Ollama, Node.js, etc.)
#  2. Clone THERION-SYSTEM repository
#  3. Download and configure AI model (qwen3:4b)
#  4. Set up OpenClaw gateway
#  5. Prompt for Telegram bot configuration
#
#  100% Free | 100% Private | 100% Yours
#  https://erevus.space | erevus.ai@proton.me
#═══════════════════════════════════════════════════════════════════════════════

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${PURPLE}"
cat << 'EOF'
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║        ████████╗██╗  ██╗███████╗██████╗ ██╗ ██████╗ ███╗   ██╗              ║
║        ╚══██╔══╝██║  ██║██╔════╝██╔══██╗██║██╔═══██╗████╗  ██║              ║
║           ██║   ███████║█████╗  ██████╔╝██║██║   ██║██╔██╗ ██║              ║
║           ██║   ██╔══██║██╔══╝  ██╔══██╗██║██║   ██║██║╚██╗██║              ║
║           ██║   ██║  ██║███████╗██║  ██║██║╚██████╔╝██║ ╚████║              ║
║           ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝              ║
║                                                                              ║
║                    ⚔️ ONE-COMMAND BOOTSTRAP INSTALLER ⚔️                     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

echo -e "${CYAN}Your AI. Your Hardware. Your Rules.${NC}"
echo -e "${YELLOW}100% Free Forever | 100% Private | 100% Yours${NC}"
echo ""

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    echo -e "${RED}⚠️  Do not run this script as root. Run as your normal user.${NC}"
    exit 1
fi

# Detect OS
echo -e "${BLUE}🔍 Detecting operating system...${NC}"
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
    OS_NAME=$NAME
    echo -e "${GREEN}✅ Detected: $OS_NAME${NC}"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="macos"
    OS_NAME="macOS"
    echo -e "${GREEN}✅ Detected: macOS${NC}"
else
    echo -e "${RED}❌ Cannot detect OS. Please install manually.${NC}"
    exit 1
fi

# Install system dependencies
echo ""
echo -e "${BLUE}📦 Installing system dependencies...${NC}"
case "$OS" in
    ubuntu|debian|pop)
        sudo apt update
        sudo apt install -y curl git jq nodejs npm python3 python3-pip w3m
        # Install ddgr
        if ! command -v ddgr &> /dev/null; then
            sudo apt install -y ddgr 2>/dev/null || pip3 install --user ddgr
        fi
        ;;
    fedora)
        sudo dnf install -y curl git jq nodejs npm python3 python3-pip w3m
        pip3 install --user ddgr
        ;;
    arch|manjaro|endeavouros)
        sudo pacman -S --noconfirm curl git jq nodejs npm python python-pip w3m
        yay -S --noconfirm ddgr 2>/dev/null || pip3 install --user ddgr
        ;;
    macos)
        if ! command -v brew &> /dev/null; then
            echo -e "${YELLOW}Installing Homebrew...${NC}"
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        fi
        brew install node python jq ddgr w3m
        ;;
    *)
        echo -e "${RED}⚠️  Unsupported OS: $OS${NC}"
        echo "Please install manually: curl git jq nodejs npm python3 ddgr w3m"
        echo "Then re-run this script."
        exit 1
        ;;
esac
echo -e "${GREEN}✅ System dependencies installed${NC}"

# Install Ollama
echo ""
echo -e "${BLUE}🧠 Installing Ollama (Local AI Engine)...${NC}"
if ! command -v ollama &> /dev/null; then
    curl -fsSL https://ollama.ai/install.sh | sh
    echo -e "${GREEN}✅ Ollama installed${NC}"
else
    echo -e "${GREEN}✅ Ollama already installed${NC}"
fi

# Start Ollama service
echo -e "${BLUE}🚀 Starting Ollama service...${NC}"
if [[ "$OS" == "macos" ]]; then
    # macOS - Ollama runs as app
    ollama serve &>/dev/null &
    sleep 3
else
    # Linux - use systemctl if available
    if command -v systemctl &> /dev/null; then
        sudo systemctl start ollama 2>/dev/null || ollama serve &>/dev/null &
        sleep 3
    else
        ollama serve &>/dev/null &
        sleep 3
    fi
fi

# Download AI Model
echo ""
echo -e "${BLUE}🧠 Downloading AI Model (qwen3:4b - ~2.5GB)...${NC}"
echo -e "${YELLOW}This may take 5-10 minutes depending on your internet speed.${NC}"
ollama pull qwen3:4b
echo -e "${GREEN}✅ AI Model downloaded${NC}"

# Install OpenClaw
echo ""
echo -e "${BLUE}🦞 Installing OpenClaw Gateway...${NC}"
npm install -g openclaw
echo -e "${GREEN}✅ OpenClaw installed${NC}"

# Clone THERION
echo ""
echo -e "${BLUE}📥 Cloning THERION-SYSTEM...${NC}"
INSTALL_DIR="$HOME/THERION-SYSTEM"
if [ -d "$INSTALL_DIR" ]; then
    echo -e "${YELLOW}⚠️  $INSTALL_DIR already exists. Updating...${NC}"
    cd "$INSTALL_DIR"
    git pull
else
    git clone https://github.com/erevusobolus/THERION-SYSTEM.git "$INSTALL_DIR"
    cd "$INSTALL_DIR"
fi
echo -e "${GREEN}✅ THERION-SYSTEM cloned to $INSTALL_DIR${NC}"

# Create config directory
echo ""
echo -e "${BLUE}⚙️  Creating configuration...${NC}"
mkdir -p ~/.openclaw
mkdir -p /tmp/openclaw

# Telegram Bot Setup
echo ""
echo -e "${PURPLE}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${CYAN}📱 TELEGRAM BOT SETUP${NC}"
echo -e "${PURPLE}═══════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "To use THERION via Telegram, you need a bot token."
echo ""
echo -e "${YELLOW}To get your bot token:${NC}"
echo "  1. Open Telegram and message @BotFather"
echo "  2. Send /newbot and follow the prompts"
echo "  3. Copy the token (looks like: 123456789:ABCdefGHI...)"
echo ""
echo -e "${YELLOW}To get your user ID:${NC}"
echo "  1. Message @userinfobot on Telegram"
echo "  2. It will reply with your user ID (a number)"
echo ""

read -p "Enter your Telegram Bot Token (or press Enter to skip): " BOT_TOKEN
read -p "Enter your Telegram User ID (or press Enter to skip): " USER_ID

# Create config file
if [ -n "$BOT_TOKEN" ] && [ -n "$USER_ID" ]; then
    cat > ~/.openclaw/openclaw.json << EOF
{
  "logging": {
    "level": "info",
    "file": "/tmp/openclaw/openclaw.log"
  },
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3:4b",
            "name": "Qwen3 4B",
            "contextWindow": 8192,
            "maxTokens": 4096
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/qwen3:4b"
      },
      "workspace": "$INSTALL_DIR",
      "contextTokens": 8192,
      "timeoutSeconds": 300,
      "thinkingDefault": "high"
    },
    "list": [
      {
        "id": "main",
        "default": true,
        "identity": {
          "name": "THERION",
          "systemPromptFile": "$INSTALL_DIR/SOUL.md"
        }
      }
    ]
  },
  "tools": {
    "allow": ["exec", "files_read", "files_write"],
    "exec": {
      "safeBins": [
        "ddgr", "curl", "wget", "jq", "python3", "node",
        "cat", "ls", "head", "tail", "grep", "echo", "date", "w3m"
      ]
    }
  },
  "channels": {
    "telegram": {
      "token": "$BOT_TOKEN",
      "allowedUsers": ["$USER_ID"]
    }
  }
}
EOF
    echo -e "${GREEN}✅ Configuration created with Telegram bot${NC}"
else
    cp "$INSTALL_DIR/config/openclaw.template.json" ~/.openclaw/openclaw.json
    echo -e "${YELLOW}⚠️  Telegram not configured. Edit ~/.openclaw/openclaw.json later.${NC}"
fi

# Make scripts executable
chmod +x "$INSTALL_DIR"/scripts/*.sh 2>/dev/null || true
chmod +x "$INSTALL_DIR"/mcp-therion-tools/therion* 2>/dev/null || true

# Final summary
echo ""
echo -e "${PURPLE}"
cat << 'EOF'
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                    ✅ THERION INSTALLATION COMPLETE! ✅                      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

echo -e "${GREEN}📁 Installed to: $INSTALL_DIR${NC}"
echo -e "${GREEN}⚙️  Config at: ~/.openclaw/openclaw.json${NC}"
echo ""
echo -e "${CYAN}🚀 TO START THERION:${NC}"
echo ""
echo "   openclaw gateway start"
echo ""

if [ -n "$BOT_TOKEN" ]; then
    echo -e "${CYAN}📱 Then message your bot on Telegram!${NC}"
    echo ""
fi

echo -e "${YELLOW}📚 DOCUMENTATION:${NC}"
echo "   • README: $INSTALL_DIR/README.md"
echo "   • Quick Start: $INSTALL_DIR/docs/QUICKSTART.md"
echo "   • Tools Reference: $INSTALL_DIR/TOOLS.md"
echo ""
echo -e "${YELLOW}🔧 USEFUL COMMANDS:${NC}"
echo "   • Check status: openclaw gateway status"
echo "   • View logs: tail -f /tmp/openclaw/openclaw.log"
echo "   • Restart: openclaw gateway restart"
echo ""
echo -e "${PURPLE}🌐 https://erevus.space | 📧 erevus.ai@proton.me${NC}"
echo ""
echo -e "${PURPLE}⚔️ DEUS VULT — Your AI. Your Data. Your Rules. ⚔️${NC}"
