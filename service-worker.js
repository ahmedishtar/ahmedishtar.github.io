
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('ps4-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './background.jpg',
        './goldhen_2.4b17.js'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
