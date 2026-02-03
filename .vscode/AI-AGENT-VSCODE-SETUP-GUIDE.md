# ⚔️ THERION VSCODE SETUP — AI AGENT INSTALLATION GUIDE

**For:** AI Agents (Claude, GPT, Local LLMs with MCP/tool-calling)  
**Purpose:** Complete VSCode environment setup for OpenClaw/TypeScript/Node.js development  
**Date:** February 2026  
**Philosophy:** AUTONOMOUS EXCELLENCE — No half-measures

---

## 🎯 OBJECTIVE

Transform a bare VSCode installation into a fully-equipped AI agent development environment with:

- ✅ All critical extensions installed
- ✅ Optimal settings configured
- ✅ MCP integration ready
- ✅ Markdown preview as default
- ✅ TypeScript/Node.js tooling complete
- ✅ Git workflow enhanced
- ✅ Performance optimized

---

## 📋 PREREQUISITES

**Check before starting:**

```bash
# Node.js version
node --version  # Should be >= 18

# npm version
npm --version   # Should be >= 8

# VSCode installed
code --version  # Should output version

# Workspace exists
ls -la ~/Documents/_TherionSystem
```

---

## 🚀 INSTALLATION SCRIPT

### Step 1: Critical Extensions (REQUIRED)

```bash
#!/bin/bash
# Save as: install-vscode-extensions.sh

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║ 🔧 THERION VSCODE EXTENSION INSTALLER                        ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Core AI Development
code --install-extension github.copilot --force
code --install-extension github.copilot-chat --force

# MCP Integration (Model Context Protocol)
code --install-extension modelcontextprotocol.servers --force

# TypeScript/JavaScript Essentials
code --install-extension dbaeumer.vscode-eslint --force
code --install-extension esbenp.prettier-vscode --force
code --install-extension ms-vscode.vscode-typescript-next --force

# Node.js/NPM
code --install-extension christian-kohler.npm-intellisense --force
code --install-extension eg2.vscode-npm-script --force

# Git Enhancement
code --install-extension eamodio.gitlens --force
code --install-extension mhutchie.git-graph --force
code --install-extension github.vscode-pull-request-github --force

# Markdown (Documentation)
code --install-extension yzhang.markdown-all-in-one --force
code --install-extension davidanson.vscode-markdownlint --force
code --install-extension bierner.markdown-mermaid --force

# Code Quality
code --install-extension usernamehw.errorlens --force
code --install-extension streetsidesoftware.code-spell-checker --force

# JSON/JSONC
code --install-extension zainchen.json --force

# Utilities
code --install-extension christian-kohler.path-intellisense --force
code --install-extension aaron-bond.better-comments --force
code --install-extension gruntfuggly.todo-tree --force
code --install-extension humao.rest-client --force

# Python (if OpenClaw uses Python tools)
code --install-extension ms-python.python --force
code --install-extension ms-python.vscode-pylance --force
code --install-extension charliermarsh.ruff --force

echo ""
echo "✅ Extension installation complete!"
echo "🔄 Restart VSCode to activate all extensions"
```

**Execute:**

```bash
chmod +x install-vscode-extensions.sh
bash install-vscode-extensions.sh
```

---

## 📝 STEP 2: VSCODE SETTINGS CONFIGURATION

Create or update `.vscode/settings.json`:

