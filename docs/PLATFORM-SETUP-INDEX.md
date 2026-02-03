# Platform Setup Index

**Quick reference for configuring THERION with different messaging platforms.**

```
╔═══════════════════════════════════════════════════════════════╗
║           THERION Platform Configuration Guide               ║
║        Connect THERION to Your Preferred Messaging App       ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Table of Contents

1. [Overview](#overview)
2. [Telegram Setup](#telegram-setup)
3. [Discord Setup](#discord-setup)
4. [WhatsApp Setup](#whatsapp-setup)
5. [Slack Setup](#slack-setup)
6. [Custom Webhook Setup](#custom-webhook-setup)
7. [Configuration Reference](#configuration-reference)

---

## Overview

THERION uses **OpenClaw** as the gateway between messaging platforms and the AI. THERION provides pre-configured settings and documentation that make OpenClaw frictionless to set up and use. Each platform requires slightly different configuration.

### What You Need Before Starting

```
┌─────────────────────────────────────────────────────────────┐
│ ✓ THERION installed (see main README.md)                   │
│ ✓ Ollama running with a model downloaded                   │
│ ✓ OpenClaw installed (npm install -g openclaw)             │
│ ✓ 10 minutes to set up your chosen platform                │
└─────────────────────────────────────────────────────────────┘
```

---

## Telegram Setup

**Difficulty:** Easy | **Time:** 5 minutes | **Cost:** Free

### Step 1: Create Your Bot

1. Open Telegram and message [@BotFather](https://t.me/BotFather)
2. Send `/newbot`
3. Follow the prompts:
   - Choose a name for your bot (e.g., "My THERION Assistant")
   - Choose a username (must end in "bot", e.g., "mytherion_bot")
4. **Copy the bot token** (looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 2: Get Your User ID

1. Message [@userinfobot](https://t.me/userinfobot)
2. It will reply with your user ID (a number like: `123456789`)
3. **Copy this number**

### Step 3: Configure OpenClaw

Edit `~/.openclaw/openclaw.json`:

```json
{
  "agents": {
    "default": {
      "model": {
        "provider": "ollama",
        "model": "qwen3:4b"
      }
    }
  },
  "channels": {
    "telegram": {
      "token": "YOUR_BOT_TOKEN_HERE",
      "allowedUsers": ["YOUR_USER_ID_HERE"]
    }
  }
}
```

Replace:

- `YOUR_BOT_TOKEN_HERE` with the token from BotFather
- `YOUR_USER_ID_HERE` with your user ID from userinfobot

### Step 4: Start and Test

```bash
# Start OpenClaw
openclaw gateway start

# Open Telegram and message your bot
# Say "hello" or ask it a question
```

**Done!** Your THERION bot should respond on Telegram.

---

## Discord Setup

**Difficulty:** Medium | **Time:** 10 minutes | **Cost:** Free

### Step 1: Create Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"**
3. Name it (e.g., "THERION")
4. Go to **"Bot"** tab in left sidebar
5. Click **"Add Bot"** → Confirm
6. Under "Token", click **"Copy"** (save this token)

### Step 2: Configure Bot Permissions

1. In the Bot page, scroll to **"Privileged Gateway Intents"**
2. Enable:
   - ✅ Presence Intent
   - ✅ Server Members Intent
   - ✅ Message Content Intent
3. Click **"Save Changes"**

### Step 3: Invite Bot to Server

1. Go to **"OAuth2"** → **"URL Generator"**
2. Select scopes:
   - ✅ bot
   - ✅ applications.commands
3. Select bot permissions:
   - ✅ Send Messages
   - ✅ Read Message History
   - ✅ View Channels
4. Copy generated URL and open in browser
5. Select server and authorize

### Step 4: Get Channel ID

1. Enable Developer Mode in Discord:
   - Settings → Advanced → Developer Mode → ON
2. Right-click the channel you want THERION in
3. Click **"Copy Channel ID"**

### Step 5: Configure OpenClaw

Edit `~/.openclaw/openclaw.json`:

```json
{
  "agents": {
    "default": {
      "model": {
        "provider": "ollama",
        "model": "qwen3:4b"
      }
    }
  },
  "channels": {
    "discord": {
      "token": "YOUR_BOT_TOKEN_HERE",
      "channelId": "YOUR_CHANNEL_ID_HERE"
    }
  }
}
```

### Step 6: Start and Test

```bash
openclaw gateway start
```

Message in the configured Discord channel - THERION should respond.

---

## WhatsApp Setup

**Difficulty:** Advanced | **Time:** 20 minutes | **Cost:** Free (with limitations)

### Prerequisites

WhatsApp requires a business account and webhook setup. Options:

#### Option 1: WhatsApp Business API (Official)

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a new app
3. Add WhatsApp product
4. Follow WhatsApp Business Platform setup
5. Get access token and phone number ID

**Note:** Requires business verification for production use.

#### Option 2: Unofficial WhatsApp Web Client

Use libraries like `whatsapp-web.js` with OpenClaw custom webhook:

```bash
# Install WhatsApp connector
npm install whatsapp-web.js qrcode-terminal
```

Create bridge script (see `docs/setup/WHATSAPP_BRIDGE.md` for full implementation).

### Configuration

Edit `~/.openclaw/openclaw.json`:

```json
{
  "channels": {
    "webhook": {
      "port": 3000,
      "path": "/whatsapp",
      "secret": "your-webhook-secret"
    }
  }
}
```

**Full WhatsApp setup guide:** [docs/setup/WHATSAPP_SETUP.md](setup/WHATSAPP_SETUP.md) (to be created)

---

## Slack Setup

**Difficulty:** Medium | **Time:** 15 minutes | **Cost:** Free

### Step 1: Create Slack App

1. Go to [Slack API](https://api.slack.com/apps)
2. Click **"Create New App"** → **"From scratch"**
3. Name it (e.g., "THERION") and select workspace

### Step 2: Configure Bot

1. Go to **"OAuth & Permissions"**
2. Under "Scopes" → "Bot Token Scopes", add:
   - `chat:write`
   - `channels:history`
   - `groups:history`
   - `im:history`
   - `mpim:history`
3. Click **"Install to Workspace"** → **"Allow"**
4. Copy the **"Bot User OAuth Token"** (starts with `xoxb-`)

### Step 3: Get Channel ID

1. Open Slack
2. Right-click channel → **"Copy link"**
3. Channel ID is the last part of URL (e.g., `C1234567890`)

### Step 4: Configure OpenClaw

Edit `~/.openclaw/openclaw.json`:

```json
{
  "channels": {
    "slack": {
      "token": "xoxb-YOUR-TOKEN-HERE",
      "channelId": "YOUR_CHANNEL_ID"
    }
  }
}
```

### Step 5: Invite Bot to Channel

In Slack, type in channel: `/invite @THERION`

### Step 6: Start

```bash
openclaw gateway start
```

---

## Custom Webhook Setup

**Difficulty:** Advanced | **Time:** Varies | **Cost:** Free

For custom integrations with any platform:

```json
{
  "channels": {
    "webhook": {
      "port": 3000,
      "path": "/webhook",
      "secret": "your-secret-key",
      "allowedIPs": ["127.0.0.1"]
    }
  }
}
```

Send POST requests to `http://localhost:3000/webhook`:

