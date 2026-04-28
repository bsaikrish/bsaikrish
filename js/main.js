/* ==========================================
   Main JS — theme, header, mobile menu,
   scroll-reveal, footer year
   ========================================== */

(function () {
  'use strict';

  // ── Theme ────────────────────────────────
  const html = document.documentElement;
  const STORAGE_KEY = 'saikrish-theme';

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const next = html.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(next);
  }

  applyTheme(getPreferred());

  document.querySelectorAll('#theme-toggle, #theme-toggle-mobile').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // ── Header scroll ─────────────────────────
  const header = document.getElementById('site-header');
  if (header) {
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile menu ───────────────────────────
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('mobile-menu-overlay');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      const open = overlay.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    overlay.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Scroll Reveal ─────────────────────────
  const reveals = document.querySelectorAll('.scroll-reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }

  // ── Footer year ───────────────────────────
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
