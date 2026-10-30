const CACHE_NAME = "v1";
const FILES_TO_CACHE = ["/", "/index.html", "/ASSETS/CSS/main.css", "ASSETS/JS/java.js"];

self.addEventListener("install", event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
});

self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});