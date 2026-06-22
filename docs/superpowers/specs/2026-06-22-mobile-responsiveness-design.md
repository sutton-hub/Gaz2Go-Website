# Mobile Responsiveness Design — Gaz2Go Website

**Date:** 2026-06-22  
**Approach:** Option A — Stylesheet-first pass (expand existing `@media` blocks in `style.css`)  
**Primary target:** Phone screens (360–480px)  
**Secondary target:** Tablets (481–768px) — already partially handled, gaps filled as needed

---

## Scope

All 5 pages share `style.css`. The majority of changes land in that one file. A small number of per-page inline styles that cannot be overridden from CSS alone will be addressed via more-specific selectors in `style.css` (IDs, parent selectors) — no HTML markup changes.

---

## Section 1 — Typography

**Problem:** Step numbers (`.step-num`) are `font-size: 4rem` and stat numbers (`.stat-num`) are `font-size: 2rem`. On 360–480px screens these are oversized and push other content down.

**Fix:** Add to the existing `@media (max-width: 480px)` block:

```css
.step-num { font-size: 2.25rem; }
.stat-num { font-size: 1.5rem; }
```

Section headings already use `clamp()` and scale correctly — no changes needed.

---

## Section 2 — Layout & Spacing

**Problem 1:** `section { padding: 5rem 1.25rem }` (set at 768px) is too generous vertically on 375px phones — content is pushed well below the fold.

**Fix:** Add to `@media (max-width: 480px)`:

```css
section { padding: 3.5rem 1rem; }
```

**Problem 2:** `.hero-inner-solo { grid-template-columns: 52% !important }` is not overridden on mobile, leaving a large empty right column on phones.

**Fix:** Add to `@media (max-width: 768px)`:

```css
.hero-inner-solo { grid-template-columns: 1fr !important; }
```

---

## Section 3 — Per-page inline styles

Several pages have inline `style=""` attributes with grids or padding that aren't reachable via existing class-based breakpoints. These are handled via specific CSS selectors in `style.css` — no HTML changes.

| Page | Element | Issue | Fix |
|---|---|---|---|
| `stations.html` | Header bar (flex row) | Overflows on narrow phones | Add `flex-direction: column` at ≤480px via ID or parent selector |
| `how-it-works.html` | Unit viewer / product section | Fixed grid columns | Collapse to `1fr` at ≤768px |
| `app.html` | Phone mockup container | May overflow on very small screens | Cap `max-width: 100%` at ≤480px |
| `invest.html` | Inline grid in section | Fixed columns | Collapse to `1fr` at ≤768px |

Where an inline style uses a unique parent ID or a predictable structure, the override is added to `style.css` with sufficient specificity.

---

## Section 4 — Find Gas Modal

**Problem:** `#fg-scroll` has `padding: 2.5rem 2.5rem 2rem` — on a 375px phone this leaves very little horizontal space for content.

**Fix:** Expand the existing `@media (max-width: 540px)` block:

```css
#fg-scroll { padding: 1.5rem 1.25rem 1.25rem; }
```

The `fg-input-row` stacking (`flex-direction: column`) is already present at 540px — no further changes needed there.

---

## Files Changed

- `style.css` — all changes land here; no HTML files modified

## Breakpoints Used

| Breakpoint | Purpose |
|---|---|
| `max-width: 768px` | Tablet + large phone: grid collapses, hero-inner-solo fix |
| `max-width: 540px` | Modal padding (existing, expanded) |
| `max-width: 480px` | Phone: typography scale-down, section padding tighten |

---

## Success Criteria

- No horizontal scroll on any page at 375px viewport width
- Step numbers and stat numbers readable without dominating the screen
- All section grids collapse to a single column on phones
- Modal usable on 375px with comfortable padding
- No layout changes on desktop (≥769px)
