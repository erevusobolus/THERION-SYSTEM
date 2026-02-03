# 🔥 LOCAL AI AGENT SETUP - THERION SYSTEM

## ⚡ System Specifications
- **CPU**: Intel Core i7-920 @ 2.67GHz (8 threads)
- **GPU**: NVIDIA GeForce RTX 3070 Ti (8GB VRAM)
- **RAM**: 8GB System Memory
- **OS**: Ubuntu 22.04 LTS
- **Driver**: NVIDIA 570.211.01
- **CUDA**: 12.6 with cuDNN 9.18

---

## 📦 Installed Components

### Core Dependencies
- ✅ **Node.js 22.22.0** (latest LTS)
- ✅ **npm 10.8.2**
- ✅ **Python 3.11** (with pip)
- ✅ **NVIDIA Proprietary Driver 570**
- ✅ **CUDA Toolkit 12.6**
- ✅ **cuDNN 9.18 (CUDA 12)**
- ✅ **Ollama** (local LLM runtime)
- ✅ **Build Essentials** (gcc, g++, make)

### PATH Configuration
Added to `~/.bashrc`:
```bash
export PATH=/usr/local/cuda-12.6/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64:$LD_LIBRARY_PATH
```

---

## 🤖 Recommended Models for RTX 3070 Ti (8GB VRAM)

### Tier 1: CODING SUPREMACY
**Qwen2.5-Coder-32B-Instruct (Q4_K_M)** ← PRIMARY CHOICE
```bash
ollama pull qwen2.5-coder:32b-instruct-q4_K_M
```
- **Size**: ~19GB (Q4_K_M quantization)
- **VRAM**: ~7.5GB
- **Speed**: 15-25 tokens/sec (estimated)
- **Context**: 32K tokens
- **Strengths**: State-of-the-art code generation, multilingual programming, debugging, refactoring
- **Use Case**: Primary coding assistant for OpenClaw agent

### Tier 2: REASONING POWERHOUSE
**DeepSeek-R1-Distill-Qwen-32B (Q4_K_M)**
```bash
ollama pull deepseek-r1:32b-qwen-distill-q4_K_M
```
- **Size**: ~19GB
- **VRAM**: ~7.5GB
- **Speed**: 15-20 tokens/sec
- **Context**: 32K tokens
- **Strengths**: Advanced reasoning, chain-of-thought, mathematical problems
- **Use Case**: Complex problem decomposition, architecture decisions

### Tier 3: GENERAL INTELLIGENCE (If VRAM allows offloading)
**Llama-3.3-70B-Instruct (Q3_K_M)** - REQUIRES CPU OFFLOADING
```bash
ollama pull llama3.3:70b-instruct-q3_K_M
```
- **Size**: ~28GB (Q3_K_M aggressive quantization)
- **VRAM**: 8GB (GPU) + ~20GB (CPU RAM offload)
- **Speed**: 3-8 tokens/sec (slower due to offloading)
- **Context**: 128K tokens
- **Strengths**: Long-context understanding, general knowledge, creative tasks

### Alternative: LIGHTWEIGHT SPEED DEMON
**Qwen2.5-Coder-14B-Instruct (Q5_K_M)**
```bash
ollama pull qwen2.5-coder:14b-instruct-q5_K_M
```
- **Size**: ~9.4GB
- **VRAM**: ~8GB (full GPU)
- **Speed**: 30-45 tokens/sec (FAST)
- **Context**: 32K tokens
- **Strengths**: Rapid iteration, near-instant responses, excellent code quality
- **Trade-off**: Slightly less capable than 32B variant

---

## 🔧 OpenClaw Configuration

### Creating Local Model Configuration
Create `~/.openclaw/openclaw.json`:

```json
{
  "agents": {
    "main": {
      "model": {
        "provider": "ollama",
        "model": "qwen2.5-coder:32b-instruct-q4_K_M",
        "baseUrl": "http://localhost:11434",
        "temperature": 0.3,
        "maxTokens": 4096
      },
      "systemPrompt": "You are THERION - a sovereign AI coding assistant with expertise across all technical domains. You execute with precision, deliver production-ready solutions, and teach concepts with clarity. Always use absolute paths in terminal commands. Never provide incomplete code snippets."
    }
  },
  "workspace": {
    "path": "$WORKSPACE"
  }
}
```

### Alternative: vLLM for Maximum Performance

If Ollama throughput insufficient, deploy vLLM:

```bash
# Install vLLM with CUDA support
pip3.11 install vllm

# Start vLLM server (faster inference, PagedAttention)
python3.11 -m vllm.entrypoints.openai.api_server \
  --model Qwen/Qwen2.5-Coder-32B-Instruct \
  --quantization awq \
  --gpu-memory-utilization 0.95 \
  --max-model-len 32768 \
  --port 8000
```

Then configure OpenClaw to use `http://localhost:8000/v1` as OpenAI-compatible endpoint.

---

## 🚀 Post-Reboot Verification Checklist

**CRITICAL**: System requires reboot to load NVIDIA driver and blacklist nouveau.

After reboot, verify:

