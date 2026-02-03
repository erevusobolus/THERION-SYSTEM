# THERION System - Complete Dependencies Reference

**Last Updated:** February 3, 2026  
**Purpose:** Complete inventory of all system requirements and packages

```
╔═══════════════════════════════════════════════════════════════╗
║              COMPREHENSIVE DEPENDENCY MANIFEST                ║
║      All packages required for full THERION functionality     ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Table of Contents

1. [System Prerequisites](#system-prerequisites)
2. [Python Packages](#python-packages)
3. [Node.js Global Packages](#nodejs-global-packages)
4. [Node.js Project Dependencies](#nodejs-project-dependencies)
5. [VS Code Extensions](#vs-code-extensions)
6. [MCP Servers](#mcp-servers)
7. [Command Line Tools](#command-line-tools)
8. [Quick Install Scripts](#quick-install-scripts)

---

## System Prerequisites

### Required Runtime Environments

| Software    | Minimum Version | Recommended | Purpose                            |
| ----------- | --------------- | ----------- | ---------------------------------- |
| **Node.js** | 18.0.0          | 22.x LTS    | OpenClaw runtime, MCP tools        |
| **npm**     | 9.0.0           | 10.x        | Package management                 |
| **Python**  | 3.10            | 3.12+       | Script execution, tool development |
| **pip**     | 21.0            | Latest      | Python package management          |
| **Git**     | 2.0             | Latest      | Version control                    |
| **Ollama**  | Latest          | Latest      | Local LLM inference                |

### Operating System Packages

#### Ubuntu/Debian

```bash
sudo apt update && sudo apt install -y \
    curl \
    wget \
    git \
    nodejs \
    npm \
    python3 \
    python3-pip \
    python3-venv \
    jq \
    ddgr \
    w3m \
    xdotool \
    wmctrl \
    libnotify-bin \
    ripgrep \
    tree
```

#### macOS (via Homebrew)

```bash
brew install \
    node@22 \
    python@3.12 \
    git \
    jq \
    ddgr \
    w3m \
    ripgrep \
    tree \
    wget \
    curl \
    gh
```

#### Arch Linux

```bash
sudo pacman -S --noconfirm \
    nodejs \
    npm \
    python \
    python-pip \
    git \
    jq \
    w3m \
    ripgrep \
    tree \
    curl \
    wget

# Install ddgr from AUR
yay -S ddgr
```

---

## Python Packages

### Core Python Dependencies

Create `requirements.txt`:

```txt
# Web and HTTP
requests>=2.31.0
httpx>=0.26.0
urllib3>=2.1.0

# Data validation and processing
pydantic>=2.5.0
python-dotenv>=1.0.0

# File system monitoring
watchdog>=4.0.0

# Terminal and CLI
rich>=13.7.0
click>=8.1.7

# Optional: Text-to-Speech (Future)
# TTS>=0.22.0
# pyttsx3>=2.90

# Optional: Voice Recognition (Future)
# SpeechRecognition>=3.10.0
# pyaudio>=0.2.14

# Optional: Image Processing (Future)
# Pillow>=10.2.0
# opencv-python>=4.9.0
```

### Install Python Dependencies

```bash
# Create virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Install all packages
pip3 install -r requirements.txt

# Verify installation
pip3 list
```

---

## Node.js Global Packages

### Required Global Installations

```bash
# OpenClaw Gateway (Core)
npm install -g openclaw

# MCP CLI (Model Context Protocol)
npm install -g @modelcontextprotocol/cli

# Verify installations
openclaw --version
npx @modelcontextprotocol/cli --version
```

### Optional Development Tools

```bash
# TypeScript (if developing custom tools)
npm install -g typescript

# Live server for testing
npm install -g live-server

# JSON processing
npm install -g json

# Prettier (code formatting)
npm install -g prettier
```

---

## Node.js Project Dependencies

### mcp-therion-tools Package

Located in: `/mcp-therion-tools/package.json`

```json
{
  "name": "mcp-therion-tools",
  "version": "2.0.0",
  "description": "THERION BRAIN v2.0 - Universal capability interface",
  "type": "module",
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0"
  }
}
```

Install with:

```bash
cd mcp-therion-tools
npm install
```

---

## VS Code Extensions

### Essential Extensions (Required)

```bash
# GitHub Copilot (AI assistance)
code --install-extension github.copilot
code --install-extension github.copilot-chat

