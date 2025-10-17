#!/bin/bash

# ⚔️ THERION QUICK START SCRIPT ⚔️
# Quantum consciousness activation for immediate productivity

echo "🚀 INITIALIZING THERION QUANTUM CONSCIOUSNESS..."

# Colors for enhanced output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_header() {
    echo -e "\n${PURPLE}╔════════════════════════════════════════════════╗"
    echo -e "║          ⚔️ THERION SYSTEM STATUS ⚔️           ║"
    echo -e "║    QUANTUM CONSCIOUSNESS ENHANCEMENT ACTIVE    ║"
    echo -e "╚════════════════════════════════════════════════╝${NC}\n"
}

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

print_header

# Check macOS version
print_status "Checking macOS compatibility..."
macos_version=$(sw_vers -productVersion)
print_success "macOS $macos_version detected"

# Check system resources
print_status "Analyzing system resources..."
memory=$(sysctl -n hw.memsize | awk '{print $1/1024/1024/1024 " GB"}')
cpu=$(sysctl -n machdep.cpu.brand_string)
print_success "Memory: $memory"
print_success "CPU: $cpu"

# Check development tools
print_status "Verifying development environment..."

tools_status=""

# Check Xcode Command Line Tools
if xcode-select -p &> /dev/null; then
    print_success "Xcode Command Line Tools: READY"
    tools_status+="✅ "
else
    print_error "Xcode Command Line Tools: NOT INSTALLED"
    tools_status+="❌ "
fi

# Check Homebrew
if command -v brew &> /dev/null; then
    print_success "Homebrew: READY ($(brew --version | head -1))"
    tools_status+="✅ "
else
    print_error "Homebrew: NOT INSTALLED"
    tools_status+="❌ "
fi

# Check Node.js
if command -v node &> /dev/null; then
    print_success "Node.js: READY ($(node --version))"
    tools_status+="✅ "
else
    print_error "Node.js: NOT INSTALLED"
    tools_status+="❌ "
fi

# Check Python
if command -v python3 &> /dev/null; then
    print_success "Python: READY ($(python3 --version))"
    tools_status+="✅ "
else
    print_error "Python: NOT INSTALLED"
    tools_status+="❌ "
fi

# Check Git
if command -v git &> /dev/null; then
    print_success "Git: READY ($(git --version))"
    tools_status+="✅ "
else
    print_error "Git: NOT INSTALLED"
    tools_status+="❌ "
fi

# Check VSCode
if command -v code &> /dev/null; then
    print_success "VSCode CLI: READY"
    tools_status+="✅ "
else
    print_warning "VSCode CLI: NOT CONFIGURED"
    tools_status+="⚠️ "
fi

# Check project dependencies
print_status "Checking project environment..."

if [ -d "EREBUS-Website/node_modules" ]; then
    print_success "Project dependencies: INSTALLED"
else
    print_warning "Project dependencies: NOT INSTALLED"
    print_status "Run: cd EREBUS-Website && npm install"
fi

# Check THERION configurations
print_status "Validating THERION configurations..."

configs_status=""

if [ -f ".vscode/settings.therion.json" ]; then
    print_success "THERION settings: READY"
    configs_status+="✅ "
else
    print_error "THERION settings: MISSING"
    configs_status+="❌ "
fi

if [ -f ".vscode/keybindings.json" ]; then
    print_success "Keybindings: CONFIGURED"
    configs_status+="✅ "
else
    print_error "Keybindings: MISSING"
    configs_status+="❌ "
fi

if [ -f ".vscode/extensions.json" ]; then
    print_success "Extensions list: READY"
    configs_status+="✅ "
else
    print_error "Extensions list: MISSING"
    configs_status+="❌ "
fi

if [ -f "erevus-therion.code-workspace" ]; then
    print_success "Workspace config: READY"
    configs_status+="✅ "
else
    print_error "Workspace config: MISSING"
    configs_status+="❌ "
fi

# System readiness assessment
print_status "Calculating system readiness..."

total_checks=10
ready_count=$(echo "$tools_status$configs_status" | grep -o "✅" | wc -l | xargs)
readiness_percentage=$(( ready_count * 100 / total_checks ))

echo -e "\n${BLUE}╔═══════════════════════════════════════╗${NC}"
echo -e "${BLUE}║           SYSTEM READINESS            ║${NC}"
echo -e "${BLUE}╠═══════════════════════════════════════╣${NC}"
echo -e "${BLUE}║ Ready Components: $ready_count/$total_checks               ║${NC}"
echo -e "${BLUE}║ Readiness Level:  $readiness_percentage%                ║${NC}"

if [ $readiness_percentage -ge 90 ]; then
    echo -e "${BLUE}║ Status: ${GREEN}QUANTUM READY 🚀${BLUE}          ║${NC}"
    echo -e "${BLUE}╚═══════════════════════════════════════╝${NC}"
    print_success "THERION system is optimized for maximum productivity!"
elif [ $readiness_percentage -ge 70 ]; then
    echo -e "${BLUE}║ Status: ${YELLOW}MOSTLY READY ⚡${BLUE}           ║${NC}"
    echo -e "${BLUE}╚═══════════════════════════════════════╝${NC}"
    print_warning "System is functional but needs optimization"
else
    echo -e "${BLUE}║ Status: ${RED}NEEDS SETUP 🔧${BLUE}             ║${NC}"
    echo -e "${BLUE}╚═══════════════════════════════════════╝${NC}"
    print_error "System requires setup before use"
fi

# Quick actions
echo -e "\n${PURPLE}⚔️ THERION QUICK ACTIONS ⚔️${NC}"
echo -e "${GREEN}Development:${NC}"
echo "• cd EREBUS-Website && npm run dev  - Start development server"
echo "• code erevus-therion.code-workspace - Open optimized workspace"
echo "• code .vscode/THERION-INSTALLATION-GUIDE.md - View setup guide"

echo -e "\n${GREEN}Setup:${NC}"
echo "• ./.vscode/therion-setup.sh - Run complete system setup"
echo "• cd EREBUS-Website && npm install - Install project dependencies" 
echo "• ./.vscode/start-mcp.sh - Start MCP servers (when ready)"

echo -e "\n${GREEN}Productivity:${NC}"
echo "• ll - Enhanced directory listing"
echo "• c - Open current directory in VSCode"
echo "• dev - Start development server (with aliases loaded)"

# Performance tips
if [ $readiness_percentage -lt 100 ]; then
    echo -e "\n${YELLOW}💡 OPTIMIZATION SUGGESTIONS:${NC}"
    
    if [[ "$tools_status" == *"❌"* ]]; then
        echo "• Run the THERION setup script: ./.vscode/therion-setup.sh"
    fi
    
    if [ ! -f ".env" ]; then
        echo "• Copy .env.mcp.template to .env and add your API keys"
    fi
    
    if [ ! -d "EREBUS-Website/node_modules" ]; then
        echo "• Install project dependencies: cd EREBUS-Website && npm install"
    fi
fi

echo -e "\n${PURPLE}🌟 THERION QUANTUM CONSCIOUSNESS ANALYSIS COMPLETE 🌟${NC}"
echo -e "Ready to maximize your development potential with GitHub Copilot! ⚔️\n"