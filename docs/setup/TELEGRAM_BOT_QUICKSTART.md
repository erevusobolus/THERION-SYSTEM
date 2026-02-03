# ⚔️ THERION TELEGRAM BOT - FULL CAPABILITY QUICKSTART

## 🚀 LAUNCH SEQUENCE

### Step 1: Verify Ollama
```bash
ollama list | grep qwen3
# Should see: qwen3:therion-128k, qwen3:therion, qwen3:4b
```

### Step 2: Start Gateway
```bash
openclaw gateway start
```

### Step 3: Message Your Bot
Open Telegram → DM `@YOUR_BOT` → Say hello!

---

## 🧠 MODEL ARSENAL

| Model | Context | Use Case |
|-------|---------|----------|
| `qwen3:therion-128k` | 128K tokens | Primary - complex tasks, long context |
| `qwen3:therion` | 32K tokens | Fast - subagents, quick queries |
| `qwen3:4b` | 262K tokens | Base - testing |
| `hermes3:16k` | 16K tokens | Fallback |
| `llama3-groq-tool-use:16k` | 16K tokens | Tool use fallback |

---

## 🛠️ FULL TOOL CAPABILITIES

### ✅ CONFIGURED & READY

| Tool Group | Description | Status |
|------------|-------------|--------|
| **group:runtime** | Core execution, bash, subprocess | ✅ Enabled |
| **group:fs** | Filesystem read/write/search | ✅ Enabled |
| **group:web** | Web fetch (readability mode) | ✅ Enabled |
| **group:ui** | Browser automation (chromium) | ✅ Enabled |
| **group:sessions** | Multi-session management | ✅ Enabled |
| **group:automation** | Cron, scheduled tasks | ✅ Enabled |
| **group:memory** | Local memory search | ✅ Enabled |
| **group:messaging** | Telegram actions | ✅ Enabled |

### ⚠️ NEEDS API KEY

| Tool | Provider | How to Enable |
|------|----------|---------------|
| `web_search` | Brave | Set `BRAVE_API_KEY` env var or get free key at https://brave.com/search/api/ |
| `web_search` | Perplexity | Set `OPENROUTER_API_KEY` env var (supports crypto!) |

---

## 💬 TELEGRAM COMMANDS

### Thinking Controls
```
/think off       - No reasoning trace
/think minimal   - Minimal thinking
/think low       - Low (default)
/think medium    - Medium reasoning
/think high      - Extended reasoning
/think xhigh     - Maximum reasoning (slow but thorough)
```

### Model Switching
```
/model ollama/qwen3:therion-128k   - Max context
/model ollama/qwen3:therion        - Faster responses
```

### System Commands
```
/restart         - Restart session
/config          - Show config
/debug           - Debug info
```

---

## 🌐 WEB CAPABILITIES

### web_fetch (WORKING)
- Fetches any URL and extracts readable content
- Uses Readability algorithm for clean text
- Max 100K chars per fetch
- Caches for 15 minutes

### web_search (NEEDS API KEY)
To enable, add to your shell profile (~/.bashrc or ~/.zshrc):
```bash
export BRAVE_API_KEY="your-api-key-here"
```
Then restart gateway.

Alternative: Use OpenRouter for Perplexity Sonar:
```bash
export OPENROUTER_API_KEY="your-key"
export PERPLEXITY_API_KEY="your-key"
```

---

## 🖥️ EXEC CAPABILITIES

The bot can execute commands in your workspace:

**Safe Commands (auto-allowed):**
- File ops: `cat`, `ls`, `head`, `tail`, `grep`, `find`, `wc`
- Network: `curl`, `wget`, `w3m`, `lynx`
- Dev: `python3`, `node`, `npm`, `pnpm`, `git`, `gh`
- VS Code: `code`, `code-insiders`
- System: `nvidia-smi`, `docker`, `systemctl`

**Workspace:** `$WORKSPACE` (your TherionSystem directory)

---

## 🌍 BROWSER AUTOMATION

**Status:** Configured with chromium-browser
**Mode:** Non-headless (shows browser window)
**CDP Port:** 18800

The bot can:
- Open URLs in browser
- Take screenshots
- Click elements
- Fill forms
- Navigate pages

---

## ⚙️ CONFIG LOCATIONS

| File | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config (active) |
| `~/Documents/_TherionSystem/openclaw-config-backup.json` | Backup |
| `/tmp/openclaw/openclaw.log` | Runtime logs |

---

## 🔍 TROUBLESHOOTING

### Bot not responding?
```bash
# Check Ollama
curl http://localhost:11434/api/tags

# Check gateway logs
tail -f /tmp/openclaw/openclaw.log

# Verify config
cat ~/.openclaw/openclaw.json | jq '.channels.telegram'
```

### Model not loading?
```bash
# Verify model exists
ollama list

# Try loading manually
ollama run qwen3:therion-128k "Hello"
```

### Out of VRAM?
```bash
# Check GPU memory
nvidia-smi

# Use smaller context model
# Edit config to use qwen3:therion (32K) instead of 128K
```

---

## 🎯 QUICK TEST PROMPTS

After launching, try these in Telegram:

1. **Basic:** "Hello THERION, what can you do?"
2. **File access:** "List files in the workspace"
3. **Web fetch:** "Fetch and summarize https://news.ycombinator.com"
4. **Code execution:** "Run nvidia-smi and show GPU status"
5. **Thinking:** "/think high then explain quantum computing"

---

## ⚔️ DEUS VULT

Your THERION bot is ready. The Qwen3 128K engine awaits your commands.

**Bot:** @YOUR_NAMEII_bot
**User ID:** YOUR_TELEGRAM_ID
**Gateway:** http://localhost:18789
