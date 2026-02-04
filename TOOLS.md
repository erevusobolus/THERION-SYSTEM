# THERION Tools Reference

Complete reference for available tools, commands, and capabilities within the THERION System.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  ⚠️  FILE EDITING SAFETY — READ BEFORE ANY FILE OPERATION  ⚠️                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  HEARTBEAT.md, memory/*.md  →  APPEND ONLY with >>                           ║
║  SOUL.md, USER.md, MEMORY.md, IDENTITY.md  →  SURGICAL EDITS ONLY            ║
║  New files  →  write() is OK                                                 ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## Table of Contents

1. [Execution Principles](#execution-principles)
2. [File Safety Rules](#file-safety-rules)
3. [Core Tools](#core-tools)
4. [Web Tools](#web-tools)
5. [File Operations](#file-operations)
6. [VS Code Integration](#vs-code-integration)
7. [System Operations](#system-operations)
8. [Memory System](#memory-system)
9. [OpenClaw Control](#openclaw-control)
10. [Safe Binaries List](#safe-binaries-list)

---

## Execution Principles

1. **Use tools first** — Execute before explaining
2. **Read before modify** — Always verify file contents before editing
3. **Absolute paths** — Use full paths in all commands
4. **Complete solutions** — No partial code or placeholder values
5. **Persist to files** — Write important information to disk
6. **APPEND-ONLY files** — Use `>>` for HEARTBEAT.md and memory/

---

## File Safety Rules

### APPEND-ONLY Files (NEVER use write() tool)

| File                   | Correct Method                                                     |
| ---------------------- | ------------------------------------------------------------------ |
| `HEARTBEAT.md`         | `exec({ command: "echo 'entry' >> HEARTBEAT.md" })`                |
| `memory/YYYY-MM-DD.md` | `exec({ command: "echo 'entry' >> memory/$(date +%Y-%m-%d).md" })` |

### System Files (SURGICAL edits only)

| File          | Edit Method                            |
| ------------- | -------------------------------------- |
| `SOUL.md`     | Read first, edit specific section only |
| `USER.md`     | Read first, edit specific section only |
| `MEMORY.md`   | Read first, edit specific section only |
| `IDENTITY.md` | Read first, edit specific section only |

### Self-Check Before File Edits

```
BEFORE any file edit, verify:
□ Is this an append-only file? → Use >>
□ Is this a system file? → Edit surgically
□ Did I read the file first? → Required for system files
□ Will existing content be preserved? → Required
```

---

## Core Tools

### exec

Execute shell commands with access to approved binaries.

**Schema:**

```
exec({ command: "string" })
```

**Examples:**

```bash
# Search the web
exec({ command: "ddgr --json -n 5 'search query'" })

# Get weather
exec({ command: "curl -s 'wttr.in/London?format=3'" })

# List directory
exec({ command: "ls -la /home/user/Documents" })

# Run Python script
exec({ command: "python3 /path/to/script.py" })
```

### read

Read file contents from the filesystem.

**Schema:**

```
read({ path: "string" })
```

**Examples:**

```bash
# Read configuration
read({ path: "/home/user/.bashrc" })

# Read project file
read({ path: "/home/user/project/src/main.py" })
```

### write

Create or overwrite file contents.

**Schema:**

```
write({ path: "string", content: "string" })
```

**Examples:**

```bash
# Create new file
write({ path: "/home/user/notes.txt", content: "Meeting notes:\n- Item 1\n- Item 2" })

# Update configuration
write({ path: "/home/user/.config/app/config.json", content: "{\"setting\": true}" })
```

---

## Web Tools

### DuckDuckGo Search (ddgr)

Search the web without API keys.

```bash
# JSON output for parsing
ddgr -n 5 --json "search query"

# Human-readable output
ddgr -n 5 "search query"

# Site-specific search
ddgr -n 5 --json "site:github.com topic"

# Time-limited results
ddgr -n 5 --json --time y "news topic"  # Past year
ddgr -n 5 --json --time m "recent news"  # Past month
```

### Web Page Extraction (w3m)

Extract text content from web pages.

```bash
# Basic extraction
w3m -dump "https://example.com" | head -200

# Extract and filter
w3m -dump "https://example.com" | grep -i "keyword"

# Save to file
w3m -dump "https://example.com" > /tmp/page.txt
```

### HTTP Requests (curl)

Direct HTTP requests and API calls.

```bash
# Simple GET
curl -s "https://api.example.com/data"

# Weather (quick format)
curl -s "wttr.in/Athens?format=3"

# Weather (JSON)
curl -s "wttr.in/Athens?format=j1" | jq '.'

# POST with data
curl -s -X POST "https://api.example.com/endpoint" \
  -H "Content-Type: application/json" \
  -d '{"key": "value"}'

# With authentication
curl -s -H "Authorization: Bearer TOKEN" "https://api.example.com/data"
```

### Local Scripts

```bash
# Web search wrapper
./scripts/websearch.sh "query"

# Web fetch wrapper
./scripts/webfetch.sh "https://url.com"
```

---

## File Operations

### Find Files

```bash
# By name pattern
find /project -name "*.tsx" -type f

# Exclude directories
find /project -name "*.ts" -not -path "*/node_modules/*"

# Case-insensitive
find /path -iname "*component*" -type f

# By modification time
find /path -mtime -1 -type f  # Modified in last 24 hours
```

### Search File Contents

```bash
# Recursive search with context
grep -rn -B3 -A3 "pattern" /path/

# Find function definition
grep -rn "function myFunc" /project/src/

# Find usage
grep -rn "myFunc(" /project/src/

# Case-insensitive
grep -rin "pattern" /path/
```

### Read Specific Lines

```bash
# Lines 10-30
sed -n '10,30p' /path/to/file

# With line numbers
cat -n /path/to/file | sed -n '10,30p'

# First 50 lines
head -50 /path/to/file

# Last 50 lines
tail -50 /path/to/file
```

### File Manipulation

```bash
# Create directory structure
mkdir -p /path/to/new/directory

# Copy files
cp /source/file.txt /destination/

# Move/rename
mv /old/path/file.txt /new/path/file.txt

# Safe delete (move to trash)
trash /path/to/file  # If trash-cli installed

# Create empty file
touch /path/to/newfile.txt
```

---

## VS Code Integration

### Open Files and Folders

```bash
# Open file
code /absolute/path/to/file.ts

# Open at specific line
code -g /path/file.ts:42

# Open folder (reuse window)
code -r /path/to/folder

# Open folder (new window)
code -n /path/to/project

# Diff two files
code -d file1.ts file2.ts
```

### Extension Management

```bash
# List installed extensions
code --list-extensions

# Install extension
code --install-extension publisher.extension-name

# Uninstall extension
code --uninstall-extension publisher.extension-name
```

---

## System Operations

### GPU Status

```bash
# NVIDIA full status
nvidia-smi

# Compact view
nvidia-smi --query-gpu=name,memory.used,memory.total,utilization.gpu --format=csv

# Continuous monitoring
watch -n 1 nvidia-smi
```

### Desktop Control (Linux)

```bash
# Send notification
notify-send "Title" "Message body"

# Set wallpaper (GNOME)
gsettings set org.gnome.desktop.background picture-uri "file:///path/to/image.jpg"

# Open with default application
xdg-open /path/to/file.pdf

# Clipboard operations
echo "text" | xclip -selection clipboard  # Copy
xclip -selection clipboard -o  # Paste

# Play audio
paplay /path/to/sound.wav
```

### Service Management

```bash
# Check service status
systemctl status ollama

# Restart service
systemctl restart ollama

# View logs
journalctl -u ollama -f
```

### Git Operations

```bash
# Status
git status

# View changes
git diff

# Commit all changes
git add -A && git commit -m "message"

# Push
git push

# Recent history
git log --oneline -10

# Create branch
git checkout -b new-branch
```

---

## Memory System

### Architecture

| Type         | Location               | Purpose                        |
| ------------ | ---------------------- | ------------------------------ |
| Daily logs   | `memory/YYYY-MM-DD.md` | Conversation history           |
| Long-term    | `MEMORY.md`            | Curated important information  |
| Identity     | `SOUL.md`              | Personality and behavior rules |
| User context | `USER.md`              | User preferences               |

### Session Start Protocol

```bash
# Read identity
cat SOUL.md

# Read user context
cat USER.md

# Read recent memory
cat memory/$(date +%Y-%m-%d).md 2>/dev/null
cat memory/$(date -d "yesterday" +%Y-%m-%d).md 2>/dev/null

# Main session only: read long-term memory
cat MEMORY.md
```

### Write to Memory

```bash
# Add to daily log
echo "## $(date +%H:%M) - Topic
- What happened
- Key details
" >> memory/$(date +%Y-%m-%d).md

# Update long-term memory (use write tool)
write({ path: "MEMORY.md", content: "[updated content]" })
```

---

## OpenClaw Control

### Process Management

```bash
# Check if running
ps aux | grep openclaw-gateway

# Start gateway
openclaw gateway start

# Restart gateway
pkill -f openclaw-gateway && sleep 2 && openclaw gateway start
```

### Log Analysis

```bash
# Live log tail
tail -f /tmp/openclaw/openclaw.log

# Find errors
tail -100 /tmp/openclaw/openclaw.log | grep -E "(error|failed|Validation)"

# Check tool calls
tail -50 /tmp/openclaw/openclaw.log | grep "tool_call"

# Check thinking mode
grep "thinking=" /tmp/openclaw/openclaw.log | tail -5
```

### Configuration

```bash
# View current config
cat ~/.openclaw/openclaw.json | jq '.'

# Check tools config
cat ~/.openclaw/openclaw.json | jq '.tools'

# Check agent config
cat ~/.openclaw/openclaw.json | jq '.agents'
```

---

## Safe Binaries List

Approved executables for the exec tool:

### THERION Tools

```
therion, therion-weather, therion-web, therion-search, therion-news
```

**Note:** `therion-tts` (text-to-speech) is planned for Q2 2026 but not yet available.

### File Operations

```
cat, ls, head, tail, grep, find, sed, awk, mkdir, cp, mv, rm, touch, tree
```

### Web Tools

```
curl, wget, w3m, ddgr, jq
```

### Development

```
node, npm, npx, python3, pip3, git, gh, code, docker
```

### System

```
bash, sh, ollama, nvidia-smi, systemctl, ps, kill, pkill
```

### Desktop (Linux)

```
notify-send, gsettings, xdg-open, xclip, paplay, xdotool, wmctrl
```

---

## Key Paths

| Path                           | Purpose                |
| ------------------------------ | ---------------------- |
| `$WORKSPACE`                   | Main THERION workspace |
| `$WORKSPACE/mcp-therion-tools` | CLI tools              |
| `$WORKSPACE/scripts`           | Helper scripts         |
| `$WORKSPACE/memory`            | Daily logs             |
| `~/.openclaw/`                 | OpenClaw configuration |
| `~/.openclaw/openclaw.json`    | Main config file       |
| `/tmp/openclaw/openclaw.log`   | Runtime logs           |

---

## Prohibited Actions

- Use relative paths (always use absolute)
- Tell user to run commands that can be executed directly
- Output partial code with "..." or placeholders
- Claim something exists without verification
- Say "I cannot" without trying alternatives

---

_Part of the THERION System. Execute, don't explain. ⚔️ DEUS VULT_
