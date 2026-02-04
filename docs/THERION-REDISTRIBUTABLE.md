# 🦞 THERION SYSTEM - REDISTRIBUTABLE PACKAGE

**Complete local AI agent system with zero mandatory API calls**

## 📦 What's Included

### Core Components

- **OpenClaw Gateway**: Local agent orchestration system
- **MCP THERION Tools**: Universal tool router (web search, weather, crypto, news, etc.)
- **THERION Brain**: Unified capability interface
- **Web Automation**: Playwright-based browser control

### Local Tools (No API Keys Required)

- `ddgr` - DuckDuckGo search from terminal (use for ALL searches including weather)
- `coingecko` - Crypto prices (free API)
- `playwright` - Web automation
- Standard Unix tools: curl, jq, grep, etc.

## 🚀 Quick Install

### Prerequisites

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install -y curl jq git nodejs npm python3 python3-pip ddgr

# Arch Linux
sudo pacman -S curl jq git nodejs npm python python-pip ddgr

# macOS
brew install curl jq git node python ddgr
```

### Install THERION System

```bash
# Clone the repository
git clone [YOUR_REPO_URL] _TherionSystem
cd _TherionSystem

# Install Node dependencies
cd openclaw-local
npm install
cd ..

cd mcp-therion-tools
npm install
cd ..

# Install Python dependencies (optional - for web automation)
pip3 install playwright
playwright install chromium

