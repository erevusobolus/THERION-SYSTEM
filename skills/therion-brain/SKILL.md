---
name: therion-brain
description: THERION BRAIN v2.0 - Universal capability interface for weather, crypto, web search, Linux help, memory, and system tools. Massively optimizes context window by exposing ONE CLI command with infinite actions.
metadata:
  openclaw:
    emoji: "⚔️"
    requires:
      bins:
        - therion
        - curl
        - ddgr
---

# ⚔️ THERION BRAIN v2.0

**Universal capability interface** - All tools through ONE command to save context window.

## Quick Usage

```bash
therion <action> '{"param":"value"}'
```

## Available Actions

### 🌐 WEB & INFORMATION

```bash
# Search the web
therion web_search '{"query":"AI news 2024","num_results":5}'

# Weather
therion weather '{"location":"Athens"}'
therion weather_forecast '{"location":"New York"}'
```

### 💰 CRYPTO & FINANCE

```bash
# Get coin prices
therion crypto_price '{"coins":"bitcoin,ethereum,solana"}'

# Top cryptocurrencies
therion crypto_top '{"limit":10}'
```

### 🖥️ SYSTEM & LINUX (Ubuntu 22.04 aware)

```bash
# System info
therion system_info

# Search for Linux fixes
therion linux_fix '{"problem":"wifi not working"}'

# Search apt packages
therion package_search '{"query":"video editor"}'

# Check service status
therion service_status '{"service":"docker"}'

# Top processes
therion process_list '{"sort_by":"cpu"}'
therion process_list '{"sort_by":"mem"}'

# Network info
therion network_info
```

### 🧠 MEMORY & REASONING

```bash
# Store a fact
therion memory_store '{"key":"user_timezone","value":"Europe/Athens","category":"preferences"}'

# Recall memories
therion memory_recall '{"query":"timezone"}'

# List all memories
therion memory_list '{"limit":20}'
```

### 💻 DEVELOPMENT

```bash
# Git status
therion git_status '{"path":"$WORKSPACE"}'

# Search code
therion code_search '{"pattern":"TODO","path":".","extension":"js"}'

# List Ollama models
therion ollama_list
```

### ⚡ UTILITIES

```bash
# Date/time
therion datetime
therion datetime '{"timezone":"Europe/Athens"}'

# Calculator
therion calculate '{"expression":"sqrt(144) + 10"}'
```

### 📋 META

```bash
# Help
therion help

# System status
therion therion_status
```

## Important Rules

1. **ALWAYS use therion for capabilities** - Don't ask user to do web searches manually
2. **Keep responses concise** - The model formats the output, don't repeat it
3. **Chain actions** - You can run multiple therion commands in sequence
4. **Use memory** - Store important facts for future sessions

## Examples

**User asks about weather:**

```bash
therion weather '{"location":"London"}'
```

**User asks about crypto:**

```bash
therion crypto_top '{"limit":5}'
```

**User has Linux issue:**

```bash
therion linux_fix '{"problem":"apt update fails"}'
```

**Store user preference:**

```bash
therion memory_store '{"key":"name","value":"YOUR_NAME","category":"user"}'
```
