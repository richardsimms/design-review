# Design System Compliance Checklist

## Core Compliance Check

Best practice follows an **80/20 rule**: 80% standard design system components, 20% custom patterns for innovation.

### Design System Usage

The audit should verify that the project consistently uses a design system rather than building components from scratch. Look for:

**Layout & Structure**
- ✓ Using design system layout primitives (Box, Stack, Grid, etc.)
- ✓ Consistent spacing using system tokens
- ✗ Custom divs with manual styling
- ✗ Hardcoded margin/padding values
- ✗ Inconsistent spacing across similar elements

**Typography**
- ✓ Using design system typography components
- ✓ Consistent heading hierarchy
- ✓ System-defined font scales
- ✗ Manual font-size, font-weight, line-height
- ✗ Inconsistent text styling across similar content
- ✗ Direct HTML tags (h1, p, span) with custom styles

**Form Components**
- ✓ Using design system form inputs
- ✓ Consistent form field styling
- ✓ Built-in validation states
- ✗ Native inputs with custom styles
- ✗ Inconsistent form field appearance
- ✗ Rebuilding autocomplete, dropdowns from scratch

**Actions (Buttons & Links)**
- ✓ Using design system button components
- ✓ Consistent button styles and variants
- ✓ Proper semantic usage (buttons vs links)
- ✗ Custom button implementations
- ✗ Inconsistent hover/active states
- ✗ Mixed styling for similar actions

**Feedback Components**
- ✓ Using design system alerts, notifications, badges
- ✓ Consistent messaging patterns
- ✓ Standard loading states
- ✗ Custom alert/notification styles
- ✗ Inconsistent error messaging
- ✗ Custom spinners/loaders

**Navigation & Disclosure**
- ✓ Using design system navigation components
- ✓ Standard modals, drawers, accordions
- ✗ Custom navigation implementations
- ✗ Rebuilt modal/overlay patterns
- ✗ Inconsistent disclosure patterns

---

## Design Tokens

Design systems provide tokens for consistent styling. Check that the project uses system tokens rather than hardcoded values.

### Spacing
**Good practices:**
- Using named spacing tokens (e.g., `space.small`, `spacing-md`, `$space-4`)
- Consistent spacing that follows a scale
- Layout components that handle spacing

**Red flags:**
- Hardcoded pixel values in styles (e.g., `margin: 23px`)
- Inconsistent spacing that doesn't follow a scale
- Manual margin/padding calculations
- Arbitrary spacing values

### Colors
**Good practices:**
- Using semantic color tokens (e.g., `color.primary`, `$color-error`, `--brand-accent`)
- Consistent color usage across similar elements
- System-defined color palettes

**Red flags:**
- Hex values hardcoded in styles (e.g., `color: #3A5FCD`)
- RGB/RGBA values defined inline
- Colors not from the system palette
- Inconsistent use of colors for similar purposes

### Typography
**Good practices:**
- Using typography tokens (e.g., `fontSize.body`, `$text-lg`, `--font-heading`)
- Consistent heading hierarchy
- System-defined line heights and weights

**Red flags:**
- Hardcoded font sizes (e.g., `font-size: 18px`)
- Manual font-weight values
- Inconsistent line-height calculations
- Typography that doesn't match system scale

---

## Custom Patterns (The 20%)

Custom patterns are allowed but must be:

1. **Justified** — Design system doesn't provide equivalent functionality
2. **Documented** — Pattern is documented for reuse
3. **Accessible** — Meets same accessibility standards as design system
4. **Consistent** — Used consistently across the product

### When Custom is OK

- Unique product features with no design system equivalent
- Complex data visualizations
- Innovative patterns aligned with design principles
- Domain-specific requirements not covered by design system
- Experimental features that may inform future design system additions

### When Custom is NOT OK

- Rebuilding what the design system provides
- Slight variations on design system components
- One-off designs that should use existing patterns
- Skipping design system for convenience or speed
- Components that duplicate design system functionality

---

## Code Audit Patterns

### Signs of Design System Usage

**Import statements:**
- Look for design system package imports at top of files
- Check if components are sourced from design system vs custom code
- Verify consistent import patterns across codebase

**Component usage:**
- Design system components used as building blocks
- Minimal custom styling on top of system components
- Props/APIs match design system patterns

**Styling approach:**
- Minimal custom CSS/styled-components
- Design tokens referenced in custom styles when needed
- Consistent with design system's styling methodology

### Red Flags to Check For

**Hardcoded values:**
```bash
# Check for hardcoded colors
grep -rE "#[0-9a-fA-F]{3,6}" src/
grep -rE "rgb\(|rgba\(" src/

# Check for hardcoded spacing
grep -rE "margin:|padding:" src/
grep -rE "[0-9]+px" src/

# Check for custom typography
grep -rE "font-size:|font-weight:|line-height:" src/
```

**Custom implementations:**
- Custom button/input components that duplicate system
- Manual styling that recreates design system patterns
- Inconsistent component APIs across similar functionality

**Inconsistent usage:**
- Some areas use design system, others don't
- Mixed approaches to similar problems
- No clear pattern for when to use system vs custom

---

## Audit Questions

When reviewing a codebase, ask:

1. **Is a design system being used?** Look for package imports and component usage
2. **What percentage uses the design system?** Aim for 80%+ coverage
3. **Are design tokens used?** Check for token references vs hardcoded values
4. **Are custom patterns justified?** Verify they provide functionality system doesn't
5. **Is usage consistent?** Same patterns should use same components throughout
6. **Are custom patterns documented?** Check for documentation of the 20% custom code
7. **Does custom code meet accessibility standards?** Verify WCAG compliance

---

## Recommendations

Based on audit findings, provide:

1. **Usage score**: Estimate % design system vs custom code
2. **Identified gaps**: Areas using custom code that could use design system
3. **Token compliance**: How consistently design tokens are used
4. **Custom pattern assessment**: Whether custom patterns are justified
5. **Consistency issues**: Inconsistent approaches to similar problems
6. **Quick wins**: Easy conversions from custom to design system components
7. **Technical debt**: Custom code that should be migrated to design system
