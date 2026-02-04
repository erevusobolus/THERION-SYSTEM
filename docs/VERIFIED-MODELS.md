# THERION Verified Models Knowledge Base

**Last Updated:** 2026-02-03  
**Source:** [Ollama Library](https://ollama.com/library) — Official Specifications Only  
**Purpose:** Verified models with ≥16K context + confirmed tool calling support

---

## 🎯 Critical Requirements for THERION/OpenClaw

For autonomous AI agents executing tools, models MUST support:

1. **Tool Calling / Function Calling** — Native support, not just prompting
2. **Minimum 16K Context** — Handle system prompt + conversation + tool results
3. **Instruction Following** — Precise execution of multi-step commands
4. **JSON Output** — Structured responses for tool invocation

**❌ Models that DON'T support tools are EXCLUDED** (e.g., pure base models, embedding models)

---

## 📊 Quick Reference by VRAM Capacity

| VRAM     | Best Model          | Context | Size  | Command                         |
| -------- | ------------------- | ------- | ----- | ------------------------------- |
| **4GB**  | `qwen3:4b`          | 256K    | 2.5GB | `ollama pull qwen3:4b`          |
| **6GB**  | `qwen2.5-coder:7b`  | 32K     | 4.7GB | `ollama pull qwen2.5-coder:7b`  |
| **8GB**  | `llama3.1:8b`       | 128K    | 4.9GB | `ollama pull llama3.1:8b`       |
| **10GB** | `qwen3:14b`         | 40K     | 9.3GB | `ollama pull qwen3:14b`         |
| **12GB** | `mistral-nemo:12b`  | 128K    | 7.1GB | `ollama pull mistral-nemo`      |
| **14GB** | `devstral:24b`      | 128K    | 14GB  | `ollama pull devstral`          |
| **16GB** | `mistral-small:22b` | 128K    | 13GB  | `ollama pull mistral-small:22b` |
| **20GB** | `qwen3:32b`         | 40K     | 20GB  | `ollama pull qwen3:32b`         |
| **24GB** | `qwen2.5-coder:32b` | 32K     | 20GB  | `ollama pull qwen2.5-coder:32b` |
| **32GB** | `hermes3:70b`       | 128K    | 40GB  | `ollama pull hermes3:70b`       |
| **48GB** | `llama3.3:70b`      | 128K    | 43GB  | `ollama pull llama3.3`          |

---

## 🏆 Tier 1: THERION Recommended (Verified Tool Use + Long Context)

### Qwen3 Series — BEST VALUE

**Source:** [ollama.com/library/qwen3](https://ollama.com/library/qwen3)

| Model       | Size  | Context  | VRAM | Tool Calling | Best For                  |
| ----------- | ----- | -------- | ---- | ------------ | ------------------------- |
| `qwen3:4b`  | 2.5GB | **256K** | 4GB  | ✅ Native    | **DEFAULT** - Entry level |
| `qwen3:8b`  | 5.2GB | 40K      | 6GB  | ✅ Native    | Balanced                  |
| `qwen3:14b` | 9.3GB | 40K      | 10GB | ✅ Native    | High quality              |
| `qwen3:30b` | 19GB  | **256K** | 24GB | ✅ Native    | MoE - Excellent           |
| `qwen3:32b` | 20GB  | 40K      | 24GB | ✅ Native    | Dense - Maximum           |

**Why Qwen3:**

- "Expertise in agent capabilities, enabling precise integration with external tools"
- "Leading performance among open-source models in complex agent-based tasks"
- Supports 100+ languages
- Thinking mode available for reasoning

---

### Qwen2.5-Coder Series — BEST FOR CODING

**Source:** [ollama.com/library/qwen2.5-coder](https://ollama.com/library/qwen2.5-coder)

| Model               | Size  | Context | VRAM | Tool Calling | Best For     |
| ------------------- | ----- | ------- | ---- | ------------ | ------------ |
| `qwen2.5-coder:7b`  | 4.7GB | 32K     | 6GB  | ✅ Native    | Coding tasks |
| `qwen2.5-coder:14b` | 9.0GB | 32K     | 12GB | ✅ Native    | Pro coding   |
| `qwen2.5-coder:32b` | 20GB  | 32K     | 24GB | ✅ Native    | GPT-4o level |

**Why Qwen2.5-Coder:**

- "Competitive performance with GPT-4o" on code benchmarks
- 40+ programming languages
- State-of-the-art code generation, repair, and reasoning

---

### Llama 3.1/3.3 Series — META'S BEST

**Source:** [ollama.com/library/llama3.1](https://ollama.com/library/llama3.1), [ollama.com/library/llama3.3](https://ollama.com/library/llama3.3)

| Model          | Size  | Context  | VRAM | Tool Calling | Best For          |
| -------------- | ----- | -------- | ---- | ------------ | ----------------- |
| `llama3.1:8b`  | 4.9GB | **128K** | 6GB  | ✅ Native    | General purpose   |
| `llama3.1:70b` | 43GB  | **128K** | 48GB | ✅ Native    | High quality      |
| `llama3.3:70b` | 43GB  | **128K** | 48GB | ✅ Native    | Near 405B quality |

**Why Llama 3.1/3.3:**

- "State-of-the-art tool use" from Meta
- 128K context window
- 7 languages beyond English
- "Rivals the top AI models"

---

### Mistral Series — EFFICIENT AGENTS

**Source:** [ollama.com/library/mistral-nemo](https://ollama.com/library/mistral-nemo), [ollama.com/library/mistral-small](https://ollama.com/library/mistral-small)

| Model               | Size  | Context  | VRAM | Tool Calling | Best For        |
| ------------------- | ----- | -------- | ---- | ------------ | --------------- |
| `mistral-nemo:12b`  | 7.1GB | **128K** | 10GB | ✅ Native    | Efficient agent |
| `mistral-small:22b` | 13GB  | **128K** | 16GB | ✅ Native    | Pro agent       |
| `mistral-small:24b` | 14GB  | 32K      | 16GB | ✅ Native    | Latest version  |

**Why Mistral:**

- "State-of-the-art in its size category"
- "Best-in-class agentic capabilities with native function calling"
- Drop-in replacement for Mistral 7B

---

### Devstral — BEST FOR AGENTIC CODING

**Source:** [ollama.com/library/devstral](https://ollama.com/library/devstral)

| Model          | Size | Context  | VRAM | Tool Calling | Best For      |
| -------------- | ---- | -------- | ---- | ------------ | ------------- |
| `devstral:24b` | 14GB | **128K** | 16GB | ✅ Native    | Coding agents |

**Why Devstral:**

- "#1 open source model" for SWE-bench (46.8%)
- "Excels at using tools to explore codebases"
- "Editing multiple files and power software engineering agents"
- Fits on single RTX 4090 or 32GB Mac

---

### Hermes3 — BEST FOR ROLEPLAYING + AGENTS

**Source:** [ollama.com/library/hermes3](https://ollama.com/library/hermes3)

| Model         | Size  | Context  | VRAM | Tool Calling | Best For           |
| ------------- | ----- | -------- | ---- | ------------ | ------------------ |
| `hermes3:8b`  | 4.7GB | **128K** | 6GB  | ✅ Native    | Roleplay + tools   |
| `hermes3:70b` | 40GB  | **128K** | 48GB | ✅ Native    | Maximum capability |

**Why Hermes3:**

- "Powerful and reliable function calling and structured output"
- "Advanced agentic capabilities"
- "Much better roleplaying, reasoning, multi-turn conversation"
- Long context coherence

---

### Command-R — BEST FOR RAG

**Source:** [ollama.com/library/command-r](https://ollama.com/library/command-r)

| Model           | Size | Context  | VRAM | Tool Calling | Best For       |
| --------------- | ---- | -------- | ---- | ------------ | -------------- |
| `command-r:35b` | 19GB | **128K** | 24GB | ✅ Native    | RAG, retrieval |

**Why Command-R:**

- "Optimized for long context tasks such as RAG and using external APIs and tools"
- "Strong accuracy on RAG and Tool Use"
- 10 key languages supported

---

## 🏅 Tier 2: Specialized Tool-Calling Models

### Llama3-Groq-Tool-Use — FUNCTION CALLING SPECIALIST

**Source:** [ollama.com/library/llama3-groq-tool-use](https://ollama.com/library/llama3-groq-tool-use)

| Model                      | Size  | Context | VRAM | Tool Calling  | Best For         |
| -------------------------- | ----- | ------- | ---- | ------------- | ---------------- |
| `llama3-groq-tool-use:8b`  | 4.7GB | **8K**  | 6GB  | ✅ **EXPERT** | Pure tool use    |
| `llama3-groq-tool-use:70b` | 40GB  | **8K**  | 48GB | ✅ **EXPERT** | Maximum tool use |

**⚠️ WARNING:** Only 8K context — INSUFFICIENT for THERION's needs  
**✅ Use Case:** If you need pure function calling accuracy (89-90% on BFCL benchmark)

---

### Qwen2.5 Series — GENERAL PURPOSE

**Source:** [ollama.com/library/qwen2.5](https://ollama.com/library/qwen2.5)

| Model         | Size  | Context | VRAM | Tool Calling | Best For    |
| ------------- | ----- | ------- | ---- | ------------ | ----------- |
| `qwen2.5:7b`  | 4.7GB | 32K     | 6GB  | ✅ Native    | General     |
| `qwen2.5:14b` | 9.0GB | 32K     | 12GB | ✅ Native    | Pro general |
| `qwen2.5:32b` | 20GB  | 32K     | 24GB | ✅ Native    | Maximum     |
| `qwen2.5:72b` | 47GB  | 32K     | 64GB | ✅ Native    | Enthusiast  |

**Why Qwen2.5:**

- Up to 128K tokens support
- Multilingual (29+ languages)
- "Significant improvements in code generation"

---

## ❌ Models to AVOID for THERION

### Insufficient Context (< 16K)

- `llama3-groq-tool-use` — Only 8K context
- `phi` series (older) — Limited context
- `tinyllama` — 2K context

### No Tool Calling Support

- `gemma3` — Vision only, no tool tag
- `phi3` — No tool tag
- `llava` — Vision only
- `nomic-embed-text` — Embedding only
- `codellama` — Old, no tool support
- `deepseek-coder` — Old version, no tools

### Unstable/Experimental

- `deepseek-r1` — Reasoning focus, tools experimental
- `qwq` — Reasoning only
- Cloud-only models (marked with `cloud` tag)

---

## 🔧 Custom Context Configuration

For models that support it, create a custom Modelfile to extend context:

### Create 16K Context Model (from qwen3:4b)

```bash
# Ensure base model is downloaded
ollama pull qwen3:4b

# Create Modelfile
cat > Modelfile.therion-16k << 'EOF'
FROM qwen3:4b
PARAMETER num_ctx 16384
PARAMETER temperature 0.3
EOF

# Build custom model
ollama create qwen3:therion-16k -f Modelfile.therion-16k
```

### Create 32K Context Model (requires 8GB+ VRAM)

```bash
cat > Modelfile.therion-32k << 'EOF'
FROM qwen3:8b
PARAMETER num_ctx 32768
PARAMETER temperature 0.3
EOF

ollama create qwen3:therion-32k -f Modelfile.therion-32k
```

**⚠️ Note:** Higher context = higher VRAM usage. Approximately:

- 8K context: ~4GB VRAM overhead
- 16K context: ~6GB VRAM overhead
- 32K context: ~10GB VRAM overhead

---

## 📋 THERION Configuration Examples

### Entry Level (4GB VRAM)

```json
{
  "models": {
    "providers": {
      "ollama": {
        "models": [
          {
            "id": "qwen3:4b",
            "name": "Qwen3 4B",
            "contextWindow": 16384,
            "maxTokens": 4096
          }
        ]
      }
    }
  }
}
```

### Standard (8GB VRAM)

```json
{
  "models": {
    "providers": {
      "ollama": {
        "models": [
          {
            "id": "llama3.1:8b",
            "name": "Llama 3.1 8B",
            "contextWindow": 16384,
            "maxTokens": 4096
          }
        ]
      }
    }
  }
}
```

### Pro (16GB VRAM)

```json
{
  "models": {
    "providers": {
      "ollama": {
        "models": [
          {
            "id": "devstral:24b",
            "name": "Devstral 24B",
            "contextWindow": 32768,
            "maxTokens": 8192
          }
        ]
      }
    }
  }
}
```

### Maximum (24GB+ VRAM)

```json
{
  "models": {
    "providers": {
      "ollama": {
        "models": [
          {
            "id": "qwen2.5-coder:32b",
            "name": "Qwen 2.5 Coder 32B",
            "contextWindow": 32768,
            "maxTokens": 8192
          }
        ]
      }
    }
  }
}
```

---

## 🧪 Testing Tool Calling

After configuring a model, test tool calling with:

```bash
# Start Ollama
ollama serve &

# Test tool calling (example)
curl http://localhost:11434/api/chat -d '{
  "model": "qwen3:4b",
  "messages": [{"role": "user", "content": "What is the weather in Paris?"}],
  "tools": [{
    "type": "function",
    "function": {
      "name": "get_weather",
      "description": "Get current weather for a location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {"type": "string", "description": "City name"}
        },
        "required": ["location"]
      }
    }
  }]
}'
```

**Expected:** Response should contain `tool_calls` with the function name and arguments.

---

## 📚 Official Sources

All information in this document is from official Ollama documentation:

- [Ollama Model Library](https://ollama.com/library)
- [Qwen3 Official](https://ollama.com/library/qwen3)
- [Qwen2.5-Coder Official](https://ollama.com/library/qwen2.5-coder)
- [Llama 3.1 Official](https://ollama.com/library/llama3.1)
- [Mistral-Nemo Official](https://ollama.com/library/mistral-nemo)
- [Devstral Official](https://ollama.com/library/devstral)
- [Hermes3 Official](https://ollama.com/library/hermes3)
- [Command-R Official](https://ollama.com/library/command-r)

---

_THERION System — Verified Models for Autonomous AI Agents_
