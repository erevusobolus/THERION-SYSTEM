# THERION Quick Reference

Command reference for common operations.

---

## System Status

```bash
# Check all services
nvidia-smi                          # GPU status
systemctl status ollama             # Ollama service
ps aux | grep openclaw-gateway      # Gateway process
tail -f /tmp/openclaw/openclaw.log  # Live logs
```

## Gateway Control

```bash
# Start
openclaw gateway start

# Restart
pkill -f openclaw-gateway && sleep 2 && openclaw gateway start

# View config
cat ~/.openclaw/openclaw.json | jq '.'
```

## Model Management

```bash
# List models
ollama list

# Download model
ollama pull qwen3:4b

# Run interactive
ollama run qwen3:4b

# Delete model
ollama rm modelname
```

## Web Tools

```bash
# Search
ddgr --json -n 5 "search query"

# Weather
curl -s "wttr.in/London?format=3"

# Fetch page
w3m -dump "https://url.com" | head -100
```

## File Paths

| Path                         | Purpose           |
| ---------------------------- | ----------------- |
| `~/.openclaw/openclaw.json`  | Main config       |
| `/tmp/openclaw/openclaw.log` | Runtime logs      |
| `SOUL.md`                    | Agent personality |
| `USER.md`                    | User preferences  |
| `memory/`                    | Daily logs        |

## Telegram Commands

```
/start    - Initialize bot
/new      - Start new conversation
/help     - Show help
```

## Log Analysis

```bash
# Find errors
grep -E "error|failed" /tmp/openclaw/openclaw.log | tail -20

# Watch tool calls
tail -f /tmp/openclaw/openclaw.log | grep tool_call
```

## Troubleshooting

| Issue              | Solution                           |
| ------------------ | ---------------------------------- |
| Bot not responding | Check `ps aux \| grep openclaw`    |
| Model not found    | Run `ollama pull modelname`        |
| Ollama down        | Run `systemctl start ollama`       |
| Tool errors        | Check logs for validation messages |

---

_See [DEPENDENCIES.md](DEPENDENCIES.md) for full installation reference._

```bash
# Restart gateway
pkill openclaw && ./openclaw-start.sh

# Restart Ollama
sudo systemctl restart ollama

# Check GPU
nvidia-smi

# Validate config JSON
python3 -m json.tool ~/.openclaw/openclaw.json
```

## MODEL SPECS

- **llama3-groq-tool-use:8b-8k**: 8K context, 40-60 tok/s, 4.5GB VRAM
- **qwen2.5-coder:32b-instruct-q4_K_M**: 32K context, 15-25 tok/s, 7.5GB VRAM

## KEY FEATURES

✅ 8K conversation memory
✅ Full tool access (files, exec, sessions)
✅ Multiple model support
✅ Telegram-only (secure)
✅ Local inference (no API costs)

DEUS VULT ⚔️
