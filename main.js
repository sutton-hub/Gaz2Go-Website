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

const APP_STORE_URL  = "https://apps.apple.com/za/app/gaz2go-near-me/id6749020344";
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

// ── Legal document modal (Terms of Use, etc.) ───────────
const LEGAL_DOCS = {
  terms: {
    title: "Terms of Use",
    updated: "Last updated: 5 July 2026",
    body: `
      <p>Welcome to GAZ2GO. These Terms of Use ("Terms") govern your access to and use of the GAZ2GO website (gaz2go.co.za), the GAZ2GO Near Me mobile application, and our self-service LPG gas bottle vending and exchange machines (collectively, the "Services"). The Services are owned and operated by <strong>Sli Investment Holdings (Pty) Ltd</strong>, trading as GAZ2GO, a company registered in South Africa.</p>
      <p>By accessing our website, downloading our app, or using any GAZ2GO vending machine, you agree to be bound by these Terms. If you do not agree, please do not use the Services.</p>

      <h3>1. Description of Services</h3>
      <p>GAZ2GO operates self-service LPG (liquefied petroleum gas) 9kg gas bottle exchange vending machines located at retail and other partner locations. Through these machines and the GAZ2GO Near Me app, you can locate nearby stations, check bottle availability, and exchange an empty, compatible gas bottle for a filled one in return for payment.</p>

      <h3>2. Eligibility</h3>
      <p>You must be at least 18 years old to use our Services or to purchase or exchange an LPG gas bottle at a GAZ2GO station. By using the Services, you confirm that you meet this requirement and that you have the legal capacity to enter into these Terms.</p>

      <h3>3. Using Our Vending Machines</h3>
      <p><strong>3.1</strong> GAZ2GO machines are self-service. You are responsible for following the on-screen instructions, safety notices, and any signage displayed at the station.</p>
      <p><strong>3.2</strong> You must only exchange gas bottles that are compatible with our system (standard 9kg LPG cylinders in acceptable physical condition). GAZ2GO reserves the right to refuse an exchange if a bottle appears damaged, non-compliant, tampered with, or unsafe.</p>
      <p><strong>3.3</strong> All gas bottles supplied through our machines are filled and handled in accordance with applicable South African National Standards (SANS) requirements for LPG cylinders.</p>
      <p><strong>3.4</strong> You are responsible for the safe transport, storage, connection, and use of any gas bottle obtained from a GAZ2GO station, in accordance with the manufacturer's instructions and applicable safety regulations. GAZ2GO is not responsible for how a bottle is used, stored, or connected after it leaves our machine.</p>
      <p><strong>3.5</strong> If you notice a fault with a machine, a leaking or damaged bottle, or any other safety concern, stop using the machine immediately and contact us using the details in Section 12.</p>

      <h3>4. Payments</h3>
      <p><strong>4.1</strong> Payments for gas bottle exchanges are processed through the payment methods made available at the vending machine or within the app.</p>
      <p><strong>4.2</strong> Prices displayed at each station are current at the time of transaction and may vary by location. All prices are in South African Rand (ZAR) and, where applicable, are inclusive of VAT.</p>
      <p><strong>4.3</strong> We take reasonable steps to ensure our payment systems are secure, but we do not store your full card details; these are processed by our third-party payment provider(s).</p>
      <p><strong>4.4</strong> Refunds or credits for failed transactions (e.g. payment taken without a bottle being dispensed) will be handled in accordance with our support process — please contact us with your transaction details.</p>

      <h3>5. The GAZ2GO Near Me App</h3>
      <p><strong>5.1</strong> The app is provided to help you locate stations, check real-time stock availability, and navigate to a station. Availability shown in the app is based on our monitoring systems (VIMS) and, while we aim for accuracy, stock levels can change between the time you check and the time you arrive.</p>
      <p><strong>5.2</strong> You agree not to misuse the app, attempt to interfere with its operation, reverse-engineer it, or use it for any unlawful purpose.</p>
      <p><strong>5.3</strong> We may update, suspend, or discontinue the app or any of its features at any time.</p>

      <h3>6. Acceptable Use</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Services for any unlawful purpose or in violation of these Terms;</li>
        <li>Tamper with, damage, or attempt to gain unauthorised access to any GAZ2GO machine or its software/hardware;</li>
        <li>Interfere with the proper functioning of the website or app, including through malware, scraping, or automated access not authorised by us;</li>
        <li>Misrepresent your identity or provide false information when using the Services.</li>
      </ul>

      <h3>7. Intellectual Property</h3>
      <p>All content on the GAZ2GO website and app — including the GAZ2GO name, logo, branding, text, graphics, and software — is owned by or licensed to Sli Investment Holdings (Pty) Ltd and is protected by South African and international intellectual property law. You may not copy, reproduce, distribute, or create derivative works from our content without our prior written consent.</p>

      <h3>8. Third-Party Locations</h3>
      <p>GAZ2GO machines are often hosted at third-party retail locations (e.g. shopping centres, service stations). GAZ2GO is responsible for the operation of its vending machines but is not responsible for the premises, parking areas, or other services offered by the host location.</p>

      <h3>9. Limitation of Liability</h3>
      <p><strong>9.1</strong> To the maximum extent permitted by law, GAZ2GO shall not be liable for any indirect, incidental, or consequential loss or damage arising from your use of the Services, including but not limited to loss of property, injury, or damage arising from the misuse, incorrect storage, or incorrect connection of a gas bottle after collection.</p>
      <p><strong>9.2</strong> Nothing in these Terms limits any liability that cannot be excluded under South African law, including under the Consumer Protection Act 68 of 2008.</p>
      <p><strong>9.3</strong> We aim to keep our machines and app operational at all times but do not guarantee uninterrupted availability and are not liable for losses arising from downtime, stockouts, or technical faults, beyond our obligations under applicable consumer protection law.</p>

      <h3>10. Safety Notice</h3>
      <p>LPG is a flammable substance. Always store and use gas bottles in a well-ventilated area, away from open flames or heat sources, and in an upright position. Never attempt to repair, refill, or tamper with a cylinder yourself. If you smell gas or suspect a leak, do not use naked flames or electrical switches — move to a safe, ventilated area immediately and contact your gas appliance technician or emergency services.</p>

      <h3>11. Changes to These Terms</h3>
      <p>We may update these Terms from time to time. The updated version will be posted on this page with a revised "Last updated" date. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.</p>

      <h3>12. Governing Law and Contact</h3>
      <p>These Terms are governed by the laws of the Republic of South Africa. Any disputes will be subject to the jurisdiction of the South African courts.</p>
      <p>For questions about these Terms, please contact us:</p>
      <p><strong>Sli Investment Holdings (Pty) Ltd t/a GAZ2GO</strong><br/>Email: frank@sli-invest.com</p>
    `
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 5 July 2026",
    body: `
      <p>Sli Investment Holdings (Pty) Ltd, trading as GAZ2GO, respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (gaz2go.co.za), use the GAZ2GO Near Me app, or use our LPG vending and exchange machines, in accordance with the <strong>Protection of Personal Information Act 4 of 2013 (POPIA)</strong>.</p>

      <h3>1. Information We Collect</h3>
      <p><strong>Information you provide directly:</strong></p>
      <ul>
        <li>Contact details (name, email address, phone number) when you register interest, contact us, or sign up for updates;</li>
        <li>Payment information when you make a purchase (processed securely by our third-party payment provider — see Section 5);</li>
        <li>Any information you submit through contact forms, surveys, or promotions (e.g. our marked-bottle or QR-code competitions).</li>
      </ul>
      <p><strong>Information collected automatically:</strong></p>
      <ul>
        <li>Device and usage data when you use our website or app (e.g. IP address, browser type, device identifiers, pages visited, app interactions);</li>
        <li>Location data, if you enable location services in the app, to help you find nearby GAZ2GO stations;</li>
        <li>Transaction data from vending machine usage (e.g. station location, time, transaction outcome) linked to your payment method where applicable;</li>
        <li>Cookies and similar tracking technologies on our website (see Section 6).</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and fulfil gas bottle exchange transactions;</li>
        <li>Operate, maintain, and improve our website, app, and vending machines;</li>
        <li>Provide customer support and respond to enquiries;</li>
        <li>Show you nearby station locations and real-time stock availability;</li>
        <li>Run competitions or promotions you choose to enter and notify winners;</li>
        <li>Send you service-related communications and, where you have opted in, marketing communications;</li>
        <li>Monitor and improve the safety, security, and performance of our machines and systems;</li>
        <li>Comply with our legal and regulatory obligations.</li>
      </ul>

      <h3>3. Legal Basis for Processing</h3>
      <p>We process your personal information on one or more of the following bases: your consent, the necessity of processing to perform a contract with you (e.g. completing a purchase), our legitimate business interests (e.g. improving our Services), and compliance with legal obligations.</p>

      <h3>4. Sharing Your Information</h3>
      <p>We do not sell your personal information. We may share your information with:</p>
      <ul>
        <li><strong>Service providers</strong> who help us operate our Services, such as payment processors, app/cloud hosting providers, and analytics providers, under appropriate confidentiality and data protection terms;</li>
        <li><strong>Retail partners</strong> who host our vending machines, where necessary for operational purposes (e.g. aggregated stock or usage data, not typically your personal contact details);</li>
        <li><strong>Regulators or authorities</strong>, where required by law or to protect our rights, safety, or property;</li>
        <li><strong>Business transferees</strong>, in the event of a merger, acquisition, or sale of assets, subject to this Policy continuing to apply to your information.</li>
      </ul>

      <h3>5. Payment Information</h3>
      <p>Payments made through our vending machines or app are processed by third-party payment service providers. GAZ2GO does not store your full card number, CVV, or other sensitive payment credentials on our own systems. Please refer to the relevant payment provider's own privacy and security terms.</p>

      <h3>6. Cookies and Tracking Technologies</h3>
      <p>Our website may use cookies and similar technologies to remember your preferences, understand how visitors use our site, and improve functionality. You can control or disable cookies through your browser settings; note that some features of our website may not function properly if cookies are disabled.</p>

      <h3>7. Data Retention</h3>
      <p>We retain personal information for as long as necessary to fulfil the purposes described in this Policy, including to meet legal, accounting, or reporting requirements. When information is no longer needed, we take reasonable steps to delete or anonymise it.</p>

      <h3>8. Data Security</h3>
      <p>We implement reasonable technical and organisational measures to protect your personal information against loss, misuse, unauthorised access, disclosure, alteration, or destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

      <h3>9. Your Rights</h3>
      <p>Under POPIA, you have the right to:</p>
      <ul>
        <li>Request access to the personal information we hold about you;</li>
        <li>Request correction or deletion of your personal information;</li>
        <li>Object to the processing of your personal information for direct marketing purposes;</li>
        <li>Withdraw consent where processing is based on consent, without affecting the lawfulness of processing before withdrawal;</li>
        <li>Lodge a complaint with the <strong>Information Regulator of South Africa</strong> if you believe your information has been processed unlawfully.</li>
      </ul>
      <p>To exercise any of these rights, contact us using the details in Section 12.</p>

      <h3>10. Children's Privacy</h3>
      <p>Our Services are not directed at, and are not intended for use by, children under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.</p>

      <h3>11. Third-Party Links</h3>
      <p>Our website or app may contain links to third-party websites or services (e.g. app stores, mapping services). We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies.</p>

      <h3>12. Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The updated version will be posted on this page with a revised "Last updated" date.</p>

      <h3>13. Contact Us</h3>
      <p>For questions about this Privacy Policy, or to exercise your rights under POPIA, please contact:</p>
      <p><strong>Sli Investment Holdings (Pty) Ltd t/a GAZ2GO</strong><br/>Email: frank@sli-invest.com</p>
      <p>You may also contact the Information Regulator of South Africa:<br/>Website: inforegulator.org.za</p>
    `
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: 5 July 2026",
    body: `
      <p>The following disclaimer applies to your use of the GAZ2GO website (gaz2go.co.za), the GAZ2GO Near Me app, and GAZ2GO LPG vending and exchange machines, operated by <strong>Sli Investment Holdings (Pty) Ltd</strong> t/a GAZ2GO.</p>

      <h3>1. General Information Only</h3>
      <p>The content on our website and app is provided for general informational purposes only. While we strive to keep information — including station locations, stock availability, pricing, and safety guidance — accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of this information at any given time.</p>

      <h3>2. Station and Stock Availability</h3>
      <p>Real-time stock availability shown in the GAZ2GO Near Me app is based on our VIMS monitoring system and is intended as a guide only. Stock levels can change between the time you check and the time you arrive at a station due to demand, technical issues, or other factors outside our control. GAZ2GO is not liable for any inconvenience or loss arising from a station being out of stock or temporarily unavailable.</p>

      <h3>3. Gas Safety Disclaimer</h3>
      <p>LPG (liquefied petroleum gas) is a flammable and hazardous substance if not handled correctly. GAZ2GO supplies filled 9kg LPG cylinders that meet applicable SANS standards at the point of exchange. However:</p>
      <ul>
        <li>You are solely responsible for the safe transport, storage, connection, and use of any cylinder obtained from a GAZ2GO machine;</li>
        <li>You must follow the manufacturer's instructions and any applicable safety regulations when connecting or using a gas cylinder;</li>
        <li>GAZ2GO is not responsible for injury, loss, or damage arising from improper storage, handling, transport, connection, or use of a cylinder after it has been dispensed;</li>
        <li>Any gas appliance connections should be performed or checked by a suitably qualified and, where legally required, registered gas practitioner;</li>
        <li>If you smell gas or suspect a leak, do not use naked flames or electrical switches. Move to a well-ventilated area immediately and seek professional assistance.</li>
      </ul>
      <p>Nothing in this disclaimer limits any liability GAZ2GO may have for defective products supplied by us, to the extent such liability cannot lawfully be excluded under the Consumer Protection Act 68 of 2008.</p>

      <h3>4. No Professional Advice</h3>
      <p>Nothing on our website or app constitutes professional, technical, or safety advice specific to your circumstances. Where you require advice on gas installation, appliance compatibility, or safety matters, please consult a qualified, registered gas practitioner.</p>

      <h3>5. Third-Party Sites and Locations</h3>
      <p>Our website and app may reference or link to third-party websites, retail partner locations, or app stores. GAZ2GO does not control and is not responsible for the content, accuracy, availability, or practices of any third-party site or premises, and inclusion of any link or reference does not imply endorsement.</p>

      <h3>6. Competitions and Promotions</h3>
      <p>From time to time, GAZ2GO may run promotional competitions. Any such competition will be governed by its own specific terms and conditions, published at the time of the promotion, which will take precedence over this general disclaimer for matters relating to that competition.</p>

      <h3>7. Limitation of Liability</h3>
      <p>To the maximum extent permitted by South African law, GAZ2GO, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, or consequential loss or damage arising out of, or in connection with, your access to or use of our website, app, or vending machines, including but not limited to loss of data, loss of profits, or personal injury, except where such liability cannot lawfully be excluded.</p>

      <h3>8. Changes to This Disclaimer</h3>
      <p>We may update this Disclaimer from time to time. The updated version will be posted on this page with a revised "Last updated" date.</p>

      <h3>9. Contact Us</h3>
      <p>If you have any questions about this Disclaimer, please contact:</p>
      <p><strong>Sli Investment Holdings (Pty) Ltd t/a GAZ2GO</strong><br/>Email: frank@sli-invest.com</p>
    `
  }
};

