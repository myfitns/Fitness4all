self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fitness-app-cache').then((cache) => {
      return cache.addAll([
        'fitness_app_full_ios_ready.html',
        'manifest.json',
        'icon-180.png',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});