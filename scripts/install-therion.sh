#!/bin/bash
# THERION System - Full Installation Script
# Run this on a fresh system to install everything

set -e  # Exit on error

echo "⚔️ THERION SYSTEM - AUTOMATED INSTALLER ⚔️"
echo ""

# Detect OS
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
else
    echo "Cannot detect OS. Please install manually."
    exit 1
fi

# Install system dependencies
echo "📦 Installing system dependencies..."
case "$OS" in
    ubuntu|debian)
        sudo apt update
        sudo apt install -y curl jq git nodejs npm python3 python3-pip ddgr
        ;;
    arch|manjaro)
        sudo pacman -S --noconfirm curl jq git nodejs npm python python-pip ddgr
        ;;
    fedora)
        sudo dnf install -y curl jq git nodejs npm python3 python3-pip
        # ddgr from pip on Fedora
        pip3 install --user ddgr
        ;;
    *)
        echo "Unsupported OS: $OS"
        echo "Please install manually: curl jq git nodejs npm python3 pip ddgr"
        exit 1
        ;;
esac

# Install Node dependencies
echo "📦 Installing Node dependencies..."
cd openclaw-local
npm install
cd ..

cd mcp-therion-tools
npm install
cd ..

# Install Python dependencies (optional)
echo "🐍 Installing Python dependencies (optional - for web automation)..."
read -p "Install Playwright for web automation? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    pip3 install playwright
    playwright install chromium
    echo "✅ Playwright installed"
else
    echo "⏭️  Skipping Playwright"
fi

# Make tools executable
echo "🔧 Making tools executable..."
chmod +x mcp-therion-tools/therion-*
chmod +x scripts/*.sh
chmod +x scripts/*.py

# Create config directory
echo "📁 Creating config directory..."
mkdir -p ~/.openclaw

# Copy default configs
echo "⚙️  Copying default configs..."
if [ ! -f ~/.openclaw/openclaw.json ]; then
    cp openclaw-local/openclaw.json ~/.openclaw/openclaw.json
    echo "📝 Edit ~/.openclaw/openclaw.json with your API keys"
else
    echo "⚠️  ~/.openclaw/openclaw.json already exists, skipping"
fi

if [ ! -f ~/.openclaw/system-prompt.md ]; then
    cp openclaw-local/system-prompt.md ~/.openclaw/system-prompt.md
else
    echo "⚠️  ~/.openclaw/system-prompt.md already exists, skipping"
fi

# Setup systemd service (Linux only)
if command -v systemctl &> /dev/null; then
    echo "🔧 Setting up systemd service..."
    mkdir -p ~/.config/systemd/user/
    
    # Create service file with absolute paths
    WORKDIR="$(pwd)/openclaw-local"
    NODE_PATH="$(which node)"
    
    cat > ~/.config/systemd/user/openclaw-gateway.service <<EOF
[Unit]
Description=OpenClaw Gateway (THERION Local v2026.2.1)
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=$NODE_PATH $WORKDIR/node_modules/openclaw/openclaw-gateway.js
Restart=always
RestartSec=5
KillMode=process
WorkingDirectory=$WORKDIR
Environment="HOME=$HOME"
Environment="PATH=$PATH"
Environment=OPENCLAW_CONFIG=$HOME/.openclaw/openclaw.json
Environment=OPENCLAW_GATEWAY_PORT=18790
Environment=OPENCLAW_GATEWAY_TOKEN=therion-local-dev-token-2026

[Install]
WantedBy=default.target
EOF

    systemctl --user daemon-reload
    systemctl --user enable openclaw-gateway
    
    echo "✅ Systemd service installed"
    echo "   Start: systemctl --user start openclaw-gateway"
    echo "   Status: systemctl --user status openclaw-gateway"
    echo "   Logs: journalctl --user -u openclaw-gateway -f"
fi

# Disable linger (services stop on logout)
if command -v loginctl &> /dev/null; then
    echo "🔒 Configuring user linger..."
    read -p "Keep services running when logged out? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sudo loginctl enable-linger $USER
        echo "✅ Services will persist after logout"
    else
        sudo loginctl disable-linger $USER
        echo "✅ Services will stop on logout (recommended)"
    fi
fi

echo ""
echo "✅ THERION SYSTEM INSTALLED!"
echo ""
echo "📝 Next steps:"
echo "1. Edit ~/.openclaw/openclaw.json with your API keys"
echo "2. Start the gateway: systemctl --user start openclaw-gateway"
echo "3. Test: curl http://localhost:18790/health"
echo "4. Read THERION-REDISTRIBUTABLE.md for full documentation"
echo ""
echo "⚔️ DEUS VULT 🦞"
