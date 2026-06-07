const CACHE_NAME = "german2b1-shell-v7";
const APP_SCOPE = self.registration.scope;
const APP_SHELL = [
  "./",
  "./dashboard/",
  "./basics/",
  "./basics/alphabet/",
  "./basics/numbers/",
  "./basics/dates/",
  "./basics/time/",
  "./basics/seasons/",
  "./basics/pronouns/",
  "./basics/first-phrases/",
  "./reader/",
  "./review/",
  "./resources/",
  "./modules/",
  "./modules/a1-1/",
  "./modules/a1-2/",
  "./modules/a1-3/",
  "./modules/a1-4/",
  "./modules/a1-5/",
  "./modules/a1-6/",
  "./modules/a2-1/",
  "./modules/a2-2/",
  "./modules/a2-3/",
  "./modules/a2-4/",
  "./modules/a2-5/",
  "./modules/a2-6/",
  "./modules/b1-1/",
  "./modules/b1-2/",
  "./modules/b1-3/",
  "./modules/b1-4/",
  "./modules/b1-5/",
  "./modules/b1-6/",
  "./manifest.webmanifest",
  "./icons/icon.svg",
].map((path) => new URL(path, APP_SCOPE).toString());
const FALLBACK_URL = new URL("./", APP_SCOPE).toString();

const getCachedNavigationFallback = async (request) => {
  const requestUrl = new URL(request.url);
  const normalizedPath = requestUrl.pathname.endsWith("/")
    ? requestUrl.pathname
    : `${requestUrl.pathname}/`;
  const normalizedUrl = new URL(`${normalizedPath}${requestUrl.search}`, requestUrl.origin);

  return (
    (await caches.match(request)) ??
    (await caches.match(normalizedUrl.toString())) ??
    (await caches.match(FALLBACK_URL))
  );
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) return response;
          return getCachedNavigationFallback(event.request).then((fallback) => fallback ?? response);
        })
        .catch(() => getCachedNavigationFallback(event.request)),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          const requestUrl = new URL(event.request.url);
          if (!response.ok || requestUrl.origin !== self.location.origin) return response;

          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
          return response;
        })
        .catch(() => caches.match(FALLBACK_URL));
    }),
  );
});
