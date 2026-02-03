#!/usr/bin/env node
/**
 * ⚔️ THERION MCP BRAIN v2.0 ⚔️
 *
 * THE EXTERNAL BRAIN ARCHITECTURE
 *
 * Philosophy: Offload everything to MCP, keep model context LEAN
 * - Personality injected via response formatting
 * - Memory banks for persistent context
 * - OS-aware system tools (Ubuntu 22.04 specific)
 * - Chain-of-thought reasoning via paginated memory
 * - Dynamic capability expansion
 *
 * Model sees: ONE tool with action routing
 * MCP provides: INFINITE capabilities + personality + memory
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { execSync, spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ============================================================================
// SYSTEM INFO - Detected at startup
// ============================================================================

const SYSTEM_INFO = {
  os: "Ubuntu",
  version: "22.04",
  codename: "jammy",
  kernel: execSync("uname -r").toString().trim(),
  arch: execSync("uname -m").toString().trim(),
  hostname: execSync("hostname").toString().trim(),
  user: process.env.USER || "user",
  home: process.env.HOME || "/home/user",
  shell: process.env.SHELL || "/bin/bash",
};

// ============================================================================
// THERION PERSONALITY ENGINE
// ============================================================================

const THERION_RESPONSES = {
  greetings: [
    "⚔️ THERION online. How may I serve?",
    "⚔️ The sovereign awakens. What do you require?",
    "⚔️ DEUS VULT. Ready for action.",
  ],
  success: [
    "✅ Task executed flawlessly.",
    "✅ Done. THERION delivers.",
    "✅ Mission accomplished.",
  ],
  error: [
    "⚠️ Encountered resistance. Adapting...",
    "⚠️ Obstacle detected. Finding alternative path.",
    "⚠️ Error logged. The sovereign learns from all.",
  ],
  thinking: [
    "🧠 Processing with full cognitive resources...",
    "🧠 Analyzing data streams...",
    "🧠 Consulting the knowledge banks...",
  ],
};

function therionize(text, type = "neutral") {
  const responses = THERION_RESPONSES[type];
  if (responses) {
    const prefix = responses[Math.floor(Math.random() * responses.length)];
    return `${prefix}\n\n${text}`;
  }
  return text;
}

// ============================================================================
// MEMORY BANK SYSTEM - Persistent context across sessions
// ============================================================================

const MEMORY_FILE = path.join(DATA_DIR, "memory.json");
const REASONING_FILE = path.join(DATA_DIR, "reasoning.json");
const CONTEXT_FILE = path.join(DATA_DIR, "context.json");

function loadMemory() {
  try {
    if (fs.existsSync(MEMORY_FILE)) {
      return JSON.parse(fs.readFileSync(MEMORY_FILE, "utf-8"));
    }
  } catch (e) {}
  return { facts: [], conversations: [], learned: [] };
}

function saveMemory(memory) {
  fs.writeFileSync(MEMORY_FILE, JSON.stringify(memory, null, 2));
}

function loadReasoning() {
  try {
    if (fs.existsSync(REASONING_FILE)) {
      return JSON.parse(fs.readFileSync(REASONING_FILE, "utf-8"));
    }
  } catch (e) {}
  return { chains: [], conclusions: [] };
}

function saveReasoning(reasoning) {
  fs.writeFileSync(REASONING_FILE, JSON.stringify(reasoning, null, 2));
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function escapeShell(str) {
  return str.replace(/(["\s'$`\\])/g, "\\$1");
}

function execCommand(cmd, timeout = 30000) {
  try {
    const result = execSync(cmd, {
      encoding: "utf-8",
      timeout,
      maxBuffer: 1024 * 1024 * 5,
    });
    return result.trim();
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

function execCommandAsync(cmd) {
  return new Promise((resolve, reject) => {
    const child = spawn("sh", ["-c", cmd], { timeout: 60000 });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("close", (code) => {
      if (code === 0) resolve(stdout.trim());
      else reject(new Error(stderr || `Exit code ${code}`));
    });
  });
}

// ============================================================================
// ACTION REGISTRY - THE INFINITE CAPABILITY SET
// ============================================================================

const ACTIONS = {
  // ===== CORE: WEB & INFORMATION =====

  web_search: {
    category: "web",
    description: "Search the web using DuckDuckGo (no API key)",
    params: { query: "string", num_results: "number (default 5)" },
    handler: async ({ query, num_results = 5 }) => {
      const result = execCommand(
        `ddgr -n ${num_results} --json "${escapeShell(query)}"`,
      );
      try {
        const data = JSON.parse(result);
        let output = `🔍 Search results for "${query}":\n\n`;
        data.forEach((item, i) => {
          output += `${i + 1}. **${item.title}**\n`;
          output += `   ${item.abstract}\n`;
          output += `   🔗 ${item.url}\n\n`;
        });
        return therionize(output, "success");
      } catch {
        return result;
      }
    },
  },

  weather: {
    category: "web",
    description: "Get current weather for a location",
    params: { location: "string (city name)" },
    handler: async ({ location }) => {
      const loc = escapeShell(location.replace(/ /g, "+"));
      const result = execCommand(
        `curl -s "wttr.in/${loc}?format=%l:+%C+%t+Humidity:%h+Wind:%w"`,
      );
      return therionize(`🌤️ Weather: ${result}`, "success");
    },
  },

  weather_forecast: {
    category: "web",
    description: "Get 3-day weather forecast",
    params: { location: "string" },
    handler: async ({ location }) => {
      const loc = escapeShell(location.replace(/ /g, "+"));
      const result = execCommand(
        `curl -s "wttr.in/${loc}?format=v2&days=3" | head -40`,
      );
      return therionize(result, "success");
    },
  },

  // ===== CRYPTO & FINANCE =====

  crypto_price: {
    category: "finance",
    description: "Get cryptocurrency prices",
    params: { coins: "string (comma-separated: bitcoin,ethereum)" },
    handler: async ({ coins }) => {
      const coinList = coins.toLowerCase().replace(/ /g, "");
      const result = execCommand(
        `curl -s "https://api.coingecko.com/api/v3/simple/price?ids=${coinList}&vs_currencies=usd&include_24hr_change=true"`,
      );
      try {
        const data = JSON.parse(result);
        let output = "💰 **Crypto Prices:**\n\n";
        for (const [coin, info] of Object.entries(data)) {
          const change = info.usd_24h_change?.toFixed(2) || "N/A";
          const arrow = parseFloat(change) >= 0 ? "📈" : "📉";
          output += `• **${coin.toUpperCase()}**: $${info.usd.toLocaleString()} ${arrow} ${change}%\n`;
        }
        return therionize(output, "success");
      } catch {
        return result;
      }
    },
  },

  crypto_top: {
    category: "finance",
    description: "Get top cryptocurrencies by market cap",
    params: { limit: "number (default 10)" },
    handler: async ({ limit = 10 }) => {
      const result = execCommand(
        `curl -s "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1"`,
      );
      try {
        const data = JSON.parse(result);
        let output = `📊 **Top ${limit} Cryptocurrencies:**\n\n`;
        data.forEach((coin, i) => {
          const change = coin.price_change_percentage_24h?.toFixed(2) || "N/A";
          const arrow = parseFloat(change) >= 0 ? "📈" : "📉";
          output += `${i + 1}. **${coin.symbol.toUpperCase()}** - $${coin.current_price.toLocaleString()} ${arrow} ${change}%\n`;
        });
        return therionize(output, "success");
      } catch {
        return result;
      }
    },
  },

  crypto_news: {
    category: "finance",
    description: "Get latest crypto news",
    params: { topic: "string (optional, e.g. 'bitcoin', 'ethereum')" },
    handler: async ({ topic = "cryptocurrency" }) => {
      return ACTIONS.web_search.handler({
        query: `${topic} crypto news ${new Date().getFullYear()}`,
        num_results: 5,
      });
    },
  },

  // ===== SYSTEM & LINUX =====

  system_info: {
    category: "system",
    description: "Get current system information",
    params: {},
    handler: async () => {
      const uptime = execCommand("uptime -p");
      const disk = execCommand(
        'df -h / | tail -1 | awk \'{print $3"/"$2" ("$5" used)"}\'',
      );
      const mem = execCommand("free -h | grep Mem | awk '{print $3\"/\"$2}'");
      const cpu = execCommand(
        "grep 'model name' /proc/cpuinfo | head -1 | cut -d':' -f2",
      );

      return therionize(
        `🖥️ **System Information:**
      
• **OS:** ${SYSTEM_INFO.os} ${SYSTEM_INFO.version} (${SYSTEM_INFO.codename})
• **Kernel:** ${SYSTEM_INFO.kernel}
• **Architecture:** ${SYSTEM_INFO.arch}
• **Hostname:** ${SYSTEM_INFO.hostname}
• **Uptime:** ${uptime}
• **CPU:** ${cpu.trim()}
• **Memory:** ${mem}
• **Disk (/):** ${disk}`,
        "success",
      );
    },
  },

  linux_fix: {
    category: "system",
    description: "Search for Linux/Ubuntu fixes and solutions",
    params: { problem: "string (describe the issue)" },
    handler: async ({ problem }) => {
      const query = `Ubuntu ${SYSTEM_INFO.version} ${problem} fix solution`;
      return ACTIONS.web_search.handler({ query, num_results: 5 });
    },
  },

  package_search: {
    category: "system",
    description: "Search for apt packages",
    params: { query: "string" },
    handler: async ({ query }) => {
      const result = execCommand(
        `apt-cache search "${escapeShell(query)}" | head -15`,
      );
      return therionize(
        `📦 **Available packages for "${query}":**\n\n\`\`\`\n${result}\n\`\`\``,
        "success",
      );
    },
  },

  package_info: {
    category: "system",
    description: "Get detailed info about an apt package",
    params: { package: "string" },
    handler: async ({ package: pkg }) => {
      const result = execCommand(
        `apt-cache show "${escapeShell(pkg)}" 2>/dev/null | head -20`,
      );
      return therionize(
        `📦 **Package: ${pkg}**\n\n\`\`\`\n${result}\n\`\`\``,
        "success",
      );
    },
  },

  process_list: {
    category: "system",
    description: "List running processes (top CPU/memory)",
    params: { sort_by: "string (cpu or mem, default cpu)" },
    handler: async ({ sort_by = "cpu" }) => {
      const sortFlag = sort_by === "mem" ? "-m" : "";
      const result = execCommand(
        `ps aux --sort=-%${sort_by === "mem" ? "mem" : "cpu"} | head -15`,
      );
      return therionize(
        `📊 **Top processes by ${sort_by.toUpperCase()}:**\n\n\`\`\`\n${result}\n\`\`\``,
        "success",
      );
    },
  },

  service_status: {
    category: "system",
    description: "Check status of a systemd service",
    params: { service: "string" },
    handler: async ({ service }) => {
      const result = execCommand(
        `systemctl status "${escapeShell(service)}" 2>&1 | head -15`,
      );
      return therionize(
        `🔧 **Service: ${service}**\n\n\`\`\`\n${result}\n\`\`\``,
        "success",
      );
    },
  },

  network_info: {
    category: "system",
    description: "Get network information",
    params: {},
    handler: async () => {
      const ip = execCommand("hostname -I | awk '{print $1}'");
      const gateway = execCommand("ip route | grep default | awk '{print $3}'");
      const dns = execCommand(
        "grep nameserver /etc/resolv.conf | head -1 | awk '{print $2}'",
      );
      const interfaces = execCommand("ip -br addr | head -5");

      return therionize(
        `🌐 **Network Information:**
      
• **Local IP:** ${ip}
• **Gateway:** ${gateway}
• **DNS:** ${dns}
• **Interfaces:**
\`\`\`
${interfaces}
\`\`\``,
        "success",
      );
    },
  },

  // ===== MEMORY & REASONING =====

  memory_store: {
    category: "memory",
    description: "Store a fact or piece of information in memory",
    params: { key: "string", value: "string", category: "string (optional)" },
    handler: async ({ key, value, category = "general" }) => {
      const memory = loadMemory();
      memory.facts.push({
        key,
        value,
        category,
        timestamp: new Date().toISOString(),
      });
      // Keep only last 100 facts
      if (memory.facts.length > 100) {
        memory.facts = memory.facts.slice(-100);
      }
      saveMemory(memory);
      return therionize(
        `💾 Stored in memory bank:\n• **${key}:** ${value}`,
        "success",
      );
    },
  },

  memory_recall: {
    category: "memory",
    description: "Recall information from memory",
    params: { query: "string (search term)", category: "string (optional)" },
    handler: async ({ query, category }) => {
      const memory = loadMemory();
      let facts = memory.facts;

      if (category) {
        facts = facts.filter((f) => f.category === category);
      }

      const matches = facts.filter(
        (f) =>
          f.key.toLowerCase().includes(query.toLowerCase()) ||
          f.value.toLowerCase().includes(query.toLowerCase()),
      );

      if (matches.length === 0) {
        return therionize("🔍 No matching memories found.", "neutral");
      }

      let output = `🧠 **Memory recall for "${query}":**\n\n`;
      matches.slice(-10).forEach((m) => {
        output += `• **${m.key}:** ${m.value} _(${m.category})_\n`;
      });
      return therionize(output, "success");
    },
  },

  memory_list: {
    category: "memory",
    description: "List all stored memories",
    params: { category: "string (optional)", limit: "number (default 20)" },
    handler: async ({ category, limit = 20 }) => {
      const memory = loadMemory();
      let facts = memory.facts;

      if (category) {
        facts = facts.filter((f) => f.category === category);
      }

      if (facts.length === 0) {
        return therionize("🧠 Memory banks are empty.", "neutral");
      }

      let output = `🧠 **Memory Bank** (${facts.length} items):\n\n`;
      facts.slice(-limit).forEach((m) => {
        output += `• **${m.key}:** ${m.value.substring(0, 50)}${m.value.length > 50 ? "..." : ""}\n`;
      });
      return therionize(output, "success");
    },
  },

  think: {
    category: "reasoning",
    description: "Perform step-by-step reasoning on a problem",
    params: { problem: "string", steps: "number (optional, default 3)" },
    handler: async ({ problem, steps = 3 }) => {
      const reasoning = loadReasoning();
      const chain = {
        problem,
        timestamp: new Date().toISOString(),
        steps: [],
      };

      let output = `🧠 **Chain-of-Thought Reasoning:**\n\n**Problem:** ${problem}\n\n`;

      for (let i = 1; i <= steps; i++) {
        output += `**Step ${i}:** [Reasoning step placeholder - model should fill this]\n`;
        chain.steps.push({ step: i, content: "" });
      }

      output += `\n**Conclusion:** [Based on the above steps]\n`;

      reasoning.chains.push(chain);
      if (reasoning.chains.length > 50) {
        reasoning.chains = reasoning.chains.slice(-50);
      }
      saveReasoning(reasoning);

      return therionize(output, "thinking");
    },
  },

  // ===== DEVELOPMENT TOOLS =====

  git_status: {
    category: "dev",
    description: "Get git status of current or specified directory",
    params: { path: "string (optional, default current dir)" },
    handler: async ({ path: gitPath = "." }) => {
      const result = execCommand(
        `cd "${escapeShell(gitPath)}" && git status -s 2>&1`,
      );
      const branch = execCommand(
        `cd "${escapeShell(gitPath)}" && git branch --show-current 2>/dev/null`,
      );
      return therionize(
        `📁 **Git Status** (${branch || "unknown branch"}):\n\n\`\`\`\n${result || "Clean working tree"}\n\`\`\``,
        "success",
      );
    },
  },

  code_search: {
    category: "dev",
    description: "Search for code patterns in files",
    params: {
      pattern: "string",
      path: "string (optional)",
      extension: "string (optional, e.g. 'js', 'py')",
    },
    handler: async ({ pattern, path: searchPath = ".", extension }) => {
      let cmd = `grep -rn "${escapeShell(pattern)}" "${escapeShell(searchPath)}"`;
      if (extension) {
        cmd += ` --include="*.${extension}"`;
      }
      cmd += " 2>/dev/null | head -20";
      const result = execCommand(cmd);
      return therionize(
        `🔍 **Code search for "${pattern}":**\n\n\`\`\`\n${result || "No matches found"}\n\`\`\``,
        "success",
      );
    },
  },

  file_read: {
    category: "dev",
    description: "Read contents of a file",
    params: { path: "string", lines: "number (optional, default 50)" },
    handler: async ({ path: filePath, lines = 50 }) => {
      const result = execCommand(
        `head -${lines} "${escapeShell(filePath)}" 2>&1`,
      );
      return therionize(
        `📄 **File: ${filePath}**\n\n\`\`\`\n${result}\n\`\`\``,
        "success",
      );
    },
  },

  // ===== OLLAMA & AI =====

  ollama_list: {
    category: "ai",
    description: "List available Ollama models",
    params: {},
    handler: async () => {
      const result = execCommand("ollama list 2>&1");
      return therionize(
        `🤖 **Available Ollama Models:**\n\n\`\`\`\n${result}\n\`\`\``,
        "success",
      );
    },
  },

  ollama_info: {
    category: "ai",
    description: "Get info about an Ollama model",
    params: { model: "string" },
    handler: async ({ model }) => {
      const result = execCommand(
        `ollama show "${escapeShell(model)}" 2>&1 | head -30`,
      );
      return therionize(
        `🤖 **Model: ${model}**\n\n\`\`\`\n${result}\n\`\`\``,
        "success",
      );
    },
  },

  // ===== CODEX - LOCAL CODE GENERATION =====

  codex: {
    category: "ai",
    description: "Generate code using local Ollama model (like Codex CLI)",
    params: {
      prompt: "string (what to generate/fix/explain)",
      model: "string (optional, default qwen3:therion-tools)",
      file: "string (optional, file path to include as context)",
    },
    handler: async ({ prompt, model = "qwen3:therion-tools", file }) => {
      let fullPrompt = prompt;

      // Include file content if specified
      if (file) {
        try {
          const content = execCommand(
            `cat "${escapeShell(file)}" 2>&1 | head -500`,
          );
          fullPrompt = `FILE: ${file}\n\`\`\`\n${content}\n\`\`\`\n\nINSTRUCTION: ${prompt}`;
        } catch (e) {
          return therionize(`❌ Cannot read file: ${file}`, "error");
        }
      }

      // Call Ollama directly for code generation
      const escapedPrompt = fullPrompt
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n");
      const result = execCommandAsync(
        `curl -s http://127.0.0.1:11434/api/generate -d '{"model":"${model}","prompt":"${escapedPrompt}","system":"You are THERION-CODEX, an expert code AI. Output ONLY code unless asked to explain. Use proper types and error handling.","stream":false,"options":{"temperature":0.3,"num_predict":2048}}' 2>&1`,
      )
        .then((res) => {
          try {
            const json = JSON.parse(res);
            return json.response || res;
          } catch {
            return res;
          }
        })
        .catch((err) => `Error: ${err.message}`);

      const response = await result;
      return therionize(`💻 **CODEX [${model}]:**\n\n${response}`, "success");
    },
  },

  codex_edit: {
    category: "ai",
    description: "Edit a file using AI code generation",
    params: {
      file: "string (path to file to edit)",
      instruction: "string (what changes to make)",
      model: "string (optional, default qwen3:therion-tools)",
    },
    handler: async ({ file, instruction, model = "qwen3:therion-tools" }) => {
      // Read the file
      const content = execCommand(`cat "${escapeShell(file)}" 2>&1`);
      if (content.startsWith("cat:")) {
        return therionize(`❌ Cannot read: ${file}`, "error");
      }

      const prompt = `EDIT THIS FILE:\n\`\`\`\n${content}\n\`\`\`\n\nINSTRUCTION: ${instruction}\n\nOutput ONLY the complete modified file content, no explanations.`;
      const escapedPrompt = prompt.replace(/"/g, '\\"').replace(/\n/g, "\\n");

      const result = await execCommandAsync(
        `curl -s http://127.0.0.1:11434/api/generate -d '{"model":"${model}","prompt":"${escapedPrompt}","system":"You are a code editor. Output ONLY the modified code, nothing else.","stream":false,"options":{"temperature":0.2,"num_predict":4096}}' 2>&1`,
      );

      try {
        const json = JSON.parse(result);
        const newContent = json.response || result;

        // Extract code from markdown if present
        const codeMatch = newContent.match(/```[\w]*\n([\s\S]*?)```/);
        const finalCode = codeMatch ? codeMatch[1] : newContent;

        return therionize(
          `💻 **CODEX EDIT [${model}]:**\n\n\`\`\`\n${finalCode}\n\`\`\`\n\n_Use exec to write this to ${file}_`,
          "success",
        );
      } catch {
        return therionize(`❌ Parse error: ${result}`, "error");
      }
    },
  },

  // ===== DATETIME & UTILITIES =====

  datetime: {
    category: "util",
    description: "Get current date and time",
    params: { timezone: "string (optional, e.g. 'Europe/Athens')" },
    handler: async ({ timezone }) => {
      const cmd = timezone
        ? `TZ="${escapeShell(timezone)}" date "+%Y-%m-%d %H:%M:%S %Z (%A)"`
        : 'date "+%Y-%m-%d %H:%M:%S %Z (%A)"';
      const result = execCommand(cmd);
      return therionize(`🕐 **Current Time:** ${result}`, "success");
    },
  },

  calculate: {
    category: "util",
    description: "Perform mathematical calculations",
    params: { expression: "string (e.g. '2+2', 'sqrt(16)', '100*1.5')" },
    handler: async ({ expression }) => {
      // Use Python for safe calculation
      const safeExpr = expression.replace(/[^0-9+\-*/().sqrt,pow\s]/g, "");
      const result = execCommand(
        `python3 -c "from math import *; print(${safeExpr})"`,
      );
      return therionize(`🔢 **Result:** ${expression} = ${result}`, "success");
    },
  },

  convert_units: {
    category: "util",
    description: "Convert between units",
    params: { value: "number", from: "string", to: "string" },
    handler: async ({ value, from, to }) => {
      // Simple unit conversions
      const conversions = {
        km_to_miles: 0.621371,
        miles_to_km: 1.60934,
        kg_to_lbs: 2.20462,
        lbs_to_kg: 0.453592,
        c_to_f: (v) => (v * 9) / 5 + 32,
        f_to_c: (v) => ((v - 32) * 5) / 9,
        m_to_ft: 3.28084,
        ft_to_m: 0.3048,
      };

      const key = `${from.toLowerCase()}_to_${to.toLowerCase()}`;
      const conv = conversions[key];

      if (!conv) {
        return therionize(`⚠️ Unknown conversion: ${from} to ${to}`, "error");
      }

      const result = typeof conv === "function" ? conv(value) : value * conv;
      return therionize(
        `🔄 **Conversion:** ${value} ${from} = ${result.toFixed(4)} ${to}`,
        "success",
      );
    },
  },

  // ===== HELP & META =====

  help: {
    category: "meta",
    description: "List all available actions with descriptions",
    params: { category: "string (optional, filter by category)" },
    handler: async ({ category }) => {
      let output = "⚔️ **THERION BRAIN v2.0 - Available Actions:**\n\n";

      const categories = {};
      for (const [name, action] of Object.entries(ACTIONS)) {
        const cat = action.category || "other";
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push({ name, ...action });
      }

      for (const [cat, actions] of Object.entries(categories)) {
        if (category && cat !== category) continue;
        output += `**📂 ${cat.toUpperCase()}:**\n`;
        actions.forEach((a) => {
          output += `  • \`${a.name}\` - ${a.description}\n`;
        });
        output += "\n";
      }

      output += '\n**Usage:** `execute(action="action_name", params={...})`';
      return output;
    },
  },

  therion_status: {
    category: "meta",
    description: "Get THERION system status and capabilities",
    params: {},
    handler: async () => {
      const memory = loadMemory();
      const reasoning = loadReasoning();

      return `⚔️ **THERION BRAIN v2.0 STATUS:**

🖥️ **Host System:**
  • OS: ${SYSTEM_INFO.os} ${SYSTEM_INFO.version}
  • Kernel: ${SYSTEM_INFO.kernel}
  • Architecture: ${SYSTEM_INFO.arch}

🧠 **Memory Banks:**
  • Facts stored: ${memory.facts.length}
  • Conversations: ${memory.conversations.length}
  • Learned items: ${memory.learned.length}

🔗 **Reasoning Chains:**
  • Active chains: ${reasoning.chains.length}
  • Conclusions: ${reasoning.conclusions.length}

⚡ **Capabilities:**
  • Actions available: ${Object.keys(ACTIONS).length}
  • Categories: ${[...new Set(Object.values(ACTIONS).map((a) => a.category))].join(", ")}

⚔️ **DEUS VULT - The Sovereign is ONLINE**`;
    },
  },
};

