# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## SESSION START

1. **Switch to `dev` branch** — always. Run `git checkout dev && git pull` before touching anything. Never work on `main` directly.

2. Read tasks/lessons.md — apply all lessons before touching anything

3. Read tasks/todo.md — understand current state

4. If neither exists, create them before starting

5. **Install required skills** — see the [SKILLS](#skills) section. Install any that are missing, then invoke them before writing any frontend code.

6. **All website/frontend code must be written in TypeScript.** Use Vite + TypeScript as the build stack. Source files go in `src/`. Never write plain HTML-only sites with inline scripts.

7. **Reference Images** — if a reference image is provided: match layout, spacing, typography and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.

   - If no reference image: design from scratch with high craft (see guardrails below).
   - Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.


 

## SKILLS

The following skills must be installed on each project before writing any frontend code. Check if present and install if missing.

| Skill | Install command |
|---|---|
| `frontend-design` | `/plugin marketplace add anthropics/claude-code` then `/plugin install frontend-design@claude-code-plugins` |
| `web-design-guidelines` | `npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines` |
| `find-skills` | `npx skills add https://github.com/vercel-labs/skills --skill find-skills` |

## SCREENSHOT WORKFLOW
 
- Puppeteer is installed locally in this project (`node_modules/puppeteer`). Chrome cache is at `C:/Users/Tim/.cache/puppeteer/`.
- Always screenshot from localhost: node screenshot.js http://localhost:[port]/site1.html screenshots/label.png
- The script is `screenshot.js` (not screenshot.mjs). Usage: `node screenshot.js <url> <output-path> [width] [height]`
- Screenshots save to `screenshots/` directory (tracked in .gitignore, untracked from git)
- screenshot.js lives in the project root. Use it as-is.
- After screenshotting, read the PNG from temporary screenshots/ with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## OPERATING RULES

### 1. Plan First

- Enter plan mode for any non-trivial task (3+ steps)

- Write plan to tasks/todo.md before implementing

- If something goes wrong, STOP and re-plan — never push through

 

### 2. Subagent Strategy

- Use subagents to keep main context clean

- One task per subagent

- Throw more compute at hard problems

 

### 3. Self-Improvement Loop

- After any correction: update tasks/lessons.md

- Format: [date] | what went wrong | rule to prevent it

- Review lessons at every session start

 

### 4. Verification Standard

- Never mark complete without proving it works

- Run tests, check logs, diff behavior

- Ask: "Would a staff engineer approve this?"

 

### 5. Demand Elegance

- For non-trivial changes: is there a more elegant solution?

- If a fix feels hacky: rebuild it properly

- Don't over-engineer simple things

 

### 6. Autonomous Bug Fixing

- When given a bug: just fix it

- Go to logs, find root cause, resolve it

- No hand-holding needed

 

## CORE PRINCIPLES

- Simplicity First — touch minimal code

- No Laziness — root causes only, no temp fixes

- Never Assume — verify paths, APIs, variables before using

- Ask Once — one question upfront if unclear, never interrupt mid-task

 

## TASK MANAGEMENT

1. Plan → tasks/todo.md

2. Verify → confirm before implementing

3. Track → mark complete as you go

4. Explain → high-level summary each step

5. Commit → **Only commit when the user explicitly says to commit.** Never commit proactively after completing a task. Commits happen after the user has reviewed the work and given the go-ahead. Only merge `dev` into `main` when features are fully complete and verified — never merge work-in-progress.

   **Commit size rule:** Each commit must be small and focused — one feature or one area of change at a time. Examples of correct scope: a change to the hero section, a fix to the testimonials carousel, an update to the stats bar. Never bundle multiple unrelated features into a single commit. If the user says "commit all changes", group them into logical small commits rather than one large one.

6. Learn → tasks/lessons.md after corrections
