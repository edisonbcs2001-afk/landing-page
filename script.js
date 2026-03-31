/* ═══════════════════════════════
   EDISTUDIO – script.js
═══════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── refs ── */
  const nav        = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  const overlay    = document.getElementById('navOverlay');

  /* ════════════════════════════
     1. HAMBURGER MENU
  ════════════════════════════ */
  function openMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  window.closeMenu = function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ════════════════════════════
     2. STICKY NAV SHADOW
  ════════════════════════════ */
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ════════════════════════════
     3. SMOOTH SCROLL
  ════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const navH = nav.offsetHeight;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 10;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ════════════════════════════
     4. SCROLL REVEAL
  ════════════════════════════ */
  const revealTargets = document.querySelectorAll(
    '.service-card, .testi-card, .price-card, ' +
    '.about-left, .about-right, .hero-left, .hero-right'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...entry.target.parentElement.children];
      const idx      = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.10 });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ════════════════════════════
     5. ACTIVE NAV LINK
  ════════════════════════════ */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - nav.offsetHeight - 20) {
        current = sec.getAttribute('id');
      }
    });
    navAnchors.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--orange)';
      }
    });
  }, { passive: true });

  /* ════════════════════════════
     6. CONTACT FORM + TOAST
  ════════════════════════════ */
  const form = document.getElementById('contactForm');

  // Build toast element
  const toast = document.createElement('div');
  toast.classList.add('toast');
  document.body.appendChild(toast);

  function showToast(msg, success = true) {
    toast.textContent = msg;
    toast.style.background = success ? 'var(--navy)' : '#c0392b';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name)              { showToast('⚠️ Please enter your name.', false);          return; }
      if (!emailRx.test(email)){ showToast('⚠️ Please enter a valid email.', false);     return; }
      if (!message)           { showToast('⚠️ Please describe your project.', false);    return; }

      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(() => {
        showToast('🎉 Message sent! We\'ll be in touch within 24 hours.');
        form.reset();
        btn.textContent = 'Send Message →';
        btn.disabled = false;
      }, 1200);
    });
  }

  /* ════════════════════════════
     7. PRICING HOVER
  ════════════════════════════ */
  document.querySelectorAll('.price-card:not(.featured)').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform   = 'translateY(-6px)';
      card.style.boxShadow   = '0 16px 50px rgba(0,0,0,.1)';
      card.style.transition  = 'all .25s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.boxShadow  = '';
    });
  });

});
