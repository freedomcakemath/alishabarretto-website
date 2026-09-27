/* Offline copies of the pages you read. Network first, so visitors always get the newest version when online;
   the cached copy is only used when there's no connection. */
const CACHE = 'site-v1';
const FILES = [
  '/',
  '/css/site.min.css',
  '/fonts/alegreya-normal-latin.woff2',
  '/fonts/alegreya-italic-latin.woff2',
  '/images/dither/profile-light.png', '/images/dither/profile-dark.png',
  '/images/dither/image_1-light.png', '/images/dither/image_1-dark.png',
  '/images/dither/image_2-light.png', '/images/dither/image_2-dark.png',
  '/images/dither/image_4-light.png', '/images/dither/image_4-dark.png',
  '/images/dither/himalayas-dark.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