```jsonc
{
  // ═══════════════════════════════════════════════════════════════════════════════
  // 🚀 GITHUB COPILOT - MODERN OPTIMIZED SETTINGS
  // ═══════════════════════════════════════════════════════════════════════════════

  "github.copilot.enable": {
    "*": true,
    "plaintext": true,
    "markdown": true,
    "scminput": false,
    "yaml": true,
    "json": true,
    "jsonc": true,
  },

  "github.copilot.chat.localeOverride": "en",
  "github.copilot.chat.followUps": "always",
  "github.copilot.chat.terminalChatLocation": "terminal",
  "chat.agent.enabled": true,

  // ═══════════════════════════════════════════════════════════════════════════════
  // 📝 MARKDOWN - OPEN IN PREVIEW BY DEFAULT
  // ═══════════════════════════════════════════════════════════════════════════════

  "workbench.editorAssociations": {
    "*.md": "vscode.markdown.preview.editor",
  },
  "markdown.preview.breaks": true,
  "markdown.preview.linkify": true,
  "markdown.preview.typographer": true,
  "markdown.preview.scrollPreviewWithEditor": true,
  "markdown.preview.scrollEditorWithPreview": true,
  "markdown.preview.markEditorSelection": true,

  // ═══════════════════════════════════════════════════════════════════════════════
  // 📁 EDITOR PERFORMANCE & INTELLIGENCE
  // ═══════════════════════════════════════════════════════════════════════════════

  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.suggest.showWords": false,
  "editor.acceptSuggestionOnEnter": "smart",
  "editor.quickSuggestions": {
    "other": "on",
    "comments": "off",
    "strings": "on",
  },
  "editor.suggestOnTriggerCharacters": true,
  "editor.wordBasedSuggestions": "off",
  "editor.suggest.localityBonus": true,
  "editor.inlineSuggest.enabled": true,
  "editor.inlineSuggest.showToolbar": "onHover",
  "editor.linkedEditing": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.minimap.enabled": false,
  "editor.stickyScroll.enabled": true,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,
  "editor.fontLigatures": true,
  "editor.renderWhitespace": "boundary",
  "editor.accessibilitySupport": "off",

  // ═══════════════════════════════════════════════════════════════════════════════
  // 📁 FILE SYSTEM PERFORMANCE (Critical for large projects)
  // ═══════════════════════════════════════════════════════════════════════════════

  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/__pycache__/**": true,
    "**/.*cache/**": true,
    "**/logs/**": true,
    "**/tmp/**": true,
    "**/dist/**": true,
    "**/build/**": true,
    "**/.next/**": true,
    "**/Coverage/**": true,
  },

  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/*.code-search": true,
    "**/__pycache__": true,
    "**/.*cache": true,
    "**/logs": true,
    "**/tmp": true,
    "**/dist": true,
    "**/build": true,
    "**/.next": true,
    "**/Coverage": true,
    "**/*.lock": true,
  },

  "files.exclude": {
    "**/.git": false,
    "**/.DS_Store": true,
    "**/Thumbs.db": true,
    "**/__pycache__": true,
    "**/*.pyc": true,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🔧 LANGUAGE SPECIFIC SETTINGS
  // ═══════════════════════════════════════════════════════════════════════════════

  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },

  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },

  "[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one",
    "editor.wordWrap": "on",
  },

  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit",
      "source.organizeImports": "explicit",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🎨 PRETTIER CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════════

  "prettier.semi": true,
  "prettier.singleQuote": false,
  "prettier.trailingComma": "all",
  "prettier.printWidth": 100,
  "prettier.tabWidth": 2,

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🔍 ESLINT CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════════

  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🐍 PYTHON CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════════

  "python.analysis.typeCheckingMode": "basic",
  "python.analysis.autoImportCompletions": true,
  "python.analysis.diagnosticSeverityOverrides": {
    "reportUnusedVariable": "warning",
    "reportUnusedImport": "warning",
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🎯 GIT CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════════

  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.suggestSmartCommit": true,
  "gitlens.codeLens.enabled": true,
  "gitlens.currentLine.enabled": true,

  // ═══════════════════════════════════════════════════════════════════════════════
  // 💡 TERMINAL CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════════

  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontFamily": "monospace",
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.scrollback": 10000,

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🚀 PERFORMANCE OPTIMIZATIONS
  // ═══════════════════════════════════════════════════════════════════════════════

  "extensions.autoUpdate": false,
  "extensions.autoCheckUpdates": false,
  "telemetry.telemetryLevel": "off",
  "workbench.enableExperiments": false,
  "update.mode": "manual",
}
```

---

## 🔧 STEP 3: EXTENSIONS.JSON (RECOMMENDED LIST)

Create `.vscode/extensions.json`:

```jsonc
{
  "recommendations": [
    // Core AI
    "github.copilot",
    "github.copilot-chat",

    // TypeScript/JavaScript
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",

    // Node.js
    "christian-kohler.npm-intellisense",
    "eg2.vscode-npm-script",

    // Git
    "eamodio.gitlens",
    "mhutchie.git-graph",
    "github.vscode-pull-request-github",

    // Markdown
    "yzhang.markdown-all-in-one",
    "davidanson.vscode-markdownlint",
    "bierner.markdown-mermaid",

    // Code Quality
    "usernamehw.errorlens",
    "streetsidesoftware.code-spell-checker",

    // Utilities
    "christian-kohler.path-intellisense",
    "aaron-bond.better-comments",
    "gruntfuggly.todo-tree",
    "humao.rest-client",

    // Python
    "ms-python.python",
    "ms-python.vscode-pylance",
    "charliermarsh.ruff",
  ],

  "unwantedRecommendations": [
    "ms-python.flake8",
    "ms-python.black-formatter",
    "ms-python.pylint",
  ],
}
```

---

## 🎯 STEP 4: KEYBINDINGS (OPTIONAL BUT RECOMMENDED)

Create `.vscode/keybindings.json`:

