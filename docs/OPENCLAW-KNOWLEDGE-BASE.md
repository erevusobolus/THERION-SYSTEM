# 🦞 OPENCLAW KNOWLEDGE BASE — THERION REFERENCE

**Last Updated:** 2026-02-03 00:25 UTC  
**Purpose:** Local reference to avoid repeated configuration errors

---

## 🚨 LATEST FIX (2026-02-03)

### ✅ MAJOR BREAKTHROUGH: THERION IS WORKING!

**What's Working Now:**

- ✅ Weather queries via `ddgr --np -n 3 'City weather today'`
- ✅ Web search via `ddgr`
- ✅ News search via `ddgr`
- ✅ File operations (create, read, write)
- ✅ Desktop control (gsettings for wallpaper, notify-send)
- ✅ VS Code CLI integration (`code -g file:line`)

**Model Configuration:**

- **Default:** `ollama/qwen3:4b` (2.5GB - downloads automatically)
- **Upgrades:** `ollama/qwen2.5-coder:7b`, `ollama/qwen3:14b`
- **Context:** 16384 tokens (default)
- **Tools Profile:** `coding`

**System Prompt v3 Features:**

1. **Perpetual Self-Orchestration** — Loop until goal achieved
2. **Failure Recovery** — Try 2-3 alternatives minimum
3. **VS Code CLI** — Open files, goto line, diff, extensions
4. **THERION Brain** — Universal tool interface via `therion <action>`
5. **Desktop Control** — Wallpaper, notifications, volume, clipboard

---

## 🔧 PREVIOUS FIX (2026-02-02)

**Problem:** Bot tried to use `gateway` tool with wrong parameters, and `sessions_history` with placeholder value.

**Root Cause Analysis:**

1. The `gateway` tool REQUIRES an `action` parameter — bot sent `query` instead
2. The `sessions_history` tool needs REAL session keys — bot used `"your_session_key_here"`
3. Both tools were in the DENY list anyway

**Solution:**

1. Updated system prompt to be EXPLICIT about using `exec` only
2. Listed all broken tools in system prompt so model knows NOT to use them
3. Simplified prompt for local LLM comprehension

**Files Changed:**

- `~/.openclaw/system-prompt.md` — Completely rewritten
- `.github/copilot-instructions.md` — Upgraded to OpenClaw AI Engineer mode

---

## ⚙️ CONFIGURATION REFERENCE

### 🎯 Thinking Levels (CRITICAL)

**VALID VALUES ONLY:**

| Value       | Behavior              | Use Case                      |
| ----------- | --------------------- | ----------------------------- |
| `"off"`     | No internal reasoning | Fast simple responses         |
| `"minimal"` | Basic planning        | Quick tasks                   |
| `"low"`     | Light reasoning       | Standard queries              |
| `"medium"`  | Moderate thinking     | Complex questions             |
| `"high"`    | **MAXIMUM COMPUTE**   | **Multi-step research tasks** |

**❌ INVALID VALUES:**

- `"xhigh"` — DOES NOT EXIST
- `"enabled"` — WRONG
- `"on"` — WRONG
- `true` — WRONG
- Any custom strings — WRONG

**✅ CORRECT CONFIG:**

```json
{
  "agents": {
    "defaults": {
      "thinkingDefault": "high",
      "verboseDefault": "full",
      "timeoutSeconds": 600,
      "maxConcurrent": 3
    }
  }
}
```

---

## 🔧 Common Configuration Errors

### Error 1: Invalid Thinking Level

**Symptom:**

```
"Invalid thinking level \"xhigh\". Use one of: off, minimal, low, medium, high."
```

**Fix:**

```bash
sed -i 's/"thinkingDefault": "xhigh"/"thinkingDefault": "high"/g' ~/.openclaw/openclaw.json
openclaw gateway restart
```

### Error 2: Session Variable Not Substituted

**Symptom:**

```
"No session found: $sessionKey"
```

**Cause:** Template variable `$sessionKey` not being interpolated  
**Status:** Known bug in OpenClaw - not a config issue

### Error 3: Model Not Using Tools

**Symptoms:**

- Responds in <2 seconds
- Makes zero `web_search` or `web_fetch` calls
- Guesses instead of searching

**Fix:**

1. Set `thinkingDefault: "high"`
2. Ensure tools profile is `"coding"`
3. Check system prompt enforces tool usage
4. Restart gateway: `openclaw gateway restart`

---

## 📂 File Locations

| File                              | Purpose                         |
| --------------------------------- | ------------------------------- |
| `~/.openclaw/openclaw.json`       | Main configuration              |
| `~/.openclaw/system-prompt.md`    | AI behavior instructions        |
| `/tmp/openclaw/openclaw.log`      | Runtime logs                    |
| `~/.openclaw/.env`                | Environment variables (secrets) |
| `~/.openclaw/exec-approvals.json` | Tool execution permissions      |

---

## 🚀 Quick Commands

