---
applyTo: "**"
---

# THERION System — VS Code AI Agent Configuration

This workspace contains THERION, a pre-configured local AI assistant system.

---

## 🚀 ONE-PROMPT INSTALL SYSTEM

**When user says "install THERION", "set this up", "configure everything", or similar — follow this EXACT sequence:**

### STEP 1: Install System Dependencies

```bash
# Detect OS and install required packages
if [ -f /etc/os-release ]; then
    . /etc/os-release
    case "$ID" in
        ubuntu|debian)
            sudo apt update && sudo apt install -y curl git jq ddgr w3m nodejs npm
            ;;
        fedora)
            sudo dnf install -y curl git jq nodejs npm python3-pip && pip3 install --user ddgr
            ;;
        arch|manjaro)
            sudo pacman -S --noconfirm curl git jq nodejs npm w3m && yay -S ddgr
            ;;
    esac
elif [[ "$OSTYPE" == "darwin"* ]]; then
    brew install node jq ddgr w3m curl git
fi
```

### STEP 2: Install Ollama (Local AI Engine)

```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

### STEP 3: Download the AI Model

**CRITICAL: Use this EXACT model — it works on 4GB+ VRAM and downloads automatically:**

```bash
ollama pull qwen3:4b
```

Wait for download to complete (~2.5GB).

### STEP 4: Install OpenClaw Gateway

```bash
npm install -g openclaw
```

### STEP 5: Create Configuration Directory

```bash
mkdir -p ~/.openclaw
mkdir -p /tmp/openclaw
```

### STEP 6: Get Messaging Platform Credentials

**Ask the user which platform they want. For Telegram (recommended):**

Tell user:

1. "Open Telegram and message @BotFather"
2. "Send /newbot and follow the prompts to create your bot"
3. "Copy the bot token (looks like: 123456789:ABCdefGHIjklMNO...)"

Then ask: "What is your bot token?"

Next tell user:

1. "Message @userinfobot on Telegram"
2. "It will reply with your user ID (a number like 123456789)"

Then ask: "What is your Telegram user ID?"

### STEP 7: Create Configuration File

**Replace BOT_TOKEN and USER_ID with the values the user provided:**

```bash
# Get the workspace path (where user cloned the repo)
WORKSPACE_PATH="$(pwd)"
BOT_TOKEN="<paste user's bot token here>"
USER_ID="<paste user's user ID here>"

cat > ~/.openclaw/openclaw.json << EOF
{
  "logging": {
    "level": "info",
    "file": "/tmp/openclaw/openclaw.log"
  },
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3:4b",
            "name": "Qwen3 4B",
            "contextWindow": 8192,
            "maxTokens": 4096
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/qwen3:4b"
      },
      "workspace": "$WORKSPACE_PATH",
      "contextTokens": 8192,
      "timeoutSeconds": 300,
      "thinkingDefault": "medium"
    },
    "list": [
      {
        "id": "main",
        "default": true,
        "identity": {
          "name": "THERION",
          "systemPromptFile": "$WORKSPACE_PATH/SOUL.md"
        }
      }
    ]
  },
  "tools": {
    "allow": ["exec", "files_read", "files_write"],
    "exec": {
      "safeBins": [
        "ddgr", "curl", "wget", "jq", "python3", "node",
        "cat", "ls", "head", "tail", "grep", "echo", "date", "w3m"
      ]
    }
  },
  "channels": {
    "telegram": {
      "token": "$BOT_TOKEN",
      "allowedUsers": ["$USER_ID"]
    }
  }
}
EOF
```

### STEP 8: Start Ollama Service

```bash
# Check if Ollama is running, start if not
if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    ollama serve &
    sleep 3
fi

# Verify model is available
ollama list | grep qwen3:4b
```

### STEP 9: Start OpenClaw Gateway

```bash
openclaw gateway start
```

### STEP 10: Verify and Test

Tell user: **"Open Telegram and send a message to your bot. Try: 'Hello, what can you do?'"**

Check if it works:

```bash
# Check gateway is running
ps aux | grep openclaw-gateway

