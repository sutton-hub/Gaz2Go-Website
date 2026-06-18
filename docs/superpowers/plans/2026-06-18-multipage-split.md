# Multi-Page Split Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the single `index.html` into 5 separate pages (Home, How It Works, Stations, App, Invest) sharing a common `style.css` and `main.js`.

**Architecture:** Extract the inline `<style>` block into `style.css` and the inline `<script>` block into `main.js`; each page links both files. The navbar is duplicated into each page with links pointing to `.html` files instead of `#anchors`. Active-page highlighting is set via JS on `window.location.pathname`.

**Tech Stack:** Plain HTML, CSS, JavaScript — no build tools, no frameworks.

## Global Constraints

- No build tools, bundlers, or npm packages
- All asset paths (`Brand Assets/...`, logo URL) are relative and must remain unchanged
- Tailwind CDN script tag is kept in every page's `<head>` (same as current)
- Footer and CTA banner appear only on `invest.html`
- `style.css` and `main.js` live at the project root alongside the HTML files

---

## Shared snippets (referenced by all tasks)

### HEAD block (paste into every page's `<head>`)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: { sans: ['Inter', 'sans-serif'] },
        colors: {
          brand: {
            black:  '#0a0a0a',
            black2: '#111111',
            surface:'#1a1a1a',
            surface2:'#222222',
            grey:   '#888888',
            light:  '#f5f5f5',
            accent: '#e62828',
            warm:   '#f03c3c',
          }
        }
      }
    }
  }
</script>
<link rel="stylesheet" href="style.css" />
```

### NAVBAR block (paste into every page's `<body>`, before page sections)

```html
<!-- SVG defs for noise -->
<svg width="0" height="0" style="position:absolute">
  <defs>
    <filter id="noise-filter">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noiseOut"/>
      <feColorMatrix type="saturate" values="0" in="noiseOut" result="grey"/>
      <feBlend in="SourceGraphic" in2="grey" mode="overlay"/>
    </filter>
  </defs>
</svg>

<!-- ─── NAVBAR ─────────────────────────────────────────── -->
<nav id="navbar">
  <a href="index.html">
    <img
      src="https://images.groovetech.io/Q6AdZMbL-gtLKjwaKrVaJy5M9BvmSFnjlFCRkEsi7hQ/rs:fit:0:0:0/g:no:0:0/c:0:0/aHR0cHM6Ly9hc3NldHMuZ3Jvb3ZlYXBwcy5jb20vaW1hZ2VzLzVmOWU2ZTRjMzg2ZmQ5MDA2ZmFmM2M5MS8xNzM5MTA2NDEyX0dhczJHT3doaXRlRmluYWxMb2dvMjczMnB4cmVtb3ZlYmcucG5n.webp"
      alt="Gaz2Go logo"
      class="nav-logo"
    />
  </a>
  <nav style="flex:1; display:flex; align-items:center; justify-content:center;">
    <ul class="nav-links">
      <li><a href="how-it-works.html">How It Works</a></li>
      <li><a href="stations.html">Stations</a></li>
      <li><a href="app.html">App</a></li>
      <li><a href="invest.html">Invest</a></li>
      <li><a href="invest.html#footer">Contact</a></li>
    </ul>
  </nav>
  <a href="stations.html" class="btn-nav">Find Gas Near Me</a>
  <button class="hamburger" id="hamburger" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile menu -->
<div id="mobile-menu">
  <a href="how-it-works.html" class="mobile-link">How It Works</a>
  <a href="stations.html" class="mobile-link">Stations</a>
  <a href="app.html" class="mobile-link">App</a>
  <a href="invest.html" class="mobile-link">Invest</a>
  <a href="invest.html#footer" class="mobile-link">Contact</a>
  <a href="stations.html" class="btn-nav">Find Gas Near Me</a>
