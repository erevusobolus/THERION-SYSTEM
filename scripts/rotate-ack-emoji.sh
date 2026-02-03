#!/bin/bash
# Rotate OpenClaw ackReaction emoji periodically
# Run via cron: */5 * * * * /path/to/rotate-ack-emoji.sh

CONFIG=~/.openclaw/openclaw.json

# Pool of fun emojis to rotate through
EMOJIS=("⚡" "🔥" "✨" "💫" "🎯" "💡" "🚀" "⭐" "💎" "🎪")

# Pick random emoji
RANDOM_EMOJI=${EMOJIS[$RANDOM % ${#EMOJIS[@]}]}

# Update config
jq --arg emoji "$RANDOM_EMOJI" '.messages.ackReaction = $emoji' "$CONFIG" > /tmp/oc-tmp.json && \
  mv /tmp/oc-tmp.json "$CONFIG"

echo "[$(date)] Changed ackReaction to $RANDOM_EMOJI"