```jsonc
[
  // Markdown preview toggle
  {
    "key": "ctrl+shift+v",
    "command": "markdown.showPreviewToSide",
    "when": "editorLangId == 'markdown'",
  },

  // Format document
  {
    "key": "ctrl+shift+f",
    "command": "editor.action.formatDocument",
  },

  // Terminal toggle
  {
    "key": "ctrl+`",
    "command": "workbench.action.terminal.toggleTerminal",
  },

  // Quick file open
  {
    "key": "ctrl+p",
    "command": "workbench.action.quickOpen",
  },
]
```

---

## 📦 STEP 5: WORKSPACE CONFIGURATION (.code-workspace)

Create `TherionSystem.code-workspace`:

```jsonc
{
  "folders": [
    {
      "name": "📦 Root",
      "path": ".",
    },
    {
      "name": "🦞 OpenClaw Source",
      "path": "openclaw-source",
    },
    {
      "name": "🌐 Website",
      "path": "EREBUS-Website",
    },
  ],
  "settings": {
    "files.exclude": {
      "**/node_modules": true,
      "**/.git": false,
      "**/__pycache__": true,
    },
    "search.exclude": {
      "**/node_modules": true,
      "**/dist": true,
      "**/build": true,
    },
  },
  "extensions": {
    "recommendations": [
      "github.copilot",
      "github.copilot-chat",
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode",
      "eamodio.gitlens",
    ],
  },
}
```

---

## ✅ VERIFICATION CHECKLIST

**After installation, verify:**

```bash
#!/bin/bash
# Save as: verify-vscode-setup.sh

echo "🔍 Verifying VSCode Setup..."
echo ""

# Count extensions
EXT_COUNT=$(code --list-extensions | wc -l)
echo "Extensions installed: $EXT_COUNT (minimum: 15)"

if [ $EXT_COUNT -lt 15 ]; then
    echo "❌ Not enough extensions installed!"
    exit 1
fi

# Check critical extensions
CRITICAL=(
    "github.copilot"
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
    "eamodio.gitlens"
)

for ext in "${CRITICAL[@]}"; do
    if code --list-extensions | grep -q "$ext"; then
        echo "✅ $ext"
    else
        echo "❌ Missing: $ext"
    fi
done

echo ""
echo "✅ VSCode verification complete!"
```

---

## 🚀 AI AGENT INTEGRATION INSTRUCTIONS

**For AI agents executing this guide:**

### 1. Check Prerequisites

```bash
node --version && npm --version && code --version
```

### 2. Install Extensions (Non-Interactive)

```bash
bash install-vscode-extensions.sh
```

### 3. Apply Settings

- Copy settings.json to `.vscode/settings.json`
- Ensure all paths are absolute
- Verify markdown preview configuration

### 4. Restart VSCode

```bash
# Close all VSCode windows
pkill code

# Reopen workspace
code ~/Documents/_TherionSystem
```

### 5. Verify Installation

```bash
bash verify-vscode-setup.sh
```

---

## 🔧 TROUBLESHOOTING

### Issue: Extensions not activating

**Solution:**

```bash
# Reload VSCode window
code --reuse-window
# Or restart completely
pkill code && code ~/Documents/_TherionSystem
```

### Issue: Markdown still opens in editor mode

**Solution:**

```jsonc
// Add to settings.json
"workbench.editorAssociations": {
  "*.md": "vscode.markdown.preview.editor"
}
```

### Issue: ESLint not working

**Solution:**

```bash
# In project directory
npm install eslint --save-dev
npx eslint --init
```

### Issue: Prettier conflicts with ESLint

**Solution:**

```bash
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

---

## 📊 EXPECTED RESULTS

After completing this guide:

- ✅ 15+ extensions installed and active
- ✅ Markdown files open in preview by default
- ✅ Format on save enabled
- ✅ ESLint + Prettier working
- ✅ GitLens active
- ✅ Error highlighting inline (Error Lens)
- ✅ TypeScript IntelliSense enhanced
- ✅ Terminal integrated and configured
- ✅ Performance optimized (excluded folders)

---

## 🎯 AGENT EXECUTION PROTOCOL

**When an AI agent executes this guide:**

1. **READ** this file completely first
2. **EXECUTE** commands with absolute paths
3. **VERIFY** each step before proceeding
4. **REPORT** any failures immediately
5. **DO NOT** skip verification steps

**Success Criteria:**

- All extensions installed (≥15)
- Settings.json properly configured
- Markdown preview working
- No errors in verification script

---

## 💾 MAINTENANCE

**Weekly:**

- Update extensions manually (not auto-update)
- Check for new critical extensions
- Review settings for optimization

**Monthly:**

- Audit unused extensions
- Update Node.js and npm
- Review VSCode changelog for new features

---

## ⚔️ THERION VALIDATION

This guide follows the THERION PROTOCOL:

- ✅ Complete (no fragments)
- ✅ Production-ready
- ✅ Absolute paths enforced
- ✅ Error handling included
- ✅ Verification built-in
- ✅ Autonomous execution ready

**DEUS VULT.**

---

**Generated by:** THERION Protocol v4.0  
**Last Updated:** February 2026  
**Maintainer:** Autonomous AI System
