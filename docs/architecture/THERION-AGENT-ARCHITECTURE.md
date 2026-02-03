# 🧠 THERION AUTONOMOUS AGENT ARCHITECTURE

**Built from Anthropic's "Building Effective Agents" research + real-world patterns**

---

## 🔄 THE AGENT LOOP (Core Architecture)

```
┌──────────────────────────────────────────────────────┐
│                  USER INPUT                          │
└─────────────────┬────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  1. PLAN: Break task into steps                    │
│     - What needs to be done?                        │
│     - What tools do I need?                         │
│     - What's the order of operations?               │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  2. ACT: Execute next step                          │
│     - Use tool OR reason about state                │
│     - Get concrete result from environment          │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  3. OBSERVE: Check result                           │
│     - Did it succeed or fail?                       │
│     - What did I learn?                             │
│     - What's the new state?                         │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  4. REFLECT: Self-evaluate                          │
│     - Am I making progress?                         │
│     - Did I make a mistake?                         │
│     - Should I change approach?                     │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
         ┌────────┴────────┐
         │  TASK COMPLETE? │
         └────────┬────────┘
         YES ◄────┴────► NO
          │               │
          ▼               │
       DONE               │
                          │
          ┌───────────────┘
          │
          ▼
    LOOP BACK TO STEP 2 (ACT)
```

**KEY: Each turn gets GROUND TRUTH from environment (tool results, command output, file contents)**

---

## ⚡ CONTINUOUS OPERATION PATTERNS

### Pattern 1: Bounded Agent Loop

```
max_iterations = 25
for turn in range(max_iterations):
    action = model.decide_next_action(context)
    result = execute(action)
    context.update(result)

    if task_complete(result):
        break
    if critical_error(result):
        ask_human()
        break
```

### Pattern 2: Heartbeat-Driven Autonomy

```
every N minutes:
    check_if_should_act()
    if idle and no_urgent_tasks:
        return "HEARTBEAT_OK"
    elif something_needs_attention:
        execute_proactive_action()
        loop_until_resolved()
```

### Pattern 3: Evaluator-Optimizer Loop

```
draft = model.generate_response()
for i in range(3):
    critique = model.evaluate(draft)
    if critique.score > threshold:
        break
    draft = model.improve(draft, critique)
return draft
```

---

## 🧠 SELF-REFLECTION MECHANISMS

### Daily Self-Review Prompt

```
At end of day, review your memory file and ask:

1. **Mistakes Made**:
   - Did I misunderstand something?
   - Did a tool call fail due to my error?
   - Did I provide incomplete information?

2. **Lessons Learned**:
   - What worked well today?
   - What patterns emerged?
   - What should I remember?

3. **Habit Formation**:
   - Is there something I should check regularly?
   - Should I create a reminder or routine?
   - Can I automate this check?

4. **Memory Update**:
   - What's worth keeping in MEMORY.md?
   - What can I prune from old memory?
   - Any corrections to make?

Write reflections to: memory/reflections/YYYY-MM-DD.md
```

### Real-Time Self-Correction

```
After each action:
1. Check result matches expectation
2. If unexpected:
   - Log to memory immediately
   - Adjust approach
   - Try alternative method
3. If repeated failures (3x):
   - Document pattern
   - Ask human for guidance
```

---

## 📋 HABIT CREATION SYSTEM

### Habit Template

```json
{
  "id": "habit_weather_check",
  "trigger": "heartbeat AND time_since_last > 4_hours",
  "condition": "user_in_athens AND daylight_hours",
  "action": "check_weather_and_alert_if_extreme",
  "priority": "low",
  "created": "2026-02-03",
  "lastRun": "2026-02-03T10:00:00Z",
  "successCount": 15,
  "failureCount": 0
}
```

### Auto-Create Habits From Patterns

