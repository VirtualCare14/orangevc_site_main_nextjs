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

  // Interactive Node Graph & Connected Cards Logic
  var nodeWrapper = document.querySelector('.node-graph-wrapper');
  var coreNode = document.getElementById('centralCoreNode');
  var svgGroup = document.getElementById('svgLinesGroup');
  var nodes = document.querySelectorAll('.graph-node');
  var cards = document.querySelectorAll('.connected-card');
  var filterPills = document.querySelectorAll('.node-pill');

  function updateNodeLines() {
    if (!nodeWrapper || !coreNode || !svgGroup || window.innerWidth <= 850) return;
    var wrapperRect = nodeWrapper.getBoundingClientRect();
    var coreRect = coreNode.getBoundingClientRect();

    var coreX = (coreRect.left + coreRect.width / 2) - wrapperRect.left;
    var coreY = (coreRect.top + coreRect.height / 2) - wrapperRect.top;

    var svgHtml = '';
    nodes.forEach(function (node) {
      if (node.style.display === 'none') return;
      var id = node.getAttribute('data-id');
      var nodeRect = node.getBoundingClientRect();
      var nodeX = (nodeRect.left + nodeRect.width / 2) - wrapperRect.left;
      var nodeY = (nodeRect.top + nodeRect.height / 2) - wrapperRect.top;
      var isActive = node.classList.contains('active');

      svgHtml += '<line class="svg-node-line ' + (isActive ? 'active' : '') + '" id="line-node-' + id + '" ' +
        'x1="' + coreX + '" y1="' + coreY + '" ' +
        'x2="' + nodeX + '" y2="' + nodeY + '" />';
    });
    svgGroup.innerHTML = svgHtml;
  }

  function setActiveNode(id) {
    nodes.forEach(function (n) {
      n.classList.toggle('active', n.getAttribute('data-id') === String(id));
    });
    cards.forEach(function (c) {
      c.classList.toggle('active', c.getAttribute('data-id') === String(id));
    });
    updateNodeLines();
  }

  if (nodes.length > 0) {
    nodes.forEach(function (node) {
      node.addEventListener('mouseenter', function () {
        var id = this.getAttribute('data-id');
        setActiveNode(id);
      });
      node.addEventListener('click', function () {
        var id = this.getAttribute('data-id');
        setActiveNode(id);
        var targetCard = document.querySelector('.connected-card[data-id="' + id + '"]');
        if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });

    cards.forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        var id = this.getAttribute('data-id');
        setActiveNode(id);
      });
    });

    filterPills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');
        filterPills.forEach(function (p) { p.classList.remove('active'); });
        this.classList.add('active');

        nodes.forEach(function (node) {
          var cat = node.getAttribute('data-cat');
          if (filter === 'all' || cat === filter) {
            node.style.display = 'flex';
          } else {
            node.style.display = 'none';
          }
        });

        cards.forEach(function (card) {
          var cat = card.getAttribute('data-cat');
          if (filter === 'all' || cat === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });

        updateNodeLines();
      });
    });

    window.addEventListener('resize', updateNodeLines);
    setTimeout(updateNodeLines, 300);
  }

  // Expandable Right-Side Floating Social Menu (+)
  var menuContainer = document.getElementById('floatingSocialMenu');
  var menuTrigger = document.getElementById('socialMenuTrigger');
  if (menuContainer && menuTrigger) {
    menuTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      menuContainer.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      if (!menuContainer.contains(e.target)) {
        menuContainer.classList.remove('open');
      }
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
    document.querySelectorAll('.pillar, .service-card, .model-card, .why-item, .industry-card, .blog-card, .case-card, .capability, .hero-info-card, .connected-card, .graph-node')
      .forEach(function (el) { el.classList.add('reveal'); reveal.observe(el); });
  }
})();