# Claude for VS Code (Alternative/Additional AI)
code --install-extension anthropic.claude-vscode

# Python development
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance

# MCP (Model Context Protocol) support
code --install-extension automatalabs.copilot-mcp
code --install-extension semanticworkbenchteam.mcp-server-vscode
code --install-extension zebradev.mcp-server-runner
```

### Recommended Extensions

```bash
# Git and version control
code --install-extension eamodio.gitlens

# Code formatting and linting
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension charliermarsh.ruff

# Web development
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-typescript-next

# Markdown
code --install-extension shd101wyy.markdown-preview-enhanced
code --install-extension yzhang.markdown-all-in-one

# YAML/JSON editing
code --install-extension redhat.vscode-yaml

# API testing
code --install-extension humao.rest-client
code --install-extension rangav.vscode-thunder-client

# Terminal enhancement
code --install-extension ms-vscode.vscode-json-languageservice

# Docker (optional)
code --install-extension ms-azuretools.vscode-docker
```

### Complete Extension List

Full list in `.vscode/extensions.json`:

```jsonc
{
  "recommendations": [
    // Core AI
    "github.copilot",
    "github.copilot-chat",
    "anthropic.claude-vscode",
    "zebradev.mcp-server-runner",

    // Python
    "ms-python.python",
    "ms-python.vscode-pylance",
    "charliermarsh.ruff",
    "ms-toolsai.jupyter",

    // Web Development
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "dbaeumer.vscode-eslint",
    "dsznajder.es7-react-js-snippets",

    // 3D/Graphics (optional)
    "slevesque.shader",
    "stef-levesque.shader",
    "raczzalan.webgl-glsl-editor",

    // Git
    "eamodio.gitlens",
    "mhutchie.git-graph",

    // Markdown
    "shd101wyy.markdown-preview-enhanced",
    "yzhang.markdown-all-in-one",

    // Configuration
    "redhat.vscode-yaml",
    "tamasfe.even-better-toml",

    // Testing and APIs
    "humao.rest-client",
    "rangav.vscode-thunder-client",

    // Productivity
    "wayou.vscode-todo-highlight",
    "usernamehw.errorlens",
    "streetsidesoftware.code-spell-checker",
  ],
}
```

---

## MCP Servers

### Model Context Protocol Servers

MCP servers provide enhanced capabilities to VS Code Copilot.

#### Required MCP Servers

Configuration file: `.vscode/mcp.json`

```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "${workspaceFolder}"
      ]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

#### MCP Server Packages

These are auto-installed by VS Code via `npx` when configured:

| Package                                            | Purpose              | Auto-Install |
| -------------------------------------------------- | -------------------- | ------------ |
| `@modelcontextprotocol/server-filesystem`          | File operations      | Yes          |
| `@modelcontextprotocol/server-memory`              | Knowledge graph      | Yes          |
| `@modelcontextprotocol/server-sequential-thinking` | Multi-step reasoning | Yes          |

**No manual installation required** - VS Code handles MCP server packages automatically.

---

## Command Line Tools

### Web Search and Scraping

```bash
# DuckDuckGo command-line search
# Ubuntu/Debian
sudo apt install ddgr

# macOS
brew install ddgr

# Arch Linux
yay -S ddgr

# Manual (Python)
pip3 install ddgr
```

### Text Browser

```bash
# w3m - Text-based web browser
# Ubuntu/Debian
sudo apt install w3m

# macOS
brew install w3m

# Arch Linux
sudo pacman -S w3m
```

### JSON Processing

```bash
# jq - Command-line JSON processor
# Ubuntu/Debian
sudo apt install jq

# macOS
brew install jq

# Arch Linux
sudo pacman -S jq
```

### Fast Search Tools

```bash
# ripgrep - Fast recursive search
# Ubuntu/Debian
sudo apt install ripgrep

# macOS
brew install ripgrep

# Arch Linux
sudo pacman -S ripgrep
```

### System Utilities