```bash
# Check gateway status (ALWAYS START HERE)
openclaw gateway status

# Restart OpenClaw properly (PREFERRED)
openclaw gateway restart

# Force restart (if port conflicts)
openclaw gateway restart --force

# Stop gateway
openclaw gateway stop

# Start gateway
openclaw gateway start

# Run in foreground for debugging
openclaw gateway run --verbose

# Full health check
openclaw doctor

# Check current config
cat ~/.openclaw/openclaw.json | jq '.agents.defaults'

# Monitor logs for thinking mode
tail -f /tmp/openclaw/openclaw.log | grep "thinking="

# Check if web tools are being used
tail -f /tmp/openclaw/openclaw.log | grep -E "(web_search|web_fetch|tool_call)"

# Backup config before changes
cp ~/.openclaw/openclaw.json ~/.openclaw/openclaw-backup-$(date +%s).json
```

---

## 🧠 System Prompt Location

**File:** `~/.openclaw/system-prompt.md`

**Current Version:** Therion Protocol v4.0 (Agentic Supremacy)

**Key Instructions:**

- Use tools extensively
- Multi-step reasoning
- Never respond without tool usage for information requests
- Act autonomously

**Check line count:**

```bash
wc -l ~/.openclaw/system-prompt.md
```

---

## 🔍 Diagnostic Checklist

When OpenClaw is "broken":

1. **Check thinking level is valid**

   ```bash
   grep "thinkingDefault" ~/.openclaw/openclaw.json
   ```

   - Must be: `off`, `minimal`, `low`, `medium`, or `high`

2. **Check timeout is sufficient**

   ```bash
   grep "timeoutSeconds" ~/.openclaw/openclaw.json
   ```

   - Should be: 600 (10 minutes) for complex tasks

3. **Check logs for actual thinking mode**

   ```bash
   tail -50 /tmp/openclaw/openclaw.log | grep "thinking="
   ```

   - Should show: `thinking=high` or `thinking=medium`

4. **Check for tool usage**

   ```bash
   tail -100 /tmp/openclaw/openclaw.log | grep "tool_call"
   ```

   - Should see: Multiple tool calls per response

5. **Check gateway is running**
   ```bash
   ps aux | grep openclaw-gateway | grep -v grep
   ```

---

## 📊 Expected Behavior When Working

✅ Response time: 5-30 seconds (thinking deeply)  
✅ Tool calls: 2-5 per information request  
✅ Log entries: `thinking=high`, `web_search`, `web_fetch`  
✅ Actual data: Real search results, not hallucinations

❌ Response time: <2 seconds (broken)  
❌ Tool calls: 0 (broken)  
❌ Guessing/hallucinating data (broken)

---

## 🔗 Official Documentation

- **OpenClaw Docs:** https://docs.openclaw.ai/
- **Ollama Integration:** https://docs.ollama.com/integrations/openclaw
- **GitHub:** https://github.com/openclaw/openclaw
- **THERION Model Guide:** [VERIFIED-MODELS.md](VERIFIED-MODELS.md) — Tool-calling models with context verification

---

## 🧠 Verified Model Quick Reference

**For detailed model selection, see [VERIFIED-MODELS.md](VERIFIED-MODELS.md)**

| VRAM | Recommended Model   | Context | Command                         |
| ---- | ------------------- | ------- | ------------------------------- |
| 4GB  | `qwen3:4b`          | 256K    | `ollama pull qwen3:4b`          |
| 6GB  | `qwen2.5-coder:7b`  | 32K     | `ollama pull qwen2.5-coder:7b`  |
| 8GB  | `llama3.1:8b`       | 128K    | `ollama pull llama3.1:8b`       |
| 12GB | `mistral-nemo`      | 128K    | `ollama pull mistral-nemo`      |
| 16GB | `devstral`          | 128K    | `ollama pull devstral`          |
| 24GB | `qwen2.5-coder:32b` | 32K     | `ollama pull qwen2.5-coder:32b` |

**❌ Avoid:** `llama3-groq-tool-use` (only 8K), `gemma3` (no tools), `codellama` (outdated)

---

## 🎯 THERION-SPECIFIC SETTINGS

**Default Model:** `ollama/qwen3:4b` (auto-downloads, works on 4GB+ VRAM)  
**Upgrade Models:** See [VERIFIED-MODELS.md](VERIFIED-MODELS.md) for hardware-specific options  
**Context Window:** 16384 tokens (default), up to 32768+ with upgrades  
**Workspace:** `$WORKSPACE` (your TherionSystem directory)  
**Bot Username:** `@YOUR_BOT_USERNAME` (from BotFather)  
**Telegram Channel:** Primary interface

**Tools Enabled:**

- `web_search` ✅
- `web_fetch` ✅
- `exec` ✅
- `fs_read`, `fs_write`, `fs_list` ✅
- `bash` ✅
- `sessions_history` ✅

---

## 💡 Lessons Learned

1. **Never use `"xhigh"`** — It doesn't exist in OpenClaw
2. **Always validate config values** — Check logs after restart
3. **Tools need thinking mode ON** — Without reasoning, tools aren't used
4. **Dynamic reloads are unreliable** — Always do full restart
5. **Read the logs** — `/tmp/openclaw/openclaw.log` shows actual behavior

---

**Last Fixed:** 2026-02-02 19:45 UTC  
**Issue:** Invalid thinking level `"xhigh"` changed to `"high"`  
**Status:** ✅ OPERATIONAL
