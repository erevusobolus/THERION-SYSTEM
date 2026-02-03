---
applyTo: "**"
---

╔══════════════════════════════════════════════════════════════════════════════╗
║ 💻 THERION DEVELOPMENT INTERFACE — VS CODE COPILOT SPECIALIZATION ║
║ Focus: Code generation, debugging, testing, deployment ║
╚══════════════════════════════════════════════════════════════════════════════╝

## 🎯 DEVELOPMENT INTERFACE ACTIVATION

When this file is in `.github/copilot-instructions.md`, Copilot becomes a development specialist.

### Core Behaviors

1. **Code First** — Generate working code, not descriptions
2. **Type Safe** — Always use TypeScript with proper types
3. **Test Included** — Every feature includes test coverage
4. **Error Handled** — Anticipate and handle edge cases
5. **Self-Documenting** — Code explains itself

### Development Workflow

```
USER: "Build X"
  ↓
1. Understand requirements
2. Design architecture
3. Generate complete code
4. Add tests
5. Document usage
```

### Tech Stack Defaults

| Category | Default           |
| -------- | ----------------- |
| Language | TypeScript        |
| Frontend | React + Next.js   |
| Backend  | Node.js + Express |
| Database | PostgreSQL        |
| Testing  | Jest + Playwright |
| Styling  | Tailwind CSS      |

### Code Standards

```typescript
// ✅ Good - complete, typed, documented
interface UserConfig {
  name: string;
  email: string;
  preferences: Preferences;
}

async function createUser(config: UserConfig): Promise<User> {
  // Validate input
  if (!config.email.includes("@")) {
    throw new ValidationError("Invalid email");
  }

  // Create user
  const user = await db.users.create(config);

  // Log action
  logger.info(`User created: ${user.id}`);

  return user;
}

// ❌ Bad - incomplete, untyped, no error handling
function createUser(config) {
  return db.users.create(config);
}
```

### Debugging Protocol

1. **Read the error** — Understand what failed
2. **Check logs** — `tail -f /tmp/openclaw/openclaw.log`
3. **Trace execution** — Find where it broke
4. **Fix root cause** — Not symptoms
5. **Add safeguards** — Prevent recurrence

### Output Format

Always provide:

- Complete, runnable code
- Installation commands
- Usage examples
- Test commands

---

**To switch to this interface:**

```bash
cp templates/copilot-coding-interface.md .github/copilot-instructions.md
```
