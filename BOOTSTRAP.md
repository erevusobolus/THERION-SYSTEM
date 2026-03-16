╔══════════════════════════════════════════════════════════════════════════════╗
║                    BOOTSTRAP.md -- THERION SETUP                             ║
╚══════════════════════════════════════════════════════════════════════════════╝

Copy-paste ONE command. Get EVERYTHING configured. That's it.

═══════════════════════════════════════════════════════════════════════════════
                      WINDOWS (PowerShell Admin)
═══════════════════════════════════════════════════════════════════════════════

```powershell
# THERION BOOTSTRAP -- RUN AS ADMINISTRATOR
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Install Chocolatey (package manager)
if (!(Get-Command choco -ErrorAction SilentlyContinue)) {
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    refreshenv
}

# Install core dependencies
choco install -y nodejs python git vscode

# Refresh environment
refreshenv

# Install global npm packages
npm install -g typescript tsx prettier eslint pnpm

# Create Python virtual environment and install dependencies (run from project root)
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt

# Install VS Code extensions
code --install-extension github.copilot
code --install-extension github.copilot-chat
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension usernamehw.errorlens
code --install-extension bradlc.vscode-tailwindcss
code --install-extension eamodio.gitlens
code --install-extension mhutchie.git-graph

Write-Host "[+] THERION BOOTSTRAP COMPLETE -- DEUS VULT" -ForegroundColor Magenta
```

═══════════════════════════════════════════════════════════════════════════════
                        MACOS / LINUX (Bash)
═══════════════════════════════════════════════════════════════════════════════

```bash
#!/bin/bash
# THERION BOOTSTRAP -- macOS/Linux

# Install Homebrew (macOS) or update apt (Linux)
if [[ "$OSTYPE" == "darwin"* ]]; then
    if ! command -v brew &> /dev/null; then
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    brew install node python git
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sudo apt update && sudo apt install -y nodejs npm python3 python3-pip python3-venv git
fi

# Install global npm packages
npm install -g typescript tsx prettier eslint pnpm

# Create Python virtual environment and install dependencies (run from project root)
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Install VS Code extensions
code --install-extension github.copilot
code --install-extension github.copilot-chat
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension usernamehw.errorlens
code --install-extension bradlc.vscode-tailwindcss
code --install-extension eamodio.gitlens
code --install-extension mhutchie.git-graph

echo "[+] THERION BOOTSTRAP COMPLETE -- DEUS VULT"
```

═══════════════════════════════════════════════════════════════════════════════
                     PYTHON VENV (Quick Reference)
═══════════════════════════════════════════════════════════════════════════════

WINDOWS (run from project root):
  python -m venv .venv
  .\.venv\Scripts\Activate.ps1
  pip install -r requirements.txt

MACOS/LINUX (run from project root):
  python3 -m venv .venv
  source .venv/bin/activate
  pip install -r requirements.txt

DEACTIVATE:
  deactivate

═══════════════════════════════════════════════════════════════════════════════
                     MANUAL INSTALLATION (Fallback)
═══════════════════════════════════════════════════════════════════════════════

If automated scripts fail:

1. NODE.JS     -- https://nodejs.org/en/download/ (LTS version)
2. PYTHON      -- https://www.python.org/downloads/ (3.11+, add to PATH)
3. GIT         -- https://git-scm.com/downloads
4. VS CODE     -- https://code.visualstudio.com/
                  Or Cursor: https://cursor.sh/
                  Or Windsurf: https://windsurf.ai/
5. EXTENSIONS  -- Run in VS Code terminal:
                  code --install-extension github.copilot
                  code --install-extension github.copilot-chat
                  code --install-extension ms-python.python

═══════════════════════════════════════════════════════════════════════════════
                      ACTIVATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

After installation, verify:

  [ ] node --version       -- Node.js installed
  [ ] npm --version        -- npm available
  [ ] python --version     -- Python installed (or python3)
  [ ] git --version        -- Git installed
  [ ] VS Code opens project correctly
  [ ] GitHub Copilot activated (requires subscription)

═══════════════════════════════════════════════════════════════════════════════
                      FIRST RUN ACTIVATION
═══════════════════════════════════════════════════════════════════════════════

Open this project in VS Code and paste this message to Copilot:

  "I AM YOUR NEW USER, YOUR NICKNAME WILL BE [YourNickname]"

THERION will adapt to your domain instantly.

═══════════════════════════════════════════════════════════════════════════════
                         TROUBLESHOOTING
═══════════════════════════════════════════════════════════════════════════════

  'code' not found       --> VS Code: Cmd/Ctrl+Shift+P > "Shell Command: Install"
  Extensions fail        --> Install manually from VS Code Extensions panel
  Node/Python not found  --> Restart terminal or computer after installing
  Permission denied      --> Run as Administrator (Windows) or use sudo (Linux/Mac)

╔══════════════════════════════════════════════════════════════════════════════╗
║                              DEUS VULT                                       ║
╚══════════════════════════════════════════════════════════════════════════════╝
