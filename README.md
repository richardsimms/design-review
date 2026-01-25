# /design-review

A comprehensive design audit agent for **Claude Code**, **Cursor**, and **Codex** that evaluates designs and codebases against [SEEK Design Principles](https://myseek.atlassian.net/wiki/spaces/DP1/overview), the [Quality Framework](https://myseek.atlassian.net/wiki/spaces/ADT/pages/3740336187/Definition+of+Design+Quality+at+SEEK), Braid design system compliance, and WCAG AA accessibility standards.

Supports visual design reviews, codebase audits, and market-specific evaluations across APAC regions.

**Website**: [www.designreview.cc](https://www.designreview.cc)

---

## Installation

### Interactive Installer (Recommended)

```bash
npx design-review
```

Interactive menu lets you choose:
- **Claude Code** only (`.claude/skills/design-review/`)
- **Cursor** only (`.cursorrules`)
- **Codex** only (`AGENTS.md` - project or global)
- **All platforms** (install to all three)

---

### Platform-Specific Instructions

#### Claude Code

The interactive installer will create `.claude/skills/design-review/` with the full skill and reference files.

**Manual Installation:**

```bash
# Global (all projects)
unzip seek-design-audit.zip -d ~/.claude/skills/

# Project-level
unzip seek-design-audit.zip -d .claude/skills/
```

**For Claude.ai:**
1. Go to **Settings → Features**
2. Download [`seek-design-audit.zip`](https://github.com/richardsimms/design-review/releases/latest)
3. Drag and drop into the skill upload dialog

#### Cursor

The interactive installer will create `.cursorrules` in your project root.

**Manual Installation:**

```bash
# Copy the template to your project
cp node_modules/design-review/templates-cursor/.cursorrules .cursorrules
```

⚠️ **Warning**: If you already have a `.cursorrules` file, the installer will abort to prevent overwriting. Backup your existing file first.

#### Codex

The interactive installer will create `AGENTS.md` at your chosen location:
- **Project-level**: `./AGENTS.md`
- **Global**: `~/.codex/AGENTS.md`

If `AGENTS.md` already exists, the design review section will be appended with a separator.

**Manual Installation:**

```bash
# Project-level
cp node_modules/design-review/templates-codex/AGENTS.md ./AGENTS.md

# Global
mkdir -p ~/.codex
cp node_modules/design-review/templates-codex/AGENTS.md ~/.codex/AGENTS.md
```

---

## Usage

### Claude Code

```
/design-review
```

Start comprehensive audit with context gathering (market, platform, audience).

```
/design-review screenshot.png
```

Review visual design, mockup, or Figma screenshot against SEEK frameworks.

```
/design-review src/components/
```

Audit codebase for Braid compliance, accessibility, and implementation quality.

### Cursor

Cursor will automatically read `.cursorrules` when you interact with it. Simply ask:

```
Audit this design against SEEK standards
```

```
Review src/ for Braid compliance and accessibility issues
```

### Codex

Codex will automatically read `AGENTS.md` from your project or `~/.codex/`. Ask:

```
Perform a design audit on this screenshot
```

```
Audit the codebase for SEEK design compliance
```

### Three-Step Workflow

| Step | What Happens |
|------|--------------|
| **1. Context Gathering** | Identifies market (AU/NZ/ID/TH/HK/SG/PH/MY), language, platform, and audience |
| **2. Comprehensive Audit** | Evaluates against Design Principles, Quality Framework, Braid, and WCAG AA |
| **3. Structured Reporting** | Delivers prioritised recommendations (Critical → Important → Opportunity) |

---

## What It Does

This skill audits your designs and code through SEEK's design standards:

| Framework | Focus | Weight |
|-----------|-------|--------|
| **Design Principles** | Maximise the Experience, Bring the Marketplace to Life | Primary |
| **Quality Framework** | 5 pillars of craft excellence | Secondary |
| **Braid Compliance** | 80/20 component usage rule | Technical |
| **Accessibility** | WCAG AA standards | Non-negotiable |

### Key Feature: Context-Aware Evaluation

The skill doesn't blindly apply rules. It first gathers context about your project:

```
## Context Required

To provide an accurate audit, I need to understand your product context:

**Market & Language**
- [ ] Market: AU | NZ | ID | TH | HK | SG | PH | MY
- [ ] Language: English | Thai | Bahasa | Traditional Chinese

**Platform & Audience**
- [ ] Platform: Web (Desktop) | Web (Mobile) | iOS | Android
- [ ] Primary Audience: Candidate | Hirer | Recruiter

Does this look right? Any adjustments before I proceed?
```

You confirm or adjust, then get the full audit with context-specific recommendations.

---

## SEEK Design Principles

### Maximise the Experience

Create immersive digital interfaces by fully utilising the available canvas to add layers and depth.

- Full viewport utilisation for immersive, focused experiences
- Layered information architecture with progressive disclosure
- Depth through elevation (cards, modals, sheets)
- Minimal chrome to highlight content
- Full-screen flows for critical tasks

### Bring the Marketplace to Life

Create a vibrant, energetic marketplace by emphasising presence and activity.

- Real-time activity indicators (jobs posted, applications received)
- Social proof elements (trending searches, popular employers)
- Live counters and progress tracking
- Recency indicators ("Posted 2 hours ago")
- Dynamic content that responds to marketplace activity

---

## Quality Framework

| Pillar | Focus |
|--------|-------|
| **Complex Made Simple** | Reduce cognitive load, streamline decisions, eliminate friction, context-aware interfaces |
| **Beautifully Crafted** | Visual hierarchy, responsive design, functional visuals, micro-interactions |
| **Purposefully Innovative** | Original concepts balanced with usability, cutting-edge tech with purpose |
| **Cohesive at Every Touchpoint** | Braid design system (80/20 rule), cross-platform consistency, SEEK Writing Style Guide |
| **Embrace Diversity** | WCAG AA compliance, cultural sensitivity, inclusive representation, readability |

---

## Output Format

Each audit provides structured feedback with clear severity indicators:

```
═══════════════════════════════════════════════════
📊 SEEK DESIGN AUDIT
═══════════════════════════════════════════════════
Market: AU | Language: English
Platform: Web (Desktop) | Audience: Candidate
═══════════════════════════════════════════════════
🔴 Critical: 2 | 🟡 Important: 3 | 🟢 Opportunities: 4
═══════════════════════════════════════════════════

OVERALL ASSESSMENT
───────────────────
Strong visual hierarchy and effective use of Braid components.
Missing real-time marketplace indicators and some accessibility
improvements needed for WCAG AA compliance.

DESIGN PRINCIPLES
───────────────────
✓ Maximise the Experience
  Full viewport utilisation with layered job detail sheets

✗ Bring the Marketplace to Life
  Missing real-time activity indicators
  No trending or social proof elements

QUALITY FRAMEWORK
───────────────────
✓ Complex Made Simple — Clear progressive disclosure
✓ Beautifully Crafted — Strong visual hierarchy
💡 Purposefully Innovative — Consider dynamic content patterns
✗ Cohesive at Every Touchpoint — Custom spacing overrides Braid
✗ Embrace Diversity — Contrast ratio 3.2:1 below 4.5:1 minimum

BRAID COMPLIANCE
───────────────────
✓ Using Stack, Columns, Text components correctly
✗ Custom button styling instead of Braid Button
💡 Consider Braid Dialog for modal patterns

WCAG AA ACCESSIBILITY
───────────────────
✗ CRITICAL: CTA contrast ratio 3.2:1 (requires 4.5:1)
✗ IMPORTANT: Focus indicators missing on custom inputs  
✓ Touch targets meet 44×44px minimum
✓ Semantic HTML structure present

PRIORITISED RECOMMENDATIONS
───────────────────
🔴 [CRITICAL] Fix CTA contrast ratio
   Location: Apply button component
   Action: Update background colour to meet 4.5:1
   Guideline: Embrace Diversity

🟡 [IMPORTANT] Add marketplace activity indicators
   Location: Job listing cards
   Action: Show timestamps and application counts
   Guideline: Bring the Marketplace to Life
```

---

## What's Included

```
design-review/
├── templates/                            # Claude Code (modular)
│   ├── SKILL.md                         # Main skill with workflow
│   └── references/
│       ├── design-principles.md         # Maximise + Marketplace evaluation
│       ├── quality-framework.md         # 5 pillars with detailed tactics
│       ├── braid-checklist.md           # Component & token compliance
│       ├── accessibility.md             # WCAG AA requirements
│       └── market-considerations.md     # APAC market-specific guidance
│
├── templates-cursor/                     # Cursor (single file)
│   └── .cursorrules                     # Condensed design audit rules
│
└── templates-codex/                      # Codex (AGENTS.md format)
    └── AGENTS.md                        # Design audit agent instructions
```

---

## Compatibility

**Officially Supported:**
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) — Full skill with modular references
- [Cursor](https://cursor.com) — Condensed `.cursorrules` format
- [Codex](https://openai.com/codex) — `AGENTS.md` format

**Also Works With:**
- [Claude.ai](https://claude.ai) — Skill upload via zip file
- [OpenCode](https://opencode.ai) — Claude Code compatible
- Any MCP-compatible coding agent

---

## Resources

- **Website**: [www.designreview.cc](https://www.designreview.cc)
- **LLM.txt**: [www.designreview.cc/llm.txt](https://www.designreview.cc/llm.txt)
- **Braid Design System**: [seek-oss.github.io/braid-design-system](https://seek-oss.github.io/braid-design-system/)
- **Claude Code Documentation**: [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code)
- **Cursor Documentation**: [docs.cursor.com](https://docs.cursor.com)
- **Codex CLI Documentation**: [github.com/openai/codex](https://github.com/openai/codex)

---

## Credits

This skill codifies design standards from:
- **SEEK Design Principles** — Maximise the Experience, Bring the Marketplace to Life
- **SEEK Quality Framework** — Complex Made Simple, Beautifully Crafted, Purposefully Innovative, Cohesive at Every Touchpoint, Embrace Diversity
- **Braid Design System** — SEEK's open-source design system

---

## License

MIT

---

Created by [Richard Simms](https://rsimms.com)
