$(function () {
  const $window   = $(window);
  const $navLinks = $('.greedy-nav .visible-links a, .greedy-nav .hidden-links a');
  const bufferPx  = 150;                   // extra space so the section is “active” a bit early

  /* --------------------------------------------------
   *  Build an ordered list of section DOM elements
   * -------------------------------------------------- */
  const sections = $navLinks.map(function () {
      const href = this.getAttribute('href') || '';
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return null;   // external link
      const id = href.slice(hashIndex + 1);         // part after “#”
      return document.getElementById(id);
  }).get().filter(Boolean);                // drop null entries

  if (!sections.length) return;            // no in-page anchors, nothing to do

  /* --------------------------------------------------
   *  Highlight logic, called on scroll / resize / load
   * -------------------------------------------------- */
  function highlightNav() {
    const scrollPos = $window.scrollTop() + bufferPx;
    let current = null;

    // Walk through sections in document order;
    // the last one whose top is above the buffer is the current section.
    for (const el of sections) {
      if (el.offsetTop <= scrollPos) current = el;
    }

    $navLinks.removeClass('active');
    if (current) {
      // “[href$="#about"]” catches “…/#about”, “#about”, etc.
      const selector = `[href$="#${current.id}"]`;
      $navLinks.filter(selector).addClass('active');
    }
  }

  $window.on('scroll resize load', highlightNav);
  highlightNav();   // run once on load
});
