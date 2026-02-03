#!/bin/bash
# ⚔️ THERION BRAIN CALLER ⚔️
# Direct MCP server caller without mcporter dependencies
# Usage: therion-brain.sh <action> <json_params>

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BRAIN_JS="$SCRIPT_DIR/brain.js"

# Create the MCP request payload
ACTION="${1:-help}"
PARAMS="${2:-{}}"

# Execute brain.js via stdio with MCP protocol
echo '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"execute","arguments":{"action":"'$ACTION'","params":'$PARAMS'}}}' | node "$BRAIN_JS" 2>/dev/null | grep -o '"text":"[^"]*"' | sed 's/"text":"//;s/"$//' | sed 's/\\n/\n/g' | sed 's/\\t/\t/g'
