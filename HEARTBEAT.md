# ⏰ THERION HEARTBEAT

```
╔═══════════════════════════════════════════════════════════════╗
║  ⚠️  FIREPROOF APPEND-ONLY FILE  ⚠️                           ║
║  DESTROYING THIS FILE = INSTANT THERION PROTOCOL VIOLATION    ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 🔒 FILE INTEGRITY RULES (READ EVERY TIME)

### RULE 1: APPEND ONLY — NEVER OVERWRITE

```bash
# ═══════════════════════════════════════════════════════════════
# THE ONLY VALID WAY TO ADD A REMINDER:
# ═══════════════════════════════════════════════════════════════
exec({ command: "echo '$(date +%Y-%m-%d\\ %H:%M) | TASK HERE' >> $WORKSPACE/HEARTBEAT.md" })
```

### RULE 2: FORBIDDEN OPERATIONS (WILL DESTROY DATA)

```bash
# ❌ FORBIDDEN — These will DESTROY all reminders:
write({ path: "HEARTBEAT.md", content: "..." })           # DESTROYS FILE
write({ path: "/path/HEARTBEAT.md", content: "..." })     # DESTROYS FILE
read() then write() with modifications                     # DESTROYS FILE
```

### RULE 3: MARKING TASKS DONE (NOT DELETING)

```bash
# ✅ Mark a task completed (preserves history):
exec({ command: "sed -i 's/^2026-02-03 22:08/[DONE] 2026-02-03 22:08/' $WORKSPACE/HEARTBEAT.md" })
```

### RULE 4: SELF-CHECK BEFORE EVERY EDIT

```
BEFORE touching this file, STOP and ask:
┌─────────────────────────────────────────────────────────────┐
│ 1. Am I using >> (append)?              YES → proceed      │
│                                         NO  → STOP!        │
│ 2. Am I using write() tool?             YES → STOP!        │
│                                         NO  → proceed      │
│ 3. Will existing content be preserved?  YES → proceed      │
│                                         NO  → STOP!        │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔔 ACTIVE REMINDERS

2026-02-03 22:08 | Check eggs to boil
