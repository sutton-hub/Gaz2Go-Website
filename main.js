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
if (hamburger && mobileMenu) {
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
}

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
