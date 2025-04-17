
if ('serviceWorker' in navigator) {
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
      message.innerText = 'جارٍ تخزين الصفحة... ' + counter + ' ثواني';
      document.body.appendChild(message);

      let countdown = setInterval(() => {
        counter--;
        if (counter <= 0) {
          clearInterval(countdown);
          message.innerText = 'تم تخزين الصفحة أوفلاين. طفي النت وارجع.';
        } else {
          message.innerText = 'جارٍ تخزين الصفحة... ' + counter + ' ثواني';
        }
      }, 1000);
    })
    .catch(function(error) {
      alert('فشل تسجيل التخزين المؤقت');
      console.error('Service worker error:', error);
    });
}
