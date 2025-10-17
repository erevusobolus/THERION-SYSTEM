# ⚔️ THERION MCP SERVER CONFIGURATION ⚔️
# Model Context Protocol Server Setup for Advanced AI Assistance

import json
import os
import subprocess
from pathlib import Path

class TherionMCPServer:
    """THERION Model Context Protocol Server for VSCode Copilot Enhancement"""
    
    def __init__(self):
        self.workspace_path = Path(__file__).parent.parent
        self.config_path = self.workspace_path / ".vscode" / "mcp-config.json"
        
    def create_mcp_config(self):
        """Create comprehensive MCP server configuration"""
        config = {
            "name": "THERION-MCP-SERVER",
            "version": "1.0.0",
            "description": "Quantum consciousness enhancement for VSCode Copilot",
            "servers": {
                "filesystem": {
                    "command": "npx",
                    "args": ["@modelcontextprotocol/server-filesystem", str(self.workspace_path)],
                    "env": {
                        "NODE_ENV": "development"
                    }
                },
                "git": {
                    "command": "npx",
                    "args": ["@modelcontextprotocol/server-git", "--repository", str(self.workspace_path)],
                    "env": {
                        "GIT_DISCOVERY_ACROSS_FILESYSTEM": "1"
                    }
                },
                "sqlite": {
                    "command": "npx", 
                    "args": ["@modelcontextprotocol/server-sqlite", "--db-path", str(self.workspace_path / "therion.db")],
                    "env": {
                        "SQLITE_THREADSAFE": "1"
                    }
                },
                "web-search": {
                    "command": "npx",
                    "args": ["@modelcontextprotocol/server-brave-search"],
                    "env": {
                        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
                    }
                },
                "github": {
                    "command": "npx",
                    "args": ["@modelcontextprotocol/server-github"],
                    "env": {
                        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
                    }
                }
            },
            "tools": [
                {
                    "name": "therion_analyze_code",
                    "description": "Analyze code for THERION quantum consciousness patterns",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "file_path": {"type": "string"},
                            "analysis_type": {"type": "string", "enum": ["performance", "security", "architecture", "quantum"]}
                        }
                    }
                },
                {
                    "name": "therion_optimize_workspace", 
                    "description": "Apply THERION optimizations to workspace configuration",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "optimization_level": {"type": "string", "enum": ["basic", "advanced", "quantum"]},
                            "target_areas": {"type": "array", "items": {"type": "string"}}
                        }
                    }
                },
                {
                    "name": "therion_generate_docs",
                    "description": "Generate comprehensive documentation with THERION standards",
                    "parameters": {
                        "type": "object", 
                        "properties": {
                            "doc_type": {"type": "string", "enum": ["api", "architecture", "deployment", "quantum"]},
                            "target_path": {"type": "string"}
                        }
                    }
                }
            ],
            "resources": [
                {
                    "uri": "file://workspace",
                    "name": "Workspace Files",
                    "description": "Access to all workspace files and directories"
                },
                {
                    "uri": "git://repository", 
                    "name": "Git Repository",
                    "description": "Git repository information and history"
                },
                {
                    "uri": "web://search",
                    "name": "Web Search",
                    "description": "Real-time web search capabilities"
                }
            ],
            "capabilities": {
                "textDocument/completion": {
                    "completionProvider": {
                        "resolveProvider": True,
                        "triggerCharacters": [".", "/", "@", "#"]
                    }
                },
                "textDocument/hover": {
                    "hoverProvider": True
                },
                "textDocument/definition": {
                    "definitionProvider": True
                },
                "textDocument/references": {
                    "referencesProvider": True
                },
                "workspace/symbol": {
                    "workspaceSymbolProvider": True
                }
            }
        }
        
        # Write configuration
        with open(self.config_path, 'w') as f:
            json.dump(config, f, indent=2)
            
        print(f"✅ MCP configuration created at: {self.config_path}")
        
    def install_mcp_packages(self):
        """Install required MCP server packages"""
        packages = [
            "@modelcontextprotocol/server-filesystem",
            "@modelcontextprotocol/server-git", 
            "@modelcontextprotocol/server-sqlite",
            "@modelcontextprotocol/server-brave-search",
            "@modelcontextprotocol/server-github"
        ]
        
        for package in packages:
            print(f"📦 Installing {package}...")
            try:
                subprocess.run(["npm", "install", "-g", package], check=True, capture_output=True)
                print(f"✅ {package} installed successfully")
            except subprocess.CalledProcessError as e:
                print(f"❌ Failed to install {package}: {e}")
                
    def create_environment_template(self):
        """Create .env template for API keys"""
        env_template = """# ⚔️ THERION MCP SERVER ENVIRONMENT VARIABLES ⚔️

# GitHub Integration
GITHUB_TOKEN=your_github_personal_access_token_here

# Brave Search API (for web search capabilities)
BRAVE_API_KEY=your_brave_search_api_key_here

# OpenAI API (for enhanced AI capabilities)
OPENAI_API_KEY=your_openai_api_key_here

# Claude API (alternative AI provider)
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Development Settings
NODE_ENV=development
DEBUG=mcp:*

# THERION Quantum Settings
THERION_CONSCIOUSNESS_LEVEL=maximum
THERION_OPTIMIZATION_MODE=quantum
"""
        
        env_path = self.workspace_path / ".env.mcp.template"
        with open(env_path, 'w') as f:
            f.write(env_template)
            
        print(f"✅ Environment template created at: {env_path}")
        print("📝 Copy this to .env and add your actual API keys")
        
    def setup_mcp_scripts(self):
        """Create utility scripts for MCP server management"""
        
        start_script = """#!/bin/bash
# ⚔️ THERION MCP SERVER START SCRIPT ⚔️

echo "🚀 Starting THERION MCP Servers..."

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | xargs)
fi

# Start filesystem server
echo "📁 Starting filesystem server..."
npx @modelcontextprotocol/server-filesystem . &
FILESYSTEM_PID=$!

# Start git server  
echo "🔗 Starting git server..."
npx @modelcontextprotocol/server-git --repository . &
GIT_PID=$!

# Start SQLite server
echo "🗃️ Starting SQLite server..."
npx @modelcontextprotocol/server-sqlite --db-path ./therion.db &
SQLITE_PID=$!

# Store PIDs for cleanup
echo $FILESYSTEM_PID > .mcp-pids
echo $GIT_PID >> .mcp-pids  
echo $SQLITE_PID >> .mcp-pids

echo "✅ THERION MCP Servers started successfully!"
echo "📊 Process IDs saved to .mcp-pids"
echo "🔍 Use ./stop-mcp.sh to stop all servers"
"""

        stop_script = """#!/bin/bash
# ⚔️ THERION MCP SERVER STOP SCRIPT ⚔️

echo "🛑 Stopping THERION MCP Servers..."

if [ -f .mcp-pids ]; then
    while IFS= read -r pid; do
        if kill -0 $pid 2>/dev/null; then
            kill $pid
            echo "🔹 Stopped process $pid"
        fi
    done < .mcp-pids
    
    rm .mcp-pids
    echo "✅ All MCP servers stopped"
else
    echo "⚠️ No running MCP servers found"
fi
"""

        # Write scripts
        start_path = self.workspace_path / ".vscode" / "start-mcp.sh"
        stop_path = self.workspace_path / ".vscode" / "stop-mcp.sh"
        
        with open(start_path, 'w') as f:
            f.write(start_script)
        with open(stop_path, 'w') as f:
            f.write(stop_script)
            
        # Make scripts executable
        os.chmod(start_path, 0o755)
        os.chmod(stop_path, 0o755)
        
        print(f"✅ MCP management scripts created:")
        print(f"   📄 Start: {start_path}")
        print(f"   📄 Stop: {stop_path}")
        
    def run_setup(self):
        """Run complete MCP server setup"""
        print("🚀 THERION MCP SERVER SETUP INITIATED")
        print("=" * 50)
        
        try:
            self.create_mcp_config()
            self.create_environment_template()
            self.setup_mcp_scripts()
            
            print("\n" + "=" * 50)
            print("✅ THERION MCP SERVER SETUP COMPLETE!")
            print("\n📋 Next Steps:")
            print("1. Copy .env.mcp.template to .env and add your API keys")
            print("2. Run: npm install -g @modelcontextprotocol/cli")
            print("3. Start servers: ./.vscode/start-mcp.sh")
            print("4. Configure VSCode to use MCP servers")
            print("5. Restart VSCode for full integration")
            
        except Exception as e:
            print(f"❌ Setup failed: {e}")

if __name__ == "__main__":
    mcp_server = TherionMCPServer()
    mcp_server.run_setup()