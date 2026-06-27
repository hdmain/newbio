(function () {
  "use strict";

  I18n.init();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─── WebGL Shader Background ─── */
  const canvas = document.getElementById("shader-canvas");
  try {
    const renderer = new ShaderBio(canvas, SHADERS);
    renderer.start();
  } catch (err) {
    console.error(err);
    document.body.classList.add("fallback-bg");
    const hint = document.getElementById("footer-hint");
    if (hint) hint.textContent = I18n.t("footer.hintFallback");
  }

  /* ─── Star Field ─── */
  function createStars() {
    const container = document.getElementById("stars");
    if (!container || reducedMotion) return;

    const count = window.innerWidth < 768 ? 80 : 150;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty("--duration", `${2 + Math.random() * 4}s`);
      star.style.setProperty("--delay", `${Math.random() * 5}s`);
      star.style.setProperty("--peak", `${0.3 + Math.random() * 0.7}`);
      const size = Math.random() > 0.9 ? 3 : 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      fragment.appendChild(star);
    }

    container.appendChild(fragment);
  }

  /* ─── Floating Particles ─── */
  function createParticles() {
    const container = document.getElementById("particles");
    if (!container || reducedMotion) return;

    const count = window.innerWidth < 768 ? 15 : 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.setProperty("--duration", `${8 + Math.random() * 10}s`);
      particle.style.setProperty("--delay", `${Math.random() * 12}s`);
      particle.style.setProperty("--drift", `${-50 + Math.random() * 100}px`);
      particle.style.setProperty("--peak", `${0.2 + Math.random() * 0.5}`);
      fragment.appendChild(particle);
    }

    container.appendChild(fragment);
  }

  /* ─── Cursor Glow ─── */
  function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (!glow || reducedMotion || window.innerWidth < 768) return;

    let visible = false;

    document.addEventListener("pointermove", (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      if (!visible) {
        document.body.classList.add("cursor-active");
        visible = true;
      }
    }, { passive: true });

    document.addEventListener("pointerleave", () => {
      document.body.classList.remove("cursor-active");
      visible = false;
    });
  }

  /* ─── Header Scroll ─── */
  function initHeader() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ─── Mobile Navigation ─── */
  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const mobile = document.getElementById("nav-mobile");
    if (!toggle || !mobile) return;

    const close = () => {
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      mobile.classList.remove("open");
      mobile.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(isOpen));
      mobile.classList.toggle("open", isOpen);
      mobile.setAttribute("aria-hidden", String(!isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobile.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });
  }

  /* ─── Smooth Scroll ─── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      });
    });
  }

  /* ─── Scroll Reveal ─── */
  function initReveal() {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;

    if (reducedMotion) {
      elements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0;
            setTimeout(() => entry.target.classList.add("revealed"), Number(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ─── Parallax ─── */
  function initParallax() {
    if (reducedMotion) return;

    const items = document.querySelectorAll("[data-parallax]");
    if (!items.length) return;

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      items.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.05;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  /* ─── Counter Animation ─── */
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    const animate = (el) => {
      const target = parseInt(el.dataset.count, 10);
      if (reducedMotion) {
        el.textContent = target;
        return;
      }

      const duration = 2000;
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  /* ─── HUD Coordinates ─── */
  function initHud() {
    const coord = document.getElementById("hud-coord");
    if (!coord || reducedMotion) return;

    const update = () => {
      const x = (Math.sin(Date.now() * 0.0003) * 45 + 45).toFixed(3);
      const y = (Math.cos(Date.now() * 0.0004) * 45 + 45).toFixed(3);
      coord.textContent = `${x} · ${y}`;
      requestAnimationFrame(update);
    };

    update();
  }

  /* ─── Contact Form ─── */
  function initForm() {
    const form = document.getElementById("contact-form");
    const success = document.getElementById("form-success");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const text = btn.querySelector(".btn__text");

      text.textContent = I18n.t("contact.btnSending");
      btn.disabled = true;

      setTimeout(() => {
        text.textContent = I18n.t("contact.btnSubmit");
        btn.disabled = false;
        form.reset();
        if (success) {
          success.hidden = false;
          setTimeout(() => { success.hidden = true; }, 5000);
        }
      }, 1500);
    });
  }

  /* ─── Init ─── */
  createStars();
  createParticles();
  initCursorGlow();
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initReveal();
  initParallax();
  initCounters();
  initHud();
  initForm();
})();
