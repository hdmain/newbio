(function (global) {
  "use strict";

  const STORAGE_KEY = "hdmain-lang";

  const STRINGS = {
    en: {
      meta: {
        title: "HDMAIN — Red Galaxy · hdmain.eu",
        description: "HDMAIN — Creative Developer crafting immersive red-galaxy digital experiences at hdmain.eu",
        ogDescription: "Creative Developer · Shader Architect · Immersive Experience Designer",
      },
      a11y: {
        nav: "Main navigation",
        navToggle: "Toggle menu",
        footerNav: "Footer navigation",
        langSwitch: "Language",
      },
      nav: {
        systems: "Systems",
        origin: "Origin",
        arsenal: "Arsenal",
        access: "Access",
        signals: "Signals",
        connect: "Connect",
      },
      hero: {
        badge: "Signal Online · hdmain.eu",
        eyebrow: "Welcome to the Red Galaxy",
        subtitle: "Creative Developer · Shader Architect · Immersive Experience Designer",
        desc: "I engineer cinematic web realities at the intersection of WebGL, GLSL, and luxury interaction design. Every pixel is a star in a crafted universe.",
        ctaContact: "Initiate Contact",
        ctaExplore: "Explore Systems",
        statProjects: "Projects Launched",
        statYears: "Years in Orbit",
        statSatisfaction: "Client Satisfaction",
        scroll: "Descend",
        hudCoord: "COORD",
        hudRender: "RENDER",
      },
      features: {
        tag: "// Systems",
        title1: "Core",
        title2: "Capabilities",
        desc: "Precision-engineered modules for building next-generation digital experiences in the red spectrum.",
        f1Title: "WebGL Engines",
        f1Text: "Custom real-time rendering pipelines with shader-driven visuals, particle systems, and GPU-accelerated animations that breathe life into the void.",
        f2Title: "GLSL Shaders",
        f2Text: "Procedural nebula fields, distortion effects, and cinematic post-processing crafted in pure shader language.",
        f3Title: "Luxury UI",
        f3Text: "Glassmorphic interfaces with neon accents, micro-interactions, and responsive architectures built for premium brands.",
        f4Title: "Creative Coding",
        f4Text: "Generative art, interactive installations, and experimental web experiences that push beyond conventional boundaries.",
        f5Title: "Performance Architecture",
        f5Text: "Optimized delivery pipelines ensuring 60fps experiences across devices — from flagship workstations to mobile terminals in deep space.",
      },
      about: {
        status: "STATUS: ACTIVE",
        class: "CLASS: CREATIVE DEV",
        tag: "// Origin",
        title1: "Forged in the",
        title2: "Crimson Void",
        text1: "I build immersive web experiences with WebGL, GLSL, and thoughtful interaction design. This platform runs entirely in the browser — a living red galaxy behind a luxury interface.",
        text2: "My mission is to transform static pages into cinematic journeys. Every project is an expedition through uncharted digital space, where code becomes cosmos and interfaces feel like command centers of the future.",
      },
      capabilities: {
        tag: "// Arsenal",
        title1: "Tech",
        title2: "Constellation",
        stack: "STACK",
      },
      pricing: {
        tag: "// Access",
        title1: "Mission",
        title2: "Clearance",
        desc: "Select your engagement tier. Every package includes premium delivery and red-galaxy-grade craftsmanship.",
        period: "/project",
        scout: "Scout",
        commander: "Commander",
        admiral: "Admiral",
        badge: "Most Deployed",
        scoutF1: "Landing page with shader background",
        scoutF2: "Responsive glass UI design",
        scoutF3: "Basic scroll animations",
        scoutF4: "2 revision cycles",
        scoutF5: "7-day delivery",
        cmdF1: "Full immersive web experience",
        cmdF2: "Custom WebGL / GLSL shaders",
        cmdF3: "Advanced interactions & parallax",
        cmdF4: "Performance optimization",
        cmdF5: "5 revision cycles",
        cmdF6: "21-day delivery",
        admF1: "Enterprise-grade platform",
        admF2: "Real-time 3D environments",
        admF3: "Full creative direction",
        admF4: "Ongoing support retainer",
        admF5: "Unlimited revisions",
        admF6: "Custom timeline",
        btnRequest: "Request Access",
        btnMission: "Initiate Mission",
        btnChannel: "Open Channel",
      },
      testimonials: {
        tag: "// Signals",
        title1: "Transmissions",
        title2: "Received",
        q1: "\"The shader work alone redefined our brand presence. It feels like stepping into a sci-fi command center — our conversion rate jumped 40% in the first month.\"",
        r1: "CEO, Stellar Dynamics",
        q2: "\"Every interaction feels intentional and luxurious. The attention to performance while delivering cinematic visuals is unmatched in the industry.\"",
        r2: "Creative Director, Nova Labs",
        q3: "\"We needed something that didn't exist yet. The result was a fully custom WebGL universe that our users still talk about months after launch.\"",
        r3: "Founder, Redshift Ventures",
      },
      contact: {
        tag: "// Connect",
        title1: "Open a",
        title2: "Channel",
        desc: "Ready to launch your next mission? Transmit your coordinates and I'll respond within 24 hours.",
        labelName: "Designation",
        labelEmail: "Frequency",
        labelMission: "Mission Brief",
        labelMessage: "Transmission",
        placeholderName: "Your name",
        placeholderEmail: "you@domain.com",
        placeholderMessage: "Describe your vision...",
        optScout: "Scout — Landing Page",
        optCommander: "Commander — Full Experience",
        optAdmiral: "Admiral — Enterprise Platform",
        optOther: "Custom Mission",
        btnSubmit: "Transmit Message",
        btnSending: "Transmitting...",
        success: "Transmission received. I'll respond within 24 hours.",
      },
      footer: {
        tagline: "Forged in the crimson void. Built for the future.",
        rights: "All rights reserved.",
        hint: "Move cursor to disturb the nebula field",
        hintFallback: "WebGL unavailable — static nebula fallback active",
      },
    },
    pl: {
      meta: {
        title: "HDMAIN — Czerwona Galaktyka · hdmain.eu",
        description: "HDMAIN — Kreatywny developer tworzący immersyjne doświadczenia w estetyce czerwonej galaktyki na hdmain.eu",
        ogDescription: "Kreatywny Developer · Architekt Shaderów · Projektant Doświadczeń Immersyjnych",
      },
      a11y: {
        nav: "Główne menu",
        navToggle: "Przełącz menu",
        footerNav: "Menu stopki",
        langSwitch: "Język",
      },
      nav: {
        systems: "Systemy",
        origin: "Pochodzenie",
        arsenal: "Arsenał",
        access: "Dostęp",
        signals: "Sygnały",
        connect: "Kontakt",
      },
      hero: {
        badge: "Sygnał Online · hdmain.eu",
        eyebrow: "Witaj w Czerwonej Galaktyce",
        subtitle: "Kreatywny Developer · Architekt Shaderów · Projektant Doświadczeń Immersyjnych",
        desc: "Tworzę kinowe rzeczywistości webowe na styku WebGL, GLSL i luksusowego designu interakcji. Każdy piksel to gwiazda w stworzonym wszechświecie.",
        ctaContact: "Nawiąż Kontakt",
        ctaExplore: "Odkryj Systemy",
        statProjects: "Uruchomionych Projektów",
        statYears: "Lat na Orbicie",
        statSatisfaction: "Satysfakcji Klientów",
        scroll: "Zejdź",
        hudCoord: "WSPÓŁ",
        hudRender: "RENDER",
      },
      features: {
        tag: "// Systemy",
        title1: "Kluczowe",
        title2: "Możliwości",
        desc: "Precyzyjnie zaprojektowane moduły do budowy cyfrowych doświadczeń nowej generacji w czerwonym spektrum.",
        f1Title: "Silniki WebGL",
        f1Text: "Niestandardowe potoki renderowania w czasie rzeczywistym z wizualizacjami opartymi na shaderach, systemami cząsteczek i animacjami GPU, które ożywiają pustkę.",
        f2Title: "Shadery GLSL",
        f2Text: "Proceduralne pola mgławic, efekty zniekształceń i kinowe post-processing stworzone w czystym języku shaderów.",
        f3Title: "Luksusowy UI",
        f3Text: "Interfejsy glassmorphic z neonowymi akcentami, mikrointerakcjami i responsywną architekturą dla marek premium.",
        f4Title: "Creative Coding",
        f4Text: "Sztuka generatywna, instalacje interaktywne i eksperymentalne doświadczenia webowe wykraczające poza konwencje.",
        f5Title: "Architektura Wydajności",
        f5Text: "Zoptymalizowane potoki dostarczania zapewniające 60 fps na wszystkich urządzeniach — od stacji roboczych po mobilne terminale w głębokiej przestrzeni.",
      },
      about: {
        status: "STATUS: AKTYWNY",
        class: "KLASA: CREATIVE DEV",
        tag: "// Pochodzenie",
        title1: "Wykuty w",
        title2: "Karmazynowej Pustce",
        text1: "Tworzę immersyjne doświadczenia webowe z WebGL, GLSL i przemyślanym designem interakcji. Ta platforma działa w całości w przeglądarce — żywa czerwona galaktyka za luksusowym interfejsem.",
        text2: "Moją misją jest przekształcanie statycznych stron w kinowe podróże. Każdy projekt to ekspedycja przez niezbadaną cyfrową przestrzeń, gdzie kod staje się kosmosem, a interfejsy przypominają centra dowodzenia przyszłości.",
      },
      capabilities: {
        tag: "// Arsenał",
        title1: "Tech",
        title2: "Konstelacja",
        stack: "STACK",
      },
      pricing: {
        tag: "// Dostęp",
        title1: "Poziom",
        title2: "Dostępu",
        desc: "Wybierz poziom współpracy. Każdy pakiet obejmuje premium delivery i rzemiosło klasy red-galaxy.",
        period: "/projekt",
        scout: "Scout",
        commander: "Commander",
        admiral: "Admiral",
        badge: "Najczęściej Wybierany",
        scoutF1: "Landing page z tłem shaderowym",
        scoutF2: "Responsywny glass UI",
        scoutF3: "Podstawowe animacje scroll",
        scoutF4: "2 rundy poprawek",
        scoutF5: "Dostawa w 7 dni",
        cmdF1: "Pełne immersyjne doświadczenie webowe",
        cmdF2: "Niestandardowe shadery WebGL / GLSL",
        cmdF3: "Zaawansowane interakcje i parallax",
        cmdF4: "Optymalizacja wydajności",
        cmdF5: "5 rund poprawek",
        cmdF6: "Dostawa w 21 dni",
        admF1: "Platforma klasy enterprise",
        admF2: "Środowiska 3D w czasie rzeczywistym",
        admF3: "Pełne creative direction",
        admF4: "Retainer wsparcia",
        admF5: "Nieograniczone poprawki",
        admF6: "Indywidualny harmonogram",
        btnRequest: "Poproś o Dostęp",
        btnMission: "Rozpocznij Misję",
        btnChannel: "Otwórz Kanał",
      },
      testimonials: {
        tag: "// Sygnały",
        title1: "Odebrane",
        title2: "Transmisje",
        q1: "\"Sama praca nad shaderami na nowo zdefiniowała naszą markę. To jak wejście do centrum dowodzenia sci-fi — konwersja wzrosła o 40% w pierwszym miesiącu.\"",
        r1: "CEO, Stellar Dynamics",
        q2: "\"Każda interakcja jest przemyślana i luksusowa. Dbałość o wydajność przy kinowych wizualizacjach jest niezrównana w branży.\"",
        r2: "Dyrektor Kreatywny, Nova Labs",
        q3: "\"Potrzebowaliśmy czegoś, co jeszcze nie istniało. Efekt to w pełni customowy wszechświat WebGL, o którym użytkownicy mówią miesiącami po premierze.\"",
        r3: "Założyciel, Redshift Ventures",
      },
      contact: {
        tag: "// Kontakt",
        title1: "Otwórz",
        title2: "Kanał",
        desc: "Gotowy na kolejną misję? Prześlij swoje współrzędne — odpowiem w ciągu 24 godzin.",
        labelName: "Oznaczenie",
        labelEmail: "Częstotliwość",
        labelMission: "Brief Misji",
        labelMessage: "Transmisja",
        placeholderName: "Twoje imię",
        placeholderEmail: "ty@domena.pl",
        placeholderMessage: "Opisz swoją wizję...",
        optScout: "Scout — Landing Page",
        optCommander: "Commander — Pełne Doświadczenie",
        optAdmiral: "Admiral — Platforma Enterprise",
        optOther: "Misja Niestandardowa",
        btnSubmit: "Wyślij Wiadomość",
        btnSending: "Wysyłanie...",
        success: "Transmisja odebrana. Odpowiem w ciągu 24 godzin.",
      },
      footer: {
        tagline: "Wykuty w karmazynowej pustce. Zbudowany na przyszłość.",
        rights: "Wszelkie prawa zastrzeżone.",
        hint: "Porusz kursorem, aby zaburzyć pole mgławicy",
        hintFallback: "WebGL niedostępny — aktywny statyczny fallback mgławicy",
      },
    },
  };

  function getNested(obj, key) {
    return key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");
    if (fromUrl === "en" || fromUrl === "pl") return fromUrl;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pl") return stored;

    const langs = navigator.languages || [navigator.language || "en"];
    for (const lang of langs) {
      if (lang.toLowerCase().startsWith("pl")) return "pl";
    }
    return "en";
  }

  const I18n = {
    lang: "en",

    t(key) {
      const val = getNested(STRINGS[this.lang], key);
      if (val === null) return getNested(STRINGS.en, key) || key;
      return val;
    },

    setLanguage(lang) {
      if (lang !== "en" && lang !== "pl") return;
      this.lang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
      document.documentElement.dataset.lang = lang;

      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);

      this.apply();
      this.updateSwitcher();
      document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
    },

    apply() {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = this.t(el.dataset.i18n);
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        el.placeholder = this.t(el.dataset.i18nPlaceholder);
      });

      document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        el.setAttribute("aria-label", this.t(el.dataset.i18nAria));
      });

      document.title = this.t("meta.title");

      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = this.t("meta.description");

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = this.t("meta.ogDescription");

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = this.t("meta.title");
    },

    updateSwitcher() {
      document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
        const isActive = btn.dataset.langBtn === this.lang;
        btn.classList.toggle("lang-switch__btn--active", isActive);
        btn.setAttribute("aria-pressed", String(isActive));
      });
    },

    initSwitcher() {
      document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.setLanguage(btn.dataset.langBtn);
        });
      });
      this.updateSwitcher();
    },

    init() {
      this.lang = detectLanguage();
      document.documentElement.lang = this.lang;
      document.documentElement.dataset.lang = this.lang;
      this.apply();
      this.initSwitcher();
    },
  };

  global.I18n = I18n;
  global.I18N_STRINGS = STRINGS;
})(window);
