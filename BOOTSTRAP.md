# THERION BOOTSTRAP - ONE COMMAND SETUP

╔══════════════════════════════════════════════════════════════════════════════╗
║                         NOOB-PROOF INSTALLATION                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

Copy-paste ONE command. Get EVERYTHING configured. That's it.

═══════════════════════════════════════════════════════════════════════════════
                      WINDOWS (PowerShell Admin)
═══════════════════════════════════════════════════════════════════════════════

```powershell
# THERION BOOTSTRAP - RUN AS ADMINISTRATOR
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

# Navigate to your project directory (where you copied THERION files)
# cd "path\to\your\project"

# Create Python virtual environment and install dependencies
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

Write-Host "[+] THERION BOOTSTRAP COMPLETE - DEUS VULT" -ForegroundColor Magenta
```

═══════════════════════════════════════════════════════════════════════════════
                        MACOS / LINUX (Bash)
═══════════════════════════════════════════════════════════════════════════════

```bash
#!/bin/bash
# THERION BOOTSTRAP - macOS/Linux

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

# Navigate to your project directory (where you copied THERION files)
# cd /path/to/your/project

# Create Python virtual environment and install dependencies
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

echo "[+] THERION BOOTSTRAP COMPLETE - DEUS VULT"
```

═══════════════════════════════════════════════════════════════════════════════
                     PYTHON VENV SETUP (Quick Reference)
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

1. INSTALL NODE.JS
   https://nodejs.org/en/download/
   - Download LTS version
   - Run installer, accept defaults

2. INSTALL PYTHON
   https://www.python.org/downloads/
   - Download 3.11+
   - Check "Add Python to PATH" during install

3. INSTALL GIT
   https://git-scm.com/downloads
   - Default options are fine

4. INSTALL VS CODE
   https://code.visualstudio.com/
   - Or Cursor: https://cursor.sh/
   - Or Windsurf: https://windsurf.ai/

5. INSTALL EXTENSIONS (in VS Code terminal)
   code --install-extension github.copilot
   code --install-extension github.copilot-chat
   code --install-extension ms-python.python
   code --install-extension esbenp.prettier-vscode
   code --install-extension dbaeumer.vscode-eslint
   code --install-extension eamodio.gitlens

===============================================================================
                      ACTIVATION CHECKLIST
===============================================================================

After installation, verify:

  [ ] Node.js installed: node --version
  [ ] npm installed: npm --version
  [ ] Python installed: python --version (or python3)
  [ ] Git installed: git --version
  [ ] VS Code opens project correctly
  [ ] GitHub Copilot activated (requires subscription)
  [ ] THERION color scheme visible (purple/gold theme)

===============================================================================
                      FIRST RUN ACTIVATION
===============================================================================

Open this project in VS Code and paste this message to Copilot:

  "I AM YOUR NEW USER, YOUR NICKNAME WILL BE [YourNickname]"

Then tell THERION what you're building. It will adapt instantly.

===============================================================================
                         TROUBLESHOOTING
===============================================================================

Problem: 'code' command not found
  Fix: Open VS Code > Cmd/Ctrl+Shift+P > "Shell Command: Install"

Problem: Extensions not installing
  Fix: Open VS Code > Extensions panel > Search and install manually

Problem: Node/Python not recognized after install
  Fix: Close and reopen terminal, or restart computer

Problem: Permission denied
  Fix: Run terminal as Administrator (Windows) or use sudo (Mac/Linux)

===============================================================================
                          DEUS VULT
===============================================================================
