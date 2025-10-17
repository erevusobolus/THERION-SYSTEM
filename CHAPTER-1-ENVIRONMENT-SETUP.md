# 🔧 CHAPTER 1: FOUNDATION MASTERY
*"From Zero to Development Environment Hero"*

---

## 🎯 **LEARNING OBJECTIVES**

By the end of this chapter, you will:
- ✅ Have a professional VSCode development environment
- ✅ Understand THERION AI integration and prompt engineering
- ✅ Master essential development tools and workflows
- ✅ Create your first Next.js project with TypeScript
- ✅ Establish professional Git version control

---

## 🚀 **PRE-SESSION PREPARATION (15 minutes)**

### **System Requirements Check:**
```bash
# Verify Node.js installation (Required: v18.17+)
node --version

# Verify npm installation  
npm --version

# Verify Git installation
git --version
```

### **If Missing Any Requirements:**
- **Node.js**: Download from [nodejs.org](https://nodejs.org)
- **Git**: Download from [git-scm.com](https://git-scm.com)

---

## 🛠️ **PART 1: PROFESSIONAL VSCODE SETUP (15 minutes)**

### **Essential Extensions Installation:**

#### **Markdown & Documentation:**
```vscode-extensions
yzane.markdown-pdf,shd101wyy.markdown-preview-enhanced,yzhang.markdown-all-in-one,davidanson.vscode-markdownlint
```

#### **Web Development Core:**
```vscode-extensions
esbenp.prettier-vscode,ms-vscode.vscode-typescript-next,bradlc.vscode-tailwindcss,ms-vscode.live-server
```

#### **AI & Productivity:**
```vscode-extensions
github.copilot,github.copilot-chat,ms-vscode.vscode-json,formulahendry.auto-rename-tag
```

### **VSCode Configuration Setup:**

1. **Open VSCode Settings** (`Cmd+,` on Mac, `Ctrl+,` on Windows)
2. **Create Workspace Settings** - File → Save Workspace As → `therion-dev-workspace`

**Settings Configuration (settings.json):**
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "markdown-pdf.executablePath": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
}
```

### **Keyboard Shortcuts Mastery:**
```
Cmd/Ctrl + Shift + P  → Command Palette
Cmd/Ctrl + P          → Quick Open Files
Cmd/Ctrl + `          → Toggle Terminal
Cmd/Ctrl + Shift + `  → New Terminal
Cmd/Ctrl + /          → Toggle Comment
Cmd/Ctrl + D          → Multi-cursor Selection
```

---

## 🤖 **PART 2: THERION AI INTEGRATION (10 minutes)**

### **GitHub Copilot Configuration:**
1. **Sign in to GitHub Copilot** (Extensions panel → GitHub Copilot → Sign In)
2. **Configure Chat Settings:**
   - Enable "Suggestions" for all file types
   - Set "Auto-trigger" to aggressive
   - Enable "Ghost Text" for inline suggestions

### **THERION AI Prompt Engineering Basics:**

#### **Effective Prompt Structure:**
```
CONTEXT: [What you're building]
GOAL: [What you want to achieve]  
CONSTRAINTS: [Technical requirements]
DESIRED OUTPUT: [Expected format]
```

#### **Example THERION AI Prompts:**
```
CONTEXT: Building a Next.js website with TypeScript
GOAL: Create a responsive navigation component
CONSTRAINTS: Use Tailwind CSS, mobile-first design
DESIRED OUTPUT: Complete component with TypeScript types
```

### **AI-Assisted Development Workflow:**
1. **Planning Phase**: Use AI to brainstorm architecture
2. **Coding Phase**: Leverage auto-completion and suggestions  
3. **Debugging Phase**: Ask AI to explain errors and solutions
4. **Optimization Phase**: Get AI recommendations for improvements

---

## 📦 **PART 3: PROJECT INITIALIZATION (15 minutes)**

### **Step 1: Create Next.js Project**
```bash
# Navigate to your projects directory
cd ~/Documents/GitHub

# Create new Next.js project with TypeScript
npx create-next-app@latest my-therion-website \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# Navigate into project
cd my-therion-website
```

### **Step 2: Project Structure Understanding**
```
my-therion-website/
├── src/
│   └── app/
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Home page
│       └── components/      # Reusable components
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── package.json            # Project dependencies
```

### **Step 3: Essential Dependencies Installation**
```bash
# Install additional useful packages
npm install lucide-react clsx class-variance-authority

# Install development dependencies
npm install -D @types/node
```

### **Step 4: Verify Installation**
```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
# You should see the Next.js welcome page
```

---

## 🔄 **PART 4: GIT WORKFLOW SETUP (10 minutes)**

### **Initialize Git Repository:**
```bash
# Initialize git (if not already done)
git init

# Configure git user (if first time)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add all files to staging
git add .

# Initial commit
git commit -m "Initial Next.js TypeScript project setup"
```

### **Professional Git Workflow:**
```bash
# Create development branch
git checkout -b develop

# Create feature branch for new features
git checkout -b feature/homepage-setup

# Regular workflow:
# 1. Make changes
# 2. Stage changes: git add .
# 3. Commit: git commit -m "descriptive message"
# 4. Push: git push origin feature-branch-name
```

### **Commit Message Best Practices:**
```
feat: add hero section component
fix: resolve mobile navigation issue  
docs: update README with setup instructions
style: format code with prettier
refactor: optimize component structure
test: add unit tests for utils
```

---

## 🎨 **PART 5: BASIC CUSTOMIZATION (10 minutes)**

### **Update Layout Component (src/app/layout.tsx):**
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My THERION Website',
  description: 'Built with Next.js, TypeScript, and THERION AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  )
}
```

### **Update Home Page (src/app/page.tsx):**
```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-6xl font-bold text-center text-gray-800 mb-8">
          Welcome to My
          <span className="text-blue-600"> THERION</span> Website
        </h1>
        
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
          Built with Next.js, TypeScript, and AI assistance
        </p>
        
        <div className="mt-12 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
```

---

## ✅ **CHAPTER 1 DELIVERABLES CHECKLIST**

### **Environment Setup:**
- [ ] VSCode installed with all essential extensions
- [ ] Workspace settings configured for optimal development
- [ ] GitHub Copilot activated and configured
- [ ] THERION AI prompt engineering basics understood

### **Project Foundation:**
- [ ] Next.js project created with TypeScript
- [ ] All dependencies installed correctly
- [ ] Development server running on localhost:3000
- [ ] Basic customizations implemented

### **Version Control:**
- [ ] Git repository initialized
- [ ] Initial commit completed
- [ ] Branch strategy understood
- [ ] Professional commit message format learned

### **Skills Acquired:**
- [ ] VSCode keyboard shortcuts mastered
- [ ] Command line basics for web development
- [ ] Next.js project structure understanding
- [ ] TypeScript integration knowledge
- [ ] AI-assisted development workflow

---

## 🚀 **NEXT SESSION PREPARATION**

### **Before Chapter 2:**
1. **Practice Exercise**: Modify the home page styling using Tailwind CSS
2. **Reading Assignment**: Browse [Next.js App Router docs](https://nextjs.org/docs/app)
3. **Prep Work**: Think about your website's content and pages you want to create

### **Questions for Next Session:**
- What type of website are you building?
- What pages/sections do you need?
- Any specific design preferences or inspirations?

---

## 🆘 **TROUBLESHOOTING GUIDE**

### **Common Issues & Solutions:**

**Issue**: Node.js version too old
```bash
# Solution: Update Node.js
# Visit nodejs.org and download latest LTS version
```

**Issue**: Extension not working
```bash
# Solution: Restart VSCode or reload window
# Cmd+Shift+P → "Developer: Reload Window"
```

**Issue**: Git not found
```bash
# Solution: Install Git
# Visit git-scm.com and follow installation guide
```

**Issue**: TypeScript errors in new project
```bash
# Solution: Ensure all dependencies are installed
npm install
# Then restart TypeScript server in VSCode
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

---

## 📚 **ADDITIONAL RESOURCES**

### **Documentation:**
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [VSCode Tips & Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

### **Tools:**
- [Can I Use](https://caniuse.com) - Browser compatibility
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Error Translator](https://ts-error-translator.vercel.app)

---

*🎓 **Congratulations!** You've completed Chapter 1 and have a professional development environment ready for building amazing websites. In Chapter 2, we'll dive deep into Next.js components and build your complete website structure.*