// https://developer.chrome.com/docs/workbox/service-worker-overview/

const CACHE_NAME = "my-cache";
self.addEventListener("install", (e) => {
  console.log("installing service worker!!");
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .addAll(["/", "/index.html", "static/js/bundle.js"])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activating service worker");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // console.log(`fetching ${event.request.url}`);
  if (navigator.onLine) {
    const fetchRequest = event.request.clone();
    return fetch(fetchRequest).then((response) => {
      if (!response || response.status !== 200 || response.type !== "basic") {
        return response;
      }

      const responseToCache = response.clone();
      caches
        .open(CACHE_NAME)
        .then((cache) => cache.put(event.request, responseToCache));
    });
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
});
