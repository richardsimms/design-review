# /design-review

A comprehensive Claude skill that audits designs and codebases against [SEEK Design Principles](https://myseek.atlassian.net/wiki/spaces/DP1/overview), the [Quality Framework](https://myseek.atlassian.net/wiki/spaces/ADT/pages/3740336187/Definition+of+Design+Quality+at+SEEK), design system compliance, and WCAG AA accessibility standards.

Supports visual design reviews, codebase audits, and market-specific evaluations across APAC regions.

**Website**: [design-review-skill.vercel.app](https://design-review-skill.vercel.app)

---

## Installation

### For Claude Code

```bash
npx design-review
```

Installs the skill to your Claude Code skills directory. Requires [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code).

### Manual Installation

**Global (all projects):**

```bash
unzip seek-design-audit.zip -d ~/.claude/skills/
```

**Project-level:**

```bash
unzip seek-design-audit.zip -d .claude/skills/
```

### For Claude.ai

1. Go to **Settings → Features**
2. Download [`seek-design-audit.zip`](https://github.com/richardsimms/design-review/releases/latest)
3. Drag and drop the `.zip` file into the skill upload dialog

---

## Usage

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

Audit codebase for design system compliance, accessibility, and implementation quality.

### Three-Step Workflow

| Step | What Happens |
|------|--------------|
| **1. Context Gathering** | Identifies market (AU/NZ/ID/TH/HK/SG/PH/MY), language, platform, and audience |
| **2. Comprehensive Audit** | Evaluates against Design Principles, Quality Framework, design system compliance, and WCAG AA |
| **3. Structured Reporting** | Delivers prioritised recommendations (Critical → Important → Opportunity) |

---

## What It Does

This skill audits your designs and code through SEEK's design standards:

| Framework | Focus | Weight |
|-----------|-------|--------|
| **Design Principles** | Maximise the Experience, Bring the Marketplace to Life | Primary |
| **Quality Framework** | 5 pillars of craft excellence | Secondary |
| **Design System Compliance** | 80/20 component usage rule | Technical |
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
| **Cohesive at Every Touchpoint** | Design system compliance (80/20 rule), cross-platform consistency, SEEK Writing Style Guide |
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
Strong visual hierarchy and effective use of design system components.
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
✗ Cohesive at Every Touchpoint — Custom spacing overrides design system
✗ Embrace Diversity — Contrast ratio 3.2:1 below 4.5:1 minimum

DESIGN SYSTEM COMPLIANCE
───────────────────
✓ Using layout and typography components correctly
✗ Custom button styling instead of design system components
💡 Consider system Dialog component for modal patterns

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
seek-design-audit/
├── SKILL.md                              # Main skill with workflow
└── references/
    ├── design-principles.md              # Maximise + Marketplace evaluation criteria
    ├── quality-framework.md              # 5 pillars with detailed tactics
    ├── design-system-checklist.md        # Component & token compliance checks
    ├── accessibility.md                  # WCAG AA requirements
    └── market-considerations.md          # APAC market-specific guidance
```

---

## Compatibility

Works with:
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code)
- [Claude.ai](https://claude.ai)
- [Cursor](https://cursor.com)
- [OpenCode](https://opencode.ai)
- Any MCP-compatible coding agent

---

## Resources

- **Website**: [design-review-skill.vercel.app](https://design-review-skill.vercel.app)
- **LLM.txt**: [design-review-skill.vercel.app/llm.txt](https://design-review-skill.vercel.app/llm.txt)
- **Claude Skills Documentation**: [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code)

---

## Credits

This skill codifies design standards from:
- **SEEK Design Principles** — Maximise the Experience, Bring the Marketplace to Life
- **SEEK Quality Framework** — Complex Made Simple, Beautifully Crafted, Purposefully Innovative, Cohesive at Every Touchpoint, Embrace Diversity

---

## License

MIT

---

Created by [Richard Simms](https://rsimms.com)
