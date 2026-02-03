#!/bin/bash
# THERION Native Web Search - NO API KEY REQUIRED
# Uses ddgr (DuckDuckGo CLI) for privacy-focused native search
# Install: sudo apt install ddgr

set -e

QUERY="$*"
COUNT="${WEBSEARCH_COUNT:-5}"

if [ -z "$QUERY" ]; then
    echo '{"error": "No query provided", "usage": "websearch.sh <query>"}'
    exit 1
fi

# Use ddgr for proper JSON output (best option)
if command -v ddgr &> /dev/null; then
    ddgr -n "$COUNT" --json "$QUERY" 2>/dev/null
    exit 0
fi

# Fallback: w3m + DuckDuckGo lite
ENCODED=$(echo "$QUERY" | sed 's/ /+/g')
URL="https://lite.duckduckgo.com/lite/?q=${ENCODED}"

if command -v w3m &> /dev/null; then
    w3m -dump "$URL" 2>/dev/null | head -100
elif command -v lynx &> /dev/null; then
    lynx -dump -nolist "$URL" 2>/dev/null | head -100
else
    curl -sL "https://html.duckduckgo.com/html/?q=${ENCODED}" 2>/dev/null | \
        grep -oP '(?<=<a class="result__a" href=")[^"]+' | head -10
fi
