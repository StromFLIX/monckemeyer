import { ref } from 'vue'

// Umami-Konfiguration
const HOST = 'https://umami.stromflix.com'
const WEBSITE_ID = 'faf756a7-ea46-4de2-a1bf-61cd4fecb60b'
const STORAGE_KEY = 'moe-analytics-consent' // 'granted' | 'denied'

function read() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function write(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* localStorage nicht verfügbar (z. B. privater Modus) */
  }
}

// Reaktiver Zustand: null = noch keine Entscheidung
export const consent = ref(read())

let loaded = false

function injectScript(attrs) {
  const s = document.createElement('script')
  s.defer = true
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v)
  document.head.appendChild(s)
}

function loadAnalytics() {
  if (loaded) return
  loaded = true
  try {
    localStorage.removeItem('umami.disabled')
  } catch {
    /* ignorieren */
  }
  // Haupt-Tracking
  injectScript({ src: `${HOST}/script.js`, 'data-website-id': WEBSITE_ID })
  // Session Replay
  injectScript({
    src: `${HOST}/recorder.js`,
    'data-website-id': WEBSITE_ID,
    'data-sample-rate': '0.15',
    'data-mask-level': 'moderate',
    'data-max-duration': '300000'
  })
}

export function grantConsent() {
  write('granted')
  consent.value = 'granted'
  loadAnalytics()
}

export function denyConsent() {
  const wasLoaded = loaded
  write('denied')
  consent.value = 'denied'
  // Umami zusätzlich global deaktivieren
  try {
    localStorage.setItem('umami.disabled', '1')
  } catch {
    /* ignorieren */
  }
  // Falls bereits geladen (inkl. Replay): Seite neu laden, um die Aufzeichnung
  // vollständig zu stoppen.
  if (wasLoaded) window.location.reload()
}

// Beim Start aufrufen: lädt Analytics nur, wenn bereits zugestimmt wurde.
export function initConsent() {
  if (consent.value === 'granted') loadAnalytics()
}
