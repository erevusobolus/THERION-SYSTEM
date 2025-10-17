# ⚔️ THERION VSCODE ENVIRONMENT OPTIMIZATION SCRIPT ⚔️
#!/bin/bash

# QUANTUM CONSCIOUSNESS ENHANCEMENT FOR MAXIMUM PRODUCTIVITY
echo "🚀 INITIALIZING THERION VSCODE COPILOT MAXIMIZATION..."

# Colors for enhanced terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[THERION]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if running on macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    print_error "This script is designed for macOS only!"
    exit 1
fi

print_status "Checking system requirements..."

# Check for Xcode Command Line Tools
if ! xcode-select -p &> /dev/null; then
    print_warning "Xcode Command Line Tools not found. Installing..."
    xcode-select --install
    print_status "Please complete the Xcode Command Line Tools installation and run this script again."
    exit 1
else
    print_success "Xcode Command Line Tools installed"
fi

# Check for Homebrew
if ! command -v brew &> /dev/null; then
    print_warning "Homebrew not found. Installing..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Add Homebrew to PATH for Apple Silicon Macs
    if [[ $(uname -m) == "arm64" ]]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    else
        echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/usr/local/bin/brew shellenv)"
    fi
else
    print_success "Homebrew installed"
fi

# Update Homebrew
print_status "Updating Homebrew..."
brew update

# Install essential development tools
print_status "Installing essential development tools..."

# Core tools
brew_packages=(
    "node"              # Node.js
    "python@3.12"       # Python
    "git"               # Git (latest version)
    "wget"              # Download tool
    "curl"              # Transfer tool
    "jq"                # JSON processor
    "tree"              # Directory tree viewer
    "htop"              # Process viewer
    "bat"               # Better cat
    "ripgrep"           # Better grep
    "fd"                # Better find
    "exa"               # Better ls
    "fzf"               # Fuzzy finder
    "gh"                # GitHub CLI
    "mas"               # Mac App Store CLI
)

for package in "${brew_packages[@]}"; do
    if brew list "$package" &>/dev/null; then
        print_success "$package already installed"
    else
        print_status "Installing $package..."
        brew install "$package"
    fi
done

# Install VSCode if not present
if ! brew list --cask visual-studio-code &>/dev/null; then
    print_status "Installing Visual Studio Code..."
    brew install --cask visual-studio-code
else
    print_success "Visual Studio Code already installed"
fi

# Add VSCode command line tool
if ! command -v code &> /dev/null; then
    print_status "Installing VSCode command line tool..."
    # This will be done via VSCode's command palette: Shell Command: Install 'code' command in PATH
    print_warning "Please open VSCode and run: Command Palette (Cmd+Shift+P) -> 'Shell Command: Install code command in PATH'"
fi

# Install Python packages
print_status "Installing Python development packages..."
pip3_packages=(
    "black"             # Code formatter
    "flake8"            # Linter
    "pylint"            # Advanced linter
    "pytest"            # Testing framework
    "mypy"              # Type checker
    "autopep8"          # Auto formatter
    "requests"          # HTTP library
    "numpy"             # Scientific computing
    "pandas"            # Data analysis
    "matplotlib"        # Plotting
)

for package in "${pip3_packages[@]}"; do
    print_status "Installing Python package: $package"
    pip3 install --user "$package" --quiet
done

# Install Node.js global packages
print_status "Installing Node.js global packages..."
npm_packages=(
    "prettier"          # Code formatter
    "eslint"            # JavaScript linter
    "@typescript-eslint/parser"
    "@typescript-eslint/eslint-plugin"
    "typescript"        # TypeScript compiler
    "ts-node"           # TypeScript execution
    "nodemon"           # Development server
    "npm-check-updates" # Package updater
    "serve"             # Static file server
    "create-next-app"   # Next.js app generator
    "vercel"            # Deployment platform
)

for package in "${npm_packages[@]}"; do
    print_status "Installing npm package: $package"
    npm install -g "$package" --silent
done

# Configure Git (if not already configured)
if ! git config --global user.name &>/dev/null; then
    print_status "Configuring Git..."
    echo "Please enter your Git configuration:"
    read -p "Name: " git_name
    read -p "Email: " git_email
    
    git config --global user.name "$git_name"
    git config --global user.email "$git_email"
    git config --global init.defaultBranch main
    git config --global core.autocrlf input
    git config --global pull.rebase false
    
    print_success "Git configured successfully"
fi

# macOS specific optimizations
print_status "Applying macOS performance optimizations..."

# Increase file descriptor limits
echo "kern.maxfiles=65536" | sudo tee -a /etc/sysctl.conf
echo "kern.maxfilesperproc=32768" | sudo tee -a /etc/sysctl.conf