</div>
```

### SCRIPT tag (paste at end of every page, before `</body>`)

```html
<script src="main.js"></script>
```

---

## Task 1: Extract CSS → style.css

**Files:**
- Create: `style.css`
- Modify: `index.html` (remove style block, add link tag)

- [ ] **Step 1: Create style.css**

  Read `index.html` lines 34–1094. Copy all content between (and not including) `<style>` and `</style>` into a new file `style.css`.

- [ ] **Step 2: Replace style block in index.html**

  In `index.html`, replace the entire block from `<style>` through `</style>` (lines 33–1094) with:

  ```html
  <link rel="stylesheet" href="style.css" />
  ```

- [ ] **Step 3: Verify**

  Open `index.html` in a browser. The page should look identical to before.

---

## Task 2: Extract JS → main.js

**Files:**
- Create: `main.js`
- Modify: `index.html` (remove script block, add script src tag)

- [ ] **Step 1: Create main.js**

  Create `main.js` with the following content (this is the existing JS with null guards added and active-nav detection appended):

  ```js
  // ── Station data ────────────────────────────────────────
  const STATIONS = [
    { name: "Coming Soon — Johannesburg", status: "Coming Soon", mapsUrl: "#" },
    { name: "Coming Soon — Durban",       status: "Coming Soon", mapsUrl: "#" },
    { name: "Coming Soon — Pretoria",     status: "Coming Soon", mapsUrl: "#" },
  ];

  const APP_STORE_URL  = "#";
  const PLAY_STORE_URL = "#";

  const appleBtn = document.getElementById('apple-store-btn');
  if (appleBtn) appleBtn.href = APP_STORE_URL;
  const playBtn = document.getElementById('play-store-btn');
  if (playBtn) playBtn.href = PLAY_STORE_URL;

  // ── Render station tiles (stations.html only) ───────────
  const grid = document.getElementById('stations-grid');
  if (grid) {
    STATIONS.forEach(s => {
      const tile = document.createElement('a');
      tile.href = s.mapsUrl;
      tile.className = 'station-tile';
      tile.innerHTML = `
        <div class="station-dot ${s.status === 'Live' ? 'live' : 'soon'}"></div>
        <div>
          <div class="station-name">${s.name}</div>
          <div class="station-status">${s.status}</div>
        </div>
      `;
      grid.appendChild(tile);
    });
  }

  // ── Navbar scroll transition ────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // ── Hamburger menu ──────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
  });
  document.querySelectorAll('.mobile-link, #mobile-menu .btn-nav').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // ── Intersection Observer — fade-in animations ──────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // ── Step connector animation ────────────────────────────
  const stepsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.3 });
  const stepsGrid = document.getElementById('steps-grid');
  if (stepsGrid) stepsObserver.observe(stepsGrid);

  // ── Active nav link highlight ───────────────────────────
  (function () {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, #mobile-menu a').forEach(link => {
      const href = (link.getAttribute('href') || '').split('#')[0];
      if (href && href === page) link.style.color = '#ffffff';
    });
  })();
  ```

- [ ] **Step 2: Replace script block in index.html**

  In `index.html`, replace the entire block from `<!-- ─── JAVASCRIPT` through `</script>` (the last script block, lines 1678–1754) with:

  ```html
  <script src="main.js"></script>
  ```

- [ ] **Step 3: Verify**

  Open `index.html` in a browser. Scroll behaviour, hamburger menu, and fade-in animations should all still work.

---

## Task 3: Update index.html — nav links, head, sections

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update `<head>`**

  Replace the current `<head>` block with the shared HEAD block (from the Shared Snippets section above), setting title and description to:

  ```html
  <title>Gaz2Go | South Africa's Smart LPG Exchange Network</title>
  <meta name="description" content="South Africa's first fully automated LPG gas exchange station network — no queues, no hassle, always stocked." />
  ```

- [ ] **Step 2: Replace navbar and mobile menu**

  Replace the existing `<!-- ─── NAVBAR` block and `<!-- Mobile menu -->` block with the shared NAVBAR block from the Shared Snippets section above.

- [ ] **Step 3: Update hero CTA links**

  In the hero section, update the two button hrefs:
  - `href="#locations"` → `href="stations.html"`
  - `href="#app"` → `href="app.html"`

- [ ] **Step 4: Remove non-home sections**

  Delete everything from `<!-- ─── HOW IT WORKS` through `</footer>` (lines 1207–1676). Keep only: the SVG defs, navbar, mobile menu, `#hero` section, and the trust strip `<div class="trust-strip">`.

