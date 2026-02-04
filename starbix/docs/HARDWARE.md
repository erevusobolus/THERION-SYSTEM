# 🖥️ STARBIX Hardware Requirements

## Minimum Requirements

| Component    | Minimum                   | Notes                              |
| ------------ | ------------------------- | ---------------------------------- |
| **CPU**      | 4 cores (x86_64 or ARM64) | Intel i5/Ryzen 5 or equivalent     |
| **RAM**      | 8GB                       | 16GB recommended for larger models |
| **Storage**  | 10GB free                 | SSD strongly recommended           |
| **GPU VRAM** | 4GB (optional)            | Required for GPU acceleration      |

## Recommended Configurations

### 💻 Budget Setup (CPU-only)

- **CPU**: Intel i5-10400 / AMD Ryzen 5 3600
- **RAM**: 16GB DDR4
- **Storage**: 256GB SSD
- **GPU**: None (integrated graphics fine)
- **Model**: `qwen3:1.5b` (lightweight)
- **Performance**: ~10 tokens/sec

### 🎮 Gaming PC Setup

- **CPU**: Intel i5-12400 / AMD Ryzen 5 5600X
- **RAM**: 16GB+ DDR4/DDR5
- **GPU**: RTX 3060 (12GB) or RX 6700 XT (12GB)
- **Storage**: 512GB NVMe SSD
- **Model**: `qwen3:8b` (high quality)
- **Performance**: ~30-50 tokens/sec

### 🚀 Enthusiast Setup

- **CPU**: Intel i7-13700K / AMD Ryzen 7 7800X3D
- **RAM**: 32GB+ DDR5
- **GPU**: RTX 4070 Ti (12GB) or better
- **Storage**: 1TB NVMe SSD
- **Model**: `qwen3:8b` or larger
- **Performance**: ~60-100 tokens/sec

### 🍎 Apple Silicon Setup

- **Device**: MacBook Air M1 (8GB) — minimum
- **Device**: MacBook Pro M2/M3 (16GB+) — recommended
- **Model**: `qwen3:4b` on 8GB, `qwen3:8b` on 16GB+
- **Performance**: ~20-40 tokens/sec (Metal acceleration)

## Model Requirements

| Model        | Min VRAM | Min RAM (CPU) | Speed       | Quality            |
| ------------ | -------- | ------------- | ----------- | ------------------ |
| `qwen3:1.5b` | 2GB      | 4GB           | ⚡⚡⚡ Fast | ⭐⭐ Basic         |
| `qwen3:4b`   | 4GB      | 8GB           | ⚡⚡ Good   | ⭐⭐⭐ Good        |
| `qwen3:8b`   | 8GB      | 16GB          | ⚡ Moderate | ⭐⭐⭐⭐ Excellent |
| `qwen3:14b`  | 12GB     | 24GB          | 🐢 Slow     | ⭐⭐⭐⭐⭐ Best    |

## GPU Compatibility

### ✅ NVIDIA (Recommended)

- **Supported**: GTX 10-series and newer
- **Optimal**: RTX 30/40 series
- **Driver**: 525+ (CUDA 12.0+)
- **Check**: `nvidia-smi`

### ✅ AMD (ROCm)

- **Supported**: RX 5000 series and newer
- **Driver**: ROCm 5.4+
- **Note**: May need `HSA_OVERRIDE_GFX_VERSION`
- **Check**: `rocm-smi`

### ✅ Apple Silicon

- **Supported**: All M1/M2/M3/M4 chips
- **Backend**: Metal (automatic)
- **Note**: Uses unified memory
- **Check**: `system_profiler SPDisplaysDataType`

### ✅ Intel Arc

- **Supported**: Arc A-series
- **Status**: Experimental in Ollama
- **Driver**: Latest Intel drivers

### ⚠️ Older GPUs

- GTX 900 series: Limited support, slow
- AMD Polaris (RX 400/500): May work with workarounds
- Intel UHD: CPU fallback only

## Network Requirements

| Feature              | Requirement                    |
| -------------------- | ------------------------------ |
| **Initial download** | ~5GB for models                |
| **Telegram**         | Outbound HTTPS (443)           |
| **Web search**       | Outbound HTTP/HTTPS            |
| **Local operation**  | No internet needed after setup |

## Disk Space Breakdown

| Component           | Size    |
| ------------------- | ------- |
| Ollama runtime      | ~500MB  |
| qwen3:1.5b model    | ~1.5GB  |
| qwen3:4b model      | ~2.5GB  |
| qwen3:8b model      | ~5GB    |
| STARBIX files       | ~100MB  |
| Node.js deps        | ~200MB  |
| **Total (typical)** | ~5-10GB |

## Operating System Support

### ✅ Fully Supported

- Ubuntu 22.04+ LTS
- Debian 12+
- Fedora 38+
- Arch Linux (rolling)
- macOS 12+ (Monterey)

### 🟡 Partial Support

- Windows 11 (via WSL2)
- Pop!\_OS 22.04+
- Linux Mint 21+
- Other Ubuntu-based

### ❌ Not Supported

- Windows (native) — Use WSL2
- Windows 10 (old builds)
- ChromeOS (unless Linux enabled)
- Android/iOS

## Performance Tips

### For Low-End Systems

1. Use `qwen3:1.5b` model
2. Reduce context window in config
3. Disable background heartbeat
4. Close other GPU-using apps

### For Best Performance

1. Use NVMe SSD (not HDD)
2. Keep 2GB+ RAM free
3. Use GPU acceleration
4. Keep Ollama running (avoids cold starts)

### Monitoring Resources

```bash
# GPU usage (NVIDIA)
nvidia-smi -l 1

# RAM usage
free -h

# CPU usage
htop

# Disk usage
df -h ~/.starbix
```

## Troubleshooting Hardware Issues

### Out of Memory (OOM)

```bash
# Use smaller model
starbix config set model "qwen3:1.5b"

# Reduce context
# Edit config.json: "contextTokens": 16384
```

### Slow Performance

```bash
# Check if GPU is being used
ollama ps

# Force CPU mode (if GPU issues)
export CUDA_VISIBLE_DEVICES=""
ollama run qwen3:4b
```

### GPU Not Detected

```bash
# NVIDIA: Check driver
nvidia-smi

# AMD: Check ROCm
rocm-smi

# Reinstall Ollama with GPU support
curl -fsSL https://ollama.com/install.sh | sh
```

---

**Questions?** Check our [Discord](https://discord.gg/starbix) or [GitHub Issues](https://github.com/THERION-AI/starbix/issues)
