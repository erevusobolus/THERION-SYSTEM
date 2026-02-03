---
name: vscode-control
description: Control VS Code from terminal - open files, folders, diff, extensions, and project management
metadata: {"openclaw":{"emoji":"💻","requires":{"bins":["code"]}}}
---

# VS Code Control

Full VS Code control via CLI. Use this to open files, manage projects, and assist with development.

## Open Commands

```bash
# Open file
code /absolute/path/to/file.ts

# Open at specific line
code -g /path/file.ts:42

# Open folder
code /path/to/project

# Reuse existing window
code -r /path/to/folder

# New window
code -n /path/to/folder

# Diff two files
code -d /path/file1.ts /path/file2.ts

# Wait for file to close (useful in scripts)
code -w /path/to/file.ts
```

## Extension Management

```bash
# List installed extensions
code --list-extensions

# Install extension
code --install-extension ms-python.python
code --install-extension esbenp.prettier-vscode

# Uninstall extension
code --uninstall-extension extension.id
```

## Project Operations

```bash
# Open workspace
code /path/to/project.code-workspace

# Open multiple folders
code /path/to/folder1 /path/to/folder2
```

## Common Patterns

### Open and Navigate
```bash
code -g $WORKSPACE/src/app/page.tsx:1
```

### Quick Edit Session
```bash
code $WORKSPACE
```

## Important Notes

- Always use ABSOLUTE PATHS
- Use `-r` to reuse window (less clutter)
- Use `-g file:line` for precise navigation
- VS Code must be installed and in PATH
