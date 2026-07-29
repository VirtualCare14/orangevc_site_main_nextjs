/* Orange Virtual Connect — site interactions */
(function () {
  // Auto year
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Close on link click (mobile UX)
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header shadow on scroll
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Hero cards scroll navigation
  var heroGrid = document.getElementById('heroCardsGrid');
  var prevBtn = document.getElementById('heroCardPrev');
  var nextBtn = document.getElementById('heroCardNext');
  if (heroGrid && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function () {
      heroGrid.scrollBy({ top: -160, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function () {
      heroGrid.scrollBy({ top: 160, behavior: 'smooth' });
    });
  }

  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          reveal.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.pillar, .service-card, .model-card, .why-item, .industry-card, .blog-card, .case-card, .capability, .hero-info-card')
      .forEach(function (el) { el.classList.add('reveal'); reveal.observe(el); });
  }
})();
