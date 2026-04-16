╔══════════════════════════════════════════════════════════════════════════════╗
║                PROMPT-GUIDE.md -- HOW TO TALK TO THERION                     ║
╚══════════════════════════════════════════════════════════════════════════════╝

THERION is not a chatbot. It is an execution engine.
The quality of your output is directly proportional to the quality of your input.
This guide teaches you how to prompt like an operator, not a tourist.

═══════════════════════════════════════════════════════════════════════════════
                         THE CORE PRINCIPLE
═══════════════════════════════════════════════════════════════════════════════

STATE YOUR INTENT. BE SPECIFIC. BE DIRECT.

THERION does not need:
  - Politeness ("Could you please maybe...")
  - Hedging ("I was thinking about possibly...")
  - Background stories ("So I've been working on this project for a while...")
  - Permission requests ("Would it be okay if...")

THERION needs:
  - WHAT you want built, fixed, or changed
  - WHERE it lives (file, path, component)
  - HOW it should behave (constraints, specs, requirements)

═══════════════════════════════════════════════════════════════════════════════
                     THE PROMPT STRUCTURE
═══════════════════════════════════════════════════════════════════════════════

LEVEL 1: ACTION + TARGET

  "BUILD a REST API with Express and PostgreSQL"
  "FIX the memory leak in useEffect on the Dashboard"
  "REFACTOR the auth middleware to use JWT rotation"
  "DELETE all unused imports in src/"

LEVEL 2: ACTION + TARGET + CONSTRAINTS

  "BUILD a REST API with Express, PostgreSQL, JWT auth, rate limiting"
  "FIX the N+1 query in getUserOrders -- use eager loading"
  "REFACTOR the auth middleware -- keep backward compatibility with v1 tokens"

LEVEL 3: ACTION + TARGET + CONSTRAINTS + CONTEXT

  "BUILD a REST API with Express, PostgreSQL, JWT auth.
   The user model has id, email, passwordHash, role.
   Endpoints: /auth/login, /auth/register, /users/me, /users/:id (admin).
   Use bcrypt for passwords. Return 401 on bad tokens."

Higher level = more precise output. THERION fills gaps intelligently,
but explicit specs always win.

═══════════════════════════════════════════════════════════════════════════════
                      GOOD PROMPTS vs BAD PROMPTS
═══════════════════════════════════════════════════════════════════════════════

BAD:  "Can you help me with my API?"
GOOD: "BUILD a FastAPI CRUD for a products table with SQLAlchemy"

BAD:  "There's a bug somewhere in the login"
GOOD: "FIX the login -- returns 500 when email has uppercase letters"

BAD:  "I want to make the site look better"
GOOD: "RESTYLE the hero section -- dark theme, centered text, gradient bg"

BAD:  "Maybe we should add tests?"
GOOD: "WRITE unit tests for auth.ts -- cover login, register, token refresh"

BAD:  "Could you look at the performance?"
GOOD: "AUDIT the homepage for Core Web Vitals -- fix LCP and CLS issues"

BAD:  "I need a database"
GOOD: "SET UP PostgreSQL with Prisma -- User, Post, Comment models with relations"

═══════════════════════════════════════════════════════════════════════════════
                       POWER KEYWORDS
═══════════════════════════════════════════════════════════════════════════════

These words trigger THERION into specific modes:

  BUILD / CREATE / SCAFFOLD    --> New feature or project from scratch
  FIX / DEBUG / REPAIR         --> Find and eliminate a bug
  REFACTOR / OPTIMIZE          --> Improve existing code quality
  AUDIT / REVIEW               --> Full analysis with findings
  DEPLOY / SHIP                --> Get it live
  TEST / COVER                 --> Write tests
  EXPLAIN / TEACH              --> Educational mode (still concise)
  DELETE / REMOVE / CLEAN      --> Strip unwanted code or files
  MIGRATE / CONVERT            --> Transform between formats or versions

Combine them:

  "AUDIT the codebase for security issues, then FIX the top 3"
  "REFACTOR the API routes, then WRITE integration tests for each"
  "BUILD a dark mode toggle, then DEPLOY to Vercel"

═══════════════════════════════════════════════════════════════════════════════
                      MULTI-STEP REQUESTS
═══════════════════════════════════════════════════════════════════════════════

THERION handles complex multi-step work. Stack your requests:

  "DO THREE THINGS:
   1. ADD a WebSocket server to the Express app on /ws
   2. CREATE a custom hook useWebSocket that auto-reconnects
   3. WIRE them together with a live chat component"

THERION will create a todo list, execute each step in order,
and mark them complete as it goes.

═══════════════════════════════════════════════════════════════════════════════
                       CONTEXT INJECTION
═══════════════════════════════════════════════════════════════════════════════

When THERION needs to know something specific, TELL IT:

  "The project uses Next.js 15 with App Router, Tailwind, and Prisma.
   BUILD a server action for creating blog posts with image upload."

  "The auth system uses Supabase. The user table has a 'role' column.
   ADD role-based access control to the /admin routes."

  "This is a Three.js scene with OrbitControls.
   ADD post-processing bloom effect to the glowing objects."

Don't make THERION guess your stack. State it.

═══════════════════════════════════════════════════════════════════════════════
                       ERROR REPORTING
═══════════════════════════════════════════════════════════════════════════════

When reporting bugs, include:

  1. WHAT happened (the error message or behavior)
  2. WHAT you expected
  3. WHERE it happens (file, line, component)
  4. WHEN it happens (on load, on click, after X seconds)