# Make tools executable
chmod +x mcp-therion-tools/therion-*
chmod +x scripts/*.sh
chmod +x scripts/therion-browser.py

# Configure OpenClaw (edit with your Telegram token if using Telegram)
cp openclaw-local/openclaw.json ~/.openclaw/openclaw.json
cp openclaw-local/system-prompt.md ~/.openclaw/system-prompt.md

# Install as systemd service (Linux)
mkdir -p ~/.config/systemd/user/
cp openclaw-local/openclaw-gateway.service ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable openclaw-gateway
systemctl --user start openclaw-gateway
```

## 📋 Configuration

### 1. Edit OpenClaw Config

```bash
nano ~/.openclaw/openclaw.json
```

**Minimal working config:**

```json
{
  "agents": {
    "default": {
      "provider": "anthropic",
      "model": "claude-opus-4-20250514",
      "apiKey": "YOUR_ANTHROPIC_KEY",
      "systemPrompt": "/home/YOU/.openclaw/system-prompt.md"
    }
  },
  "tools": {
    "allow": ["gateway", "sessions_history", "exec"],
    "deny": []
  },
  "channels": {
    "telegram": {
      "token": "YOUR_TELEGRAM_BOT_TOKEN",
      "allowedUsers": [YOUR_TELEGRAM_USER_ID]
    }
  }
}
```

### 2. Configure MCP Tools

The THERION MCP server is already configured in `openclaw.json` under `mcpServers`.

### 3. Test Everything

```bash
# Test OpenClaw gateway
curl http://localhost:18790/health

# Test THERION tools
cd mcp-therion-tools
./therion-search "test query"
./therion-weather "Athens"
./therion-web fetch "https://example.com"

# Test web automation
python3 scripts/therion-browser.py check
python3 scripts/therion-browser.py navigate --url "https://example.com" --json
```

## 🛠️ Available Tools

### Web Search (ddgr)

```bash
# Via THERION tool
./mcp-therion-tools/therion-search "latest AI news"

# Via MCP
# Model calls: execute(action="web_search", params={"query": "..."})
```

### Weather

```bash
# Via THERION tool
./mcp-therion-tools/therion-weather "Athens"

# Via MCP
# Model calls: execute(action="weather", params={"location": "Athens"})
```

### Crypto Prices

```bash
# Via MCP only
# Model calls: execute(action="crypto_price", params={"coins": "bitcoin,ethereum"})
```

### Web Automation

```bash
# Navigate to page
python3 scripts/therion-browser.py navigate --url "https://example.com" --screenshot "output.png"

# Extract text
python3 scripts/therion-browser.py extract --url "https://example.com" --selector "article h1"

# Click element
python3 scripts/therion-browser.py click --url "https://example.com" --selector "#button"

# Fill form
python3 scripts/therion-browser.py fill --url "https://example.com" --selector "#search" --text "query" --submit
```

## 🔧 Tool Development

### Adding New THERION Tools

1. Create tool script in `mcp-therion-tools/`:

```bash
#!/bin/bash
# therion-newtool
echo "My new tool"
```

2. Add to MCP server (`mcp-therion-tools/server.js`):

```javascript
my_action: {
  description: "My new capability",
  params: { input: "string" },
  handler: async ({ input }) => {
    return execCommand(`./therion-newtool "${escapeShell(input)}"`);
  }
}
```

3. Make executable and test:

```bash
chmod +x mcp-therion-tools/therion-newtool
./mcp-therion-tools/therion-newtool "test"
```

### Adding Python Tools

Add web automation actions to `scripts/therion-browser.py` or create new Python scripts.

## 📁 Directory Structure

```
_TherionSystem/
├── openclaw-local/           # OpenClaw agent configuration
│   ├── openclaw.json         # Main config
│   ├── system-prompt.md      # Agent instructions
│   └── start.sh              # Start script
├── mcp-therion-tools/        # MCP tool server
│   ├── server.js             # Tool router
│   ├── therion-*             # Individual tools
│   └── package.json
├── scripts/                  # Utility scripts
│   ├── therion-browser.py    # Web automation
│   ├── websearch.sh
│   └── webfetch.sh
├── skills/                   # Skill modules
│   ├── therion-brain/
│   └── therion-tools/
├── memory/                   # Agent memory
│   └── *.md
├── SOUL.md                   # Agent identity
├── USER.md                   # User preferences
└── TOOLS.md                  # Tool configurations
```

## 🔐 Security

### Safe Tool Execution

The `exec` tool in OpenClaw only allows whitelisted commands:

- `ddgr`, `curl`, `wget`, `jq`
- `cat`, `ls`, `grep`, `echo`, `date`
- `python3`, `node`

### User Lingering

By default, services stop when you log out. To enable persistence:

```bash
sudo loginctl enable-linger $USER
```

To disable (recommended for security):

```bash
sudo loginctl disable-linger $USER
```

## 🐛 Troubleshooting

### Check Logs

```bash
# OpenClaw gateway logs
tail -f /tmp/openclaw/openclaw.log

# Service status
systemctl --user status openclaw-gateway

# Test gateway
curl http://localhost:18790/health
```

### Common Issues

**Tool validation errors:**

- Check tool schema in `openclaw-source/src/agents/tools/`
- Verify system prompt teaches correct usage
- Check logs for exact error

**Gateway won't start:**

- Check config syntax: `cat ~/.openclaw/openclaw.json | jq`
- Verify API keys are set
- Check port 18790 isn't in use: `lsof -i :18790`

**MCP tools not working:**

- Verify MCP server path in config
- Check tools are executable: `ls -la mcp-therion-tools/therion-*`
- Test directly: `./mcp-therion-tools/therion-search "test"`

## 📚 Further Reading

- `OPENCLAW-KNOWLEDGE-BASE.md` - Common errors and fixes
- `OPENCLAW-MINIMAL-SETUP.md` - Minimal config guide
- `TELEGRAM_BOT_QUICKSTART.md` - Telegram bot setup
- `AGENTS.md` - Agent instructions and memory system
- `TOOLS.md` - Tool configuration reference

## 🤝 Contributing

To make this redistributable package better:

1. Add more local tools (no API dependencies)
2. Improve documentation
3. Create install scripts for other platforms
4. Test on fresh systems
5. Submit issues/PRs

## 📜 License

See LICENSE file.

---

**⚔️ THERION PROTOCOL v5.0 - DEUS VULT 🦞**
