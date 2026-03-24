/* ───────── Edistudio – script.js ───────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. STICKY NAV – add shadow on scroll ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,.07)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

  /* ── 2. SMOOTH SCROLL for nav links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 3. SCROLL REVEAL – fade-in sections ── */
  const revealEls = document.querySelectorAll(
    '.service-card, .testi-card, .price-card, .about-left, .about-right, .hero-left, .hero-right'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings
        const siblings = [...entry.target.parentElement.children];
        const index = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  /* ── 4. CONTACT FORM – validation + toast ── */
  const form = document.getElementById('contactForm');

  // create toast element
  const toast = document.createElement('div');
  toast.classList.add('toast');
  document.body.appendChild(toast);

  function showToast(msg, success = true) {
    toast.textContent = msg;
    toast.style.background = success ? '#1a2340' : '#c0392b';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name) {
        showToast('⚠️ Please enter your name.', false); return;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('⚠️ Please enter a valid email.', false); return;
      }
      if (!message) {
        showToast('⚠️ Please tell us about your project.', false); return;
      }

      // Simulate sending
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

  /* ── 5. ACTIVE NAV LINK on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--orange)';
      }
    });
  });

  /* ── 6. PRICING – highlight on hover ── */
  document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (!card.classList.contains('featured')) {
        card.style.transform = 'translateY(-6px)';
        card.style.boxShadow = '0 16px 50px rgba(0,0,0,.1)';
        card.style.transition = 'all .25s';
      }
    });
    card.addEventListener('mouseleave', () => {
      if (!card.classList.contains('featured')) {
        card.style.transform = '';
        card.style.boxShadow = '';
      }
    });
  });

});
