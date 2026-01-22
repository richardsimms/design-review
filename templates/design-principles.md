# SEEK Design Principles — Detailed Reference

## Principle 01: Maximise the Experience

**Core idea**: Create immersive digital interfaces by fully utilising the available canvas to add layers and depth. Inspired by MR/AR technologies for multilayered experiences.

### What to Look For

**Positive indicators** ✓
- Full use of viewport — content expands to fill available space appropriately
- Layered information architecture — progressive disclosure, expandable sections
- Depth through elevation — cards, modals, sheets that create visual hierarchy
- Immersive moments — full-screen takeovers for important flows (e.g., application submission)
- Smart use of overlays — contextual panels, slide-overs, bottom sheets
- Background/foreground relationships — content feels dimensional, not flat

**Warning signs** ✗
- Wasted whitespace with no purpose (not intentional negative space)
- Single-layer flat interfaces with no depth
- Small, contained content areas surrounded by empty chrome
- Modal-heavy patterns that feel disconnected from the main experience
- Cramped mobile layouts that don't adapt to larger screens

### Evaluation Questions

1. Does the interface make full use of the available canvas?
2. Are there opportunities for layered information (progressive disclosure)?
3. Does the design create a sense of depth and immersion?
4. On larger screens, does the experience expand meaningfully?
5. Are transitions between layers smooth and contextual?

### Platform-Specific Considerations

**Mobile**: Bottom sheets, full-screen flows, gesture-based layer transitions
**Desktop**: Side panels, split views, hover-activated depth
**Tablet**: Hybrid approaches, master-detail patterns

---

## Principle 02: Bring the Marketplace to Life

**Core idea**: Create a vibrant, energetic marketplace by emphasising presence and activity. Showcase who's online, what's trending, and the latest happenings through real-time indicators, active notifications, and interactive features.

### What to Look For

**Positive indicators** ✓
- Real-time activity indicators (jobs posted today, applications in progress)
- Social proof elements (X people viewed this job, Y applications)
- Trending/popular content surfacing
- Recency indicators (posted 2 hours ago, updated just now)
- Active status indicators (employer actively hiring, quick to respond)
- Dynamic content that changes based on activity
- Notification badges and activity feeds
- Live counters or progress indicators

**Warning signs** ✗
- Static content with no timestamps or activity signals
- No indication of marketplace activity or popularity
- Missing social proof where it would help decision-making
- Stale-feeling interfaces with no sense of "now"
- No feedback when actions affect the marketplace

### Evaluation Questions

1. Can users sense the marketplace is active and alive?
2. Are there real-time or recent activity indicators?
3. Is social proof used appropriately to aid decisions?
4. Do users see the impact of their actions on the marketplace?
5. Is trending/popular content surfaced?

### Audience-Specific Considerations

**Candidates**
- Jobs trending in your area
- Application status and employer responsiveness
- How many people have applied
- New jobs matching your profile

**Hirers**
- Applications received today
- Candidate activity on listings
- How your job compares to similar postings
- Real-time application notifications

**Recruiters**
- Candidate pipeline activity
- Market trends and talent availability
- Client activity and engagement

---

## Applying Principles Together

The two principles work in harmony:

| Maximise the Experience | Bring the Marketplace to Life |
|-------------------------|-------------------------------|
| Create the canvas | Fill it with activity |
| Build the layers | Show what's happening in each |
| Design the depth | Make it feel dynamic |

**Example**: A job detail page could:
- Use a layered sheet pattern (Maximise) with the job details sliding over the search results
- Show real-time data (Marketplace) like "12 people viewing now" and "Posted 3 hours ago"
- Provide depth through an expandable company info panel (Maximise) showing "Hiring 5 roles this month" (Marketplace)

---

## Principle Trade-offs

Sometimes principles may tension:

**Maximise vs. Simplicity**: Adding layers shouldn't create complexity. Each layer must serve a purpose.

**Marketplace Activity vs. Overwhelm**: Real-time data should inform, not distract. Use hierarchy to prioritise what matters.

**Resolution**: When in tension, ask "Does this help the user achieve their goal?" If yes, find the right balance. If no, simplify.
