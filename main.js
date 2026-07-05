// ── Station data ────────────────────────────────────────
// Placeholder image = generic unit render, used until a real on-site
// photo is supplied for that station.
const PLACEHOLDER_STATION_IMAGE = "Brand Assets/GAZ2GO unit 1.png";

const STATIONS = [
  {
    name: "West Coast Village",
    area: "Sunningdale, Cape Town",
    status: "Live",
    lat: -33.80352130113537,
    lng: 18.4859372041821,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+West+Coast+Village/@-33.80352130113537,18.4859372041821,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Pick n Pay Table View",
    area: "Table View, Cape Town",
    status: "Live",
    lat: -33.82604592083067,
    lng: 18.488441159629858,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Pick+n+Pay+Table+View/@-33.82604592083067,18.488441159629858,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Wood Drive Lifestyle",
    area: "Milnerton Rural, Cape Town",
    status: "Live",
    lat: -33.78707471022782,
    lng: 18.49637798283447,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Wood+Drive+Lifestyle/@-33.78707471022782,18.49637798283447,17z",
    image: "Brand Assets/Wood drive machine.jpeg"
  },
  {
    name: "SUPERSPAR Parklands",
    area: "Parklands, Cape Town",
    status: "Live",
    lat: -33.81597333047646,
    lng: 18.49533569941523,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+SUPERSPAR+Parklands/@-33.81597333047646,18.49533569941523,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Burgundy Square",
    area: "Burgundy Estate, Cape Town",
    status: "Live",
    lat: -33.841287190900694,
    lng: 18.544338152456348,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Burgundy+Square/@-33.841287190900694,18.544338152456348,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Shell Durbanville",
    area: "Durbanville, Cape Town",
    status: "Live",
    lat: -33.829904174540516,
    lng: 18.649332941322537,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Shell+Durbanville/@-33.829904174540516,18.649332941322537,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Shell Sentra",
    area: "Blomtuin, Cape Town",
    status: "Live",
    lat: -33.885279014945844,
    lng: 18.64693263988073,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Shell+Sentra/@-33.885279014945844,18.64693263988073,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Majik Forest",
    area: "Van Riebeeckshof, Cape Town",
    status: "Live",
    lat: -33.858379717902274,
    lng: 18.613360416905476,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Majik+Forest/@-33.858379717902274,18.613360416905476,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Willowbridge",
    area: "Tyger Valley, Cape Town",
    status: "Live",
    lat: -33.87149754768924,
    lng: 18.632306489448247,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Willowbridge/@-33.87149754768924,18.632306489448247,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Haasendal Gables",
    area: "Kuils River, Cape Town",
    status: "Live",
    lat: -33.907309571716475,
    lng: 18.700126370676518,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Haasendal+Gables/@-33.907309571716475,18.700126370676518,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Zevenwacht",
    area: "Kuils River, Cape Town",
    status: "Live",
    lat: -33.94995542740416,
    lng: 18.697563358598643,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Zevenwacht/@-33.94995542740416,18.697563358598643,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "KWIKSPAR Paarl",
    area: "Northern Paarl, Paarl",
    status: "Live",
    lat: -33.708080745280434,
    lng: 18.962490671562275,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+KWIKSPAR+Paarl/@-33.708080745280434,18.962490671562275,17z",
    image: "Brand Assets/kwikspar paarl machine.jpeg"
  },
  {
    name: "KWIKSPAR Zomerlust",
    area: "Hoog-En-Droog, Paarl",
    status: "Live",
    lat: -33.74419968408852,
    lng: 18.962852335041926,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+KWIKSPAR+Zomerlust/@-33.74419968408852,18.962852335041926,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Laborie Centre",
    area: "Paarl",
    status: "Live",
    lat: -33.76441508980513,
    lng: 18.96171413969814,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Laborie+Centre/@-33.76441508980513,18.96171413969814,17z",
    image: "Brand Assets/laborie machine.jpeg"
  },
  {
    name: "Simonsrust",
    area: "Simonswyk, Stellenbosch",
    status: "Live",
    lat: -33.92632157382923,
    lng: 18.87718660963417,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Simonsrust/@-33.92632157382923,18.87718660963417,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  {
    name: "Glengarry Centre",
    area: "Fairtrees, Cape Town",
    status: "Live",
    lat: -33.85736836323081,
    lng: 18.67161517333645,
    mapsUrl: "https://www.google.com/maps/search/Gaz2Go+Glengarry+Centre/@-33.85736836323081,18.67161517333645,17z",
    image: PLACEHOLDER_STATION_IMAGE
  },
  { name: "Coming Soon — Johannesburg", area: "Johannesburg", status: "Coming Soon", lat: -26.1952, lng: 28.0343, mapsUrl: "#", image: null },
  { name: "Coming Soon — Durban",       area: "Durban",       status: "Coming Soon", lat: -29.8587, lng: 31.0218, mapsUrl: "#", image: null },
  { name: "Coming Soon — Pretoria",     area: "Pretoria",     status: "Coming Soon", lat: -25.7461, lng: 28.1881, mapsUrl: "#", image: null },
];

const APP_STORE_URL  = "#";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mycompany.gaz2gonearme";

const appleBtn = document.getElementById('apple-store-btn');
if (appleBtn) appleBtn.href = APP_STORE_URL;
const playBtn = document.getElementById('play-store-btn');
if (playBtn) playBtn.href = PLAY_STORE_URL;

// ── Render station tiles (stations.html only) ───────────
const grid = document.getElementById('stations-grid');
if (grid) {
  STATIONS.forEach((s, i) => {
    const tile = document.createElement('div');
    const hasImage = Boolean(s.image);
    tile.className = 'station-tile' + (hasImage ? '' : ' station-tile--soon');

    if (hasImage) {
      tile.setAttribute('role', 'button');
      tile.setAttribute('tabindex', '0');
      tile.setAttribute('aria-label', `View photo of ${s.name}`);
    }

    tile.innerHTML = `
      ${hasImage ? `<img src="${s.image}" alt="GAZ2GO exchange station — ${s.name}" loading="lazy" />` : ''}
      <div class="station-tile-label">
        <div class="station-dot ${s.status === 'Live' ? 'live' : 'soon'}"></div>
        <div>
          <div class="station-name">${s.name}</div>
          <div class="station-status">${s.status}</div>
        </div>
      </div>
    `;

    if (hasImage) {
      const open = () => openStationLightbox(i);
      tile.addEventListener('click', open);
      tile.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    }

    grid.appendChild(tile);
  });
}

// ── Station photo lightbox ──────────────────────────────
function buildStationLightbox() {
  const overlay = document.createElement('div');
  overlay.id = 'sl-overlay';
  overlay.innerHTML = `
    <div id="sl-modal" role="dialog" aria-modal="true" aria-label="Station photo">
      <button id="sl-close" aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <img id="sl-image" src="" alt="" />
      <div id="sl-caption">
        <div>
          <div id="sl-name"></div>
          <div id="sl-area"></div>
        </div>
        <a id="sl-maps-link" href="#" target="_blank" rel="noopener">
          View on Google Maps
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', e => { if (e.target === overlay) closeStationLightbox(); });
  document.getElementById('sl-close').addEventListener('click', closeStationLightbox);
  return overlay;
}

function openStationLightbox(index) {
  const s = STATIONS[index];
  if (!s || !s.image) return;

  let overlay = document.getElementById('sl-overlay');
  if (!overlay) overlay = buildStationLightbox();

  document.getElementById('sl-image').src = s.image;
  document.getElementById('sl-image').alt = `GAZ2GO exchange station — ${s.name}`;
  document.getElementById('sl-name').textContent = s.name;
  document.getElementById('sl-area').textContent = s.area;
  document.getElementById('sl-maps-link').href = s.mapsUrl;

  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeStationLightbox() {
  const overlay = document.getElementById('sl-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeStationLightbox();
});

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
        <div class="fg-eyebrow"><span class="fg-eyebrow-line"></span>GAZ2GO Network</div>
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
