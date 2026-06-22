# Mobile Responsiveness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make all 5 Gaz2Go pages display correctly on 375–480px phone screens by expanding existing `@media` blocks in `style.css`.

**Architecture:** All changes land in `style.css` only — no HTML files are modified. Inline styles on HTML pages that need overriding are targeted with CSS specificity (`!important` or ID-based selectors). The existing breakpoint structure (1024px / 768px / 480px / 540px) is preserved and expanded.

**Tech Stack:** Plain HTML/CSS — no build tools, no preprocessors.

## Global Constraints

- No HTML files modified — CSS overrides only
- Do not change desktop styles (≥769px) — all additions go inside existing `@media` blocks
- Primary test viewport: 375px width (iPhone SE / standard Android phone)
- style.css is the only file changed

---

### Task 1: Typography scaling

**Files:**
- Modify: `style.css:779-783` (the existing `@media (max-width: 480px)` block)

**What:** `.step-num` is `4rem` and `.stat-value` is `2rem` — too large on phones. Also tighten `.stat-cell` padding so the stats grid doesn't feel cramped.

- [ ] **Step 1: Open `style.css` and locate the `@media (max-width: 480px)` block at line 779**

It currently reads:
```css
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  .stats-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: Add typography and stat-cell rules inside that block**

Replace the block with:
```css
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  .stats-grid { grid-template-columns: 1fr; }
  .step-num { font-size: 2.25rem; }
  .stat-value { font-size: 1.5rem; }
  .stat-cell { padding: 1.25rem 1rem; }
}
```

- [ ] **Step 3: Verify visually**

Open `index.html` or `invest.html` in a browser. Open DevTools → toggle device toolbar → set width to 375px. Confirm:
- The `01`, `02`, `03` step numbers on how-it-works.html are readable but not screen-dominating
- The stat cells on invest.html (18–24M, Zero, Live, Afrox) fit within the viewport without horizontal overflow

- [ ] **Step 4: Commit**

```bash
git add style.css
git commit -m "fix: scale down step/stat numbers on phones"
```

---

### Task 2: Section spacing and hero layout

**Files:**
- Modify: `style.css:764-777` (the `@media (max-width: 768px)` block)
- Modify: `style.css:779-783` (the `@media (max-width: 480px)` block — now expanded from Task 1)

**What:** `section { padding: 5rem 1.25rem }` is too tall on phones. `.hero-inner-solo` keeps a `52%` single column on mobile. `#footer` has generous padding that wastes space at 480px.

- [ ] **Step 1: Add `.hero-inner-solo` fix to the `@media (max-width: 768px)` block**

The 768px block currently ends with `.stats-grid { grid-template-columns: 1fr 1fr; }`. Add one line at the end:
```css
@media (max-width: 768px) {
  .nav-links, .btn-nav { display: none; }
  .hamburger { display: flex; }
  section { padding: 5rem 1.25rem; }
  .hero-text { padding: 2rem 0; }
  .showcase-gallery { grid-template-columns: 1fr; }
  .cards-grid { grid-template-columns: 1fr; }
  .feature-card:nth-child(n) { border-radius: 0; }
  .feature-card:first-child { border-radius: 16px 16px 0 0; }
  .feature-card:last-child { border-radius: 0 0 16px 16px; }
  .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .hero-inner-solo { grid-template-columns: 1fr !important; }
}
```

- [ ] **Step 2: Add section padding and footer tightening to the `@media (max-width: 480px)` block**

The block from Task 1 now reads:
```css
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  .stats-grid { grid-template-columns: 1fr; }
  .step-num { font-size: 2.25rem; }
  .stat-value { font-size: 1.5rem; }
  .stat-cell { padding: 1.25rem 1rem; }
}
```

Add the spacing rules:
```css
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  .stats-grid { grid-template-columns: 1fr; }
  .step-num { font-size: 2.25rem; }
  .stat-value { font-size: 1.5rem; }
  .stat-cell { padding: 1.25rem 1rem; }
  section { padding: 3.5rem 1rem; }
  #footer { padding: 3rem 1rem 1.5rem; }
}
```

- [ ] **Step 3: Verify visually**

