#!/usr/bin/env node
/**
 * ⚔️ THERION MCP TOOL ROUTER ⚔️
 *
 * ONE TOOL TO RULE THEM ALL
 *
 * Instead of sending 50+ tools to the model (destroying context window),
 * we expose ONE unified tool that routes to INFINITE capabilities.
 *
 * Model sees: execute_action(action, params)
 * MCP routes to: web_search, weather, crypto, news, shell, etc.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { spawn, execSync } from "child_process";

// ============================================================================
// THERION ACTION REGISTRY - Add new capabilities here!
// ============================================================================

const ACTIONS = {
  // === WEB SEARCH (DuckDuckGo via ddgr) ===
  web_search: {
    description: "Search the web using DuckDuckGo",
    params: { query: "string", num_results: "number (optional, default 5)" },
    handler: async ({ query, num_results = 5 }) => {
      return execCommand(
        `ddgr -n ${num_results} --json "${escapeShell(query)}"`,
      );
    },
  },

  // === WEATHER (wttr.in - no API key!) ===
  weather: {
    description: "Get current weather for a location",
    params: { location: "string (city name)" },
    handler: async ({ location }) => {
      const loc = escapeShell(location.replace(/ /g, "+"));
      return execCommand(
        `curl -s "wttr.in/${loc}?format=%l:+%C+%t+Humidity:%h+Wind:%w"`,
      );
    },
  },

  weather_detailed: {
    description: "Get detailed weather forecast",
    params: { location: "string" },
    handler: async ({ location }) => {
      const loc = escapeShell(location.replace(/ /g, "+"));
      return execCommand(`curl -s "wttr.in/${loc}?format=3"`);
    },
  },

  // === CRYPTO (CoinGecko - no API key!) ===
  crypto_price: {
    description: "Get cryptocurrency prices in USD",
    params: { coins: "string (comma-separated: bitcoin,ethereum,solana)" },
    handler: async ({ coins }) => {
      const coinList = escapeShell(coins.toLowerCase().replace(/ /g, ""));
      const result = execCommand(
        `curl -s "https://api.coingecko.com/api/v3/simple/price?ids=${coinList}&vs_currencies=usd&include_24hr_change=true"`,
      );
      try {
        const data = JSON.parse(result);
        let output = "💰 Crypto Prices:\n";
        for (const [coin, info] of Object.entries(data)) {
          const change = info.usd_24h_change?.toFixed(2) || "N/A";
          const arrow = parseFloat(change) >= 0 ? "📈" : "📉";
          output += `• ${coin.toUpperCase()}: $${info.usd.toLocaleString()} ${arrow} ${change}%\n`;
        }
        return output;
      } catch {
        return result;
      }
    },
  },

  crypto_top: {
    description: "Get top cryptocurrencies by market cap",
    params: { limit: "number (optional, default 10)" },
    handler: async ({ limit = 10 }) => {
      const result = execCommand(
        `curl -s "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false"`,
      );
      try {
        const data = JSON.parse(result);
        let output = `📊 Top ${limit} Cryptocurrencies:\n`;
        data.forEach((coin, i) => {
          const change = coin.price_change_percentage_24h?.toFixed(2) || "N/A";
          const arrow = parseFloat(change) >= 0 ? "📈" : "📉";
          output += `${i + 1}. ${coin.symbol.toUpperCase()}: $${coin.current_price.toLocaleString()} ${arrow} ${change}%\n`;
        });
        return output;
      } catch {
        return result;
      }
    },
  },

  // === NEWS SEARCH ===
  news_search: {
    description: "Search for news articles on a topic",
    params: { query: "string", num_results: "number (optional, default 5)" },
    handler: async ({ query, num_results = 5 }) => {
      // Use ddgr with news filter
      return execCommand(
        `ddgr -n ${num_results} --json "${escapeShell(query)} news 2024 2025 2026"`,
      );
    },
  },

  // === SHELL COMMAND (for advanced users) ===
  shell: {
    description: "Execute a shell command (use responsibly)",
    params: { command: "string" },
    handler: async ({ command }) => {
      // Security: only allow safe commands
      const safePrefixes = [
        "curl",
        "wget",
        "cat",
        "ls",
        "echo",
        "date",
        "head",
        "tail",
        "grep",
        "ddgr",
        "python3 -c",
      ];
      const isSafe = safePrefixes.some((prefix) =>
        command.trim().startsWith(prefix),
      );
      if (!isSafe) {
        return `⚠️ Command blocked for security. Allowed prefixes: ${safePrefixes.join(", ")}`;
      }
      return execCommand(command);
    },
  },

  // === DATE/TIME ===
  datetime: {
    description: "Get current date and time",
    params: { timezone: "string (optional, e.g. 'Europe/Athens')" },
    handler: async ({ timezone }) => {
      if (timezone) {
        return execCommand(
          `TZ="${escapeShell(timezone)}" date "+%Y-%m-%d %H:%M:%S %Z"`,
        );
      }
      return execCommand('date "+%Y-%m-%d %H:%M:%S %Z"');
    },
  },

  // === WEB AUTOMATION (Playwright) ===
  browser_navigate: {
    description: "Navigate to URL with headless browser",
    params: { url: "string", screenshot: "string (optional path)" },
    handler: async ({ url, screenshot }) => {
      const cmd = screenshot
        ? `python3 scripts/therion-browser.py navigate --url "${escapeShell(url)}" --screenshot "${escapeShell(screenshot)}" --json`
        : `python3 scripts/therion-browser.py navigate --url "${escapeShell(url)}" --json`;
      return execCommand(cmd);
    },
  },

  browser_extract: {
    description: "Extract content from webpage",
    params: { url: "string", selector: "string (optional CSS selector)" },
    handler: async ({ url, selector }) => {
      const cmd = selector
        ? `python3 scripts/therion-browser.py extract --url "${escapeShell(url)}" --selector "${escapeShell(selector)}" --json`
        : `python3 scripts/therion-browser.py extract --url "${escapeShell(url)}" --json`;
      return execCommand(cmd);
    },
  },

  browser_click: {
    description: "Click element on webpage",
    params: { url: "string", selector: "string (CSS selector)" },
    handler: async ({ url, selector }) => {
      return execCommand(
        `python3 scripts/therion-browser.py click --url "${escapeShell(url)}" --selector "${escapeShell(selector)}" --json`,
      );
    },
  },

  browser_fill: {
    description: "Fill form field on webpage",
    params: {
      url: "string",
      selector: "string",
      text: "string",
      submit: "boolean (optional)",
    },
    handler: async ({ url, selector, text, submit }) => {
      const submitFlag = submit ? "--submit" : "";
      return execCommand(
        `python3 scripts/therion-browser.py fill --url "${escapeShell(url)}" --selector "${escapeShell(selector)}" --text "${escapeShell(text)}" ${submitFlag} --json`,
      );
    },
  },

  // === HELP - List all available actions ===
  help: {
    description: "List all available actions and their parameters",
    params: {},
    handler: async () => {
      let output = "⚔️ THERION TOOL ROUTER - Available Actions:\n\n";
      for (const [name, action] of Object.entries(ACTIONS)) {
        output += `📌 ${name}\n`;
        output += `   ${action.description}\n`;
        if (Object.keys(action.params).length > 0) {
          output += `   Params: ${JSON.stringify(action.params)}\n`;
        }
        output += "\n";
      }
      return output;
    },
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function escapeShell(str) {
  return str.replace(/(["\s'$`\\])/g, "\\$1");
}

function execCommand(cmd) {
  try {
    const result = execSync(cmd, {
      encoding: "utf-8",
      timeout: 30000,
      maxBuffer: 1024 * 1024,
    });
    return result.trim();
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

// ============================================================================
// MCP SERVER SETUP
// ============================================================================

const server = new Server(
  {
    name: "therion-tools",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

// Single unified tool - dramatically reduces context window usage!
server.setRequestHandler(ListToolsRequestSchema, async () => {
  const actionList = Object.entries(ACTIONS)
    .map(([name, a]) => `• ${name}: ${a.description}`)
    .join("\n");

  return {
    tools: [
      {
        name: "execute",
        description: `⚔️ THERION Universal Tool Router - Execute ANY action with minimal context overhead.

AVAILABLE ACTIONS:
${actionList}

USAGE: Call with action name and params object.
Example: execute(action="weather", params={"location": "Athens"})
Example: execute(action="crypto_price", params={"coins": "bitcoin,ethereum"})
Example: execute(action="web_search", params={"query": "latest crypto news"})`,
        inputSchema: {
          type: "object",
          properties: {
            action: {
              type: "string",
              description:
                "Action to execute: " + Object.keys(ACTIONS).join(", "),
            },
            params: {
              type: "object",
              description: "Parameters for the action (varies by action)",
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
          text: "Error: 'action' is required. Use action='help' to see available actions.",
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
          text: `Unknown action: ${action}\nAvailable: ${available}`,
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
        { type: "text", text: `Error executing ${action}: ${error.message}` },
      ],
      isError: true,
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("⚔️ THERION MCP Tool Router started");
}

main().catch(console.error);
