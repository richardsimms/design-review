# Braid Design System Checklist

**Reference**: [seek-oss.github.io/braid-design-system](https://seek-oss.github.io/braid-design-system/)

## Core Compliance Check

SEEK follows an **80/20 rule**: 80% standard Braid components, 20% custom patterns for innovation.

### Component Usage

**Layout Components**
| Component | Use For | Check |
|-----------|---------|-------|
| `Box` | Base layout primitive | Are custom divs used instead? |
| `Stack` | Vertical spacing | Is manual margin used? |
| `Inline` | Horizontal spacing | Is flexbox manually implemented? |
| `Columns` | Grid layouts | Are custom grids used? |
| `ContentBlock` | Max-width containers | Is max-width manually set? |
| `Card` | Contained content sections | Are custom card styles used? |

**Typography**
| Component | Use For | Check |
|-----------|---------|-------|
| `Heading` | All headings | Are custom heading styles used? |
| `Text` | Body text | Is font styling manually applied? |
| `Strong` | Bold emphasis | Is `<b>` or font-weight used directly? |
| `Secondary` | De-emphasised text | Is opacity/colour manually reduced? |

**Form Components**
| Component | Use For | Check |
|-----------|---------|-------|
| `TextField` | Text inputs | Are native inputs styled manually? |
| `Textarea` | Multi-line text | Is textarea styled manually? |
| `Checkbox` | Checkboxes | Are custom checkboxes built? |
| `Radio` | Radio buttons | Are custom radios built? |
| `Dropdown` | Select menus | Is native select styled? |
| `Autosuggest` | Autocomplete | Is custom autocomplete built? |

**Actions**
| Component | Use For | Check |
|-----------|---------|-------|
| `Button` | Primary actions | Are custom buttons styled? |
| `ButtonLink` | Navigation that looks like button | Is Button used for navigation? |
| `TextLink` | Inline links | Are links styled manually? |
| `TextLinkButton` | Button that looks like link | Is styling hacked? |

**Feedback**
| Component | Use For | Check |
|-----------|---------|-------|
| `Alert` | Important messages | Are custom alert styles used? |
| `Notice` | Contextual information | Is Alert used when Notice fits? |
| `Badge` | Status indicators | Are custom badges built? |
| `Loader` | Loading states | Are custom spinners used? |

**Disclosure**
| Component | Use For | Check |
|-----------|---------|-------|
| `Accordion` | Expandable sections | Is custom accordion built? |
| `Dialog` | Modal dialogs | Is custom modal built? |
| `Drawer` | Side panels | Is custom drawer built? |
| `OverflowMenu` | Action menus | Is custom dropdown menu built? |

---

## Spacing Tokens

Braid uses a spacing scale. Check for manual pixel values.

| Token | Value | Common Uses |
|-------|-------|-------------|
| `none` | 0 | Reset spacing |
| `xxsmall` | 4px | Tight internal spacing |
| `xsmall` | 8px | Compact spacing |
| `small` | 12px | Default internal spacing |
| `medium` | 16px | Standard spacing |
| `gutter` | 24px | Layout gutters |
| `large` | 32px | Section spacing |
| `xlarge` | 48px | Major section breaks |
| `xxlarge` | 64px | Page-level spacing |

**Red flags**:
- Hardcoded pixel values in styles
- Inconsistent spacing that doesn't match the scale
- Manual margin/padding instead of Stack/Inline

---

## Colour Usage

Braid provides semantic colour tokens. Check for:

**Correct usage**
- `brand` — Primary brand colour
- `brandAccent` — Secondary brand colour
- `formAccent` — Form element focus
- `critical` — Errors, destructive actions
- `positive` — Success states
- `caution` — Warnings
- `info` — Informational
- `promote` — Promotional content
- `neutral` — Default, secondary content

**Red flags**
- Hex values hardcoded in styles
- Colours outside the Braid palette
- Inconsistent use of semantic colours (e.g., using `critical` for non-error)

---

## Custom Patterns (The 20%)

Custom patterns are allowed but must be:

1. **Justified** — Braid doesn't provide equivalent functionality
2. **Documented** — Pattern is documented for reuse
3. **Accessible** — Meets same accessibility standards as Braid
4. **Consistent** — Used consistently across the product

### When Custom is OK

- Unique SEEK features (e.g., salary calculator visualisation)
- Complex data visualisation
- Innovative patterns aligned with Design Principles
- Market-specific requirements not in Braid

### When Custom is NOT OK

- Rebuilding what Braid provides
- Slight variations on Braid components
- One-off designs that should be templated
- Skipping Braid for convenience

---

## Code Audit Patterns

### What to grep for

```bash
# Check Braid imports
grep -r "from 'braid-design-system'" src/
grep -r "@seek/braid-design-system" src/

# Check for hardcoded colours
grep -rE "#[0-9a-fA-F]{3,6}" src/
grep -rE "rgb\(|rgba\(" src/

# Check for hardcoded spacing
grep -rE "margin:|padding:" src/
grep -rE "[0-9]+px" src/

# Check for custom typography
grep -rE "font-size:|font-weight:|line-height:" src/
```

### Component file checks

- Are Braid components imported at the top?
- Are there styled-components or CSS modules overriding Braid?
- Is `Box` used as a layout primitive or are custom divs styled?

---

## Braid Resources

- **Documentation**: [seek-oss.github.io/braid-design-system](https://seek-oss.github.io/braid-design-system/)
- **Playroom**: Interactive component playground
- **GitHub**: [github.com/seek-oss/braid-design-system](https://github.com/seek-oss/braid-design-system)