Example:

  "FIX: TypeError 'Cannot read property map of undefined' in UserList.tsx
   line 42. Happens when the API returns empty results.
   Expected: show 'No users found' message."

═══════════════════════════════════════════════════════════════════════════════
                         THE ANTI-PATTERNS
═══════════════════════════════════════════════════════════════════════════════

NEVER DO THIS:

  [!] Vague requests with no actionable target
  [!] Asking permission for things you already want done
  [!] Burying the actual request in paragraphs of context
  [!] Asking "is it possible to..." -- just ask for it
  [!] Splitting one task into five separate messages
  [!] Restating what THERION just did back to it

ALWAYS DO THIS:

  [+] Lead with the ACTION verb
  [+] Name the TARGET (file, component, feature)
  [+] Include CONSTRAINTS (tech stack, behavior, limits)
  [+] Stack multi-step work in one message
  [+] Paste error messages verbatim when reporting bugs

═══════════════════════════════════════════════════════════════════════════════
                         ADVANCED PATTERNS
═══════════════════════════════════════════════════════════════════════════════

COMPARATIVE:
  "COMPARE Next.js Server Components vs getServerSideProps for this use case
   and IMPLEMENT the better option"

CONDITIONAL:
  "IF the project has a tsconfig.json, ADD strict mode.
   IF not, CREATE one with strict defaults."

ITERATIVE:
  "IMPROVE this function until it handles all edge cases:
   empty input, null values, arrays over 10k items"

ARCHITECTURAL:
  "DESIGN the database schema for a multi-tenant SaaS app
   with orgs, users, roles, and billing. Then IMPLEMENT with Prisma."

═══════════════════════════════════════════════════════════════════════════════
                     DOMAIN-SPECIFIC PROMPTING
═══════════════════════════════════════════════════════════════════════════════

THERION v8.0 has 67 agents across 12 domains. Use domain keywords
to activate the right specialist. The more specific your language,
the deeper the expertise you unlock.

FRONTEND:
  "RESTYLE the nav with Tailwind -- sticky, glass morphism, responsive"
  "OPTIMIZE the LCP score -- lazy load images, preload critical CSS"
  "BUILD an accessible dropdown menu component with keyboard navigation"
  "ADD skeleton loading states to the user profile cards"

FRAMEWORKS:
  "SCAFFOLD a Next.js 15 app with TypeScript, auth, and Tailwind"
  "BUILD an Astro blog with MDX content collections and RSS feed"
  "SCAFFOLD a Vue 3 composable for infinite scroll with IntersectionObserver"
  "CREATE a Flutter widget for a swipeable card stack with animations"

BACKEND:
  "DESIGN a REST API for order management with Express and Prisma"
  "ADD WebSocket support for real-time notifications -- use ws library"
  "BUILD a tRPC router with input validation for the user CRUD"
  "SET UP Redis caching for the product catalog endpoint"

3D & GRAPHICS:
  "BUILD a Three.js scene with PBR materials and environment mapping"
  "WRITE a GLSL fragment shader for an iridescent bubble effect"
  "ADD Rapier3D physics to the falling objects in the scene"
  "PORT this WebGL renderer to WebGPU with compute shader post-processing"

GAME DEV:
  "BUILD a character controller in Godot with coyote time and wall jump"
  "ADD client-side prediction to the Unity multiplayer movement system"
  "CREATE a state machine for enemy AI in Unreal -- patrol, chase, attack"
  "IMPLEMENT an inventory system with drag-and-drop in Unity UI Toolkit"

AI & ML:
  "BUILD a RAG pipeline with LangChain, Chroma, and embedding chunking"
  "FINE-TUNE a LoRA adapter for code generation on custom dataset"
  "DEPLOY the model with vLLM behind a FastAPI endpoint"
  "CREATE a multi-agent workflow with tool use and conversation memory"

SECURITY:
  "AUDIT this Express app for OWASP Top 10 vulnerabilities"
  "ADD CSRF protection and rate limiting to the auth endpoints"
  "IMPLEMENT AES-256-GCM encryption for the user PII columns"
  "REVIEW the JWT implementation for common attack vectors"

DEVOPS:
  "WRITE a Dockerfile for the Node.js app -- multi-stage, non-root user"
  "BUILD a GitHub Actions CI pipeline with test, lint, build, deploy"
  "SET UP Prometheus metrics collection and Grafana dashboards"
  "CREATE Terraform modules for the AWS ECS Fargate deployment"

SYSTEMS:
  "OPTIMIZE this Rust async function -- reduce allocations, use zero-copy"
  "BUILD a Go microservice with graceful shutdown and health checks"
  "PORT this Python script to Rust with proper error handling"
  "WRITE a WASM module for the image processing pipeline"

BLOCKCHAIN:
  "BUILD a Hedera Token Service integration for NFT minting"
  "AUDIT this Solidity contract for reentrancy and overflow vulnerabilities"
  "CREATE a DEX swap interface with Ethers.js and Wagmi"
  "DEPLOY the smart contract to testnet with Hardhat scripts"

DEBUG:
  "FIX: TypeError at line 42 in UserList.tsx when API returns empty array"
  "PROFILE the dashboard page -- identify the top 3 performance bottlenecks"
  "DEBUG the WebSocket disconnection that happens every 30 seconds"
  "TRACE the memory leak in the real-time chart component"

The domain keywords in your prompt determine which agent mindset loads.
Use the right terminology and THERION activates the right specialist.

╔══════════════════════════════════════════════════════════════════════════════╗
║         PROMPT LIKE AN OPERATOR | 67 AGENTS AWAIT | DEUS VULT                ║
╚══════════════════════════════════════════════════════════════════════════════╝