```json
{
  "message": "User message here",
  "userId": "unique-user-id",
  "secret": "your-secret-key"
}
```

Response:

```json
{
  "reply": "AI response here"
}
```

---

## Configuration Reference

### Complete OpenClaw Config Template

```json
{
  "agents": {
    "default": {
      "model": {
        "provider": "ollama",
        "model": "qwen3:4b",
        "baseUrl": "http://localhost:11434",
        "temperature": 0.3,
        "maxTokens": 4096
      },
      "systemPrompt": "${workspace}/SOUL.md",
      "thinkingDefault": "high"
    }
  },
  "channels": {
    "telegram": {
      "token": "<bot-token>",
      "allowedUsers": ["<user-id>"]
    },
    "discord": {
      "token": "<bot-token>",
      "channelId": "<channel-id>"
    },
    "slack": {
      "token": "<bot-token>",
      "channelId": "<channel-id>"
    },
    "webhook": {
      "port": 3000,
      "path": "/webhook",
      "secret": "<secret-key>"
    }
  },
  "workspace": {
    "path": "/path/to/TherionSystem"
  }
}
```

### Multiple Platforms Simultaneously

You can run multiple platforms at once:

```json
{
  "channels": {
    "telegram": { "token": "..." },
    "discord": { "token": "..." },
    "slack": { "token": "..." }
  }
}
```

THERION will be available on all configured platforms simultaneously!

---

## Troubleshooting

### Bot Doesn't Respond

```bash
# Check OpenClaw is running
ps aux | grep openclaw-gateway

# Check logs for errors
tail -f /tmp/openclaw/openclaw.log

# Verify Ollama is running
curl http://localhost:11434/api/tags

# Restart gateway
pkill -f openclaw-gateway && openclaw gateway start
```

### "Unauthorized" Errors

**Telegram:**

- Verify bot token is correct
- Check user ID is in `allowedUsers` list

**Discord:**

- Verify bot has permissions in channel
- Check Message Content Intent is enabled

**Slack:**

- Verify bot is invited to channel
- Check OAuth scopes are correct

### Configuration Validation

```bash
# Validate JSON syntax
cat ~/.openclaw/openclaw.json | jq '.'

# Check OpenClaw config
openclaw config validate
```

---

## Platform Comparison

| Platform | Difficulty | Setup Time | Best For                    |
| -------- | ---------- | ---------- | --------------------------- |
| Telegram | Easy       | 5 min      | Personal use, mobile access |
| Discord  | Medium     | 10 min     | Communities, gaming servers |
| Slack    | Medium     | 15 min     | Work teams, organizations   |
| WhatsApp | Advanced   | 20 min     | Family, informal groups     |
| Webhook  | Advanced   | Varies     | Custom integrations         |

---

## Need Help?

1. **Check documentation:** [docs/](../) folder
2. **Review examples:** [config/templates/](../../config/templates/)
3. **GitHub Issues:** Search or create new issue
4. **Email support:** erevus.ai@proton.me

---

_THERION System - Connect to any platform you use every day._
