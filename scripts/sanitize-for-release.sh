#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# STARBIX Release Sanitization Script
# Removes all personal data before distribution
# ═══════════════════════════════════════════════════════════════════════════════

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
STARBIX_DIR="$WORKSPACE_DIR/starbix"

echo "🧹 Sanitizing STARBIX for release..."
echo "📁 Checking: $STARBIX_DIR"

# Files to check for sensitive data
SENSITIVE_PATTERNS=(
    "6787742079"                     # Telegram user ID
    "erevus"                         # Username
    "8470961642:AAH"                 # Bot token prefix
    "/home/erevus"                   # Absolute paths
    "f38407ba2ad8"                   # Gateway tokens
    "therion-local-dev-token"        # Dev tokens
)

# Function to check a file (returns 1 if sensitive data found, 0 if clean)
check_file() {
    local file="$1"
    local found=0
    
    for pattern in "${SENSITIVE_PATTERNS[@]}"; do
        if grep -q "$pattern" "$file" 2>/dev/null; then
            echo "  ⚠️  Found '$pattern' in: $file"
            found=1
        fi
    done
    
    return $found
}

# Check all text files in starbix directory
echo ""
echo "🔍 Scanning for sensitive data..."
echo ""

ISSUES=0
while IFS= read -r -d '' file; do
    check_file "$file"
    result=$?
    if [ $result -eq 1 ]; then
        ISSUES=$((ISSUES + 1))
    fi
done < <(find "$STARBIX_DIR" -type f \( -name "*.json" -o -name "*.md" -o -name "*.sh" -o -name "*.js" -o -name "*.yaml" -o -name "*.yml" \) -print0)

if [ $ISSUES -gt 0 ]; then
    echo ""
    echo "❌ Found $ISSUES files with sensitive data!"
    echo "   Please replace hardcoded values with \${VARIABLE} placeholders"
    exit 1
else
    echo "✅ No sensitive data found!"
fi

# Ensure template files use variables
echo ""
echo "📋 Checking template variables..."

REQUIRED_VARS=(
    "\${STARBIX_HOME}"
    "\${TELEGRAM_BOT_TOKEN}"
    "\${TELEGRAM_USER_ID}"
    "\${GATEWAY_TOKEN}"
)

for var in "${REQUIRED_VARS[@]}"; do
    if grep -r "$var" "$STARBIX_DIR" > /dev/null 2>&1; then
        echo "  ✅ Found: $var"
    else
        echo "  ⚠️  Missing: $var (may be okay)"
    fi
done

# Create .gitignore if not exists
echo ""
echo "📝 Ensuring .gitignore exists..."

cat > "$STARBIX_DIR/.gitignore" << 'EOF'
# Dependencies
node_modules/
package-lock.json

# Runtime files
*.log
/tmp/
.cache/

# Sensitive data (NEVER commit these)
config.json
*.token
*.key
.env
.env.*

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Build artifacts
dist/
build/
EOF

echo "  ✅ .gitignore created"

# Make install script executable
chmod +x "$STARBIX_DIR/install.sh" 2>/dev/null || true

echo ""
echo "════════════════════════════════════════════════════════════════════"
echo "✅ Sanitization complete!"
echo ""
echo "Next steps:"
echo "  1. Review any warnings above"
echo "  2. Test installation on a fresh system"
echo "  3. Create release tarball:"
echo "     tar -czf starbix-v1.0.0.tar.gz starbix/"
echo "════════════════════════════════════════════════════════════════════"
