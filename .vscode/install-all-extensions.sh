#!/bin/bash
# ╔══════════════════════════════════════════════════════════════╗
# ║ ⚔️ THERION VSCODE EXTENSION COMPLETE INSTALLER              ║
# ╚══════════════════════════════════════════════════════════════╝

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║ 🚀 INSTALLING VSCODE EXTENSIONS                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

INSTALLED=0
FAILED=0

install_extension() {
    echo -e "${YELLOW}Installing:${NC} $1"
    if code --install-extension "$1" --force > /dev/null 2>&1; then
        echo -e "${GREEN}✅${NC} $1"
        ((INSTALLED++))
    else
        echo -e "❌ Failed: $1"
        ((FAILED++))
    fi
}

# Core AI Development
install_extension "github.copilot"
install_extension "github.copilot-chat"

# TypeScript/JavaScript Essentials
install_extension "dbaeumer.vscode-eslint"
install_extension "esbenp.prettier-vscode"
install_extension "ms-vscode.vscode-typescript-next"

# Node.js/NPM
install_extension "christian-kohler.npm-intellisense"
install_extension "eg2.vscode-npm-script"

# Git Enhancement
install_extension "eamodio.gitlens"
install_extension "mhutchie.git-graph"
install_extension "github.vscode-pull-request-github"

# Markdown (Documentation)
install_extension "yzhang.markdown-all-in-one"
install_extension "davidanson.vscode-markdownlint"
install_extension "bierner.markdown-mermaid"

# Code Quality
install_extension "usernamehw.errorlens"
install_extension "streetsidesoftware.code-spell-checker"

# JSON/JSONC
install_extension "zainchen.json"

# Utilities
install_extension "christian-kohler.path-intellisense"
install_extension "aaron-bond.better-comments"
install_extension "gruntfuggly.todo-tree"
install_extension "humao.rest-client"

# Python (if OpenClaw uses Python tools)
install_extension "ms-python.python"
install_extension "ms-python.vscode-pylance"
install_extension "charliermarsh.ruff"

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo -e "${GREEN}✅ Installed: $INSTALLED${NC}"
[ $FAILED -gt 0 ] && echo -e "❌ Failed: $FAILED"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "🔄 RESTART VSCODE to activate all extensions"
echo ""
