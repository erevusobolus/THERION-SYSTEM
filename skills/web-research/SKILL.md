---
name: web-research
description: Native web search and content fetching using ddgr and w3m - NO API KEYS REQUIRED
metadata: {"openclaw":{"emoji":"🌐","requires":{"bins":["ddgr","w3m"]}}}
---

# Web Research (Native - No API Keys)

Search the web and fetch content using local tools. NO API KEYS REQUIRED.

## Web Search with ddgr (DuckDuckGo)

### JSON Output (Best for Parsing)
```bash
ddgr -n 5 --json "your search query"
```

Returns structured JSON:
```json
[
  {"title": "Page Title", "url": "https://...", "abstract": "Description..."},
  ...
]
```

### Human Readable
```bash
ddgr -n 5 "your search query"
```

### Advanced Options
```bash
# More results
ddgr -n 10 --json "query"

# Site-specific search
ddgr -n 5 --json "site:github.com ollama setup"

# Time-limited (past year)
ddgr -n 5 --json --time y "latest news topic"
```

## Fetch URL Content with w3m

### Basic Fetch
```bash
w3m -dump "https://example.com" | head -c 50000
```

### Fetch and Pipe
```bash
w3m -dump "https://example.com" | grep -i "keyword"
```

## Research Workflow

1. **Search** - Find relevant URLs:
   ```bash
   ddgr -n 5 --json "topic of interest"
   ```

2. **Fetch** - Get content from best result:
   ```bash
   w3m -dump "https://best-result-url.com" | head -c 30000
   ```

3. **Summarize** - Process and present findings

## Scripts (Shortcuts)

```bash
# Search script
./scripts/websearch.sh "query"

# Fetch script
./scripts/webfetch.sh "url"
```

## Tips

- Use `--json` for machine-parseable output
- Pipe through `jq` for JSON processing: `ddgr -n 5 --json "query" | jq '.[0].url'`
- Limit fetch size with `head -c BYTES` to avoid overwhelming context
- For JavaScript-heavy sites, use the browser tool instead

## When to Use What

| Need | Tool |
|------|------|
| Quick search results | `ddgr --json` |
| Read article content | `w3m -dump` |
| JS-heavy sites | Browser tool |
| API documentation | `w3m -dump` or `curl` |