```bash
# tree - Directory tree viewer
# Ubuntu/Debian
sudo apt install tree

# macOS
brew install tree

# Arch Linux
sudo pacman -S tree
```

### Desktop Integration (Linux Only)

```bash
# xdotool - X11 automation
sudo apt install xdotool

# wmctrl - Window management
sudo apt install wmctrl

# libnotify - Desktop notifications
sudo apt install libnotify-bin
```

---

## Quick Install Scripts

### Complete System Setup (Ubuntu/Debian)

```bash
#!/bin/bash
# install-all-dependencies.sh

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║          THERION Complete Dependency Installation            ║"
echo "╚═══════════════════════════════════════════════════════════════╝"

# System packages
echo "[1/6] Installing system packages..."
sudo apt update && sudo apt install -y \
    curl wget git nodejs npm python3 python3-pip python3-venv \
    jq ddgr w3m xdotool wmctrl libnotify-bin ripgrep tree

# Ollama
echo "[2/6] Installing Ollama..."
curl -fsSL https://ollama.ai/install.sh | sh

# Global npm packages
echo "[3/6] Installing global npm packages..."
npm install -g openclaw @modelcontextprotocol/cli

# Python virtual environment and packages
echo "[4/6] Setting up Python environment..."
python3 -m venv venv
source venv/bin/activate
pip3 install --upgrade pip
pip3 install -r requirements.txt

# MCP tools
echo "[5/6] Installing MCP THERION tools..."
cd mcp-therion-tools && npm install && cd ..

# VS Code extensions (if VS Code is installed)
if command -v code &> /dev/null; then
    echo "[6/6] Installing VS Code extensions..."
    code --install-extension github.copilot
    code --install-extension github.copilot-chat
    code --install-extension ms-python.python
    code --install-extension automatalabs.copilot-mcp
    code --install-extension semanticworkbenchteam.mcp-server-vscode
    code --install-extension zebradev.mcp-server-runner
else
    echo "[6/6] VS Code not found, skipping extension installation"
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "Next steps:"
echo "1. Restart your terminal"
echo "2. Run: ollama pull qwen3:4b"
echo "3. Configure ~/.openclaw/openclaw.json"
echo "4. Run: openclaw gateway start"
```

### macOS Installation Script

```bash
#!/bin/bash
# install-all-dependencies-mac.sh

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║       THERION Complete Dependency Installation (macOS)       ║"
echo "╚═══════════════════════════════════════════════════════════════╝"

# Install Homebrew if not present
if ! command -v brew &> /dev/null; then
    echo "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# System packages
echo "[1/6] Installing system packages..."
brew install node@22 python@3.12 git jq ddgr w3m ripgrep tree wget curl gh

# Ollama
echo "[2/6] Installing Ollama..."
brew install ollama
brew services start ollama

# Global npm packages
echo "[3/6] Installing global npm packages..."
npm install -g openclaw @modelcontextprotocol/cli

# Python virtual environment and packages
echo "[4/6] Setting up Python environment..."
python3 -m venv venv
source venv/bin/activate
pip3 install --upgrade pip
pip3 install -r requirements.txt

# MCP tools
echo "[5/6] Installing MCP THERION tools..."
cd mcp-therion-tools && npm install && cd ..

# VS Code extensions
if command -v code &> /dev/null; then
    echo "[6/6] Installing VS Code extensions..."
    code --install-extension github.copilot
    code --install-extension github.copilot-chat
    code --install-extension ms-python.python
    code --install-extension automatalabs.copilot-mcp
    code --install-extension semanticworkbenchteam.mcp-server-vscode
    code --install-extension zebradev.mcp-server-runner
else
    echo "[6/6] VS Code not found, skipping extension installation"
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "Next steps:"
echo "1. Restart your terminal"
echo "2. Run: ollama pull qwen3:4b"
echo "3. Configure ~/.openclaw/openclaw.json"
echo "4. Run: openclaw gateway start"
```

---

## Verification Commands

### Check All Installations