Open `stations.html` in a browser at 375px. Confirm:
- Pages don't have excessive top/bottom whitespace between sections
- The hero on `how-it-works.html` and `stations.html` (which use `.hero-inner-solo`) is full-width single column

- [ ] **Step 4: Commit**

```bash
git add style.css
git commit -m "fix: tighten section padding and fix single-col hero on phones"
```

---

### Task 3: Component tweaks — phone mockup, store buttons, video section

**Files:**
- Modify: `style.css:779` (the `@media (max-width: 480px)` block — expanded from Tasks 1–2)

**What:**
- `.phone-frame` is fixed at `240×480px` — on a 375px phone it takes up most of the screen. Shrink to `200×400px`.
- `.store-btn` has `max-width: 240px` — on phones the buttons should stretch full width for easy tapping.
- The YouTube demo on how-it-works.html has an inline `margin-top: 4rem` — needs `!important` override at 480px to reduce the gap.

- [ ] **Step 1: Add component rules to the `@media (max-width: 480px)` block**

The block from Task 2 now reads:
```css
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  .stats-grid { grid-template-columns: 1fr; }
  .step-num { font-size: 2.25rem; }
  .stat-value { font-size: 1.5rem; }
  .stat-cell { padding: 1.25rem 1rem; }
  section { padding: 3.5rem 1rem; }
  #footer { padding: 3rem 1rem 1.5rem; }
}
```

Add the component rules:
```css
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  .stats-grid { grid-template-columns: 1fr; }
  .step-num { font-size: 2.25rem; }
  .stat-value { font-size: 1.5rem; }
  .stat-cell { padding: 1.25rem 1rem; }
  section { padding: 3.5rem 1rem; }
  #footer { padding: 3rem 1rem 1.5rem; }
  .phone-frame { width: 200px; height: 400px; }
  .store-btn { max-width: 100%; }
  #how .section-inner > div[data-animate]:last-child { margin-top: 2rem !important; }
}
```

- [ ] **Step 2: Verify visually**

Open `app.html` at 375px. Confirm:
- Phone mockup image fits within the screen without causing horizontal scroll
- App Store and Google Play buttons stretch to fill available width

Open `how-it-works.html` at 375px. Confirm:
- The YouTube embed section doesn't have excessive space above it

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "fix: shrink phone mockup and full-width store buttons on phones"
```

---

### Task 4: Find Gas modal padding

**Files:**
- Modify: `style.css:1331-1336` (the existing `@media (max-width: 540px)` block)

**What:** `#fg-scroll` has `padding: 2.5rem 2.5rem 2rem` — on a 375px phone this leaves very little room for the station list. The existing 540px block already handles the input row stacking and title font-size; just add the scroll padding fix.

- [ ] **Step 1: Locate the `@media (max-width: 540px)` block at line 1331**

It currently reads:
```css
@media (max-width: 540px) {
  #fg-modal { padding: 2rem 1.25rem 1.75rem; border-radius: 18px; }
  .fg-input-row { flex-direction: column; }
  .fg-title { font-size: 1.375rem; }
  .fg-name { white-space: normal; }
}
```

- [ ] **Step 2: Add the scroll padding rule**

Replace with:
```css
@media (max-width: 540px) {
  #fg-modal { padding: 2rem 1.25rem 1.75rem; border-radius: 18px; }
  #fg-scroll { padding: 1.5rem 1.25rem 1.25rem; }
  .fg-input-row { flex-direction: column; }
  .fg-title { font-size: 1.375rem; }
  .fg-name { white-space: normal; }
}
```

- [ ] **Step 3: Verify visually**

Open `index.html` at 375px. Click "Find gas near me". Confirm:
- The modal has comfortable but not excessive horizontal padding
- The station list items are fully readable and not clipped
- The search input and button stack vertically

- [ ] **Step 4: Commit**

```bash
git add style.css
git commit -m "fix: tighten Find Gas modal padding on phones"
```

---

## Final check

After all 4 tasks are committed:

- [ ] Open each of the 5 pages (`index.html`, `how-it-works.html`, `stations.html`, `app.html`, `invest.html`) at 375px width in browser DevTools
- [ ] Scroll through every section — confirm no horizontal overflow on any page
- [ ] Confirm desktop layout (at 1280px) is unchanged
- [ ] Push to remote: `git push`
