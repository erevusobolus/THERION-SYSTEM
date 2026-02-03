# Contributing to THERION System

Thank you for your interest in contributing to THERION. This project is personally curated to maintain the highest quality standards.

---

## ⚔️ Contribution Protocol

### Personal Approval Required

All contributions to the main branch require **direct approval from the project maintainer**. This ensures:

- Architectural integrity and vision alignment
- Code quality and security standards
- Documentation accuracy and clarity
- Consistent user experience

### How to Contribute

**Step 1: Contact the Maintainer**

Before starting any work, email your contribution proposal to:

**📧 erevus.ai@proton.me**

Include:

- Brief description of your proposed contribution
- Why you think it would benefit THERION users
- Your relevant experience or background
- Estimated timeline (if applicable)

**Step 2: Wait for Approval**

You will receive a response within 3-5 business days with:

- Approval to proceed (with any specific guidelines)
- Suggestions for refinement
- Alternative approaches to consider

**Step 3: Develop Your Contribution**

Once approved, you can:

- Fork the repository
- Create a feature branch
- Implement your changes
- Test thoroughly

**Step 4: Submit for Review**

Email your completed work (branch/PR link) to **erevus.ai@proton.me** for final review and merge approval.

---

## Table of Contents

1. [Contribution Areas](#contribution-areas)
2. [Development Setup](#development-setup)
3. [Code Standards](#code-standards)
4. [Testing Guidelines](#testing-guidelines)
5. [Documentation Standards](#documentation-standards)

---

## Getting Started

### Prerequisites

- Git installed and configured
- Node.js 18+ LTS
- Python 3.10+
- Basic understanding of:
  - Local LLM inference (Ollama)
  - Prompt engineering
  - Shell scripting

### Fork and Clone

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/THERION-SYSTEM.git
cd THERION-SYSTEM
git remote add upstream https://github.com/erevusobolus/THERION-SYSTEM.git
```

### Sync with Upstream

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

---

## Development Setup

### 1. Install Dependencies

```bash
# System dependencies (Ubuntu/Debian)
sudo apt install -y curl git jq ddgr w3m python3 python3-pip nodejs npm

# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Install OpenClaw
npm install -g openclaw

# Download test model
ollama pull qwen3:4b
```

### 2. Configure Test Environment

```bash
# Copy template config
mkdir -p ~/.openclaw
cp config/openclaw.template.json ~/.openclaw/openclaw.json

# Edit config for your setup
nano ~/.openclaw/openclaw.json
```

### 3. Verify Setup

```bash
# Run verification script
chmod +x scripts/verify-setup.sh
./scripts/verify-setup.sh
```

---

## Contribution Areas

### High Priority

| Area              | Description                          | Skills Needed      |
| ----------------- | ------------------------------------ | ------------------ |
| **Skill Modules** | New cognitive patterns for the agent | Prompt engineering |
| **Tool Scripts**  | New capabilities via shell scripts   | Bash, Python       |
| **Documentation** | Guides, tutorials, translations      | Technical writing  |
| **Testing**       | Test coverage, CI/CD                 | Testing frameworks |

### Medium Priority

| Area                      | Description                                 | Skills Needed |
| ------------------------- | ------------------------------------------- | ------------- |
| **Platform Integrations** | Discord, Slack, WhatsApp connectors         | Node.js, APIs |
| **Model Configs**         | Optimized Modelfiles for different hardware | LLM tuning    |
| **VS Code Extensions**    | Custom extensions for THERION               | TypeScript    |

### Future Features

| Area                 | Description                        | Skills Needed  |
| -------------------- | ---------------------------------- | -------------- |
| **Image Generation** | Local Stable Diffusion integration | Python, ML     |
| **Voice Input**      | Speech-to-text processing          | Python, Audio  |
| **Text-to-Speech**   | Local TTS output                   | Python, Audio  |
| **Web UI**           | Dashboard for management           | React, Next.js |

---

## Code Standards

### General Principles

1. **Clarity over cleverness** — Code should be readable
2. **Complete implementations** — No placeholder code
3. **Error handling** — Handle edge cases gracefully
4. **Documentation** — Comment complex logic

### Shell Scripts

```bash
#!/bin/bash
# Description of what the script does
# Usage: script.sh [arguments]

set -e  # Exit on error

# Use meaningful variable names
INPUT_FILE="$1"
OUTPUT_DIR="/home/user/output"

# Check prerequisites
if [[ -z "$INPUT_FILE" ]]; then
    echo "Usage: $0 <input_file>"
    exit 1
fi

# Main logic with comments
process_data() {
    # Transform input data
    cat "$INPUT_FILE" | jq '.data'
}

process_data
```

### Python

```python
#!/usr/bin/env python3
"""
Module description.

Usage:
    python script.py [arguments]
"""

import sys
from pathlib import Path


def main(input_path: str) -> int:
    """
    Process the input file.

    Args:
        input_path: Path to input file

    Returns:
        Exit code (0 for success)
    """
    path = Path(input_path)

    if not path.exists():
        print(f"Error: {input_path} not found", file=sys.stderr)
        return 1

    # Process file
    content = path.read_text()
    print(content)

    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else ""))
```

### Markdown Documentation

```markdown
# Document Title

Brief description of the document purpose.

---

## Section Header

Content with proper formatting.

### Subsection

- Bullet points for lists
- Use tables for structured data

| Column 1 | Column 2 |
| -------- | -------- |
| Data     | Data     |

### Code Examples

Always include runnable examples:

\`\`\`bash

# What this command does

command --with --flags
\`\`\`

---

_Footer with references if needed_
```

### Skill Files

````markdown
# Skill Name

Brief description of what this skill enables.

## Pattern

1. Step one of the pattern
2. Step two with tool usage
3. Verification step

## Tools Required

- `exec` for shell commands
- `read` for file access

## Examples

### Example 1: Simple Case

User request: "..."

```bash
# Tool call
exec({ command: "..." })
```
````

Expected output: ...

### Example 2: Complex Case

User request: "..."

[Multi-step process with tool calls]

## Edge Cases

- What to do when X fails
- Alternative approaches for Y

````

---

## Review and Integration Process

### Important: No Direct PRs to Main

The main branch is protected. Direct pull requests will not be accepted without prior email approval.

### Integration Process

### 1. Create Feature Branch

```bash
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
````

### 2. Make Changes

- Keep commits focused and atomic
- Write clear commit messages
- Test your changes locally

### 3. Commit Guidelines

```bash
# Format: type(scope): description
git commit -m "feat(skills): add web-research skill module"
git commit -m "fix(tools): correct ddgr output parsing"
git commit -m "docs(readme): add hardware requirements table"
```

**Types:**

- `feat` — New feature
- `fix` — Bug fix
- `docs` — Documentation only
- `refactor` — Code change that neither fixes a bug nor adds a feature
- `test` — Adding or correcting tests
- `chore` — Maintenance tasks

### 4. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:

- Clear title describing the change
- Description of what and why
- Link to related issues if any
- Screenshots if UI changes

### 5. Review Process

- Maintainers will review within 1 week
- Address feedback with additional commits
- PR will be merged when approved

---

## Documentation

### Where to Document

| Content Type    | Location             |
| --------------- | -------------------- |
| User guides     | `docs/`              |
| API reference   | `docs/architecture/` |
| Setup guides    | `docs/setup/`        |
| Inline docs     | Within code files    |
| Quick reference | Root `.md` files     |

### Documentation Style

- Use clear, direct language
- Include practical examples
- Assume reader is technical but new to THERION
- Test all code examples before committing

---

## Questions?

- Open an issue for questions
- Join discussions in GitHub Discussions
- Check existing issues before creating new ones

---

## License

By contributing, you agree that your contributions will be licensed under the GPL v3 license.

---

_Thank you for contributing to THERION System._
