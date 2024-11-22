self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: '/icon.png',
        badge: '/badge.png'
    };

    // تخصيص الإشعار برسالة محفزة
    event.waitUntil(
        self.registration.showNotification('الوقت انتهى!', {
            body: "لقد وصل العد التنازلي إلى الصفر، حان وقتك الآن!",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Chrome_icon_%282013-2019%29.png",
            badge: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Chrome_icon_%282013-2019%29.png"
        })
    );
});