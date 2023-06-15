window.addEventListener('DOMContentLoaded', function() {
    var whatsappWidget = document.getElementById('whatsapp-widget');
    var whatsappIcon = whatsappWidget.querySelector('img');
  
    // Show/hide WhatsApp widget on scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        whatsappWidget.style.opacity = 1;
        whatsappWidget.style.pointerEvents = 'auto';
      } else {
        whatsappWidget.style.opacity = 0;
        whatsappWidget.style.pointerEvents = 'none';
      }
    });
  
    // Change WhatsApp widget position on window resize
    window.addEventListener('resize', function() {
      var bottomOffset = 20;
      var rightOffset = 20;
  
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
      if (windowWidth <= 768) {
        bottomOffset = 70;
        rightOffset = 10;
      }
  
      whatsappWidget.style.bottom = bottomOffset + 'px';
      whatsappWidget.style.right = rightOffset + 'px';
    });
  });
  