# PLATFORM-SUPPORT.md — Cross-Platform Installation Guide

## ═══ SUPPORTED PLATFORMS ═══

| Platform                               | Status         | Install Script         |
| -------------------------------------- | -------------- | ---------------------- |
| **Linux** (Ubuntu/Debian)              | ◈ Full Support | `./install-wizard.sh`  |
| **macOS** (Intel/Apple Silicon)        | ◈ Full Support | `./install-wizard.sh`  |
| **Windows 10/11**                      | ◈ Full Support | `.\install-wizard.ps1` |
| **WSL2** (Windows Subsystem for Linux) | ◈ Full Support | `./install-wizard.sh`  |

---

## ═══ PREREQUISITES ═══

### All Platforms

◇ **Ollama** - Local LLM runtime

- Linux/Mac: `curl -fsSL https://ollama.com/install.sh | sh`
- Windows: Download from https://ollama.com/download/windows

◇ **Node.js** v18+ (for OpenClaw)

- Linux: `nvm install 22` or package manager
- macOS: `brew install node@22` or nvm
- Windows: https://nodejs.org/en/download/

◇ **OpenClaw** - AI agent framework

- All: `npm install -g openclaw`

◇ **Telegram Account** + Bot Token

- Get from @BotFather on Telegram

---

## ═══ LINUX ═══

### Ubuntu/Debian

```bash
# Prerequisites
sudo apt update
sudo apt install -y curl git jq

# Install Node.js (via nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 22

# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Install OpenClaw
npm install -g openclaw

# Run THERION wizard
./install-wizard.sh
```

### Arch Linux

```bash
sudo pacman -S nodejs npm curl jq git
yay -S ollama  # or install manually
npm install -g openclaw
./install-wizard.sh
```

### Config Paths

- Config: `~/.openclaw/openclaw.json`
- System Prompt: `~/.openclaw/system-prompt.md`
- Logs: `/tmp/openclaw/openclaw.log`

### Service Management

```bash
# Start gateway
openclaw gateway start

# Or with systemd (recommended)
openclaw gateway install --systemd
systemctl --user start openclaw-gateway
systemctl --user enable openclaw-gateway
```

---

## ═══ macOS ═══

### Prerequisites

```bash
# Install Homebrew if not present
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install dependencies
brew install node@22 jq

# Install Ollama
brew install ollama

# Install OpenClaw
npm install -g openclaw
```

### Run Installation

```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/TherionSystem.git
cd TherionSystem

# Run wizard
./install-wizard.sh
```

### Config Paths

- Config: `~/.openclaw/openclaw.json`
- System Prompt: `~/.openclaw/system-prompt.md`
- Logs: `/tmp/openclaw/openclaw.log`

### Start Ollama (Required First!)

```bash
# Start Ollama service
ollama serve

# In another terminal, start THERION
openclaw gateway start
```

### Apple Silicon Notes

⟁ Ollama runs natively on M1/M2/M3 chips
⟁ Performance is excellent - no special config needed
⟁ Metal GPU acceleration is automatic

---

## ═══ WINDOWS ═══

### Prerequisites

1. **Install Ollama**
   - Download: https://ollama.com/download/windows
   - Run installer, Ollama runs as a service

2. **Install Node.js**
   - Download: https://nodejs.org/en/download/
   - Choose LTS version (22.x)

3. **Install OpenClaw**
   ```powershell
   npm install -g openclaw
   ```

### Run Installation (PowerShell)

```powershell
# Clone repo
git clone https://github.com/YOUR_USERNAME/TherionSystem.git
cd TherionSystem

# Run wizard (PowerShell script)
.\install-wizard.ps1
```

### Config Paths

- Config: `%USERPROFILE%\.openclaw\openclaw.json`
- System Prompt: `%USERPROFILE%\.openclaw\system-prompt.md`
- Logs: `%TEMP%\openclaw\openclaw.log`

### Windows-Specific Notes

⟁ Use PowerShell (not cmd.exe)
⟁ Ollama runs as a Windows service automatically
⟁ Firewall may prompt for Node.js - allow it

### Start Gateway

```powershell
openclaw gateway start
```

---

## ═══ WSL2 (Windows Subsystem for Linux) ═══

WSL2 is the **recommended** way to run THERION on Windows.

### Setup

```bash
# In Windows PowerShell (Admin):
wsl --install -d Ubuntu

# Inside WSL2:
sudo apt update && sudo apt upgrade -y

# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 22

# Install OpenClaw
npm install -g openclaw

# Clone and run wizard
git clone https://github.com/YOUR_USERNAME/TherionSystem.git
cd TherionSystem
./install-wizard.sh
```

### WSL2 Notes

⟁ Ollama runs natively in WSL2 - uses Windows GPU
⟁ Full Linux experience with Windows integration
⟁ Config paths are Linux-style (`~/.openclaw/`)

---

## ═══ COMMON ISSUES ═══

### "Ollama not found"

```bash
# Ensure Ollama is running
ollama serve  # Mac/Linux
# Windows: Check Services app for Ollama

# Verify
ollama list
```

### "Model not found"

```bash
# Pull base model
ollama pull qwen3:4b

# Create THERION model
ollama create qwen3:therion-16k -f Modelfile.therion-16k
```

### "Permission denied" on Linux/Mac

```bash
chmod +x install-wizard.sh
chmod +x generate-config.sh
```

### Gateway won't start

```bash
# Check config validity
openclaw doctor --fix

# Check logs
journalctl --user -u openclaw-gateway -n 50  # Linux systemd
cat /tmp/openclaw/openclaw.log               # All platforms
```

### Telegram not connecting

⟁ Verify bot token is correct
⟁ Verify your Telegram user ID is in allowFrom
⟁ Check gateway is actually running

---

## ═══ GPU SUPPORT ═══

| Platform | GPU           | Support        |
| -------- | ------------- | -------------- |
| Linux    | NVIDIA        | ◈ Full (CUDA)  |
| Linux    | AMD           | ◈ Full (ROCm)  |
| macOS    | Apple Silicon | ◈ Full (Metal) |
| macOS    | Intel         | ⟁ CPU only     |
| Windows  | NVIDIA        | ◈ Full (CUDA)  |
| Windows  | AMD           | ⟁ Limited      |

### NVIDIA Setup (Linux)

```bash
# Install CUDA drivers
sudo apt install nvidia-driver-535  # Or latest

# Verify
nvidia-smi
```

### Recommended VRAM by Context Size

| Context | Min VRAM | Model             |
| ------- | -------- | ----------------- |
| 8k      | 4GB      | qwen3:therion-8k  |
| 16k     | 6GB      | qwen3:therion-16k |
| 32k     | 10GB     | qwen3:therion-32k |

---

## ═══ ENVIRONMENT VARIABLES ═══

These are set in `.env.local` (created by wizard):

| Variable                     | Description       | Example                    |
| ---------------------------- | ----------------- | -------------------------- |
| `THERION_USER_NAME`          | Your display name | "John"                     |
| `THERION_USER_TELEGRAM_ID`   | Your Telegram ID  | "123456789"                |
| `THERION_TELEGRAM_BOT_TOKEN` | Bot token         | "123:ABC..."               |
| `THERION_MODEL`              | Ollama model      | "ollama/qwen3:therion-16k" |
| `THERION_WORKSPACE`          | Working directory | "/home/user/TherionSystem" |
| `THERION_TIMEZONE`           | Your timezone     | "America/New_York"         |

---

_Last updated: February 2026_
