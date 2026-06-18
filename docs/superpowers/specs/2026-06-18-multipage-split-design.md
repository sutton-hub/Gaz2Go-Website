# Multi-Page Split Design

**Date:** 2026-06-18  
**Project:** Gaz2Go website

## Goal

Convert the single-page `index.html` into 5 separate HTML pages for a better user experience, while keeping a consistent navbar and shared styles/scripts.

## Pages

| File | Sections |
|---|---|
| `index.html` | Navbar, Hero, Trust marquee |
| `how-it-works.html` | Navbar, How It Works (steps + YouTube demo) |
| `stations.html` | Navbar, Exchange Station Showcase, Locations Map + station grid |
| `app.html` | Navbar, App Download, Why Gaz2Go |
| `invest.html` | Navbar, Invest/Partner, Pre-footer CTA banner, Footer/Contact |

Footer and CTA banner appear on `invest.html` only.

## Shared Assets

- `style.css` — extracted from the `<style>` block in `index.html`
- `main.js` — extracted from the `<script>` block in `index.html`, shared across all pages

Each page links to both files via `<link>` and `<script>` tags.

## Navbar

- Links update from `#anchor` to `page.html` URLs
- Active page link highlighted by matching `window.location.pathname` in `main.js`
- Navbar included in full on every page (no server-side includes needed)

## Notes

- No build tools, bundlers, or frameworks — plain HTML/CSS/JS
- Station grid JS (STATIONS array + render loop) lives in `main.js`, runs only when `#stations-grid` exists in the DOM
- Animation/scroll observer initialises on every page