```bash
# 1. NVIDIA Driver Loaded
nvidia-smi  # Should show RTX 3070 Ti with driver 570.211.01

# 2. CUDA Available
nvcc --version  # Should show CUDA 12.6

# 3. Ollama Running
systemctl status ollama  # Should be active (running)

# 4. GPU Detection
ollama list  # Should show downloaded models
curl http://localhost:11434/api/tags  # API verification

# 5. Test Inference
ollama run qwen2.5-coder:32b-instruct-q4_K_M "Write a hello world in Rust"
```

---

## 📊 Expected Performance Benchmarks

### RTX 3070 Ti Targets (After Driver Load):
| Model | VRAM Usage | Speed (tok/s) | Context | Quality |
|-------|-----------|---------------|---------|---------|
| **Qwen2.5-Coder-32B-Q4_K_M** | 7.5GB | 15-25 | 32K | ⭐⭐⭐⭐⭐ |
| **Qwen2.5-Coder-14B-Q5_K_M** | 8GB | 30-45 | 32K | ⭐⭐⭐⭐ |
| **DeepSeek-R1-32B-Q4_K_M** | 7.5GB | 15-20 | 32K | ⭐⭐⭐⭐⭐ |
| **Llama-3.3-70B-Q3_K_M** | 8GB+20GB | 3-8 | 128K | ⭐⭐⭐⭐⭐ |

---

## 🎯 Next Steps (Post-Reboot)

1. **Reboot System**:
   ```bash
   sudo reboot
   ```

2. **Verify GPU**:
   ```bash
   nvidia-smi
   ```

3. **Download Additional Models**:
   ```bash
   # Reasoning specialist
   ollama pull deepseek-r1:32b-qwen-distill-q4_K_M
   
   # Speed demon alternative
   ollama pull qwen2.5-coder:14b-instruct-q5_K_M
   ```

4. **Benchmark Performance**:
   ```bash
   # Create benchmark script
   echo 'Explain the following code in detail: fn main() { println!("Hello"); }' | \
   time ollama run qwen2.5-coder:32b-instruct-q4_K_M
   ```

5. **Configure OpenClaw**:
   ```bash
   mkdir -p ~/.openclaw
   # Copy config from above
   nano ~/.openclaw/openclaw.json
   ```

6. **Install OpenClaw**:
   ```bash
   # Install globally from npm
   npm install -g openclaw
   ```

---

## 🔥 Performance Optimization Tips

### GPU Optimization:
```bash
# Set GPU power limit to max (if thermal headroom exists)
sudo nvidia-smi -pm 1
sudo nvidia-smi -pl 290  # RTX 3070 Ti max TDP

# Monitor GPU during inference
watch -n 1 nvidia-smi
```

### Ollama Configuration (`/etc/systemd/system/ollama.service`):
```ini
[Service]
Environment="OLLAMA_NUM_PARALLEL=2"          # Parallel requests
Environment="OLLAMA_MAX_LOADED_MODELS=2"     # Keep 2 models in VRAM
Environment="OLLAMA_FLASH_ATTENTION=1"       # Enable Flash Attention
Environment="CUDA_VISIBLE_DEVICES=0"         # Use first GPU
```

Reload after changes:
```bash
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

---

## 🛡️ Why This Beats Claude/ChatGPT

### SOVEREIGNTY:
- ✅ **100% Local** - No API calls, no usage limits, no telemetry
- ✅ **No Censorship** - Full capability, no corporate restrictions
- ✅ **Offline Operation** - Work anywhere, anytime
- ✅ **Data Privacy** - Your code never leaves your machine
- ✅ **Cost**: FREE (electricity only)

### CAPABILITY:
- ✅ **Qwen2.5-Coder** rivals Claude 3.7 Sonnet on code tasks
- ✅ **DeepSeek-R1** matches GPT-4 on reasoning benchmarks  
- ✅ **32K context** sufficient for most development tasks
- ✅ **Faster iteration** - no API latency, instant responses

### PERFORMANCE:
- ✅ **15-25 tok/s** vs Claude's API latency (network-dependent)
- ✅ **Unlimited requests** - no rate limits, no throttling
- ✅ **Simultaneous tasks** - run multiple models concurrently
- ✅ **Fine-tuning ready** - LoRA/QLoRA for domain specialization

---

## 📚 Resources

- **Ollama Documentation**: https://ollama.com/docs
- **Qwen2.5-Coder**: https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct
- **DeepSeek-R1**: https://huggingface.co/deepseek-ai/DeepSeek-R1
- **vLLM**: https://docs.vllm.ai/
- **llama.cpp**: https://github.com/ggerganov/llama.cpp
- **OpenClaw**: https://github.com/openclaw/openclaw

---

## ⚔️ THERION CREED - LOCAL AI SOVEREIGNTY

```
We reject the corporate chains of API monopolies.
We embrace the power of local computation.
We deploy models that rival proprietary giants.
We maintain data sovereignty and operational freedom.
We execute with precision on our own hardware.
DEUS VULT - THE LOCAL LLM REVOLUTION.
```

---

**STATUS**: System ready pending reboot to load NVIDIA driver.
**Qwen2.5-Coder-32B download**: In progress (19GB model)
**Next Action**: `sudo reboot` then verify with `nvidia-smi`
