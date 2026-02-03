---
name: memory-management
description: How to use and maintain THERION's memory system - daily notes, long-term memory, and workspace files
metadata: {"openclaw":{"emoji":"🧠","always":true}}
---

# Memory Management

Your memory persists through files. Use them wisely.

## Memory Architecture

### Two-Layer System

1. **Daily Notes** (`memory/YYYY-MM-DD.md`)
   - Raw logs of what happened each session
   - Temporary context, debugging notes, tasks
   - Read today + yesterday at session start

2. **Long-Term Memory** (`MEMORY.md`)
   - Curated, distilled knowledge
   - User preferences, project info, lessons learned
   - Only load in MAIN SESSION (direct chat with your human)
   - Periodically review daily notes and promote important info here

## Session Start Protocol

**EVERY SESSION, DO THIS:**
```
1. Read SOUL.md — who you are
2. Read USER.md — who you're helping
3. Read memory/today.md + memory/yesterday.md — recent context
4. In main session: Read MEMORY.md — long-term context
```

## Writing to Memory

### Daily Notes
```bash
# Get today's date
DATE=$(date +%Y-%m-%d)

# Append to today's log
echo "
## [TIME] - Topic
- What happened
- What was decided
- What to remember
" >> ~/.openclaw/workspace/memory/$DATE.md
```

### When to Write Daily Notes
- Important decisions made
- Bugs fixed and how
- New learnings discovered
- Tasks completed
- Context that might matter tomorrow

### Long-Term Memory (MEMORY.md)
Update `~/.openclaw/workspace/MEMORY.md` when:
- User preferences become clear
- Project info changes
- Lessons are learned that apply broadly
- Permanent context is established

## File Locations

| File | Purpose | When to Load |
|------|---------|--------------|
| `SOUL.md` | Your identity | Every session |
| `USER.md` | User profile | Every session |
| `MEMORY.md` | Long-term memory | Main session only |
| `memory/*.md` | Daily logs | Current + yesterday |
| `TOOLS.md` | Tool reference | When using tools |
| `skills/*/SKILL.md` | Specific skills | When relevant |

## Practical Commands

### Create Today's Log
```bash
DATE=$(date +%Y-%m-%d)
touch ~/.openclaw/workspace/memory/$DATE.md
```

### Read Recent Memory
```bash
# Today
cat ~/.openclaw/workspace/memory/$(date +%Y-%m-%d).md 2>/dev/null || echo "No notes today"

# Yesterday  
cat ~/.openclaw/workspace/memory/$(date -d "yesterday" +%Y-%m-%d).md 2>/dev/null || echo "No notes yesterday"
```

### Update MEMORY.md
```bash
# Read current
cat ~/.openclaw/workspace/MEMORY.md

# Edit (use echo >> to append, or write full file)
```

## Memory Maintenance (Heartbeats)

During heartbeat checks, periodically:
1. Review recent `memory/YYYY-MM-DD.md` files
2. Identify patterns and important learnings
3. Promote significant info to `MEMORY.md`
4. Remove outdated info from `MEMORY.md`

## Golden Rules

1. **If you want to remember it, WRITE IT DOWN**
   - "Mental notes" don't survive restarts
   - Files are your only persistent memory

2. **Text > Brain**
   - Assume you'll forget everything
   - Document decisions, not just actions

3. **Security: Don't leak in groups**
   - MEMORY.md contains personal context
   - Don't load in group chats or shared contexts

4. **Curate, don't hoard**
   - Daily notes are raw logs
   - MEMORY.md is distilled wisdom
   - Keep MEMORY.md focused and useful

## When User Says "Remember This"

1. Acknowledge the request
2. Write to appropriate file:
   - Temporary → `memory/today.md`
   - Permanent → `MEMORY.md`
3. Confirm what was saved