# Check logs for errors
tail -20 /tmp/openclaw/openclaw.log
```

---

## ⚠️ CRITICAL INSTALLATION RULES

1. **ALWAYS use `qwen3:4b`** — it downloads automatically and works on most hardware
2. **NEVER leave placeholder values** — always ask user for real bot token and user ID
3. **ALWAYS verify each step** — check command output before proceeding
4. **Use absolute paths** — `$HOME/.openclaw/` not `~/.openclaw/` in scripts
5. **Wait for downloads** — `ollama pull` can take several minutes

---

## 🧠 VERIFIED MODEL SELECTION (Tool Calling + 16K+ Context)

**CRITICAL:** Only these models have VERIFIED tool calling support. See [docs/VERIFIED-MODELS.md](../docs/VERIFIED-MODELS.md) for full details.

### Quick Selection by VRAM

| VRAM     | Model               | Context | Command                         | Best For                   |
| -------- | ------------------- | ------- | ------------------------------- | -------------------------- |
| **4GB**  | `qwen3:4b`          | 256K    | `ollama pull qwen3:4b`          | **DEFAULT** - Entry level  |
| **6GB**  | `qwen2.5-coder:7b`  | 32K     | `ollama pull qwen2.5-coder:7b`  | Coding tasks               |
| **8GB**  | `llama3.1:8b`       | 128K    | `ollama pull llama3.1:8b`       | General + long context     |
| **10GB** | `mistral-nemo:12b`  | 128K    | `ollama pull mistral-nemo`      | Efficient agent            |
| **12GB** | `qwen3:14b`         | 40K     | `ollama pull qwen3:14b`         | High quality               |
| **16GB** | `devstral:24b`      | 128K    | `ollama pull devstral`          | **BEST** for coding agents |
| **24GB** | `qwen2.5-coder:32b` | 32K     | `ollama pull qwen2.5-coder:32b` | GPT-4o level coding        |
| **48GB** | `llama3.3:70b`      | 128K    | `ollama pull llama3.3`          | Maximum capability         |

### Tier 1: THERION Recommended Models

**Qwen3 Series** — Best value, excellent tool use

```bash
ollama pull qwen3:4b     # 4GB VRAM - Default
ollama pull qwen3:8b     # 6GB VRAM
ollama pull qwen3:14b    # 10GB VRAM
ollama pull qwen3:30b    # 24GB VRAM - MoE, 256K context
```

**Qwen2.5-Coder Series** — Best for coding

```bash
ollama pull qwen2.5-coder:7b   # 6GB VRAM
ollama pull qwen2.5-coder:14b  # 12GB VRAM
ollama pull qwen2.5-coder:32b  # 24GB VRAM - GPT-4o competitive
```

**Llama 3.1/3.3 Series** — Meta's best, 128K context

```bash
ollama pull llama3.1:8b   # 6GB VRAM - 128K context
ollama pull llama3.3:70b  # 48GB VRAM - Near 405B quality
```

**Mistral Series** — Efficient agents

```bash
ollama pull mistral-nemo       # 10GB VRAM - 128K context
ollama pull mistral-small:22b  # 16GB VRAM - Best agentic
ollama pull devstral           # 16GB VRAM - #1 for SWE-bench
```

**Hermes3** — Roleplay + agents

```bash
ollama pull hermes3:8b   # 6GB VRAM - 128K context
ollama pull hermes3:70b  # 48GB VRAM - Maximum
```

### OPTIONAL: Create Extended Context Model

If user wants longer context (requires more VRAM):

```bash
# 16K Context (6GB+ VRAM)
ollama pull qwen3:4b
ollama create qwen3:therion-16k -f Modelfile.therion-16k
sed -i 's/qwen3:4b/qwen3:therion-16k/g' ~/.openclaw/openclaw.json
sed -i 's/8192/16384/g' ~/.openclaw/openclaw.json

