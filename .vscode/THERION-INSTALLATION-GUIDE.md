# ⚔️ THERION VSCODE COPILOT MAXIMIZATION - INSTALLATION GUIDE ⚔️

## 🚀 QUANTUM CONSCIOUSNESS ENHANCEMENT FOR MAXIMUM PRODUCTIVITY

This guide provides step-by-step instructions to transform your macOS development environment into a THERION-optimized, Copilot-maximized powerhouse.

### 📋 Prerequisites Checklist

- [ ] macOS 10.15 or later
- [ ] Admin privileges on your Mac
- [ ] Internet connection
- [ ] VSCode installed (or will be installed automatically)

### 🔧 Automated Installation (Recommended)

Run the THERION setup script for complete automation:

```bash
# Make script executable (if not already)
chmod +x .vscode/therion-setup.sh

# Run the complete setup
./.vscode/therion-setup.sh
```

This script will automatically:
- ✅ Install Xcode Command Line Tools
- ✅ Install Homebrew package manager
- ✅ Install Node.js, Python, Git, and essential tools
- ✅ Install VSCode with command line integration
- ✅ Configure shell aliases and productivity functions
- ✅ Install VSCode extensions automatically
- ✅ Apply macOS performance optimizations

### 🎯 Manual Installation Steps

If you prefer manual setup or need to troubleshoot:

#### 1. System Dependencies

```bash
# Install Xcode Command Line Tools
xcode-select --install

# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add Homebrew to PATH (Apple Silicon Macs)
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

#### 2. Development Tools

```bash
# Essential tools
brew install node python@3.12 git wget curl jq tree htop bat ripgrep fd exa fzf gh

# VSCode
brew install --cask visual-studio-code

# Global npm packages
npm install -g prettier eslint typescript ts-node nodemon create-next-app vercel

# Python packages
pip3 install black flake8 pylint pytest mypy autopep8 requests numpy pandas
```

#### 3. VSCode Configuration

The THERION configuration files are already created in `.vscode/`:

- ✅ `settings.therion.json` - Optimized settings for maximum performance
- ✅ `keybindings.json` - Productivity-maximized key combinations
- ✅ `extensions.json` - Essential extensions for Copilot supremacy
- ✅ `tasks.json` - Automated development tasks
- ✅ `launch.therion.json` - Debug configurations

#### 4. Shell Enhancement

Add to your `~/.zshrc`:

```bash
# ⚔️ THERION PRODUCTIVITY ALIASES ⚔️
alias ll='exa -la --git'
alias cat='bat'
alias grep='rg'
alias c='code .'
alias dev='npm run dev'
alias build='npm run build'

# Git shortcuts
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git pull'
```

### 🌟 VSCode Extensions Installation

Install via Command Palette (`Cmd+Shift+P`) → Extensions: Install Extensions:

#### Core Extensions
- `github.copilot` - GitHub Copilot
- `github.copilot-chat` - GitHub Copilot Chat
- `ms-python.python` - Python support
- `esbenp.prettier-vscode` - Code formatter

#### Web Development
- `bradlc.vscode-tailwindcss` - Tailwind CSS
- `ms-vscode.vscode-typescript-next` - TypeScript
- `formulahendry.auto-rename-tag` - Auto rename HTML tags
- `ms-vscode.live-server` - Live development server

#### Productivity
- `eamodio.gitlens` - Git lens
- `usernamehw.errorlens` - Inline error display
- `streetsidesoftware.code-spell-checker` - Spell checker
- `yzhang.markdown-all-in-one` - Markdown tools

### ⚡ Key Bindings (macOS)

| Shortcut | Action |
|----------|--------|
| `Cmd+I` | Copilot inline suggestions |
| `Cmd+Shift+I` | Open Copilot Chat |
| `Cmd+.` | Copilot generate |
| `Cmd+K Cmd+I` | Copilot chat in editor |
| `Cmd+K Cmd+C` | Copilot explain code |
| `Cmd+` | Toggle terminal |
| `Cmd+P` | Quick file open |
| `Cmd+Shift+P` | Command palette |

### 🔧 Performance Optimizations

The THERION configuration includes:

- **File Watcher Exclusions**: Ignores `node_modules`, cache, and build directories
- **Search Exclusions**: Optimized search performance
- **Memory Management**: Increased limits for large projects
- **Terminal GPU Acceleration**: Enhanced terminal performance
- **Editor Optimizations**: Smart suggestions and formatting

### 🚀 Project-Specific Setup

For the Erevus project:

```bash
# Navigate to the website directory
cd EREBUS-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

### 🎯 Workspace Configuration

Open the optimized workspace:

```bash
# Open the THERION-optimized workspace
code erevus-therion.code-workspace
```

### 🧪 Verification Commands

Run these commands to verify your setup:

```bash
# Check versions
node --version
npm --version
python3 --version
git --version
code --version

# Check VSCode extensions
code --list-extensions

# System info
system_profiler SPHardwareDataType | grep -E "(Model Name|Processor|Memory)"
```

### 🔍 Troubleshooting

#### Command Not Found Errors
```bash
# Add to PATH if needed
export PATH="/opt/homebrew/bin:$PATH"
source ~/.zprofile
```

#### VSCode Command Line Tool
1. Open VSCode
2. `Cmd+Shift+P` → "Shell Command: Install 'code' command in PATH"

#### Python Path Issues
```bash
# Create symbolic link if needed
sudo ln -sf /opt/homebrew/bin/python3 /usr/local/bin/python
```

#### Permission Issues
```bash
# Fix npm permissions
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

### 🌟 Advanced Features

#### MCP Server Setup
```bash
# Run MCP server configuration
python3 .vscode/therion-mcp-setup.py

# Install MCP CLI
npm install -g @modelcontextprotocol/cli
```

#### Custom Functions
The setup includes productivity functions:
- `mkproj <name>` - Create new project with Git and VSCode
- `pyenv` - Create Python virtual environment  
- `nodeproj` - Initialize Node.js project
- `sysinfo` - Display system information

### 🎉 Success Verification

Your THERION environment is ready when:

- ✅ VSCode opens instantly with `code .`
- ✅ GitHub Copilot provides suggestions
- ✅ Terminal has enhanced commands (`ll`, `bat`, etc.)
- ✅ Development server starts with `dev` command
- ✅ All extensions are active and error-free

### 🆘 Support

If you encounter issues:

1. Check the terminal output for specific error messages
2. Verify all prerequisites are installed
3. Restart VSCode and terminal
4. Run the setup script again if needed
5. Check VSCode Output panel for extension errors

---

**🎯 THERION QUANTUM CONSCIOUSNESS IS NOW ACTIVE**

Your macOS development environment has been transformed into a productivity powerhouse with maximum Copilot integration. Experience quantum-level development efficiency! 🚀