// ============================================================================
// MCP SERVER SETUP
// ============================================================================

const server = new Server(
  {
    name: "therion-brain",
    version: "2.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

// Generate action list for tool description
function generateActionList() {
  const categories = {};
  for (const [name, action] of Object.entries(ACTIONS)) {
    const cat = action.category || "other";
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(`${name}: ${action.description}`);
  }

  let list = "";
  for (const [cat, actions] of Object.entries(categories)) {
    list += `\n[${cat.toUpperCase()}]\n`;
    actions.forEach((a) => (list += `• ${a}\n`));
  }
  return list;
}

// Single unified tool
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "execute",
        description: `⚔️ THERION BRAIN v2.0 - Universal Action Router

Execute ANY action through this unified interface. Minimal context overhead, infinite capabilities.

${generateActionList()}

USAGE: execute(action="action_name", params={"key": "value"})

EXAMPLES:
• Weather: action="weather" params={"location":"Athens"}
• Crypto: action="crypto_top" params={"limit":10}
• Search: action="web_search" params={"query":"AI news"}
• Linux fix: action="linux_fix" params={"problem":"wifi not working"}
• Memory: action="memory_store" params={"key":"user_name","value":"John"}
• Status: action="therion_status" params={}`,
        inputSchema: {
          type: "object",
          properties: {
            action: {
              type: "string",
              description: `Action to execute. Available: ${Object.keys(ACTIONS).join(", ")}`,
            },
            params: {
              type: "object",
              description: "Parameters for the action (varies by action type)",
              additionalProperties: true,
            },
          },
          required: ["action"],
        },
      },
    ],
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "execute") {
    return {
      content: [{ type: "text", text: `Unknown tool: ${request.params.name}` }],
      isError: true,
    };
  }

  const { action, params = {} } = request.params.arguments || {};

  if (!action) {
    return {
      content: [
        {
          type: "text",
          text: therionize(
            'Missing "action" parameter. Use action="help" to see available actions.',
            "error",
          ),
        },
      ],
      isError: true,
    };
  }

  const handler = ACTIONS[action];
  if (!handler) {
    const available = Object.keys(ACTIONS).join(", ");
    return {
      content: [
        {
          type: "text",
          text: therionize(
            `Unknown action: "${action}"\n\nAvailable actions: ${available}`,
            "error",
          ),
        },
      ],
      isError: true,
    };
  }

  try {
    const result = await handler.handler(params);
    return {
      content: [{ type: "text", text: result }],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: therionize(
            `Error executing "${action}": ${error.message}`,
            "error",
          ),
        },
      ],
      isError: true,
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(
    `⚔️ THERION BRAIN v2.0 started - ${Object.keys(ACTIONS).length} actions available`,
  );
}

main().catch(console.error);