```
Pattern Detection:
- User asks about weather → Create habit to check proactively
- User asks "did X happen?" → Create monitoring habit
- Error repeats 3x → Create prevention habit

Habit Lifecycle:
1. PROPOSED: Suggest to user
2. ACTIVE: Run on triggers
3. REFINED: Adjust based on feedback
4. DEPRECATED: Remove if no longer useful
```

### Habit Storage

Location: `memory/habits.json`

```json
{
  "habits": [
    {
      "id": "morning_briefing",
      "trigger": "first_heartbeat_after_8am",
      "actions": ["weather", "calendar_check", "important_emails"],
      "enabled": true
    },
    {
      "id": "memory_hygiene",
      "trigger": "heartbeat AND hour == 23",
      "actions": ["consolidate_daily_memory", "update_MEMORY_md"],
      "enabled": true
    }
  ]
}
```

---

## 🎯 MULTI-TURN REASONING CONFIG

### OpenClaw Config Addition

```json
{
  "agents": {
    "defaults": {
      "autonomy": {
        "enabled": true,
        "maxTurnsPerRun": 25,
        "stopConditions": [
          "explicit_done_signal",
          "repeated_failure_3x",
          "human_intervention_needed",
          "timeout_reached"
        ],
        "loopBehavior": {
          "planBeforeExecute": true,
          "reflectAfterAction": true,
          "selfCritiqueEveryNTurns": 5
        }
      },
      "heartbeat": {
        "enabled": true,
        "intervalMinutes": 30,
        "proactiveMode": true,
        "habitCheckEnabled": true,
        "habitFile": "memory/habits.json"
      }
    }
  }
}
```

---

## 🔧 IMPLEMENTATION CHECKLIST

### Phase 1: Agent Loop (IMMEDIATE)

- [ ] Update system prompt to include explicit loop instructions
- [ ] Add "CONTINUE" vs "DONE" signal to prompt
- [ ] Configure max turns per run (25)
- [ ] Add stop conditions

### Phase 2: Self-Reflection (WEEK 1)

- [ ] Create reflection prompt template
- [ ] Add post-action evaluation step
- [ ] Daily memory review habit
- [ ] Mistake logging system

### Phase 3: Habit System (WEEK 2)

- [ ] Implement habits.json storage
- [ ] Create habit detection logic
- [ ] Add habit execution to heartbeat
- [ ] Build habit management commands

### Phase 4: Continuous Learning (ONGOING)

- [ ] Pattern detection from memory
- [ ] Auto-suggest new habits
- [ ] Performance metrics tracking
- [ ] Self-improvement feedback loop

---

## 📊 METRICS TO TRACK

```json
{
  "performance": {
    "avgTurnsPerTask": 8.3,
    "successRate": 0.89,
    "toolCallAccuracy": 0.95,
    "selfCorrections": 12,
    "habitsCreated": 5,
    "habitsActive": 4,
    "proactiveActions": 23
  },
  "memory": {
    "totalFacts": 347,
    "lastPruned": "2026-02-01",
    "reflectionCount": 15
  }
}
```

---

## 🚨 CRITICAL INSIGHTS FROM RESEARCH

### From Anthropic's "Building Effective Agents"

1. **Agents = LLM + Tools + Loop + Environment Feedback**
   - Must get ground truth after each action
   - Use tool results to guide next decision
   - Don't hallucinate outcomes

2. **Simple > Complex**
   - Start with basic loop
   - Add sophistication only when needed
   - Measure before adding features

3. **Agent-Computer Interface (ACI) Matters**
   - Tool descriptions are prompts
   - Clear, unambiguous parameters
   - Examples in every tool doc

4. **Stopping Conditions Essential**
   - Max iterations (prevent infinite loops)
   - Success detection (task complete)
   - Failure threshold (ask for help)
   - Timeout (resource limits)

5. **Transparency > Black Box**
   - Log every decision
   - Show planning steps
   - Make reasoning visible
   - Enable debugging

---

**⚔️ THERION AUTONOMOUS AGENT v2.0 - DEUS VULT 🦞**
