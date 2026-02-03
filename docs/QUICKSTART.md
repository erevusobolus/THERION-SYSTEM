# Quick Start Guide

Get THERION running in 15 minutes.

---

## Prerequisites

- Linux, macOS, or Windows with WSL2
- 4GB+ GPU VRAM (or 16GB RAM for CPU mode)
- 10GB free disk space

---

## Step 1: Install System Dependencies

**Ubuntu/Debian:**

```bash
sudo apt update && sudo apt install -y curl git jq ddgr nodejs npm
```

**macOS:**

```bash
brew install node jq ddgr
```

---

## Step 2: Install Ollama

```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

Verify:

```bash
ollama --version
```

---

## Step 3: Download a Model

Choose based on your hardware:

| VRAM  | Command                         |
| ----- | ------------------------------- |
| 4GB   | `ollama pull qwen3:4b`          |
| 6GB   | `ollama pull qwen2.5-coder:7b`  |
| 8GB   | `ollama pull qwen3:14b`         |
| 12GB+ | `ollama pull qwen2.5-coder:32b` |

---

## Step 4: Clone THERION

```bash
git clone https://github.com/erevusobolus/THERION-SYSTEM.git
cd THERION-SYSTEM
```

---

## Step 5: Install OpenClaw

```bash
npm install -g openclaw
```

---

## Step 6: Configure

```bash
mkdir -p ~/.openclaw
cp config/openclaw.template.json ~/.openclaw/openclaw.json
```

Edit `~/.openclaw/openclaw.json`:

- Set your model name
- Add Telegram bot token (get from @BotFather)
- Add your Telegram user ID (get from @userinfobot)

Minimal config:

```json
{
  "agents": {
    "default": {
      "model": {
        "provider": "ollama",
        "model": "qwen3:4b"
      }
    }
  },
  "channels": {
    "telegram": {
      "token": "YOUR_BOT_TOKEN",
      "allowedUsers": ["YOUR_USER_ID"]
    }
  }
}
```

---

## Step 7: Start

```bash
openclaw gateway start
```

---

## Step 8: Test

Message your bot on Telegram:

```
What's the weather in London?
```

---

## Troubleshooting

**Bot not responding:**

```bash
# Check if gateway is running
ps aux | grep openclaw

# Check logs
tail -f /tmp/openclaw/openclaw.log
```

**Model not found:**

```bash
ollama list  # Verify model is downloaded
ollama pull qwen3:4b  # Re-download if needed
```

**Ollama not running:**

```bash
systemctl start ollama  # Linux with systemd
ollama serve &  # Manual start
```

---

## Next Steps

1. Read [README.md](../README.md) for full documentation
2. Customize [SOUL.md](../SOUL.md) for personality
3. Add tools via [TOOLS.md](../TOOLS.md)
4. Open workspace in VS Code with Copilot for AI-assisted setup

---

_Part of THERION System documentation._
