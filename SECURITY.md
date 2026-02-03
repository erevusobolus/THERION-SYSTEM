# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.x     | :white_check_mark: |
| 1.x     | :x:                |

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **erevus.ai@proton.me**

Include the following information:
- Type of vulnerability
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

## Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Resolution:** Depends on severity (critical issues prioritized)

## Security Best Practices for THERION Users

1. **Never commit sensitive data** - Use `.env` files and the provided `.gitignore`
2. **Protect your bot tokens** - Keep Telegram/Discord tokens secure
3. **Limit allowed users** - Configure `allowedUsers` in OpenClaw config
4. **Review safeBins** - Only allow necessary executables
5. **Keep software updated** - Update Ollama, OpenClaw, and THERION regularly

## Scope

This security policy applies to:
- THERION System core code
- Configuration templates
- Scripts in the `scripts/` directory
- MCP tools in `mcp-therion-tools/`

Third-party dependencies (Ollama, OpenClaw, etc.) have their own security policies.