function buildLegalModal() {
  const overlay = document.createElement('div');
  overlay.id = 'legal-overlay';
  overlay.innerHTML = `
    <div id="legal-modal" role="dialog" aria-modal="true" aria-label="Legal document">
      <button id="legal-close" aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <div id="legal-scroll">
        <div class="fg-eyebrow"><span class="fg-eyebrow-line"></span>GAZ2GO</div>
        <h2 id="legal-title" class="fg-title"></h2>
        <p id="legal-updated" class="legal-updated"></p>
        <div id="legal-body" class="legal-body"></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', e => { if (e.target === overlay) closeLegalModal(); });
  document.getElementById('legal-close').addEventListener('click', closeLegalModal);
  return overlay;
}

function openLegalModal(key) {
  const doc = LEGAL_DOCS[key];
  if (!doc) return;

  let overlay = document.getElementById('legal-overlay');
  if (!overlay) overlay = buildLegalModal();

  document.getElementById('legal-title').textContent = doc.title;
  document.getElementById('legal-updated').textContent = doc.updated;
  document.getElementById('legal-body').innerHTML = doc.body;
  document.getElementById('legal-scroll').scrollTop = 0;

  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeLegalModal() {
  const overlay = document.getElementById('legal-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLegalModal();
});

document.querySelectorAll('[data-legal]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    openLegalModal(link.getAttribute('data-legal'));
  });
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
