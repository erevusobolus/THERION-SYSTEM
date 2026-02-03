#!/bin/bash
# THERION Web Fetch - Extract readable content from URLs
# No API keys required

URL="$1"
if [ -z "$URL" ]; then
    echo "Usage: webfetch.sh <url>"
    exit 1
fi

echo "⚔️ THERION Web Fetch: $URL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Try w3m first, then lynx
if command -v w3m &> /dev/null; then
    w3m -dump "$URL" 2>/dev/null | head -200
elif command -v lynx &> /dev/null; then
    lynx -dump -nolist "$URL" 2>/dev/null | head -200
else
    curl -sL "$URL" 2>/dev/null | sed 's/<[^>]*>//g' | head -200
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