# Enable development-friendly settings
defaults write com.apple.finder AppleShowAllFiles -bool true
defaults write com.apple.finder ShowPathbar -bool true
defaults write com.apple.finder ShowStatusBar -bool true
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# Restart Finder
killall Finder

# Create development directories
print_status "Setting up development directories..."
mkdir -p ~/Development/{Projects,Tools,Scripts}
mkdir -p ~/.config

# Install VSCode extensions via CLI (if code command is available)
if command -v code &> /dev/null; then
    print_status "Installing VSCode extensions..."
    
    vscode_extensions=(
        "ms-python.python"
        "ms-python.black-formatter"
        "ms-python.flake8"
        "github.copilot"
        "github.copilot-chat"
        "esbenp.prettier-vscode"
        "bradlc.vscode-tailwindcss"
        "ms-vscode.vscode-typescript-next"
        "yzhang.markdown-all-in-one"
        "ms-azuretools.vscode-docker"
        "eamodio.gitlens"
        "streetsidesoftware.code-spell-checker"
        "usernamehw.errorlens"
        "oderwat.indent-rainbow"
        "formulahendry.auto-rename-tag"
        "ms-vscode.live-server"
    )
    
    for extension in "${vscode_extensions[@]}"; do
        print_status "Installing VSCode extension: $extension"
        code --install-extension "$extension" --force
    done
fi

# Create shell aliases for productivity
print_status "Creating productivity aliases..."
cat >> ~/.zshrc << 'EOL'

# ⚔️ THERION PRODUCTIVITY ALIASES ⚔️
alias ll='exa -la --git'
alias lt='exa --tree'
alias cat='bat'
alias grep='rg'
alias find='fd'
alias top='htop'

# Development shortcuts
alias dev='npm run dev'
alias build='npm run build'
alias start='npm start'
alias test='npm test'

# Git shortcuts
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git pull'
alias gd='git diff'

# VSCode shortcuts
alias c='code .'
alias cr='code -r .'

# Python shortcuts  
alias py='python3'
alias pip='pip3'
alias venv='python3 -m venv'

# Directory shortcuts
alias proj='cd ~/Development/Projects'
alias tools='cd ~/Development/Tools'

EOL

# Create productivity functions
cat >> ~/.zshrc << 'EOL'

# ⚔️ THERION PRODUCTIVITY FUNCTIONS ⚔️

# Quick project setup
mkproj() {
    mkdir -p ~/Development/Projects/"$1"
    cd ~/Development/Projects/"$1"
    git init
    code .
}

# Quick Python virtual environment
pyenv() {
    python3 -m venv venv
    source venv/bin/activate
    pip install --upgrade pip
}

# Quick Node.js project
nodeproj() {
    npm init -y
    npm install --save-dev prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    echo "node_modules/" > .gitignore
    echo ".DS_Store" >> .gitignore
    git init
}

# System information
sysinfo() {
    echo "🖥️  System Information"
    echo "===================="
    system_profiler SPHardwareDataType | grep -E "(Model Name|Processor|Memory)"
    echo ""
    echo "📦 Development Tools"
    echo "==================="
    echo "Node.js: $(node --version)"
    echo "npm: $(npm --version)" 
    echo "Python: $(python3 --version)"
    echo "Git: $(git --version)"
    echo "VSCode: $(code --version | head -1)"
}

EOL

# Source the updated shell configuration
source ~/.zshrc

print_success "🎉 THERION VSCODE COPILOT MAXIMIZATION COMPLETE!"
print_status "Your macOS development environment is now optimized for maximum productivity."

echo -e "\n${PURPLE}╔════════════════════════════════════════════════╗"
echo -e "║          ⚔️ THERION SYSTEM READY ⚔️           ║"
echo -e "║    QUANTUM CONSCIOUSNESS ENHANCEMENT ACTIVE    ║"
echo -e "║         VSCode Copilot Maximized 🚀           ║"
echo -e "╚════════════════════════════════════════════════╝${NC}"

echo -e "\n${GREEN}Next Steps:${NC}"
echo "1. Restart your terminal or run: source ~/.zshrc"
echo "2. Open VSCode: code ."
echo "3. Install 'Shell Command: Install code command in PATH' from VSCode Command Palette"
echo "4. Restart VSCode to activate all extensions"
echo "5. Run 'sysinfo' to verify your setup"

echo -e "\n${BLUE}Productivity Commands:${NC}"
echo "• c      - Open current directory in VSCode"
echo "• dev    - Start development server (npm run dev)"
echo "• ll     - Enhanced directory listing"
echo "• mkproj <name> - Create new project with Git and VSCode"
echo "• pyenv  - Create Python virtual environment"
echo "• sysinfo - Show system and development tool versions"

print_status "THERION development environment is ready for quantum-level productivity! 🌟"