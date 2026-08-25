(function () {
  var copyright = document.getElementById('copyright');
  if (copyright) copyright.innerHTML = '&copy; ' + new Date().getFullYear() + ' MARIA RĂDNEANȚU. All rights reserved.';

  window.addEventListener('load', function() {
    setTimeout(function () {
      document.querySelectorAll('[data-hero], [data-hero-reveal]').forEach(function (el) {
        el.classList.add('in');
      });
    }, 150);
  });

  var heroSticky = document.getElementById('hero-sticky');
  window.addEventListener('scroll', function() {
    if (heroSticky) {
      var scroll = window.scrollY;
      var startFade = 400; 
      var fadeDistance = 600; 
      var opacity = 1;
      
      if (scroll > startFade) {
        opacity = 1 - ((scroll - startFade) / fadeDistance);
      }
      heroSticky.style.opacity = Math.max(0, opacity);
    }
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.01 });

  document.querySelectorAll('.reveal, .art, .line-mask:not([data-hero])').forEach(function (el) {
    observer.observe(el);
  });
})();