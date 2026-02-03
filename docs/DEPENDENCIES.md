# Dependencies and Extensions Reference

Complete reference for all software dependencies, VS Code extensions, and system requirements for the THERION System.

---

## Table of Contents

1. [System Dependencies](#system-dependencies)
2. [VS Code Extensions](#vs-code-extensions)
3. [Python Packages](#python-packages)
4. [Node.js Packages](#nodejs-packages)
5. [Platform-Specific Notes](#platform-specific-notes)

---

## System Dependencies

### Required Packages

| Package     | Version | Purpose             | Installation                                    |
| ----------- | ------- | ------------------- | ----------------------------------------------- |
| **Node.js** | 18+ LTS | OpenClaw runtime    | See below                                       |
| **npm**     | 9+      | Package management  | Bundled with Node                               |
| **Ollama**  | Latest  | Local LLM inference | `curl -fsSL https://ollama.ai/install.sh \| sh` |
| **curl**    | Any     | HTTP requests       | System package                                  |
| **jq**      | 1.6+    | JSON processing     | System package                                  |
| **ddgr**    | 2.0+    | Web search          | System package                                  |
| **git**     | 2.0+    | Version control     | System package                                  |

### Recommended Packages

| Package         | Purpose                                 | Installation                      |
| --------------- | --------------------------------------- | --------------------------------- |
| **w3m**         | Text-based web browser, page extraction | `apt install w3m`                 |
| **Python 3**    | Script execution                        | `apt install python3 python3-pip` |
| **xdotool**     | Desktop automation (Linux)              | `apt install xdotool`             |
| **wmctrl**      | Window management (Linux)               | `apt install wmctrl`              |
| **notify-send** | Desktop notifications                   | `apt install libnotify-bin`       |

### Optional Packages

| Package         | Purpose             | Installation              |
| --------------- | ------------------- | ------------------------- |
| **ffmpeg**      | Media processing    | `apt install ffmpeg`      |
| **imagemagick** | Image manipulation  | `apt install imagemagick` |
| **pandoc**      | Document conversion | `apt install pandoc`      |
| **ripgrep**     | Fast search         | `apt install ripgrep`     |
| **fzf**         | Fuzzy finder        | `apt install fzf`         |

---

## Installation by Platform

### Ubuntu/Debian

```bash
# Update package list
sudo apt update

# Install required packages
sudo apt install -y \
    curl \
    git \
    jq \
    ddgr \
    w3m \
    python3 \
    python3-pip

# Install Node.js 22 LTS
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Install OpenClaw
sudo npm install -g openclaw

# Install recommended packages
sudo apt install -y \
    xdotool \
    wmctrl \
    libnotify-bin \
    ripgrep

# Verify installations
node --version
ollama --version
ddgr --version
```

### Fedora/RHEL

```bash
# Install required packages
sudo dnf install -y \
    curl \
    git \
    jq \
    python3 \
    python3-pip \
    w3m

# Install ddgr
sudo dnf install -y ddgr

# Install Node.js
sudo dnf install -y nodejs npm

# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Install OpenClaw
sudo npm install -g openclaw
```

### Arch Linux

```bash
# Install required packages
sudo pacman -S --noconfirm \
    curl \
    git \
    jq \
    nodejs \
    npm \
    python \
    python-pip \
    w3m

# Install ddgr from AUR
yay -S ddgr

# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Install OpenClaw
sudo npm install -g openclaw
```

### macOS

```bash
# Install Homebrew if not present
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install required packages
brew install \
    node \
    python@3 \
    jq \
    ddgr \
    w3m \
    git

# Install Ollama
brew install ollama

# Install OpenClaw
npm install -g openclaw

# Start Ollama service
brew services start ollama
```

### Windows (via WSL2)

```powershell
# Enable WSL2 (run in PowerShell as Administrator)
wsl --install -d Ubuntu

# After restart, open Ubuntu and follow Ubuntu instructions above
```

---

## VS Code Extensions

### Required Extensions

| Extension               | ID                    | Purpose                           |
| ----------------------- | --------------------- | --------------------------------- |
| **GitHub Copilot**      | `github.copilot`      | AI-assisted setup and development |
| **GitHub Copilot Chat** | `github.copilot-chat` | Interactive AI assistance         |

### Recommended Extensions

| Extension                     | ID                                    | Purpose                  |
| ----------------------------- | ------------------------------------- | ------------------------ |
| **Python**                    | `ms-python.python`                    | Python language support  |
| **Pylance**                   | `ms-python.vscode-pylance`            | Python IntelliSense      |
| **REST Client**               | `humao.rest-client`                   | API testing              |
| **GitLens**                   | `eamodio.gitlens`                     | Git visualization        |
| **YAML**                      | `redhat.vscode-yaml`                  | YAML/JSON config editing |
| **Markdown Preview Enhanced** | `shd101wyy.markdown-preview-enhanced` | Documentation viewing    |

### Optional Extensions

| Extension          | ID                             | Purpose              |
| ------------------ | ------------------------------ | -------------------- |
| **Thunder Client** | `rangav.vscode-thunder-client` | GUI API testing      |
| **Docker**         | `ms-azuretools.vscode-docker`  | Container management |
| **Remote - SSH**   | `ms-vscode-remote.remote-ssh`  | Remote development   |
| **Error Lens**     | `usernamehw.errorlens`         | Inline error display |
| **TODO Highlight** | `wayou.vscode-todo-highlight`  | Task tracking        |
| **Prettier**       | `esbenp.prettier-vscode`       | Code formatting      |
| **ESLint**         | `dbaeumer.vscode-eslint`       | JavaScript linting   |

### Installation Commands

```bash
# Required
code --install-extension github.copilot
code --install-extension github.copilot-chat

# Recommended
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
code --install-extension humao.rest-client
code --install-extension eamodio.gitlens
code --install-extension redhat.vscode-yaml
code --install-extension shd101wyy.markdown-preview-enhanced

# Optional
code --install-extension rangav.vscode-thunder-client
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-vscode-remote.remote-ssh
code --install-extension usernamehw.errorlens
```

### Batch Installation

Create a file `extensions.txt`:

```
github.copilot
github.copilot-chat
ms-python.python
ms-python.vscode-pylance
humao.rest-client
eamodio.gitlens
redhat.vscode-yaml
shd101wyy.markdown-preview-enhanced
```

Install all at once:

```bash
cat extensions.txt | xargs -L 1 code --install-extension
```

---

## Python Packages

### Required for MCP Tools

```bash
pip3 install requests
```

### Recommended

```bash
pip3 install \
    httpx \
    pydantic \
    python-dotenv \
    watchdog \
    rich
```

### For Future Features

```bash
# Text-to-Speech
pip3 install TTS pyttsx3

# Image Generation (requires significant resources)
pip3 install diffusers transformers accelerate

# Voice Input
pip3 install SpeechRecognition pyaudio
```

### Create Requirements File

```bash
# Generate requirements.txt
cat > requirements.txt << 'EOF'
requests>=2.28.0
httpx>=0.24.0
pydantic>=2.0.0
python-dotenv>=1.0.0
watchdog>=3.0.0
rich>=13.0.0
EOF

# Install
pip3 install -r requirements.txt
```

---

## Node.js Packages

### Global Packages

| Package      | Version | Purpose         | Installation              |
| ------------ | ------- | --------------- | ------------------------- |
| **openclaw** | Latest  | Gateway runtime | `npm install -g openclaw` |

### Project Packages

Located in `mcp-therion-tools/package.json`:

```json
{
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0"
  }
}
```

Install with:

```bash
cd mcp-therion-tools && npm install
```

---

## GPU and CUDA Setup

### NVIDIA GPU (Recommended)

#### Ubuntu/Debian

```bash
# Add NVIDIA repository
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt update

# Install latest driver
sudo apt install nvidia-driver-545  # or latest available

# Install CUDA toolkit (optional, for advanced use)
sudo apt install nvidia-cuda-toolkit

# Verify
nvidia-smi
```

#### Ollama GPU Configuration

Ollama automatically detects NVIDIA GPUs. Verify with:

```bash
ollama list
curl http://localhost:11434/api/tags
```

### AMD GPU (ROCm)

```bash
# Ubuntu 22.04
wget https://repo.radeon.com/amdgpu-install/6.0/ubuntu/jammy/amdgpu-install_6.0.60000-1_all.deb
sudo apt install ./amdgpu-install_6.0.60000-1_all.deb
sudo amdgpu-install --usecase=rocm

# Verify
rocminfo
```

Ollama supports ROCm for AMD GPUs. Set environment:

```bash
export HSA_OVERRIDE_GFX_VERSION=10.3.0  # Adjust for your GPU
```

### Apple Silicon (M1/M2/M3)

Ollama natively supports Apple Silicon with Metal acceleration. No additional setup required.

```bash
brew install ollama
ollama serve
```

---

## Verification Script

Create `verify-setup.sh`:

```bash
#!/bin/bash

echo "=== THERION System Verification ==="
echo

# Check Node.js
echo -n "Node.js: "
if command -v node &> /dev/null; then
    node --version
else
    echo "NOT INSTALLED"
fi

# Check npm
echo -n "npm: "
if command -v npm &> /dev/null; then
    npm --version
else
    echo "NOT INSTALLED"
fi

# Check Ollama
echo -n "Ollama: "
if command -v ollama &> /dev/null; then
    ollama --version 2>/dev/null || echo "installed"
else
    echo "NOT INSTALLED"
fi

# Check ddgr
echo -n "ddgr: "
if command -v ddgr &> /dev/null; then
    ddgr --version 2>/dev/null | head -1 || echo "installed"
else
    echo "NOT INSTALLED"
fi

# Check jq
echo -n "jq: "
if command -v jq &> /dev/null; then
    jq --version
else
    echo "NOT INSTALLED"
fi

# Check curl
echo -n "curl: "
if command -v curl &> /dev/null; then
    curl --version | head -1
else
    echo "NOT INSTALLED"
fi

# Check Python
echo -n "Python: "
if command -v python3 &> /dev/null; then
    python3 --version
else
    echo "NOT INSTALLED"
fi

# Check OpenClaw
echo -n "OpenClaw: "
if command -v openclaw &> /dev/null; then
    openclaw --version 2>/dev/null || echo "installed"
else
    echo "NOT INSTALLED"
fi

# Check GPU
echo
echo "=== GPU Status ==="
if command -v nvidia-smi &> /dev/null; then
    nvidia-smi --query-gpu=name,memory.total --format=csv,noheader
elif command -v rocminfo &> /dev/null; then
    rocminfo | grep "Name:" | head -1
else
    echo "No NVIDIA/AMD GPU detected (CPU mode)"
fi

# Check Ollama models
echo
echo "=== Ollama Models ==="
if command -v ollama &> /dev/null; then
    ollama list 2>/dev/null || echo "Ollama not running"
else
    echo "Ollama not installed"
fi

echo
echo "=== Verification Complete ==="
```

Run with:

```bash
chmod +x verify-setup.sh
./verify-setup.sh
```

---

## Troubleshooting

### Node.js Version Issues

```bash
# Remove old Node.js
sudo apt remove nodejs npm
sudo apt autoremove

# Install Node Version Manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Install specific version
nvm install 22
nvm use 22
```

### Ollama Won't Start

```bash
# Check if already running
ps aux | grep ollama

# Kill existing process
pkill ollama

# Start manually
ollama serve

# Or use systemd
sudo systemctl restart ollama
sudo systemctl status ollama
```

### Permission Denied Errors

```bash
# Add user to docker group (if using Docker)
sudo usermod -aG docker $USER

# Fix npm global permissions
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### GPU Not Detected

```bash
# Check NVIDIA driver
nvidia-smi

# If not working, reinstall driver
sudo apt purge nvidia-*
sudo apt autoremove
sudo apt install nvidia-driver-545

# Reboot required
sudo reboot
```

---

## Quick Reference Commands

```bash
# Install everything (Ubuntu)
sudo apt install -y curl git jq ddgr w3m python3 python3-pip nodejs npm && \
curl -fsSL https://ollama.ai/install.sh | sh && \
sudo npm install -g openclaw && \
ollama pull qwen3:4b

# Start services
ollama serve &
openclaw gateway start

# Check status
nvidia-smi
ollama list
ps aux | grep openclaw
```

---

_Part of the THERION System documentation. See [README.md](../README.md) for overview._