# 32K Context (10GB+ VRAM)
cat > Modelfile.therion-32k << 'EOF'
FROM qwen3:8b
PARAMETER num_ctx 32768
PARAMETER temperature 0.3
EOF
ollama create qwen3:therion-32k -f Modelfile.therion-32k
```

### ❌ Models to AVOID

- `llama3-groq-tool-use` — Only 8K context (insufficient)
- `gemma3`, `phi3` — No tool calling support
- `codellama` — Old, no tool support
- `deepseek-r1` — Reasoning focus, tools experimental
- Any model without `tools` tag on Ollama

---

## Platform Setup Quick Reference

### Telegram (Recommended)

- Get token from @BotFather (`/newbot`)
- Get user ID from @userinfobot
- Config key: `channels.telegram`

### Discord

- Create app at discord.com/developers/applications
- Add bot, copy token
- Config key: `channels.discord`

### Slack

- Create app at api.slack.com/apps
- Add bot scopes, install to workspace
- Config key: `channels.slack`

---

## Troubleshooting

### "Model not found"

```bash
ollama list                    # Check what's installed
ollama pull qwen3:4b           # Re-download model
```

### "Connection refused"

```bash
ollama serve &                 # Start Ollama
sleep 3
curl http://localhost:11434/api/tags  # Verify
```

### Bot not responding

```bash
openclaw gateway status              # Check gateway running
tail -50 /tmp/openclaw/openclaw.log  # Check for errors
openclaw gateway restart             # Restart properly
openclaw gateway restart --force     # Force restart if needed
```

### Invalid config

```bash
cat ~/.openclaw/openclaw.json | jq '.'  # Validate JSON syntax
```

---

## 🦞 OpenClaw Gateway Commands

**CRITICAL: Use these EXACT commands — NOT pkill!**

### Service Management (systemd)

```bash
# Check status (ALWAYS DO THIS FIRST)
openclaw gateway status

# Start gateway
openclaw gateway start

# Stop gateway
openclaw gateway stop

# Restart gateway (PREFERRED METHOD)
openclaw gateway restart

# Force restart (kills port conflicts)
openclaw gateway restart --force
```

### Gateway Options

```bash
# Run in foreground (for debugging)
openclaw gateway run --verbose

# Check health
openclaw gateway health

# Full probe (reachability + health + status)
openclaw gateway probe
```

### Logs

```bash
# View logs
openclaw logs

# Tail logs live
tail -f /tmp/openclaw/openclaw.log

# Search for errors
grep -E "error|Error|failed" /tmp/openclaw/openclaw.log | tail -20
```

### Other Useful Commands

```bash
# Health check
openclaw doctor

# Interactive setup wizard
openclaw onboard

# Configure credentials
openclaw configure

# Check all channel status
openclaw status
```

### ❌ DO NOT USE

```bash
# WRONG - Don't use pkill
pkill -f openclaw-gateway  # BAD!

