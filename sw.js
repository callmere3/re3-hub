/* RE3 Hub — Service Worker v1.7.0 */

self.addEventListener('push', function(event) {
  var data = {};
  try { data = event.data.json(); } catch(e) { data = { title: 'RE3 Hub', body: event.data ? event.data.text() : '' }; }

  event.waitUntil(
    self.registration.showNotification(data.title || 'RE3 Hub', {
      body: data.body || '',
      icon: '/re3-hub/apple-touch-icon.png',
      badge: '/re3-hub/apple-touch-icon.png',
      vibrate: [200, 100, 200],
      data: { url: 'https://callmere3.github.io/re3-hub/hub-re3x.html' }
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || 'https://callmere3.github.io/re3-hub/hub-re3x.html')
  );
});
