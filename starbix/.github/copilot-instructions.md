---
applyTo: "**"
---

╔══════════════════════════════════════════════════════════════════════════════╗
║ 🌟 STARBIX MODDING KIT — AI COMPANION DEVELOPMENT ENVIRONMENT 🌟 ║
║ 🦞 Powered by OpenClaw | Claude-Compatible | Local-First AI ║
╚══════════════════════════════════════════════════════════════════════════════╝

---

## 🎯 ABOUT THIS WORKSPACE

This is the **STARBIX development workspace** — a modding kit for building and customizing local AI companions powered by OpenClaw.

### 📍 Key Directories

| Path                 | Purpose                                                      |
| -------------------- | ------------------------------------------------------------ |
| `starbix/`           | **Distribution package** — The clean installer for end users |
| `mcp-therion-tools/` | **MCP Tools** — Brain.js and cognitive tool servers          |
| `skills/`            | **Skill modules** — Custom capabilities and commands         |
| `scripts/`           | **Helper scripts** — Web search, fetch, automation           |
| `config/`            | **Configuration templates** — Ready-to-customize configs     |

### 🔧 Configuration Paths (Runtime)

| File                       | Purpose                                                 |
| -------------------------- | ------------------------------------------------------- |
| `~/.starbix/config.json`   | **Main config** — All agent, tool, and channel settings |
| `~/.starbix/soul.md`       | **Personality** — System prompt defining AI behavior    |
| `/tmp/starbix/starbix.log` | **Logs** — Runtime logs for debugging                   |

---

## 🛠️ DEVELOPMENT WORKFLOW

### 1. Testing Changes

```bash
# Edit config
nano ~/.starbix/config.json

# Restart to apply
starbix restart

# Watch logs
starbix logs
```

### 2. Tool Development

When developing MCP tools:

```bash
# Test tool directly
node mcp-therion-tools/brain.js

# Check tool schema
cat mcp-therion-tools/brain.js | grep -A20 "inputSchema"
```

### 3. Skill Development

```bash
# Create new skill
mkdir -p skills/my-skill
touch skills/my-skill/SKILL.md

# Document the skill
# Then add to config: skills.load.extraDirs
```

---

## 🔧 OpenClaw Tool Schema Reference

### `exec` tool — Execute shell commands

```typescript
exec({ command: "ddgr --np -n 5 'weather today'" });
exec({ command: "ddgr --np -n 3 'London weather today'" });
```

**safeBins**: Only whitelisted commands are allowed. Configure in `tools.exec.safeBins`.

### `gateway` tool — Control the gateway

```typescript
gateway({ action: "restart", reason: "Config update" });
gateway({ action: "config.get" });
```

**Required**: The `action` parameter is mandatory.

### `sessions_history` tool — Get conversation history

```typescript
sessions_history({ sessionKey: "telegram:dm:USER_ID", limit: 10 });
```

**Note**: Use actual runtime session keys, not placeholders.

---

## 📋 CONFIGURATION VARIABLES

When creating configs for distribution, use these placeholders:

| Variable                | Description              | Example              |
| ----------------------- | ------------------------ | -------------------- |
| `${STARBIX_HOME}`       | User's STARBIX directory | `~/.starbix`         |
| `${HOME}`               | User's home directory    | `/home/user`         |
| `${TELEGRAM_BOT_TOKEN}` | Telegram bot API token   | From @BotFather      |
| `${TELEGRAM_USER_ID}`   | User's Telegram ID       | From @userinfobot    |
| `${GATEWAY_TOKEN}`      | Random auth token        | Generated on install |
| `${INSTALL_MODEL}`      | Selected AI model        | `qwen3:4b`           |

---

## 🧠 MCP SERVER DEVELOPMENT

### Brain.js Architecture

The brain.js MCP server provides:

1. **Action routing** — Single tool that routes to multiple capabilities
2. **Memory persistence** — Store facts and context across sessions
3. **Personality injection** — Add character to responses
4. **System integration** — OS-aware commands

### Adding New Actions

```javascript
const ACTIONS = {
  my_action: {
    category: "custom",
    description: "Does something cool",
    params: { input: "string" },
    handler: async ({ input }) => {
      // Your implementation
      return `Result: ${input}`;
    },
  },
};
```

### Testing MCP Servers

```bash
# Run directly
echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | node brain.js

# Check for errors
node brain.js 2>&1 | head -20
```

---

## 🔐 SECURITY GUIDELINES

### For Distribution

1. **NEVER commit**:
   - Telegram bot tokens
   - User IDs
   - API keys
   - Absolute paths with usernames

2. **Always use variables**:

   ```json
   "botToken": "${TELEGRAM_BOT_TOKEN}"  // ✅ Good
   "botToken": "123456:ABC..."          // ❌ Never!
   ```

3. **Sanitize logs**:
   ```json
   "logging": {
     "redactSensitive": "on"
   }
   ```

### Safe Bins Whitelist

Only allow necessary executables:

```json
{
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
      "date"
    ]
  }
}
```

---

## 📦 PACKAGING FOR DISTRIBUTION

### Pre-release Checklist

- [ ] Remove all hardcoded paths (`/home/username/...`)
- [ ] Replace tokens with `${VARIABLE}` placeholders
- [ ] Test installer on fresh system
- [ ] Verify model download works
- [ ] Test Telegram integration
- [ ] Update version numbers
- [ ] Write changelog

### Build Package

```bash
# Clean sensitive data
./scripts/sanitize-for-release.sh

# Create tarball
tar -czf starbix-v1.0.0.tar.gz starbix/

# Test installation
cd /tmp && tar -xzf starbix-v1.0.0.tar.gz && cd starbix && ./install.sh
```

---

## 🐛 DEBUGGING

### Common Errors

| Error                | Cause                 | Fix                    |
| -------------------- | --------------------- | ---------------------- |
| `Validation failed`  | Wrong tool parameters | Check schema in source |
| `Model not found`    | Ollama model missing  | `ollama pull qwen3:4b` |
| `Connection refused` | Gateway not running   | `starbix start`        |
| `Permission denied`  | Missing safeBin       | Add to `exec.safeBins` |

### Diagnostic Commands

```bash
# Check gateway health
curl http://localhost:18790/health

# View tool config
cat ~/.starbix/config.json | jq '.tools'

# Watch for errors
tail -f /tmp/starbix/starbix.log | grep -iE "(error|failed|exception)"

# Test Ollama
ollama run qwen3:4b "Hello, are you working?"
```

---

## 🚀 AGENT MODE BEST PRACTICES

When Copilot works with this codebase:

1. **Use absolute paths** in terminal commands
2. **Read files before editing** — understand context
3. **Test changes** — restart and verify
4. **Check logs** after modifications
5. **Use MCP tools** instead of manual commands when available

### Terminal Commands

```bash
# Always use absolute paths
cd "/path/to/workspace" && npm run dev

# Check results
cat ~/.starbix/config.json | jq '.models'
```

---

## 📚 RESOURCES

- [OpenClaw Documentation](https://openclaw.dev/docs)
- [MCP Protocol Specification](https://modelcontextprotocol.io)
- [Ollama Model Library](https://ollama.com/library)
- [STARBIX Modding Guide](starbix/MODDING.md)

---

╔══════════════════════════════════════════════════════════════════════════════╗
║ 🌟 Build amazing AI companions! Happy modding! 🌟 ║
╚══════════════════════════════════════════════════════════════════════════════╝
