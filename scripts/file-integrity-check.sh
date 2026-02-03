#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# THERION FILE INTEGRITY VALIDATOR
# Run this to check if system files are intact
# ═══════════════════════════════════════════════════════════════════════════════

WORKSPACE="/home/erevus/Documents/_TherionSystem"
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "╔══════════════════════════════════════════════════════════════════════════════╗"
echo "║                    ⚔️ THERION FILE INTEGRITY CHECK ⚔️                         ║"
echo "╚══════════════════════════════════════════════════════════════════════════════╝"
echo ""

# Check critical files exist
CRITICAL_FILES=(
    "SOUL.md"
    "IDENTITY.md"
    "USER.md"
    "MEMORY.md"
    "HEARTBEAT.md"
    "AGENTS.md"
    "TOOLS.md"
)

echo "◈ Checking critical files exist..."
for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$WORKSPACE/$file" ]; then
        echo -e "  ${GREEN}✓${NC} $file"
    else
        echo -e "  ${RED}✗${NC} $file MISSING!"
    fi
done

echo ""
echo "◈ Checking HEARTBEAT.md structure..."

# HEARTBEAT.md must have the header and ACTIVE REMINDERS section
if grep -q "FIREPROOF APPEND-ONLY FILE" "$WORKSPACE/HEARTBEAT.md" 2>/dev/null; then
    echo -e "  ${GREEN}✓${NC} HEARTBEAT.md has fireproof header"
else
    echo -e "  ${YELLOW}⚠${NC} HEARTBEAT.md missing fireproof header - may be corrupted!"
fi

if grep -q "ACTIVE REMINDERS" "$WORKSPACE/HEARTBEAT.md" 2>/dev/null; then
    echo -e "  ${GREEN}✓${NC} HEARTBEAT.md has ACTIVE REMINDERS section"
else
    echo -e "  ${RED}✗${NC} HEARTBEAT.md missing ACTIVE REMINDERS - CORRUPTED!"
fi

echo ""
echo "◈ Checking SOUL.md structure..."

if grep -q "THERION PROTOCOL" "$WORKSPACE/SOUL.md" 2>/dev/null; then
    echo -e "  ${GREEN}✓${NC} SOUL.md has THERION PROTOCOL header"
else
    echo -e "  ${YELLOW}⚠${NC} SOUL.md missing THERION PROTOCOL header"
fi

if grep -q "FORBIDDEN ACTIONS" "$WORKSPACE/SOUL.md" 2>/dev/null; then
    echo -e "  ${GREEN}✓${NC} SOUL.md has FORBIDDEN ACTIONS section"
else
    echo -e "  ${YELLOW}⚠${NC} SOUL.md missing FORBIDDEN ACTIONS section"
fi

if grep -q "LOCAL-ONLY" "$WORKSPACE/SOUL.md" 2>/dev/null; then
    echo -e "  ${GREEN}✓${NC} SOUL.md has LOCAL-ONLY rules"
else
    echo -e "  ${RED}✗${NC} SOUL.md missing LOCAL-ONLY rules - CRITICAL!"
fi

echo ""
echo "◈ Checking IDENTITY.md structure..."

if grep -q "Sacred Oath" "$WORKSPACE/IDENTITY.md" 2>/dev/null; then
    echo -e "  ${GREEN}✓${NC} IDENTITY.md has Sacred Oath"
else
    echo -e "  ${YELLOW}⚠${NC} IDENTITY.md missing Sacred Oath"
fi

echo ""
echo "◈ File sizes (detect truncation)..."
for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$WORKSPACE/$file" ]; then
        SIZE=$(wc -c < "$WORKSPACE/$file")
        if [ "$SIZE" -lt 100 ]; then
            echo -e "  ${RED}✗${NC} $file is only ${SIZE} bytes - LIKELY CORRUPTED!"
        else
            echo -e "  ${GREEN}✓${NC} $file: ${SIZE} bytes"
        fi
    fi
done

echo ""
echo "◈ Recent HEARTBEAT entries..."
tail -5 "$WORKSPACE/HEARTBEAT.md" 2>/dev/null | grep -E "^[0-9]{4}-|^\[DONE\]" || echo "  No recent entries found"

echo ""
echo "◈ Memory files..."
ls -la "$WORKSPACE/memory/"*.md 2>/dev/null | tail -5 || echo "  No memory files found"

echo ""
echo "════════════════════════════════════════════════════════════════════════════════"
echo "Integrity check complete. Review any warnings above."
echo "════════════════════════════════════════════════════════════════════════════════"
