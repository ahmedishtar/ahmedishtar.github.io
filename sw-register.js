
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    setTimeout(function () {
      navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          let counter = 10;
          let message = document.createElement('div');
          message.style.position = 'fixed';
          message.style.bottom = '20px';
          message.style.right = '20px';
          message.style.padding = '20px';
          message.style.backgroundColor = '#333';
          message.style.color = '#fff';
          message.style.fontSize = '20px';
          message.style.borderRadius = '10px';
          message.style.zIndex = '1000';
          message.innerText = 'جاري تخزين الصفحة للاستخدام بدون انترنت... ' + counter;
          document.body.appendChild(message);

          let countdown = setInterval(() => {
            counter--;
            if (counter <= 0) {
              clearInterval(countdown);
              message.innerText = 'تم تخزين الصفحة. اغلق الصفحة وطفي النت وارجع.';
            } else {
              message.innerText = 'جاري تخزين الصفحة للاستخدام بدون انترنت... ' + counter;
            }
          }, 1000);
        })
        .catch(function(error) {
          alert('فشل تسجيل التخزين المؤقت');
          console.error('Service worker error:', error);
        });
    }, 2000); // تأخير لمدة ثانيتين قبل التسجيل
  });
}
