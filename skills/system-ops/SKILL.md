---
name: system-ops
description: System operations - GPU status, Ollama management, service control, and system monitoring
metadata: {"openclaw":{"emoji":"🖥️","requires":{"bins":["nvidia-smi","ollama"]}}}
---

# System Operations

Manage the local system - GPU, Ollama, services, and monitoring.

## GPU Status (NVIDIA)

```bash
# Full status
nvidia-smi

# Compact view
nvidia-smi --query-gpu=name,memory.used,memory.total,utilization.gpu --format=csv

# Watch mode (live updates)
watch -n 1 nvidia-smi
```

## Ollama Management

### Models
```bash
# List installed models
ollama list

# Run model interactively
ollama run qwen3:therion-128k

# Model info
ollama show qwen3:therion-128k

# Pull new model
ollama pull llama3:8b

# Remove model
ollama rm model-name
```

### Service
```bash
# Check status
systemctl status ollama

# Restart
systemctl restart ollama

# Logs
journalctl -u ollama -f
```

### API
```bash
# Check if running
curl http://127.0.0.1:11434/api/tags

# Generate (one-shot)
curl http://127.0.0.1:11434/api/generate -d '{"model":"qwen3:therion-128k","prompt":"Hello"}'
```

## OpenClaw Gateway

```bash
# Check if running
ss -tlnp | grep 18789

# Logs
tail -f /tmp/openclaw/openclaw.log

# Config location
cat ~/.openclaw/openclaw.json
```

## Process Management

```bash
# Find process
ps aux | grep ollama
pgrep -a ollama

# Kill process
pkill ollama
kill -9 <PID>
```

## Disk Space

```bash
# Overview
df -h

# Ollama models size
du -sh ~/.ollama/models

# Find large files
find ~ -size +100M -type f 2>/dev/null
```

## Network

```bash
# Listening ports
ss -tlnp

# Specific port
ss -tlnp | grep 18789

# External IP
curl -s ifconfig.me
```

## Environment Paths

| Path | Purpose |
|------|---------|
| `~/.ollama` | Ollama home |
| `~/.openclaw` | OpenClaw config |
| `/tmp/openclaw` | OpenClaw logs |
| `/usr/local/cuda-12.6` | CUDA installation |
