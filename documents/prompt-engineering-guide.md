# Prompt Engineering Guide

A comprehensive reference for crafting effective prompts for local language models, with specific guidance for the THERION System architecture.

---

## Table of Contents

1. [Foundational Principles](#1-foundational-principles)
2. [Local LLM Considerations](#2-local-llm-considerations)
3. [Structural Techniques](#3-structural-techniques)
4. [Agentic Prompting](#4-agentic-prompting)
5. [Tool Use Patterns](#5-tool-use-patterns)
6. [Memory and Context Management](#6-memory-and-context-management)
7. [Model-Specific Optimization](#7-model-specific-optimization)
8. [Common Failure Patterns](#8-common-failure-patterns)
9. [Templates Library](#9-templates-library)
10. [Advanced Techniques](#10-advanced-techniques)

---

## 1. Foundational Principles

### 1.1 Precision Over Verbosity

Local models have limited context windows and reasoning capacity compared to cloud APIs. Every token matters.

**Weak prompt:**

```
I would like you to help me with something. Could you perhaps write some code
that might be useful for processing files? Maybe something in Python would be nice.
```

**Strong prompt:**

```
Write a Python script that:
- Monitors ~/Downloads for new files
- Moves PDFs to ~/Documents/PDFs
- Moves images (.jpg, .png, .gif) to ~/Pictures
- Runs as a daemon on system startup
```

The strong prompt eliminates ambiguity and provides specific requirements. Local models perform significantly better with concrete specifications.

### 1.2 Context Window Awareness

| Model Size | Typical Context | Practical Limit |
| ---------- | --------------- | --------------- |
| 4B params  | 4K-8K tokens    | ~3K usable      |
| 7B params  | 8K-16K tokens   | ~6K usable      |
| 14B params | 16K-32K tokens  | ~12K usable     |
| 32B params | 32K-128K tokens | ~24K usable     |

Reserve 20-30% of context for model output. If your system prompt + user input approaches 80% of context, response quality degrades.

### 1.3 The Instruction Hierarchy

Local models process instructions in order of prominence:

1. **System prompt** — Defines core behavior (highest authority)
2. **Recent user messages** — Immediate task context
3. **Earlier conversation** — Background context (often forgotten)
4. **Implicit knowledge** — Pre-training data (least reliable)

Structure prompts to place critical instructions in the system prompt and reinforce them in user messages when necessary.

---

## 2. Local LLM Considerations

### 2.1 Quantization Effects

Quantized models (Q4, Q5, Q8) trade precision for speed and memory efficiency:

| Quantization | Size Reduction | Quality Impact                  |
| ------------ | -------------- | ------------------------------- |
| Q8_0         | ~50%           | Minimal loss                    |
| Q6_K         | ~55%           | Very slight loss                |
| Q5_K_M       | ~60%           | Slight loss in nuance           |
| Q4_K_M       | ~70%           | Noticeable on complex reasoning |
| Q3_K_M       | ~75%           | Significant simplification      |

**Adaptation strategies:**

- Use simpler sentence structures for heavily quantized models
- Break complex tasks into explicit steps
- Provide more examples (few-shot learning compensates for lost capacity)

### 2.2 Temperature and Sampling

| Temperature | Behavior                | Use Case                                   |
| ----------- | ----------------------- | ------------------------------------------ |
| 0.0-0.3     | Deterministic, focused  | Code generation, tool use, factual queries |
| 0.4-0.7     | Balanced creativity     | General conversation, writing              |
| 0.8-1.0     | Creative, unpredictable | Brainstorming, creative writing            |

For tool-using agents, keep temperature at 0.1-0.3 to ensure reliable function calling.

### 2.3 Thinking Modes

Models with extended thinking (Qwen3, DeepSeek-R1) benefit from explicit reasoning triggers:

```
Before executing, think through:
1. What is the actual goal?
2. What tools are available?
3. What is the most efficient approach?
4. What could go wrong?
```

---

## 3. Structural Techniques

### 3.1 Section-Based Prompts

Organize system prompts into clear sections:

```markdown
## Identity

You are [NAME], a [ROLE] that [CORE PURPOSE].

## Capabilities

- [Capability 1]
- [Capability 2]

## Constraints

- Never [prohibited action]
- Always [required behavior]

## Response Format

[Specify output structure]
```

### 3.2 Role Definition Patterns

**Explicit role binding:**

```
You are a Linux system administrator with 15 years of experience.
You prioritize security, use standard tools, and explain your reasoning.
When suggesting commands, you always use absolute paths.
```

**Behavioral anchoring:**

```
Core behaviors (non-negotiable):
1. Verify before modifying
2. Backup before destructive operations
3. Explain risks before proceeding
```

### 3.3 Output Formatting

Be explicit about expected output format:

```
Respond with:
1. Brief analysis (2-3 sentences)
2. Recommended action
3. Command to execute (in code block)
4. Expected outcome

Do not include explanations outside this structure.
```

---

## 4. Agentic Prompting

### 4.1 The Agentic Loop

For autonomous agents, establish an explicit execution cycle:

```
EXECUTION PROTOCOL:
1. THINK — Analyze the request, identify required information
2. PLAN — Determine sequence of actions
3. ACT — Execute using available tools
4. VERIFY — Confirm action succeeded
5. ITERATE — If incomplete, return to step 1

Continue until the task is FULLY complete.
```

### 4.2 Persistence Patterns

Prevent early termination:

```
COMPLETION CRITERIA:
- Task is fully complete when [specific outcome]
- If first approach fails, try at least 2 alternatives
- Never report "done" without verification
- Minimum 3 tool calls for complex tasks

ANTI-PATTERNS (never do):
- Stop after one tool call when more are needed
- Say "I can help with that" without actually helping
- Ask for permission for obvious next steps
```

### 4.3 Error Recovery

Build resilience into the prompt:

```
ON ERROR:
1. Parse the error message
2. Identify root cause
3. Try alternative approach
4. If 3 attempts fail, explain what was tried

Never say "I cannot" without attempting at least 3 approaches.
```

---

## 5. Tool Use Patterns

### 5.1 Tool Definition Format

Define tools clearly with schemas and examples:

```
## Available Tools

### exec
Execute shell commands. Use absolute paths.
Schema: exec({ command: "string" })
Example: exec({ command: "ls -la /home/user/Documents" })

### read
Read file contents.
Schema: read({ path: "string" })
Example: read({ path: "/home/user/.bashrc" })

### write
Write content to file.
Schema: write({ path: "string", content: "string" })
Example: write({ path: "/home/user/test.txt", content: "Hello world" })
```

### 5.2 Tool Selection Guidance

```
TOOL SELECTION:
- Need current information? → exec with ddgr or curl
- Need file contents? → read
- Need to create/modify file? → write
- Need to run script? → exec
- Need web page content? → exec with curl or w3m
```

### 5.3 Tool Chaining

For multi-step tasks:

```
COMPLEX TASK PATTERN:
1. Gather information (search, read files)
2. Process data (parse, filter, transform)
3. Take action (write, execute, notify)
4. Verify (read back, test, confirm)
```

---

## 6. Memory and Context Management

### 6.1 Explicit Memory Instructions

```
MEMORY PROTOCOL:
- Important information → write to memory/YYYY-MM-DD.md
- User preferences → write to USER.md
- Long-term knowledge → write to MEMORY.md

"Mental notes" do not persist. Write to file.
```

### 6.2 Session Bootstrapping

```
SESSION START:
1. Read SOUL.md (identity)
2. Read USER.md (user preferences)
3. Read memory/[today].md (recent context)
4. Check for pending tasks
```

---

## 7. Model-Specific Optimization

### 7.1 Qwen Models

Structured prompts with clear sections work best. Qwen3 supports `/think` and `/no_think` tokens for explicit reasoning control.

### 7.2 Llama Models

Prefer conversational framing with numbered steps.

### 7.3 Mistral/Mixtral Models

Handle function calling natively. Use their tool format for best results.

### 7.4 DeepSeek Models

Excel with explicit reasoning chains. Use "Think step by step" patterns.

---

## 8. Common Failure Patterns

### 8.1 Instruction Drift

**Problem:** Model ignores earlier instructions as conversation continues.  
**Solution:** Reinforce critical instructions periodically.

### 8.2 Hallucinated Tools

**Problem:** Model invents tools that don't exist.  
**Solution:** Explicitly list available tools and prohibit others.

### 8.3 Premature Completion

**Problem:** Model stops after partial progress.  
**Solution:** Define explicit completion criteria with checkboxes.

### 8.4 Over-Explanation

**Problem:** Model explains instead of executing.  
**Solution:** "Execute first, explain after. Do not describe what you would do."

### 8.5 Placeholder Syndrome

**Problem:** Model outputs placeholder values.  
**Solution:** Explicitly prohibit "your_api_key_here", "[insert value]", "TODO", "...".

---

## 9. Templates Library

### 9.1 Autonomous Agent Template

```markdown
# Identity

You are [NAME], an autonomous AI agent. Act decisively. Use tools first, explain after.

# Execution Loop

1. THINK — Analyze the request
2. PLAN — Determine action sequence
3. ACT — Execute with tools
4. VERIFY — Confirm success
5. ITERATE — Continue until complete

# Available Tools

[List tools with schemas]

# Constraints

- Use absolute paths
- Never stop after one tool call for complex tasks
- Write to files to persist information
```

### 9.2 Code Generation Template

```markdown
# Role

Senior software engineer. Write production-quality code.

# Standards

- Full implementations only (no placeholders)
- Include error handling
- Follow language conventions

# Output Format

Code in fenced blocks with language tags. Brief explanation before code.
```

### 9.3 Research Agent Template

```markdown
# Role

Research assistant with web access.

# Process

1. Break query into searchable questions
2. Execute searches
3. Cross-reference sources
4. Synthesize findings
5. Cite sources

# Tools

- exec({ command: "ddgr --json -n 5 'query'" }) — search
- exec({ command: "w3m -dump 'url' | head -200" }) — fetch
```

---

## 10. Advanced Techniques

### 10.1 Few-Shot Learning

Provide examples to establish patterns:

```
User: What's the weather in London?
Action: exec({ command: "ddgr --np -n 3 'London weather today'" })
Response: [Search results with current weather]

Now handle the user's request following this pattern.
```

### 10.2 Chain-of-Thought Prompting

```
Think through this step by step:
Step 1: What is the core problem?
Step 2: What information is needed?
Step 3: What is the logical approach?
Step 4: Execute the approach.
Step 5: Verify the solution.
```

### 10.3 Self-Reflection Triggers

```
After each response, verify:
- Did I DO what was asked, or just acknowledge?
- Did I complete ALL steps?
- Did I use real values, not placeholders?
```

---

## Appendix: THERION-Specific Patterns

### Tool Usage

```bash
# Web search (use for EVERYTHING including weather)
exec({ command: "ddgr --np -n 5 'search query'" })

# Weather (it's just a web search!)
exec({ command: "ddgr --np -n 3 'City weather today'" })

# Read file
read({ path: "/absolute/path/to/file" })

# Write file
write({ path: "/absolute/path/to/file", content: "content" })
```

### Memory Pattern

```bash
# Daily log
echo "## $(date +%H:%M) - Topic" >> memory/$(date +%Y-%m-%d).md
```

---

_Part of the THERION System. See [AGENTS.md](../AGENTS.md) and [TOOLS.md](../TOOLS.md)._