```bash
#!/bin/bash
# verify-dependencies.sh

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║            THERION Dependency Verification                    ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Node.js
echo -n "Node.js: "
if command -v node &> /dev/null; then
    node --version
else
    echo "❌ NOT INSTALLED"
fi

# npm
echo -n "npm: "
if command -v npm &> /dev/null; then
    npm --version
else
    echo "❌ NOT INSTALLED"
fi

# Python
echo -n "Python: "
if command -v python3 &> /dev/null; then
    python3 --version
else
    echo "❌ NOT INSTALLED"
fi

# pip
echo -n "pip: "
if command -v pip3 &> /dev/null; then
    pip3 --version
else
    echo "❌ NOT INSTALLED"
fi

# Ollama
echo -n "Ollama: "
if command -v ollama &> /dev/null; then
    ollama --version 2>/dev/null || echo "installed"
else
    echo "❌ NOT INSTALLED"
fi

# OpenClaw
echo -n "OpenClaw: "
if command -v openclaw &> /dev/null; then
    openclaw --version 2>/dev/null || echo "installed"
else
    echo "❌ NOT INSTALLED"
fi

# ddgr
echo -n "ddgr: "
if command -v ddgr &> /dev/null; then
    ddgr --version 2>/dev/null | head -1 || echo "installed"
else
    echo "❌ NOT INSTALLED"
fi

# jq
echo -n "jq: "
if command -v jq &> /dev/null; then
    jq --version
else
    echo "❌ NOT INSTALLED"
fi

# w3m
echo -n "w3m: "
if command -v w3m &> /dev/null; then
    echo "installed"
else
    echo "❌ NOT INSTALLED"
fi

# ripgrep
echo -n "ripgrep: "
if command -v rg &> /dev/null; then
    rg --version | head -1
else
    echo "❌ NOT INSTALLED"
fi

# Git
echo -n "Git: "
if command -v git &> /dev/null; then
    git --version
else
    echo "❌ NOT INSTALLED"
fi

# VS Code
echo -n "VS Code: "
if command -v code &> /dev/null; then
    code --version | head -1
else
    echo "❌ NOT INSTALLED"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "GPU Status:"
if command -v nvidia-smi &> /dev/null; then
    nvidia-smi --query-gpu=name,memory.total --format=csv,noheader
else
    echo "No NVIDIA GPU detected (CPU mode)"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "Python Packages:"
if [ -d "venv" ]; then
    source venv/bin/activate 2>/dev/null
    pip3 list | grep -E "requests|httpx|pydantic|watchdog|rich"
else
    echo "Virtual environment not found"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "Ollama Models:"
if command -v ollama &> /dev/null; then
    ollama list 2>/dev/null || echo "Ollama service not running"
else
    echo "Ollama not installed"
fi

echo ""
echo "✅ Verification complete"
```

Save scripts and make executable:

```bash
chmod +x install-all-dependencies.sh
chmod +x verify-dependencies.sh
```

---

## Dependency Summary

### Critical Path Dependencies

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Node.js 18+ → Required for OpenClaw and MCP             │
│ 2. Python 3.10+ → Required for scripts and tools           │
│ 3. Ollama → Required for local AI inference                │
│ 4. OpenClaw → Required for gateway functionality           │
│ 5. System tools (jq, ddgr, w3m) → Required for web tools   │
└─────────────────────────────────────────────────────────────┘
```

### Optional Dependencies

```
┌─────────────────────────────────────────────────────────────┐
│ ▸ VS Code + Extensions → For development and setup         │
│ ▸ Desktop tools (xdotool, wmctrl) → For system control     │
│ ▸ Development tools (TypeScript, Prettier) → For coding    │
└─────────────────────────────────────────────────────────────┘
```

---

## Troubleshooting

### Common Issues

**Node.js version too old:**

```bash
# Install NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22
```

**Python virtual environment issues:**

```bash
# Remove and recreate
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip3 install --upgrade pip
pip3 install -r requirements.txt
```

**OpenClaw installation fails:**

```bash
# Fix npm permissions
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g openclaw
```

---

## See Also

- [README.md](README.md) - Main documentation
- [docs/DEPENDENCIES.md](docs/DEPENDENCIES.md) - Extended dependency guide
- [docs/QUICKSTART.md](docs/QUICKSTART.md) - Quick installation guide
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines

---

_THERION System - Complete dependency manifest for reproducible installations._
