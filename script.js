/* ═══════════════════════════════════════
   EDISTUDIO – style.css
   Fully Responsive: Mobile / Tablet / Desktop
   Breakpoints:
     xs  < 480px   (small phones)
     sm  < 640px   (phones)
     md  < 768px   (large phones / small tablets)
     lg  < 1024px  (tablets / small laptops)
     xl  ≥ 1024px  (desktop)
═══════════════════════════════════════ */

/* ── RESET ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
img, video { max-width: 100%; display: block; }

/* ── VARIABLES ── */
:root {
  --cream:   #f5f0ea;
  --navy:    #1a2340;
  --orange:  #e8622a;
  --text:    #2b2b2b;
  --muted:   #7a7a7a;
  --white:   #ffffff;
  --border:  #e8e2da;
  --font:    'Manrope', sans-serif;

  /* spacing scale */
  --section-pad-x: clamp(20px, 5vw, 80px);
  --section-pad-y: clamp(60px, 8vw, 100px);
}

html { scroll-behavior: smooth; }
body {
  font-family: var(--font);
  background: var(--cream);
  color: var(--text);
  font-size: 15px;
  line-height: 1.65;
  overflow-x: hidden;
}

/* ── UTILITY ── */
.hide-mobile { display: inline; }

/* ════════════════════════════════
   BUTTONS
════════════════════════════════ */
.btn {
  display: inline-block;
  padding: 11px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border: none;
  transition: all .22s ease;
  font-family: var(--font);
  white-space: nowrap;
}
.btn-orange  { background: var(--orange); color: #fff; }
.btn-orange:hover  { background: #cf5421; transform: translateY(-1px); }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid #bbb; }
.btn-outline:hover { border-color: var(--orange); color: var(--orange); }
.btn-navy    { background: var(--navy); color: #fff; }
.btn-navy:hover    { background: #111929; transform: translateY(-1px); }

/* ════════════════════════════════
   NAV
════════════════════════════════ */
nav {
  position: sticky; top: 0; z-index: 200;
  background: var(--cream);
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px var(--section-pad-x);
  border-bottom: 1px solid var(--border);
  transition: box-shadow .3s;
}
nav.scrolled { box-shadow: 0 2px 20px rgba(0,0,0,.08); }

.nav-logo {
  font-size: 20px; font-weight: 800; color: var(--navy);
  letter-spacing: -.5px; text-decoration: none; z-index: 201;
  flex-shrink: 0;
}
.nav-logo span { color: var(--orange); }

/* Desktop links */
.nav-links {
  display: flex; align-items: center; gap: 28px;
  list-style: none;
}
.nav-links a {
  text-decoration: none; color: var(--text);
  font-size: 14px; font-weight: 500; transition: color .2s;
}
.nav-links a:hover { color: var(--orange); }
.nav-cta-item { display: none; } /* hidden on desktop */

.nav-cta-desktop { flex-shrink: 0; }

/* ── HAMBURGER ── */
.hamburger {
  display: none;
  flex-direction: column; justify-content: center; align-items: center;
  gap: 5px; width: 40px; height: 40px;
  background: none; border: none; cursor: pointer; z-index: 201;
  padding: 4px;
}
.hamburger span {
  display: block; width: 24px; height: 2.5px;
  background: var(--navy); border-radius: 4px;
  transition: all .3s ease;
  transform-origin: center;
}
/* Animate to X */
.hamburger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

/* ── OVERLAY ── */
.nav-overlay {
  display: none; position: fixed; inset: 0;
  background: rgba(0,0,0,.45); z-index: 150;
  opacity: 0; transition: opacity .3s;
}
.nav-overlay.show { opacity: 1; }

/* ════════════════════════════════
   HERO
════════════════════════════════ */
.hero {
  display: flex; align-items: center; justify-content: space-between;
  padding: clamp(60px, 8vw, 100px) var(--section-pad-x);
  min-height: clamp(500px, 85vh, 900px);
  gap: 40px; overflow: hidden;
}
.hero-left { flex: 1; max-width: 560px; }

.hero-tag {
  font-size: 11px; font-weight: 700; letter-spacing: 2px;
  text-transform: uppercase; color: var(--orange); margin-bottom: 16px;
}
.hero h1 {
  font-size: clamp(32px, 5vw, 58px);
  font-weight: 800; line-height: 1.1; color: var(--navy);
  margin-bottom: 20px; letter-spacing: -1.5px;
}
.hero h1 .highlight {
  color: var(--orange); font-style: italic;
  font-family: 'Playfair Display', serif;
}
.hero p {
  color: var(--muted); font-size: clamp(14px, 1.5vw, 16px);
  line-height: 1.7; margin-bottom: 36px; max-width: 420px;
}
.hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-btns .btn { padding: 13px 28px; font-size: 15px; }

/* Hero 3-D shapes */
.hero-right {
  position: relative; width: clamp(280px, 38vw, 440px);
  height: clamp(260px, 35vw, 420px); flex-shrink: 0;
}
.shape  { position: absolute; border-radius: 12px; }

.cube1 {
  width: clamp(80px,12vw,130px); height: clamp(80px,12vw,130px);
  background: linear-gradient(135deg,#2c3e6b,#1a2340);
  top:20px; left:80px; border-radius:18px;
  box-shadow:8px 12px 30px rgba(26,35,64,.35);
  animation: float1 4s ease-in-out infinite;
}
.cube2 {
  width: clamp(60px,9vw,90px); height: clamp(60px,9vw,90px);
  background: linear-gradient(135deg,#243060,#1a2340);
  top:140px; left:220px; border-radius:14px;
  box-shadow:6px 10px 22px rgba(26,35,64,.3);
  animation: float2 5s ease-in-out infinite;
}
.cube3 {
  width: clamp(50px,7vw,70px); height: clamp(50px,7vw,70px);
  background: linear-gradient(135deg,#34477a,#1e2d55);
  top:60px; left:270px; border-radius:12px;
  box-shadow:4px 8px 18px rgba(26,35,64,.25);
  animation: float3 6s ease-in-out infinite;
}
.orb {
  position: absolute; border-radius: 50%;
  background: radial-gradient(circle at 35% 35%,#f4a574,var(--orange) 70%);
}
.orb1 { width:clamp(60px,9vw,100px); height:clamp(60px,9vw,100px); top:220px; left:60px;  box-shadow:0 8px 30px rgba(232,98,42,.4); animation:float2 4.5s ease-in-out infinite; }
.orb2 { width:clamp(36px,5vw,55px);  height:clamp(36px,5vw,55px);  top:180px; left:310px; box-shadow:0 5px 18px rgba(232,98,42,.3); animation:float1 5.5s ease-in-out infinite; }
.orb3 { width:clamp(24px,3vw,35px);  height:clamp(24px,3vw,35px);  top:30px;  left:20px;  opacity:.7; animation:float3 3.5s ease-in-out infinite; }

@keyframes float1 { 0%,100%{transform:rotate(20deg) translateY(0)} 50%{transform:rotate(20deg) translateY(-14px)} }
@keyframes float2 { 0%,100%{transform:rotate(-15deg) translateY(0)} 50%{transform:rotate(-15deg) translateY(-10px)} }
@keyframes float3 { 0%,100%{transform:rotate(8deg) translateY(0)} 50%{transform:rotate(8deg) translateY(-18px)} }

/* ════════════════════════════════
   SECTION COMMON
════════════════════════════════ */
section {
  padding: var(--section-pad-y) var(--section-pad-x);
}
.section-tag {
  font-size: 11px; font-weight: 700; letter-spacing: 2px;
  text-transform: uppercase; color: var(--orange);
  margin-bottom: 12px; text-align: center;
}
.section-title {
  font-size: clamp(26px, 4vw, 40px);
  font-weight: 800; color: var(--navy);
  text-align: center; letter-spacing: -1px; margin-bottom: 10px;
}
.section-sub {
  text-align: center; color: var(--muted);
  font-size: clamp(13.5px, 1.4vw, 15px);
  max-width: 520px; margin: 0 auto 52px;
  line-height: 1.7;
}

/* ════════════════════════════════
   SERVICES
════════════════════════════════ */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.service-card {
  background: var(--white); border-radius: 16px;
  padding: 30px 26px; border: 1px solid var(--border);
  transition: transform .25s, box-shadow .25s;
}
.service-card:hover { transform: translateY(-5px); box-shadow: 0 14px 44px rgba(0,0,0,.09); }
.service-icon {
  width: 44px; height: 44px; border-radius: 10px;
  background: #fff4ef; display: flex; align-items: center;
  justify-content: center; font-size: 20px; margin-bottom: 16px;
}
.service-card h3 { font-size: 15px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
.service-card p  { font-size: 13.5px; color: var(--muted); line-height: 1.65; }

/* ════════════════════════════════
   ABOUT
════════════════════════════════ */
.about { display: flex; align-items: center; gap: 64px; }
.about-left { flex: 1; }
.about-left .section-tag,
.about-left .section-title { text-align: left; }
.about-left .section-title { font-size: clamp(24px, 3.5vw, 36px); margin-bottom: 16px; }
.about-left p { color: var(--muted); font-size: 14.5px; margin-bottom: 26px; line-height: 1.7; }

.check-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.check-list li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 14px; color: var(--text); font-weight: 500;
}
.check-list li::before { content:'✓'; color: var(--orange); font-weight: 800; flex-shrink: 0; }

.about-right { flex-shrink: 0; position: relative; }
.about-card {
  width: clamp(260px, 30vw, 360px); height: clamp(200px, 22vw, 280px);
  background: var(--navy); border-radius: 20px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; color: #fff;
}
.about-card .big-num {
  font-size: clamp(52px, 7vw, 76px);
  font-weight: 800; letter-spacing: -2px; line-height: 1;
}
.about-card .big-num span { color: var(--orange); }
.about-card p { font-size: 14px; color: rgba(255,255,255,.6); margin-top: 6px; }

.about-badge {
  position: absolute; bottom: -18px; right: -18px;
  width: 68px; height: 68px; background: var(--orange);
  border-radius: 14px; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  color: #fff; font-weight: 800; font-size: 18px;
  box-shadow: 0 6px 20px rgba(232,98,42,.4);
}
.about-badge small { font-size: 10px; font-weight: 500; opacity: .85; }

/* ════════════════════════════════
   TESTIMONIALS
════════════════════════════════ */
.testimonials-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px;
}
.testi-card {
  background: var(--white); border-radius: 16px;
  padding: 28px 24px; border: 1px solid var(--border);
}
.stars { color: var(--orange); font-size: 14px; margin-bottom: 14px; letter-spacing: 2px; }
.testi-card p   { font-size: 13.5px; color: var(--text); line-height: 1.65; margin-bottom: 18px; }
.testi-author   { font-weight: 700; font-size: 13.5px; color: var(--navy); }
.testi-role     { font-size: 12px; color: var(--muted); }

/* ════════════════════════════════
   PRICING
════════════════════════════════ */
.pricing-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 22px; align-items: start;
}
.price-card {
  background: var(--white); border-radius: 20px;
  padding: 34px 28px; border: 1.5px solid var(--border);
  position: relative;
}
.price-card.featured { border-color: var(--orange); box-shadow: 0 8px 40px rgba(232,98,42,.13); }
.badge-popular {
  position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
  background: var(--orange); color: #fff; font-size: 11px; font-weight: 700;
  padding: 4px 16px; border-radius: 50px; letter-spacing: .5px; white-space: nowrap;
}
.price-card h3    { font-size: 14px; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
.price-desc       { font-size: 12.5px; color: var(--muted); margin-bottom: 18px; }
.price-amount     { font-size: clamp(34px,4vw,44px); font-weight: 800; color: var(--navy); letter-spacing: -1.5px; margin-bottom: 22px; }
.price-amount sup { font-size: 20px; vertical-align: top; margin-top: 8px; display: inline-block; }
.price-features   { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 26px; }
.price-features li { font-size: 13.5px; color: var(--text); display: flex; align-items: center; gap: 8px; }
.price-features li::before { content:'✓'; color: var(--orange); font-weight: 800; }
.price-card .btn  { width: 100%; text-align: center; padding: 13px; font-size: 14px; }
.price-card.featured .btn-navy { background: var(--orange); }

/* ════════════════════════════════
   CTA
════════════════════════════════ */
.cta-section {
  background: var(--navy); text-align: center;
  padding: clamp(70px,10vw,110px) var(--section-pad-x);
}
.cta-section h2 {
  font-size: clamp(28px, 5vw, 50px);
  font-weight: 800; color: #fff; letter-spacing: -1.5px; line-height: 1.15; margin-bottom: 14px;
}
.cta-section p  { color: rgba(255,255,255,.55); font-size: clamp(14px,1.5vw,16px); margin-bottom: 34px; }
.cta-section .btn-orange { padding: 15px 38px; font-size: 16px; }

/* ════════════════════════════════
   CONTACT
════════════════════════════════ */
.contact .section-title { font-size: clamp(24px, 3.5vw, 36px); }
.contact-form { max-width: 620px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.contact-form input,
.contact-form textarea {
  width: 100%; padding: 14px 18px; border-radius: 10px;
  border: 1.5px solid var(--border); background: var(--white);
  font-family: var(--font); font-size: 14px; color: var(--text);
  outline: none; transition: border-color .2s;
  -webkit-appearance: none;
}
.contact-form input:focus,
.contact-form textarea:focus  { border-color: var(--orange); }
.contact-form input::placeholder,
.contact-form textarea::placeholder { color: #bbb; }
.contact-form textarea { height: 130px; resize: none; }
.contact-form .btn-orange { padding: 14px 42px; font-size: 15px; align-self: center; }

/* ════════════════════════════════
   TOAST
════════════════════════════════ */
.toast {
  position: fixed; bottom: 24px; right: 24px;
  background: var(--navy); color: #fff;
  padding: 14px 22px; border-radius: 12px;
  font-size: 14px; font-weight: 600;
  box-shadow: 0 8px 30px rgba(0,0,0,.2);
  transform: translateY(100px); opacity: 0;
  transition: all .4s ease; z-index: 999;
  max-width: calc(100vw - 48px);
}
.toast.show { transform: translateY(0); opacity: 1; }

/* ════════════════════════════════
   FOOTER
════════════════════════════════ */
footer {
  background: #111929; color: rgba(255,255,255,.55);
  padding: clamp(40px,6vw,70px) var(--section-pad-x) 28px;
}
.footer-grid {
  display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 36px; margin-bottom: 44px;
}
.footer-brand .nav-logo { font-size: 18px; margin-bottom: 12px; display: block; color: #fff; }
.footer-brand p { font-size: 13px; line-height: 1.7; max-width: 230px; }

.footer-col h4 { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 14px; }
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.footer-col ul li a { text-decoration: none; color: rgba(255,255,255,.5); font-size: 13px; transition: color .2s; }
.footer-col ul li a:hover { color: var(--orange); }

.contact-info { display: flex; flex-direction: column; gap: 8px; }
.contact-info span { font-size: 13px; }

.social-links { display: flex; gap: 10px; margin-top: 8px; }
.social-links a {
  width: 34px; height: 34px; border-radius: 8px;
  background: rgba(255,255,255,.08);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.6); text-decoration: none;
  font-size: 13px; font-weight: 700; transition: all .2s;
}
.social-links a:hover { background: var(--orange); color: #fff; }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.08);
  padding-top: 22px; text-align: center; font-size: 12.5px;
}

/* ════════════════════════════════
   SCROLL REVEAL
════════════════════════════════ */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .55s ease, transform .55s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ════════════════════════════════
   RESPONSIVE — TABLET  (≤1024px)
════════════════════════════════ */
@media (max-width: 1024px) {

  /* Nav */
  .hamburger { display: flex; }
  .nav-cta-desktop { display: none; }
  .nav-cta-item { display: list-item; }
  .nav-overlay { display: block; pointer-events: none; }
  .nav-overlay.show { pointer-events: auto; }

  .nav-links {
    position: fixed; top: 0; right: -100%;
    width: min(300px, 80vw); height: 100vh;
    background: var(--white); flex-direction: column;
    align-items: flex-start; justify-content: center;
    gap: 0; padding: 80px 32px 32px;
    box-shadow: -8px 0 40px rgba(0,0,0,.12);
    transition: right .35s cubic-bezier(.4,0,.2,1);
    z-index: 180; overflow-y: auto;
  }
  .nav-links.open { right: 0; }
  .nav-links li { width: 100%; }
  .nav-links a {
    display: block; font-size: 16px; font-weight: 600;
    padding: 14px 0; border-bottom: 1px solid var(--border);
    color: var(--navy);
  }
  .nav-cta-item { border-bottom: none !important; padding-top: 20px; }
  .nav-cta-item .btn { width: 100%; text-align: center; padding: 13px; font-size: 15px; }

  /* Hero */
  .hero { gap: 30px; min-height: auto; padding-top: 60px; padding-bottom: 60px; }
  .hero-right { width: clamp(240px, 40vw, 360px); height: clamp(220px, 36vw, 340px); }

  /* Grids → 2-col */
  .services-grid     { grid-template-columns: repeat(2, 1fr); }
  .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
  .pricing-grid      { grid-template-columns: repeat(2, 1fr); }
  .price-card.featured { order: -1; grid-column: span 2; max-width: 400px; margin: 0 auto; width: 100%; }

  /* About stacks */
  .about { flex-direction: column; gap: 50px; }
  .about-left .section-tag,
  .about-left .section-title { text-align: center; }
  .about-left p { text-align: center; }
  .check-list { align-items: center; }
  .about-right { display: flex; justify-content: center; }
  .about-card { width: clamp(260px, 60vw, 380px); }

  /* Footer 2-col */
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

/* ════════════════════════════════
   RESPONSIVE — PHONE  (≤640px)
════════════════════════════════ */
@media (max-width: 640px) {

  /* Hero stacks vertically */
  .hero {
    flex-direction: column-reverse;
    text-align: center; gap: 36px;
    padding-top: 50px; padding-bottom: 50px;
  }
  .hero-left { max-width: 100%; }
  .hero p { max-width: 100%; margin-left: auto; margin-right: auto; }
  .hero-btns { justify-content: center; }
  .hero-right { width: 100%; max-width: 300px; height: 240px; margin: 0 auto; }

  /* Shapes scale down */
  .cube1 { width: 80px; height: 80px; top: 10px; left: 50px; }
  .cube2 { width: 58px; height: 58px; top: 90px; left: 150px; }
  .cube3 { width: 46px; height: 46px; top: 40px; left: 180px; }
  .orb1  { width: 65px; height: 65px; top: 150px; left: 30px; }
  .orb2  { width: 38px; height: 38px; top: 120px; left: 210px; }
  .orb3  { width: 25px; height: 25px; top: 20px; left: 12px; }

  /* Grids → 1-col */
  .services-grid     { grid-template-columns: 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
  .pricing-grid      { grid-template-columns: 1fr; }
  .price-card.featured { grid-column: span 1; max-width: 100%; }

  /* About centered */
  .check-list li { justify-content: flex-start; }

  /* Form full-width fields */
  .form-row { grid-template-columns: 1fr; }
  .contact-form .btn-orange { width: 100%; text-align: center; padding: 14px; }

  /* CTA */
  .hide-mobile { display: none; }
  .cta-section .btn-orange { width: 100%; max-width: 320px; text-align: center; padding: 15px; }

  /* Footer single col */
  .footer-grid { grid-template-columns: 1fr; gap: 30px; }
  .footer-brand p { max-width: 100%; }

  /* Section titles center */
  .about-left .section-tag,
  .about-left .section-title { text-align: center; }
}

/* ════════════════════════════════
   RESPONSIVE — SMALL PHONE (≤400px)
════════════════════════════════ */
@media (max-width: 400px) {
  .hero h1 { font-size: 28px; letter-spacing: -0.8px; }
  .hero-btns .btn { width: 100%; text-align: center; }
  .hero-btns { flex-direction: column; }
  .nav-logo { font-size: 17px; }
  .section-title { font-size: 22px; }
  .cta-section h2 { font-size: 24px; }
  .price-amount { font-size: 36px; }
}
