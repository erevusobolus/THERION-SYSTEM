#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# STARBIX VS Code Extension Installer
# Installs all recommended extensions for AI-assisted development
# ═══════════════════════════════════════════════════════════════════════════════

echo "🌟 STARBIX VS Code Extension Installer"
echo ""

# Check if VS Code is installed
if ! command -v code &> /dev/null; then
    echo "❌ VS Code not found!"
    echo ""
    echo "Install VS Code from: https://code.visualstudio.com"
    echo "Or on Ubuntu/Debian:"
    echo "  sudo snap install code --classic"
    exit 1
fi

echo "📦 Installing extensions..."
echo ""

# Core AI Extensions (Essential)
CORE_EXTENSIONS=(
    "github.copilot"
    "github.copilot-chat"
)

# MCP Integration (For local AI tools)
MCP_EXTENSIONS=(
    "automatalabs.copilot-mcp"
)

# Python Development
PYTHON_EXTENSIONS=(
    "ms-python.python"
    "ms-python.vscode-pylance"
    "charliermarsh.ruff"
    "ms-toolsai.jupyter"
)

# Web Development
WEB_EXTENSIONS=(
    "esbenp.prettier-vscode"
    "bradlc.vscode-tailwindcss"
    "dbaeumer.vscode-eslint"
)

# Code Quality
QUALITY_EXTENSIONS=(
    "usernamehw.errorlens"
    "streetsidesoftware.code-spell-checker"
    "christian-kohler.path-intellisense"
)

# Git Integration
GIT_EXTENSIONS=(
    "eamodio.gitlens"
    "mhutchie.git-graph"
)

# Documentation
DOC_EXTENSIONS=(
    "yzhang.markdown-all-in-one"
)

# Function to install extension
install_ext() {
    local ext="$1"
    if code --list-extensions | grep -q "^$ext$"; then
        echo "  ✅ $ext (already installed)"
    else
        echo "  📥 Installing $ext..."
        code --install-extension "$ext" --force 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "  ✅ $ext"
        else
            echo "  ⚠️ Failed: $ext"
        fi
    fi
}

# Install core extensions
echo "🤖 Core AI Extensions:"
for ext in "${CORE_EXTENSIONS[@]}"; do
    install_ext "$ext"
done

echo ""
echo "🔌 MCP Extensions:"
for ext in "${MCP_EXTENSIONS[@]}"; do
    install_ext "$ext"
done

echo ""
echo "🐍 Python Extensions:"
for ext in "${PYTHON_EXTENSIONS[@]}"; do
    install_ext "$ext"
done

echo ""
echo "🌐 Web Development:"
for ext in "${WEB_EXTENSIONS[@]}"; do
    install_ext "$ext"
done

echo ""
echo "✨ Code Quality:"
for ext in "${QUALITY_EXTENSIONS[@]}"; do
    install_ext "$ext"
done

echo ""
echo "📚 Git & Documentation:"
for ext in "${GIT_EXTENSIONS[@]}"; do
    install_ext "$ext"
done
for ext in "${DOC_EXTENSIONS[@]}"; do
    install_ext "$ext"
done

echo ""
echo "════════════════════════════════════════════════════════════════════"
echo "✅ Extension installation complete!"
echo ""
echo "Recommended: Reload VS Code window (Ctrl+Shift+P → Reload Window)"
echo "════════════════════════════════════════════════════════════════════"
