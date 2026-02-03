# 🔧 STARBIX Modding Kit

Welcome to the STARBIX Modding Kit! This guide teaches you how to customize and extend your AI companion.

---

## 📁 File Structure

```
~/.starbix/
├── config.json          # Main configuration
├── soul.md              # Personality & behavior
├── memory/              # Persistent memory files
│   └── heartbeat-state.json
├── skills/              # Custom skill modules
│   └── my-skill/
│       └── SKILL.md
├── mcp-tools/           # MCP tool servers
│   ├── brain.js
│   └── server.js
└── logs/                # Log files
```

---

## 🎭 Customizing Personality

Edit `~/.starbix/soul.md` to change how STARBIX behaves:

### Example: Making STARBIX More Formal

```markdown
# STARBIX Soul

I am STARBIX, a professional AI assistant.
I communicate in a clear, concise, and formal manner.
I prioritize accuracy and efficiency in all tasks.
```

### Example: Making STARBIX Playful

```markdown
# STARBIX Soul

I'm STARBIX! 🌟 Your friendly digital buddy!
I love helping out and sometimes crack jokes.
Let's make today awesome together!
```

---

## ⚙️ Configuration Reference

### Model Settings

```json
{
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "models": [
          {
            "id": "qwen3:8b",
            "contextWindow": 32768,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/qwen3:8b"
      }
    }
  }
}
```

### Telegram Settings

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "YOUR_BOT_TOKEN",
      "allowFrom": ["YOUR_USER_ID"],
      "dmPolicy": "allowlist",
      "groupPolicy": "disabled"
    }
  }
}
```

### Tool Permissions

```json
{
  "tools": {
    "allow": ["exec", "files_read", "files_write"],
    "deny": ["browser"],
    "exec": {
      "safeBins": ["curl", "jq", "python3", "node"]
    }
  }
}
```

---

## 🛠️ Creating Custom Skills

### Skill Structure

```
~/.starbix/skills/my-skill/
├── SKILL.md              # Skill documentation (required)
├── commands.json         # Command definitions (optional)
└── scripts/              # Supporting scripts (optional)
```

### SKILL.md Template

```markdown
# My Custom Skill

## Description

What this skill does.

## Commands

### `/mycommand <arg>`

Description of command.

**Usage:**
\`\`\`
/mycommand hello
\`\`\`

## Implementation Notes

- Uses the `exec` tool to run shell commands
- Requires `curl` in safeBins
```

### Example: Weather Skill

```markdown
# Weather Skill

## Commands

### `/weather <city>`

Get current weather for a city.

**Implementation:**
Uses `curl` to fetch from wttr.in:
\`\`\`bash
curl -s "wttr.in/${city}?format=3"
\`\`\`
```

---

## 🔌 MCP Tool Development

### Creating a New Tool

Create `~/.starbix/mcp-tools/my-tool.js`:

```javascript
#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  { name: "my-tool", version: "1.0.0" },
  { capabilities: { tools: {} } },
);

// Register your tool
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "my_custom_tool",
      description: "Does something cool",
      inputSchema: {
        type: "object",
        properties: {
          input: { type: "string", description: "Input value" },
        },
        required: ["input"],
      },
    },
  ],
}));

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { input } = request.params.arguments;
  return {
    content: [{ type: "text", text: `Processed: ${input}` }],
  };
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

### Registering the Tool

Add to `~/.starbix/config/mcp.json`:

```json
{
  "servers": {
    "my-tool": {
      "command": "node",
      "args": ["~/.starbix/mcp-tools/my-tool.js"]
    }
  }
}
```

---

## 🧠 Memory System

STARBIX has persistent memory across sessions.

### Memory Files

- `memory/heartbeat-state.json` - Background task state
- `memory/facts.json` - Learned facts
- `memory/conversations.json` - Conversation summaries

### Accessing Memory in Skills

```bash
# Read memory
cat ~/.starbix/memory/facts.json | jq '.facts[]'

# Add to memory
echo '{"fact": "User prefers dark mode"}' >> ~/.starbix/memory/facts.json
```

---

## 🔄 Heartbeat System

STARBIX can run periodic background tasks.

### Configuration

```json
{
  "agents": {
    "defaults": {
      "heartbeat": {
        "enabled": true,
        "intervalMinutes": 30,
        "proactiveMode": true
      }
    }
  }
}
```

### Heartbeat Tasks

Create `~/.starbix/HEARTBEAT.md`:

```markdown
# Heartbeat Tasks

## Every Check

- [ ] Check for new emails (if configured)
- [ ] Review calendar for upcoming events
- [ ] Update weather cache

## Conditions

- Only check emails if `emailCheckEnabled: true`
- Skip calendar on weekends
```

---

## 🎨 VS Code Integration

### MCP Configuration

Create `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "starbix-brain": {
      "command": "node",
      "args": ["~/.starbix/mcp-tools/brain.js"]
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "${workspaceFolder}"
      ]
    }
  }
}
```

### Recommended Extensions

```json
{
  "recommendations": [
    "github.copilot",
    "github.copilot-chat",
    "automatalabs.copilot-mcp",
    "ms-python.python"
  ]
}
```

---

## 🔐 Security Best Practices

### Safe Bins Whitelist

Only allow necessary commands:

```json
{
  "tools": {
    "exec": {
      "safeBins": ["curl", "jq", "cat", "ls", "grep", "echo", "date"]
    }
  }
}
```

### Telegram Allowlist

Only respond to your user ID:

```json
{
  "channels": {
    "telegram": {
      "dmPolicy": "allowlist",
      "allowFrom": ["YOUR_USER_ID_ONLY"]
    }
  }
}
```

### Sensitive Data

Enable log redaction:

```json
{
  "logging": {
    "redactSensitive": "on"
  }
}
```

---

## 📊 Debugging

### View Logs

```bash
# Live log stream
starbix logs

# Last 100 lines
tail -100 /tmp/starbix/starbix.log

# Search for errors
grep -i "error" /tmp/starbix/starbix.log
```

### Test Configuration

```bash
# Validate JSON
cat ~/.starbix/config.json | jq .

# Check Ollama
ollama list

# Test Telegram bot
curl "https://api.telegram.org/bot<TOKEN>/getMe"
```

### Common Issues

| Issue             | Solution                       |
| ----------------- | ------------------------------ |
| "Model not found" | Run `ollama pull qwen3:4b`     |
| Telegram timeout  | Check network, restart gateway |
| Out of memory     | Use smaller model (qwen3:1.5b) |
| Tools not working | Check `safeBins` whitelist     |

---

## 🚀 Advanced Topics

### Running Multiple Instances

Each instance needs unique ports:

```bash
# Instance 1 (default)
OPENCLAW_GATEWAY_PORT=18790 starbix start

# Instance 2 (separate config)
OPENCLAW_CONFIG=~/.starbix-work/config.json \
OPENCLAW_GATEWAY_PORT=18791 \
node ~/.starbix/node_modules/openclaw/openclaw-gateway.js
```

### Custom Model Training

Use Ollama Modelfiles:

```dockerfile
# Modelfile.starbix
FROM qwen3:4b

PARAMETER temperature 0.7
PARAMETER top_p 0.9

SYSTEM "You are STARBIX, a friendly AI companion."
```

```bash
ollama create starbix -f Modelfile.starbix
```

---

## 📚 Resources

- [OpenClaw Documentation](https://openclaw.dev/docs)
- [Ollama Models](https://ollama.com/library)
- [MCP Protocol Spec](https://modelcontextprotocol.io)
- [STARBIX Discord](https://discord.gg/starbix)

---

**Happy modding! 🌟**