- [ ] **Step 5: Verify**

  Open `index.html` in browser. Page shows Hero + Trust strip only. Nav links go to `.html` files (will 404 until later tasks are done — that's fine).

---

## Task 4: Create how-it-works.html

**Files:**
- Create: `how-it-works.html`

Content: HOW IT WORKS section (lines 1207–1297 of original index.html) including the YouTube demo block (lines 1278–1295).

- [ ] **Step 1: Create the file**

  Create `how-it-works.html` with this structure:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>How It Works | Gaz2Go</title>
    <meta name="description" content="Three simple steps to swap your LPG cylinder at any Gaz2Go automated exchange station." />
    <!-- paste shared HEAD block here -->
  </head>
  <body>
    <!-- paste shared NAVBAR block here -->

    <!-- ─── HOW IT WORKS ──────────────────────────────── -->
    <!-- paste lines 1207–1297 from original index.html here -->

    <script src="main.js"></script>
  </body>
  </html>
  ```

  Paste the actual section content in place of the comments.

- [ ] **Step 2: Verify**

  Open `how-it-works.html` in browser. Steps and YouTube embed render correctly. Nav active-highlight should show "How It Works" as white.

---

## Task 5: Create stations.html

**Files:**
- Create: `stations.html`

Content: EXCHANGE STATION SHOWCASE section (lines 1299–1370) + LOCATIONS MAP section (lines 1372–1394).

- [ ] **Step 1: Create the file**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Stations | Gaz2Go</title>
    <meta name="description" content="Find a Gaz2Go LPG exchange station near you across South Africa." />
    <!-- paste shared HEAD block here -->
  </head>
  <body>
    <!-- paste shared NAVBAR block here -->

    <!-- ─── EXCHANGE STATION SHOWCASE ────────────────── -->
    <!-- paste lines 1299–1370 from original index.html here -->

    <!-- ─── LOCATIONS MAP ────────────────────────────── -->
    <!-- paste lines 1372–1394 from original index.html here -->

    <script src="main.js"></script>
  </body>
  </html>
  ```

- [ ] **Step 2: Verify**

  Open `stations.html` in browser. Showcase images, gallery, map iframe, and station tiles all render. "Stations" nav link is highlighted.

---

## Task 6: Create app.html

**Files:**
- Create: `app.html`

Content: APP DOWNLOAD section (lines 1396–1506) + WHY GAZ2GO section (lines 1508–1560).

- [ ] **Step 1: Create the file**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>App | Gaz2Go</title>
    <meta name="description" content="Download the Gaz2Go app to find stations, check stock, and swap gas in under two minutes." />
    <!-- paste shared HEAD block here -->
  </head>
  <body>
    <!-- paste shared NAVBAR block here -->

    <!-- ─── APP DOWNLOAD ──────────────────────────────── -->
    <!-- paste lines 1396–1506 from original index.html here -->

    <!-- ─── WHY GAZ2GO ───────────────────────────────── -->
    <!-- paste lines 1508–1560 from original index.html here -->

    <script src="main.js"></script>
  </body>
  </html>
  ```

- [ ] **Step 2: Verify**

  Open `app.html` in browser. Phone mockup, store buttons, and feature cards render. "App" nav link is highlighted.

---

## Task 7: Create invest.html

**Files:**
- Create: `invest.html`

Content: INVEST/PARTNER section (lines 1562–1601) + CTA BANNER (lines 1603–1620) + FOOTER (lines 1622–1676).

The CTA banner has internal links that must be updated:
- `href="#locations"` → `href="stations.html"`
- `href="#app"` → `href="app.html"`

- [ ] **Step 1: Create the file**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Invest | Gaz2Go</title>
    <meta name="description" content="Own a Gaz2Go automated LPG exchange station. Register your interest for franchise opportunities opening in 2027." />
    <!-- paste shared HEAD block here -->
  </head>
  <body>
    <!-- paste shared NAVBAR block here -->

    <!-- ─── INVEST / PARTNER ──────────────────────────── -->
    <!-- paste lines 1562–1601 from original index.html here -->

    <!-- ─── PRE-FOOTER CTA BANNER ────────────────────── -->
    <!-- paste lines 1603–1620 from original index.html here -->
    <!-- UPDATE: href="#locations" → href="stations.html" -->
    <!-- UPDATE: href="#app"       → href="app.html"      -->

    <!-- ─── FOOTER / CONTACT ─────────────────────────── -->
    <!-- paste lines 1622–1676 from original index.html here -->

    <script src="main.js"></script>
  </body>
  </html>
  ```

- [ ] **Step 2: Update CTA banner links**

  In the pasted CTA banner, change:
  - `href="#locations"` → `href="stations.html"`
  - `href="#app"` → `href="app.html"`

- [ ] **Step 3: Verify**

  Open `invest.html` in browser. Stats grid, CTA banner, and footer all render. "Invest" nav link is highlighted. Footer contact details and social links are visible.

---

## Final check

- [ ] Click every nav link from every page — confirm correct destination
- [ ] Resize to mobile — hamburger opens/closes on all pages
- [ ] Scroll on any page — navbar gains `.scrolled` dark background
- [ ] Confirm footer and CTA banner appear only on `invest.html`
