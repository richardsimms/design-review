# design-review

Install the SEEK Design Review skill for Claude Code.

## Installation

```bash
npx design-review
```

This installs the skill to `.claude/skills/design-review/` in your current directory.

## What it does

Audits designs and codebases against:
- **SEEK Design Principles** — Maximise the Experience, Bring the Marketplace to Life
- **Quality Framework** — 5 pillars of craft excellence
- **Braid Compliance** — 80/20 component usage rule
- **Accessibility** — WCAG AA standards

## Usage

After installation, in Claude Code:

```
/design-review              # Start comprehensive audit
/design-review screenshot   # Review visual design
/design-review src/         # Audit codebase
```

## Manual Installation

If you prefer manual installation:

**Global (all projects):**
```bash
# Clone and copy to global skills
git clone https://github.com/richardsimms/design-review.git
cp -r design-review ~/.claude/skills/
```

**Project-level:**
```bash
cp -r design-review .claude/skills/
```

## Links

- **Website**: [design-review-skill.vercel.app](https://design-review-skill.vercel.app)
- **GitHub**: [github.com/richardsimms/design-review](https://github.com/richardsimms/design-review)

## License

MIT — Created by [Richard Simms](https://rsimms.com)
