# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## WHAT THIS REPO IS

A static website audit and annotation report for Silverdale Medical (SDM). The primary deliverable is `annotations.html` — a single self-contained HTML file that displays annotated screenshots of the current SDM website with categorised improvement opportunities.

No build system, no package manager, no framework. Open `annotations.html` directly in a browser.

## FILES

| Path | Purpose |
|---|---|
| `annotations.html` | The entire audit document — HTML/CSS/JS in one file |
| `Screenshots/` | PNG screenshots of each SDM page (used as `<img>` sources in the HTML) |
| `Screenshots/Errors/` | Error state screenshots |
| `SKILL.md` | Skills install reference |

## ANNOTATION SYSTEM

Each page section in `annotations.html` has:
- A **screenshot pane** with numbered `<div class="pin cat-*">` circles overlaid at `(left%, top%)` coordinates
- An **issues pane** with matching `<div class="issue">` cards referencing the same numbers

Pin/issue categories and their CSS class suffixes:

| Category | Class | Color |
|---|---|---|
| UX | `cat-ux` | `#e63946` red |
| Design | `cat-design` | `#f4a261` orange |
| Content | `cat-content` | `#2a9d8f` green |
| Tech | `cat-tech` | `#3a86ff` blue |
| Trust | `cat-trust` | `#8338ec` purple |

Each issue card contains `.issue-title`, `.issue-desc`, and `<span class="tag [category]">` badges.

## DESIGN TOKENS (annotations.html)

These CSS variables are defined in `:root` and must stay consistent throughout the document:

```
--red: #e63946  --orange: #f4a261  --green: #2a9d8f
--blue: #3a86ff  --purple: #8338ec
--bg: #f0f4f8  --surface: #ffffff  --border: #dde3ea
--text: #1a2332  --muted: #5a6a7e  --radius: 12px
```

Page section headers use `background: #1a2332`. The site header uses a gradient: `linear-gradient(135deg, #1a2332 0%, #2d4a6e 100%)`.

## SCREENSHOT WORKFLOW

Puppeteer is installed locally (`node_modules/puppeteer`). Chrome cache: `C:/Users/Tim/.cache/puppeteer/`.

```
node screenshot.js http://localhost:[port]/page.html screenshots/label.png [width] [height]
```

- Script is `screenshot.js` (not `.mjs`) at project root
- After screenshotting, read the PNG with the Read tool to compare visually
- Do at least 2 comparison rounds against a reference image; stop only when no visible differences remain

## CLAUDE CODE CONFIGURATION

The `.claude/` folder is a configuration template — these files govern Claude's own behaviour in this repo:

| Path | Purpose |
|---|---|
| `.claude/settings.json` | Permissions allowlist/denylist, hooks config, model |
| `.claude/agents/code-reviewer.md` | Subagent: reviews diffs (CRITICAL / WARNING / SUGGESTION) |
| `.claude/commands/fix-issue.md` | Slash command: `/fix-issue [number]` |
| `.claude/hooks/pre-commit.sh` | Pre-commit validation hook |
| `.claude/rules/frontend.md` | Scoped rules for `components/**/*.tsx` and `app/**/*.tsx` |
| `.claude/skills/SKILL.md` | `frontend-design` skill with design tokens |

## OPERATING RULES

- **Plan first** — enter plan mode for any non-trivial task; write plan to `tasks/todo.md` before implementing.
- **Never work on `main` directly** — branch to `dev`, merge only when complete and verified.
- **Self-improvement** — after any correction, append to `tasks/lessons.md`: `[date] | what went wrong | rule to prevent it`.
- **Commits only when asked** — small, focused commits; never bundle unrelated changes.
