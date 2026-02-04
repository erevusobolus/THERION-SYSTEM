---
name: therion-tools
description: THERION Universal Tool Router - ONE command for web search, weather, crypto prices, news. Uses native CLI tools (ddgr, curl) with NO API keys required.
homepage: https://github.com/therion
metadata:
  {
    "openclaw":
      { "emoji": "⚔️", "requires": { "bins": ["mcporter", "curl", "ddgr"] } },
  }
---

# ⚔️ THERION Universal Tools

Use `mcporter` to access ALL THERION capabilities through ONE unified interface.

## Quick Reference

```bash
# Weather
mcporter call therion-tools.execute action=weather params='{"location":"Athens"}'

# Crypto prices (specific coins)
mcporter call therion-tools.execute action=crypto_price params='{"coins":"bitcoin,ethereum,solana"}'

# Top cryptocurrencies
mcporter call therion-tools.execute action=crypto_top params='{"limit":10}'

# Web search
mcporter call therion-tools.execute action=web_search params='{"query":"your search query","num_results":5}'

# News search
mcporter call therion-tools.execute action=news_search params='{"query":"bitcoin news","num_results":5}'

# Current date/time
mcporter call therion-tools.execute action=datetime params='{"timezone":"Europe/Athens"}'

# Help (list all actions)
mcporter call therion-tools.execute action=help
```

## Available Actions

| Action             | Description             | Params                    |
| ------------------ | ----------------------- | ------------------------- |
| `weather`          | Current weather         | `location` (city name)    |
| `weather_detailed` | Detailed forecast       | `location`                |
| `crypto_price`     | Specific coin prices    | `coins` (comma-separated) |
| `crypto_top`       | Top coins by market cap | `limit` (default 10)      |
| `web_search`       | DuckDuckGo search       | `query`, `num_results`    |
| `news_search`      | News article search     | `query`, `num_results`    |
| `datetime`         | Current date/time       | `timezone` (optional)     |
| `help`             | List all actions        | none                      |

## Examples

**Weather in a city:**

```bash
mcporter call therion-tools.execute action=weather params='{"location":"New York"}'
```

**Top 5 crypto by market cap:**

```bash
mcporter call therion-tools.execute action=crypto_top params='{"limit":5}'
```

**Search for latest news:**

```bash
mcporter call therion-tools.execute action=news_search params='{"query":"AI news today","num_results":5}'
```

## Important Notes

- All data comes from FREE public sources (no API keys needed)
- Weather: Use ddgr web search (e.g., `ddgr --np -n 3 'City weather today'`)
- Crypto: CoinGecko
- Search: DuckDuckGo (via ddgr)
- Always use mcporter call for these capabilities
