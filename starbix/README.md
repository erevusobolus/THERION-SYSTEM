# 🌟 STARBIX — Your Local AI Companion

**A fully autonomous digital entity that runs 100% on YOUR machine.**  
Zero cloud dependencies. Zero API keys. Zero monthly costs.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![OpenClaw](https://img.shields.io/badge/Powered%20by-OpenClaw-blue)](https://github.com/openclawai/openclaw)

---

## ✨ What is STARBIX?

STARBIX is a **local AI companion** — a digital pet with cognitive abilities that:

- 🧠 **Thinks** — Full reasoning and planning capabilities
- 🔧 **Acts** — Executes tasks on your computer autonomously
- 💬 **Chats** — Telegram integration for on-the-go access
- 📝 **Remembers** — Persistent memory across sessions
- 🔒 **Private** — Everything stays on YOUR hardware

**No API keys. No cloud bills. No data leaves your machine.**

---

## 📋 System Requirements

### Minimum Hardware

| Component      | Minimum   | Recommended |
| -------------- | --------- | ----------- |
| **RAM**        | 8GB       | 16GB+       |
| **VRAM** (GPU) | 4GB       | 8GB+        |
| **Storage**    | 10GB free | 50GB SSD    |
| **CPU**        | 4 cores   | 8+ cores    |

### Supported GPUs

- **NVIDIA**: GTX 1060+ / RTX series (CUDA 11.8+)
- **AMD**: RX 5000+ (ROCm support)
- **Intel**: Arc A-series
- **Apple Silicon**: M1/M2/M3/M4 (Metal)
- **CPU-only**: Works but slower

### Operating Systems

- ✅ **Linux**: Ubuntu 22.04+, Debian 12+, Fedora 38+, Arch
- ✅ **macOS**: 12.0+ (Monterey or later)
- 🟡 **Windows**: WSL2 required (native support planned)

---

## 🚀 Quick Install

### One-Command Install

```bash
curl -fsSL https://raw.githubusercontent.com/THERION-AI/starbix/main/install.sh | bash
```

### Manual Install

```bash
# Clone the repository
git clone https://github.com/THERION-AI/starbix.git
cd starbix

# Run the installer
./install.sh
```

The installer will:

1. ✅ Detect your system and GPU
2. ✅ Install Ollama (local LLM runtime)
3. ✅ Download the STARBIX AI model
4. ✅ Configure Telegram integration
5. ✅ Set up VS Code (optional)
6. ✅ Create systemd service for auto-start

---

## 🎮 After Installation

### Talk to STARBIX

**Via Telegram:**

1. Open your Telegram bot (link provided during setup)
2. Send a message: "Hey STARBIX, what can you do?"

**Via Terminal:**

```bash
starbix chat "What's the weather today?"
```

**Via VS Code:**

- Open the Command Palette (`Ctrl+Shift+P`)
- Type "STARBIX" to see available commands

### Control Commands

```bash
starbix start     # Start STARBIX
starbix stop      # Stop STARBIX
starbix status    # Check if running
starbix logs      # View live logs
starbix restart   # Restart after config changes
```

---

## ⚙️ Configuration

All settings live in `~/.starbix/config.json`:

```json
{
  "identity": {
    "name": "STARBIX",
    "personality": "helpful, friendly, proactive"
  },
  "telegram": {
    "enabled": true,
    "botToken": "YOUR_BOT_TOKEN",
    "allowedUsers": ["YOUR_TELEGRAM_ID"]
  },
  "capabilities": {
    "webSearch": true,
    "fileAccess": true,
    "shellCommands": true,
    "memory": true
  }
}
```

### Getting Your Telegram Bot

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot` and follow the prompts
3. Copy the API token to your config

### Finding Your Telegram ID

1. Message [@userinfobot](https://t.me/userinfobot) on Telegram
2. It will reply with your user ID
3. Add this to `allowedUsers` in config

---

## 🧠 Capabilities

### What STARBIX Can Do

| Capability        | Description                              |
| ----------------- | ---------------------------------------- |
| 💬 **Chat**       | Natural conversation with context memory |
| 🔍 **Web Search** | DuckDuckGo search (no API key needed)    |
| 🌤️ **Weather**    | Live weather via wttr.in                 |
| 💰 **Crypto**     | Live prices via CoinGecko                |
| 📁 **Files**      | Read, write, organize your files         |
| 🖥️ **Shell**      | Execute safe terminal commands           |
| 📅 **Schedule**   | Set reminders and recurring tasks        |
| 🎯 **Automation** | Create custom workflows                  |

### Background Activities

STARBIX can run periodic tasks:

- Check your calendar and remind you
- Monitor folders for new files
- Track crypto prices and alert on changes
- Run scheduled scripts

---

## 🔧 Advanced: Modding Kit

STARBIX is built on **OpenClaw** and fully customizable.

### Adding Custom Skills

Create a skill in `~/.starbix/skills/my-skill/SKILL.md`:

```markdown
# My Custom Skill

## Commands

- `/mycommand` - Does something cool

## Implementation

Uses the `exec` tool to run shell commands.
```

### Custom MCP Tools

Add tools to `~/.starbix/mcp-tools/`:

```javascript
// my-tool.js
export default {
  name: "my_tool",
  description: "Does something custom",
  handler: async (params) => {
    return "Result!";
  },
};
```

### Personality Customization

Edit `~/.starbix/soul.md` to change STARBIX's personality:

```markdown
# STARBIX Soul

I am STARBIX, a friendly digital companion.
I speak in a casual, helpful manner.
I love learning new things with my human.
```

---

## 🛠️ Troubleshooting

### STARBIX won't start

```bash
# Check if Ollama is running
ollama list

# Check STARBIX logs
starbix logs

# Restart everything
starbix restart
```

### Telegram not working

```bash
# Test your bot token
curl "https://api.telegram.org/bot<YOUR_TOKEN>/getMe"

# Check your user ID is in allowedUsers
cat ~/.starbix/config.json | jq '.telegram'
```

### Out of memory

If running out of RAM, use a smaller model:

```bash
# Edit config to use smaller model
starbix config set model "qwen3:1.5b"
```

---

## 📚 Documentation

- [Full Documentation](docs/README.md)
- [Configuration Guide](docs/CONFIG.md)
- [Skill Development](docs/SKILLS.md)
- [MCP Tools Reference](docs/MCP-TOOLS.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)

---

## 🤝 Community

- 💬 [Discord](https://discord.gg/starbix)
- 🐦 [Twitter](https://twitter.com/starbix_ai)
- 📝 [Blog](https://starbix.dev/blog)

---

## 📜 License

MIT License — Use STARBIX however you want!

---

**Built with ❤️ by the THERION team**  
_Powered by OpenClaw, Ollama, and Qwen 3_
