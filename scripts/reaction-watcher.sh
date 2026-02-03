#!/bin/bash
# Reaction Watcher - Monitors OpenClaw logs and sends reactions to incoming messages
# This runs alongside OpenClaw without conflicting

LOGFILE="/tmp/openclaw/openclaw.log"
TOKEN=$(cat ~/.openclaw/openclaw.json | jq -r '.channels.telegram.botToken')
CHAT_ID="${TELEGRAM_USER_ID:-YOUR_TELEGRAM_ID}"  # Set your Telegram ID
REACTION="⚡"

# Track last processed message to avoid duplicates
LAST_MSG_ID=0

echo "🔥 Reaction Watcher started"
echo "   Watching: $LOGFILE"
echo "   Reaction: $REACTION"
echo "   Press Ctrl+C to stop"

# Follow the log file and process new messages
tail -F "$LOGFILE" 2>/dev/null | while read -r line; do
    # Check if this is an incoming user message (not bot message, not reaction)
    if echo "$line" | grep -q '"message":{' && echo "$line" | grep -q "\"chat\":{\"id\":$CHAT_ID"; then
        # Extract message_id
        MSG_ID=$(echo "$line" | grep -oP '"message_id":\K[0-9]+' | head -1)
        
        # Check if it's a new message from user (not bot)
        if echo "$line" | grep -q '"is_bot":false' && [ -n "$MSG_ID" ] && [ "$MSG_ID" != "$LAST_MSG_ID" ]; then
            LAST_MSG_ID="$MSG_ID"
            
            # Send reaction immediately
            RESULT=$(curl -s -X POST "https://api.telegram.org/bot$TOKEN/setMessageReaction" \
                -H "Content-Type: application/json" \
                -d "{\"chat_id\": $CHAT_ID, \"message_id\": $MSG_ID, \"reaction\": [{\"type\": \"emoji\", \"emoji\": \"$REACTION\"}]}" 2>/dev/null)
            
            if echo "$RESULT" | grep -q '"ok":true'; then
                echo "$(date '+%H:%M:%S') ⚡ Reacted to message $MSG_ID"
            else
                echo "$(date '+%H:%M:%S') ❌ Failed to react to $MSG_ID"
            fi
        fi
    fi
done
