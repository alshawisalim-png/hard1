// service-worker.js
// استراتيجية: Cache First — التطبيق يعمل بالكامل دون اتصال بالإنترنت
// لا يوجد أي محتوى ديناميكي يُجلب من خادم، لذا كل الأصول الثابتة تُخزَّن عند التثبيت

const CACHE_NAME = 'hard-app-cache-v1';

// كل الملفات اللازمة لعمل التطبيق بالكامل دون اتصال
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

// 1) install: يُخزَّن كل شيء فور تثبيت الـ Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting()) // تفعيل النسخة الجديدة فورًا دون انتظار إغلاق كل التبويبات
  );
});

// 2) activate: تنظيف أي كاش قديم من نسخة سابقة من التطبيق
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim()) // السيطرة على كل الصفحات المفتوحة فورًا
  );
});

// 3) fetch: Cache First — ابحث في الكاش أولًا، وإن لم يوجد جرّب الشبكة كخطة بديلة فقط
self.addEventListener('fetch', (event) => {
  // نتعامل فقط مع طلبات GET (تجنّب مشاكل مع POST مثلاً)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // وُجد في الكاش → سرعة قصوى، لا حاجة للشبكة
      }
      // احتياطي نادر: إن طُلب ملف لم يُخزَّن مسبقًا، حاول جلبه من الشبكة
      return fetch(event.request).catch(() => {
        // لا اتصال ولا كاش لهذا الملف: أعد صفحة البداية كحل أخير لملاحة SPA
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
