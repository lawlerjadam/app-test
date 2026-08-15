// FELT Studio — Service Worker
// Only caches static assets (icons, manifest).
// CSS, JS and HTML always come from the network so updates appear immediately.

const CACHE_NAME = 'felt-studio-v12';

// Only cache things that never change between deployments
const STATIC_ASSETS = [
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
];

// Install: cache static assets only
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: delete old caches (clears the v1 cache that had stale CSS/JS)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch strategy:
// - Icons/manifest: cache first (they don't change)
// - Everything else (HTML, CSS, JS, Supabase): network first, no caching
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isStatic = STATIC_ASSETS.some(a => url.pathname === a);

  if (isStatic) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
  // All other requests (HTML, CSS, JS, API) go straight to network
});
