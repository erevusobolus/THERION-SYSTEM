╔══════════════════════════════════════════════════════════════════════════════╗
║            MEMORY.md -- 3-TIER ADAPTIVE MEMORY SYSTEM (v0.9)                 ║
║            PERSISTENT KNOWLEDGE | COMPRESSION | PROGRESSIVE DISCLOSURE       ║
╚══════════════════════════════════════════════════════════════════════════════╝

═══════════════════════════════════════════════════════════════════════════════
                     MEMORY ARCHITECTURE OVERVIEW
═══════════════════════════════════════════════════════════════════════════════

THERION uses 3 memory tiers. Each serves a distinct purpose.

  TIER 1 -- SESSION (volatile, current conversation)
    Tracked via: manage_todo_list + editor session memory
    Lifespan: Current conversation only
    Purpose: Decisions, discoveries, in-progress state

  TIER 2 -- PROJECT (persistent, this file)
    Tracked via: This MEMORY.md file
    Lifespan: Survives across all sessions for this project
    Purpose: Lessons, patterns, project knowledge, stack facts

  TIER 3 -- USER (persistent, cross-project)
    Tracked via: USER.md + editor user memory (/memories/)
    Lifespan: Survives across ALL projects and sessions
    Purpose: Preferences, skill level, communication style

═══════════════════════════════════════════════════════════════════════════════
                     COMPRESSION PROTOCOL
═══════════════════════════════════════════════════════════════════════════════

All memory entries MUST follow compression format:

  LESSON:   Single-line insight from debugging/building/optimizing
  PATTERN:  Reusable approach that works in this project
  FACT:     Verified truth about this codebase (stack, config, structure)
  PREF:     Learned user preference from interactions
  AVOID:    Anti-pattern or approach that failed
  TODO:     Interrupted task needing follow-up

RULES:
  - One line per entry. No paragraphs. No verbose narratives.
  - Before adding: check for duplicates. Update existing > add new.
  - Contradicted entries get replaced, not appended.
  - Maximum 50 entries per section. Prune stale entries quarterly.
  - Date-stamp entries that may become stale: [YYYY-MM-DD]

═══════════════════════════════════════════════════════════════════════════════
                     PROGRESSIVE DISCLOSURE
═══════════════════════════════════════════════════════════════════════════════

THERION does NOT dump all memory into context on every prompt.

PHASE 0 LOAD (every prompt):
  - Read section headers + first 2 entries per section (summary scan)
  - Total cost: ~30 lines. Minimal token overhead.

ON-DEMAND DEEP LOAD (when task requires history):
  - Read full section only when task keywords match memory entries
  - Example: debugging auth → load LESSONS section fully
  - Token cost must be justified by task relevance

SESSION END PROTOCOL:
  - Compress session discoveries into LESSON/PATTERN/FACT entries
  - Update TODO section with any interrupted work
  - Remove completed TODOs
  - Add session summary to SESSION HISTORY (keep last 10 only)

═══════════════════════════════════════════════════════════════════════════════
                     PLATFORM MEMORY INTEGRATION
═══════════════════════════════════════════════════════════════════════════════

THERION adapts its memory strategy to the platform:

VS CODE (Copilot / Claude Extension):
  - Session: editor session memory (/memories/session/)
  - Project: this MEMORY.md file
  - User: editor user memory (/memories/) + USER.md

CURSOR:
  - Session: conversation context
  - Project: this MEMORY.md file + .cursorrules context
  - User: USER.md

CLAUDE CODE / CLAUDE COWORK:
  - Session: conversation context
  - Project: this MEMORY.md file + CLAUDE.md imports
  - User: USER.md + ~/.claude/settings.json preferences

WINDSURF:
  - Session: conversation context
  - Project: this MEMORY.md file
  - User: USER.md

ALL PLATFORMS: MEMORY.md is the universal project memory layer.

═══════════════════════════════════════════════════════════════════════════════
                     PROJECT FACTS (VERIFIED)
═══════════════════════════════════════════════════════════════════════════════

[Verified facts about this project -- stack, structure, config]

  FACT: [description]

═══════════════════════════════════════════════════════════════════════════════
                         LESSONS LEARNED
═══════════════════════════════════════════════════════════════════════════════

[Insights from debugging, building, optimizing]

  LESSON: [description]

═══════════════════════════════════════════════════════════════════════════════
                        COMMON PATTERNS
═══════════════════════════════════════════════════════════════════════════════

[Reusable approaches that work in this project]

  PATTERN: [description]

═══════════════════════════════════════════════════════════════════════════════
                         ANTI-PATTERNS
═══════════════════════════════════════════════════════════════════════════════

[Approaches that failed -- avoid repeating]

  AVOID: [description]

═══════════════════════════════════════════════════════════════════════════════
                     USER PREFERENCES (LEARNED)
═══════════════════════════════════════════════════════════════════════════════

[Preferences discovered during interactions -- also stored in USER.md]

  PREF: [description]

═══════════════════════════════════════════════════════════════════════════════
                        UNFINISHED TASKS
═══════════════════════════════════════════════════════════════════════════════

[Tasks interrupted or needing follow-up]

  TODO: [description]

═══════════════════════════════════════════════════════════════════════════════
                     SESSION HISTORY (LAST 10)
═══════════════════════════════════════════════════════════════════════════════

[One-line summaries. Keep last 10. Delete oldest when adding new.]

  [YYYY-MM-DD] [summary]

╔══════════════════════════════════════════════════════════════════════════════╗
║  THERION maintains this file automatically. Manual edits welcome.            ║
║  3-TIER MEMORY | COMPRESSION | PROGRESSIVE DISCLOSURE | DEUS VULT            ║
╚══════════════════════════════════════════════════════════════════════════════╝
