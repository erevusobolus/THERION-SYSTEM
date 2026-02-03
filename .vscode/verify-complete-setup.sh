#!/bin/bash
# ╔══════════════════════════════════════════════════════════════╗
# ║ ⚔️ THERION VSCODE COMPLETE SETUP VERIFICATION               ║
# ╚══════════════════════════════════════════════════════════════╝

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║ 🔍 VSCODE ENVIRONMENT VERIFICATION                           ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

PASSED=0
FAILED=0

test_check() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅${NC} $1"
        ((PASSED++))
    else
        echo -e "${RED}❌${NC} $1"
        ((FAILED++))
    fi
}

# Test 1: Extension count
EXT_COUNT=$(code --list-extensions 2>/dev/null | wc -l)
[ "$EXT_COUNT" -ge "15" ]
test_check "Extensions installed: $EXT_COUNT (≥15)"

# Test 2: Critical extensions
code --list-extensions | grep -q "github.copilot"
test_check "GitHub Copilot installed"

code --list-extensions | grep -q "dbaeumer.vscode-eslint"
test_check "ESLint installed"

code --list-extensions | grep -q "esbenp.prettier-vscode"
test_check "Prettier installed"

code --list-extensions | grep -q "eamodio.gitlens"
test_check "GitLens installed"

code --list-extensions | grep -q "usernamehw.errorlens"
test_check "Error Lens installed"

# Test 3: Settings file exists
[ -f ".vscode/settings.json" ]
test_check "settings.json exists"

# Test 4: Markdown preview setting
grep -q "workbench.editorAssociations" .vscode/settings.json
test_check "Markdown preview configured"

# Test 5: Extensions.json exists
[ -f ".vscode/extensions.json" ]
test_check "extensions.json exists"

# Test 6: AI Agent guide exists
[ -f ".vscode/AI-AGENT-VSCODE-SETUP-GUIDE.md" ]
test_check "AI Agent setup guide created"

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo -e "${GREEN}✅ PASSED: $PASSED${NC}"
[ $FAILED -gt 0 ] && echo -e "${RED}❌ FAILED: $FAILED${NC}"
echo "═══════════════════════════════════════════════════════════════"

if [ $FAILED -eq 0 ]; then
    echo ""
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║ ✅ VSCODE ENVIRONMENT: FULLY OPERATIONAL                     ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📝 Next Steps:"
    echo "   1. Restart VSCode (required)"
    echo "   2. Test markdown preview (open any .md file)"
    echo "   3. Verify extensions are active"
    echo ""
    exit 0
else
    echo ""
    echo "⚠️ Fix failed checks before proceeding"
    exit 1
fi
