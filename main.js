// ── Station data ────────────────────────────────────────
const STATIONS = [
  {
    name: "West Coast Village",
    area: "Sunningdale, Cape Town",
    status: "Live",
    lat: -33.80352130113537,
    lng: 18.4859372041821,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+West+Coast+Village/@-33.80352130113537,18.4859372041821,17z"
  },
  {
    name: "Pick n Pay Table View",
    area: "Table View, Cape Town",
    status: "Live",
    lat: -33.82604592083067,
    lng: 18.488441159629858,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Pick+n+Pay+Table+View/@-33.82604592083067,18.488441159629858,17z"
  },
  {
    name: "Wood Drive Lifestyle",
    area: "Milnerton Rural, Cape Town",
    status: "Live",
    lat: -33.78707471022782,
    lng: 18.49637798283447,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Wood+Drive+Lifestyle/@-33.78707471022782,18.49637798283447,17z"
  },
  {
    name: "SUPERSPAR Parklands",
    area: "Parklands, Cape Town",
    status: "Live",
    lat: -33.81597333047646,
    lng: 18.49533569941523,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+SUPERSPAR+Parklands/@-33.81597333047646,18.49533569941523,17z"
  },
  {
    name: "Burgundy Square",
    area: "Burgundy Estate, Cape Town",
    status: "Live",
    lat: -33.841287190900694,
    lng: 18.544338152456348,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Burgundy+Square/@-33.841287190900694,18.544338152456348,17z"
  },
  {
    name: "Shell Durbanville",
    area: "Durbanville, Cape Town",
    status: "Live",
    lat: -33.829904174540516,
    lng: 18.649332941322537,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Shell+Durbanville/@-33.829904174540516,18.649332941322537,17z"
  },
  {
    name: "Shell Sentra",
    area: "Blomtuin, Cape Town",
    status: "Live",
    lat: -33.885279014945844,
    lng: 18.64693263988073,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Shell+Sentra/@-33.885279014945844,18.64693263988073,17z"
  },
  {
    name: "Majik Forest",
    area: "Van Riebeeckshof, Cape Town",
    status: "Live",
    lat: -33.858379717902274,
    lng: 18.613360416905476,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Majik+Forest/@-33.858379717902274,18.613360416905476,17z"
  },
  {
    name: "Willowbridge",
    area: "Tyger Valley, Cape Town",
    status: "Live",
    lat: -33.87149754768924,
    lng: 18.632306489448247,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Willowbridge/@-33.87149754768924,18.632306489448247,17z"
  },
  {
    name: "Haasendal Gables",
    area: "Kuils River, Cape Town",
    status: "Live",
    lat: -33.907309571716475,
    lng: 18.700126370676518,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Haasendal+Gables/@-33.907309571716475,18.700126370676518,17z"
  },
  {
    name: "Zevenwacht",
    area: "Kuils River, Cape Town",
    status: "Live",
    lat: -33.94995542740416,
    lng: 18.697563358598643,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Zevenwacht/@-33.94995542740416,18.697563358598643,17z"
  },
  {
    name: "KWIKSPAR Paarl",
    area: "Northern Paarl, Paarl",
    status: "Live",
    lat: -33.708080745280434,
    lng: 18.962490671562275,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+KWIKSPAR+Paarl/@-33.708080745280434,18.962490671562275,17z"
  },
  {
    name: "KWIKSPAR Zomerlust",
    area: "Hoog-En-Droog, Paarl",
    status: "Live",
    lat: -33.74419968408852,
    lng: 18.962852335041926,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+KWIKSPAR+Zomerlust/@-33.74419968408852,18.962852335041926,17z"
  },
  {
    name: "Laborie Centre",
    area: "Paarl",
    status: "Live",
    lat: -33.76441508980513,
    lng: 18.96171413969814,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Laborie+Centre/@-33.76441508980513,18.96171413969814,17z"
  },
  {
    name: "Simonsrust",
    area: "Simonswyk, Stellenbosch",
    status: "Live",
    lat: -33.92632157382923,
    lng: 18.87718660963417,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Simonsrust/@-33.92632157382923,18.87718660963417,17z"
  },
  {
    name: "Glengarry Centre",
    area: "Fairtrees, Cape Town",
    status: "Live",
    lat: -33.85736836323081,
    lng: 18.67161517333645,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Glengarry+Centre/@-33.85736836323081,18.67161517333645,17z"
  },
  { name: "Coming Soon — Johannesburg", area: "Johannesburg", status: "Coming Soon", lat: -26.1952, lng: 28.0343, mapsUrl: "#" },
  { name: "Coming Soon — Durban",       area: "Durban",       status: "Coming Soon", lat: -29.8587, lng: 31.0218, mapsUrl: "#" },
  { name: "Coming Soon — Pretoria",     area: "Pretoria",     status: "Coming Soon", lat: -25.7461, lng: 28.1881, mapsUrl: "#" },
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

// ── Find Gas Near Me ────────────────────────────────────

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function buildModal() {
  const overlay = document.createElement('div');
  overlay.id = 'fg-overlay';
  overlay.innerHTML = `
    <div id="fg-modal" role="dialog" aria-modal="true" aria-label="Find Gas Near Me">
      <button id="fg-close" aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <div id="fg-scroll">
        <div class="fg-eyebrow"><span class="fg-eyebrow-line"></span>Gaz2Go Network</div>
        <h2 class="fg-title">Find Gas Near Me</h2>
        <p class="fg-sub">Enter your address and we'll show you the closest exchange stations.</p>
        <div class="fg-input-row">
          <input
            type="text"
            id="fg-input"
            placeholder="e.g. 10 Buitenkant Street, Cape Town"
            autocomplete="off"
            spellcheck="false"
          />
          <button id="fg-search-btn">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <circle cx="11" cy="11" r="8"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"/>
            </svg>
            Search
          </button>
        </div>
        <div id="fg-results"></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', e => { if (e.target === overlay) closeFindGas(); });
  document.getElementById('fg-close').addEventListener('click', closeFindGas);
  document.getElementById('fg-search-btn').addEventListener('click', runFindGas);
  document.getElementById('fg-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') runFindGas();
  });
  return overlay;
}

function openFindGas() {
  let overlay = document.getElementById('fg-overlay');
  if (!overlay) overlay = buildModal();
  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const input = document.getElementById('fg-input');
    if (input) input.focus();
  }, 120);
}

function closeFindGas() {
  const overlay = document.getElementById('fg-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeFindGas();
});

async function runFindGas() {
  const input = document.getElementById('fg-input');
  const results = document.getElementById('fg-results');
  const address = (input.value || '').trim();

  if (!address) {
    results.innerHTML = '<p class="fg-msg fg-msg--error">Please enter an address to search.</p>';
    return;
  }

  const btn = document.getElementById('fg-search-btn');
  btn.disabled = true;
  results.innerHTML = `
    <div class="fg-loading">
      <div class="fg-spinner"></div>
      <span>Locating stations…</span>
    </div>
  `;

  try {
    const q = encodeURIComponent(address);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1&countrycodes=za`,
      { headers: { 'Accept-Language': 'en' } }
    );
    const data = await res.json();

    if (!data.length) {
      results.innerHTML = '<p class="fg-msg fg-msg--error">Address not found. Try a more specific address, e.g. "15 Main Road, Claremont, Cape Town".</p>';
      return;
    }

    const userLat = parseFloat(data[0].lat);
    const userLng = parseFloat(data[0].lon);
    const locationName = data[0].display_name.split(',').slice(0, 2).join(',');

    const nearest = STATIONS
      .map(s => ({ ...s, distKm: haversineKm(userLat, userLng, s.lat, s.lng) }))
      .sort((a, b) => a.distKm - b.distKm)
      .slice(0, 5);

    results.innerHTML = `
      <div class="fg-results-label">Nearest stations to <strong>${locationName}</strong></div>
      <ul class="fg-list">
        ${nearest.map((s, i) => `
          <li class="fg-item">
            <span class="fg-rank">${i + 1}</span>
            <span class="fg-dot ${s.status === 'Live' ? 'live' : 'soon'}"></span>
            <div class="fg-info">
              <div class="fg-name">${s.name}</div>
              <div class="fg-area">${s.area}</div>
            </div>
            <div class="fg-right">
              <div class="fg-dist">${s.distKm < 1 ? Math.round(s.distKm * 1000) + ' m' : s.distKm.toFixed(1) + ' km'}</div>
              ${s.status === 'Live'
                ? `<a href="${s.mapsUrl}" target="_blank" rel="noopener" class="fg-dir">Directions ↗</a>`
                : `<span class="fg-soon-tag">Coming Soon</span>`
              }
            </div>
          </li>
        `).join('')}
      </ul>
    `;
  } catch {
    results.innerHTML = '<p class="fg-msg fg-msg--error">Something went wrong. Please check your connection and try again.</p>';
  } finally {
    btn.disabled = false;
  }
}

// Intercept all "Find Gas Near Me" / "Find Nearest Station" triggers
document.querySelectorAll('a.btn-nav, [data-find-gas]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    if (hamburger && mobileMenu) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
    openFindGas();
  });
});