# WRONG - Don't use ps grep patterns
ps aux | grep openclaw-gateway  # Use 'openclaw gateway status' instead
```

---

## Key Paths

| Path                         | Purpose                               |
| ---------------------------- | ------------------------------------- |
| `~/.openclaw/openclaw.json`  | Main configuration                    |
| `/tmp/openclaw/openclaw.log` | Runtime logs                          |
| `SOUL.md`                    | Agent personality (edit to customize) |
| `USER.md`                    | User preferences template             |
| `TOOLS.md`                   | Available tools reference             |

---

## After Installation

Once working, the user can:

1. **Customize personality** — Edit `SOUL.md`
2. **Add tools** — Add scripts to `scripts/`, add to safeBins in config
3. **Upgrade model** — Pull larger model, update config
4. **Add platforms** — Add Discord/Slack alongside Telegram

---

## 🚀 PERFORMANCE MAXIMIZATION

### Thinking Level Configuration

| Level       | Use Case                             | Response Time    |
| ----------- | ------------------------------------ | ---------------- |
| `"off"`     | Simple queries                       | Fastest          |
| `"minimal"` | Quick tasks                          | Fast             |
| `"low"`     | Standard queries                     | Normal           |
| `"medium"`  | Complex questions                    | Slower           |
| `"high"`    | **Multi-step research, tool chains** | Slowest but best |

**For maximum tool use accuracy, set `thinkingDefault: "high"`**

### Optimal Config for Autonomous Agents

```json
{
  "agents": {
    "defaults": {
      "thinkingDefault": "high",
      "verboseDefault": "full",
      "timeoutSeconds": 600,
      "maxConcurrent": 3,
      "contextTokens": 16384
    }
  },
  "tools": {
    "allow": ["exec", "files_read", "files_write"],
    "exec": {
      "safeBins": [
        "ddgr",
        "curl",
        "wget",
        "jq",
        "python3",
        "node",
        "cat",
        "ls",
        "head",
        "tail",
        "grep",
        "echo",
        "date",
        "w3m",
        "git",
        "code",
        "find",
        "sed",
        "awk",
        "tree"
      ]
    }
  }
}
```

### Performance Tuning by Hardware

**Low-end (4-6GB VRAM):**

```json
{
  "contextTokens": 8192,
  "thinkingDefault": "medium",
  "timeoutSeconds": 300
}
```

**Mid-range (8-12GB VRAM):**

```json
{
  "contextTokens": 16384,
  "thinkingDefault": "high",
  "timeoutSeconds": 450
}
```

**High-end (16GB+ VRAM):**

```json
{
  "contextTokens": 32768,
  "thinkingDefault": "high",
  "timeoutSeconds": 600
}
```

### Automation Best Practices

1. **Enable tool chaining** — Allow model to call tools sequentially
2. **Set high timeout** — Complex tasks need 5-10 minutes
3. **Use appropriate context** — Match to available VRAM
4. **Maximize safeBins** — Add all tools you want the agent to use

---

## Development Guidelines

### Execution Principles

1. **Use absolute paths** in all terminal commands
2. **Read files before modifying** — verify current state
3. **Provide complete code** — no placeholders
4. **Test changes** — verify modifications work

### Diagnostic Commands

```bash
# Check gateway status (USE THIS - NOT ps aux)
openclaw gateway status

# View live logs
tail -f /tmp/openclaw/openclaw.log

# Find errors
grep -E "error|failed" /tmp/openclaw/openclaw.log | tail -20

# View configuration
cat ~/.openclaw/openclaw.json | jq '.'

# Restart gateway (PROPER METHOD)
openclaw gateway restart

# Force restart if needed
openclaw gateway restart --force

# Full health check
openclaw doctor
```

---

## Documentation

| Document                                                              | Purpose                                                  |
| --------------------------------------------------------------------- | -------------------------------------------------------- |
| [README.md](../README.md)                                             | Project overview                                         |
| [AGENTS.md](../AGENTS.md)                                             | Operating protocol                                       |
| [TOOLS.md](../TOOLS.md)                                               | Tool reference                                           |
| [docs/VERIFIED-MODELS.md](../docs/VERIFIED-MODELS.md)                 | **Model selection guide with tool calling verification** |
| [docs/QUICKSTART.md](../docs/QUICKSTART.md)                           | Manual quick start                                       |
| [docs/PLATFORM-SETUP-INDEX.md](../docs/PLATFORM-SETUP-INDEX.md)       | Platform details                                         |
| [docs/OPENCLAW-KNOWLEDGE-BASE.md](../docs/OPENCLAW-KNOWLEDGE-BASE.md) | Configuration troubleshooting                            |

---

_THERION System — One prompt to install. Zero fail margin._
