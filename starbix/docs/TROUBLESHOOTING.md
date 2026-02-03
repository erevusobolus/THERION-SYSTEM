# 🔧 STARBIX Troubleshooting Guide

## Quick Diagnostics

Run this command to check system health:

```bash
starbix status && ollama list && curl -s http://localhost:18790/health
```

---

## Common Issues

### 🔴 STARBIX Won't Start

**Symptoms**: `starbix start` hangs or errors

**Check 1: Ollama running?**

```bash
pgrep ollama || ollama serve &
```

**Check 2: Port in use?**

```bash
lsof -i :18790
# Kill conflicting process if needed
```

**Check 3: Config valid?**

```bash
cat ~/.starbix/config.json | jq .
# Should output formatted JSON, not errors
```

**Check 4: Node.js working?**

```bash
node --version  # Should be v18+
```

---

### 🔴 Telegram Not Responding

**Symptoms**: Bot shows online but doesn't reply

**Check 1: Bot token valid?**

```bash
TOKEN="YOUR_TOKEN"
curl "https://api.telegram.org/bot$TOKEN/getMe"
# Should return {"ok":true,...}
```

**Check 2: User ID correct?**

```bash
cat ~/.starbix/config.json | jq '.channels.telegram.allowFrom'
# Should show your ID
```

**Check 3: DM policy?**

```bash
cat ~/.starbix/config.json | jq '.channels.telegram.dmPolicy'
# Should be "allowlist"
```

**Check 4: Gateway receiving messages?**

```bash
tail -f /tmp/starbix/starbix.log | grep telegram
# Send a message and watch for activity
```

---

### 🔴 Model Not Found

**Symptoms**: "model 'qwen3:4b' not found"

**Fix: Download the model**

```bash
ollama pull qwen3:4b
ollama list  # Verify it appears
```

**If download fails:**

```bash
# Check disk space
df -h

# Check Ollama service
systemctl status ollama  # Linux
# Or restart: ollama serve
```

---

### 🔴 Out of Memory

**Symptoms**: System freezes or "OOM killer" messages

**Immediate fix:**

```bash
# Switch to smaller model
starbix config set model "qwen3:1.5b"
starbix restart
```

**Long-term solutions:**

1. Use smaller model permanently
2. Add swap space:
   ```bash
   sudo fallocate -l 8G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   ```
3. Reduce context window in config

---

### 🔴 Tools Not Working

**Symptoms**: "Command not allowed" or "safeBin not found"

**Check whitelist:**

```bash
cat ~/.starbix/config.json | jq '.tools.exec.safeBins'
```

**Add missing command:**

```json
{
  "tools": {
    "exec": {
      "safeBins": ["ddgr", "curl", "YOUR_COMMAND"]
    }
  }
}
```

**Verify command exists:**

```bash
which ddgr  # Should show path
# If missing: sudo apt install ddgr
```

---

### 🔴 Slow Responses

**Symptoms**: Takes >30 seconds to respond

**Check 1: GPU being used?**

```bash
# NVIDIA
nvidia-smi -l 1
# Should show ollama using GPU

# If CPU-only, check model size
ollama ps
```

**Check 2: Model too large?**

```bash
# Downgrade model
ollama pull qwen3:1.5b
# Update config to use it
```

**Check 3: Other processes?**

```bash
htop  # Check for CPU/memory hogs
```

---

### 🔴 MCP Server Errors

**Symptoms**: "MCP server failed to start" in logs

**Check Node version:**

```bash
node --version  # Need v18+
```

**Check MCP tools exist:**

```bash
ls ~/.starbix/mcp-tools/
# Should have brain.js, server.js
```

**Test manually:**

```bash
cd ~/.starbix/mcp-tools
node brain.js
# Ctrl+C to exit
```

**Reinstall dependencies:**

```bash
cd ~/.starbix
npm install
```

---

## Log Analysis

### Finding Errors

```bash
# Last 50 errors
grep -i "error\|failed\|exception" /tmp/starbix/starbix.log | tail -50

# Real-time error monitoring
tail -f /tmp/starbix/starbix.log | grep -i --color "error\|failed"
```

### Understanding Log Levels

| Level   | Meaning             |
| ------- | ------------------- |
| `DEBUG` | Detailed trace info |
| `INFO`  | Normal operations   |
| `WARN`  | Potential issues    |
| `ERROR` | Something failed    |

### Increasing Log Detail

Edit `~/.starbix/config.json`:

```json
{
  "logging": {
    "level": "debug",
    "consoleLevel": "debug"
  }
}
```

---

## Reset & Recovery

### Soft Reset (Keep Config)

```bash
starbix stop
rm -rf /tmp/starbix/
starbix start
```

### Hard Reset (Fresh Start)

```bash
starbix stop
rm -rf ~/.starbix/
# Re-run installer
./install.sh
```

### Backup Before Reset

```bash
cp -r ~/.starbix ~/.starbix-backup-$(date +%Y%m%d)
```

---

## Getting Help

### Before Asking for Help

1. Run diagnostics:

   ```bash
   starbix status
   ollama list
   cat ~/.starbix/config.json | jq '.models'
   tail -50 /tmp/starbix/starbix.log
   ```

2. Note your system:
   - OS and version
   - RAM and GPU
   - Model being used

### Where to Get Help

- **Discord**: https://discord.gg/starbix
- **GitHub Issues**: https://github.com/THERION-AI/starbix/issues
- **Discussions**: https://github.com/THERION-AI/starbix/discussions

### Filing a Bug Report

Include:

1. What you expected
2. What happened instead
3. Steps to reproduce
4. Relevant log output
5. System specs
