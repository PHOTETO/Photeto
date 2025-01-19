self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
});

self.addEventListener('fetch', () => {
    // console.log('Fetching:', event.request.url);
});
