#!/bin/bash

# Get script directory and navigate to website folder
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/../EREBUS-Website" || exit 1
npm ci && npm run build
echo "Next.js website built successfully (run with 'npm run dev' for local server)"