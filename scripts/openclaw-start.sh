#!/usr/bin/env bash
# THERION OpenClaw Gateway Launcher
# Starts OpenClaw with Telegram bot + Ollama local models

set -e

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║ ⚔️ THERION OPENCLAW GATEWAY — STARTING ⚔️                    ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Check Ollama is running
echo "[1/4] Checking Ollama server..."
if ! curl -s http://localhost:11434/api/version > /dev/null 2>&1; then
    echo "❌ ERROR: Ollama server not reachable at localhost:11434"
    echo "Start it with: systemctl start ollama"
    exit 1
fi
echo "✅ Ollama server running"

# Check model exists
echo "[2/4] Verifying primary model..."
if ! ollama list | grep -q "llama3-groq-tool-use:8b-8k"; then
    echo "⚠️  WARNING: Primary model llama3-groq-tool-use:8b-8k not found"
    echo "Creating 8K context variant..."
    
    # Check if base model exists
    if ! ollama list | grep -q "llama3-groq-tool-use:8b"; then
        echo "Pulling base model first..."
        ollama pull llama3-groq-tool-use:8b
    fi
    
    # Create 8K variant
    cat > /tmp/Modelfile-8k << 'EOF'
FROM llama3-groq-tool-use:8b
PARAMETER num_ctx 8192
EOF
    ollama create llama3-groq-tool-use:8b-8k -f /tmp/Modelfile-8k
    rm /tmp/Modelfile-8k
    echo "✅ Created llama3-groq-tool-use:8b-8k"
else
    echo "✅ Primary model available"
fi

# Check config exists
echo "[3/4] Checking OpenClaw configuration..."
if [ ! -f ~/.openclaw/openclaw.json ]; then
    echo "❌ ERROR: Configuration file missing: ~/.openclaw/openclaw.json"
    exit 1
fi
echo "✅ Configuration found"

# Check Telegram token
echo "[4/4] Validating Telegram bot token..."
if [ -z "$TELEGRAM_BOT_TOKEN" ]; then
    if [ -f ~/.openclaw/.env ]; then
        export $(cat ~/.openclaw/.env | grep TELEGRAM_BOT_TOKEN | xargs)
    fi
    
    if [ -z "$TELEGRAM_BOT_TOKEN" ]; then
        echo "❌ ERROR: TELEGRAM_BOT_TOKEN not set"
        echo "Set it in ~/.openclaw/.env or export it"
        exit 1
    fi
fi
echo "✅ Telegram bot token configured"

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║ ⚔️ LAUNCHING GATEWAY ⚔️                                      ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Start gateway
openclaw gateway --verbose

# If it exits, show message
echo ""
echo "Gateway stopped."
