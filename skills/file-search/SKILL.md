---
name: file-search
description: File and codebase search using grep, find, and content analysis for navigating projects
metadata: {"openclaw":{"emoji":"🔍","always":true,"requires":{"bins":["grep","find","cat"]}}}
---

# File Search & Navigation

Find files, search content, and navigate codebases efficiently.

## Find Files by Name

```bash
# Find by exact name
find /path -name "filename.ts" -type f

# Find by pattern
find /path -name "*.tsx" -type f

# Find case-insensitive
find /path -iname "*component*" -type f

# Limit depth
find /path -maxdepth 2 -name "*.ts"

# Exclude directories
find /path -name "*.ts" -not -path "*/node_modules/*"
```

## Search Content (grep)

```bash
# Search recursively with line numbers
grep -rn "searchTerm" /path/

# Case-insensitive
grep -rin "searchterm" /path/

# Show context (3 lines before/after)
grep -rn -B3 -A3 "pattern" /path/

# Only matching filenames
grep -rl "pattern" /path/

# Multiple patterns (OR)
grep -rE "pattern1|pattern2" /path/

# Exclude directories
grep -rn "pattern" /path/ --exclude-dir=node_modules --exclude-dir=.git
```

## Read Files

```bash
# Full file
cat /path/to/file

# First N lines
head -n 50 /path/to/file

# Last N lines
tail -n 50 /path/to/file

# Specific line range (lines 10-30)
sed -n '10,30p' /path/to/file

# With line numbers
cat -n /path/to/file
nl /path/to/file
```

## Project Exploration Patterns

### Quick Overview
```bash
# Directory structure
find /project -type f -name "*.ts" | head -30

# See all source files
find /project/src -type f \( -name "*.ts" -o -name "*.tsx" \)
```

### Find Definitions
```bash
# Find function definition
grep -rn "function functionName" /project/src/
grep -rn "const functionName = " /project/src/

# Find class
grep -rn "class ClassName" /project/src/

# Find interface
grep -rn "interface InterfaceName" /project/src/

# Find import
grep -rn "from './module'" /project/src/
```

### Find Usage
```bash
# Find where something is used
grep -rn "functionName(" /project/src/

# Find imports of a file
grep -rn "import.*from.*filename" /project/src/
```

## Common Search Paths

| Project | Source Location |
|---------|-----------------|
| Main Workspace | `$WORKSPACE` (your TherionSystem directory) |
| Skills | `$WORKSPACE/skills` |
| Scripts | `$WORKSPACE/scripts` |
| OpenClaw workspace | `~/.openclaw/workspace` |

## Best Practices

1. **Always use absolute paths** — Never use relative paths in commands
2. **Exclude noise** — Always exclude `node_modules`, `.git`, `dist`
3. **Start broad, narrow down** — Search broadly first, then refine
4. **Read before edit** — Always `cat` a file before modifying it
5. **Use context** — Use `-B3 -A3` to see surrounding code

## Workflow Example

```bash
# 1. Find the file
find /project -name "*component*" -type f

# 2. Search within it
grep -n "functionName" /path/to/file.tsx

# 3. Read the relevant section
sed -n '45,75p' /path/to/file.tsx

# 4. Now you have context to edit
```
