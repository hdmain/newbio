(function (global) {
  "use strict";

  const STORAGE_KEY = "hdmain-lang";

  const STRINGS = {
    en: {
      meta: {
        title: "HDMAIN — Open Source Tools · hdmain.eu",
        description: "HDMAIN — Open-source developer behind tcpraw, RSSHU, mdsys and CheapDeck. Free tools in Go, Rust and C++.",
        ogDescription: "Open Source Developer · Go · Rust · C++ · ESP32",
      },
      a11y: {
        nav: "Main navigation",
        navToggle: "Toggle menu",
        footerNav: "Footer navigation",
        langSwitch: "Language",
      },
      nav: {
        systems: "Projects",
        origin: "About",
        arsenal: "Stack",
        access: "Install",
        signals: "Highlights",
        connect: "Contact",
      },
      hero: {
        badge: "Signal Online · hdmain.eu",
        eyebrow: "Open Source Command Center",
        subtitle: "Open Source Developer · Go · Rust · C++ · ESP32",
        desc: "I build free, practical software — encrypted file transfer over TCP, a native SSH/SFTP client, a systemd TUI manager, and a DIY ESP32 Stream Deck. No subscriptions, no telemetry.",
        ctaContact: "Get in Touch",
        ctaExplore: "View Projects",
        statProjects: "Open Source Projects",
        statLangs: "Core Languages",
        statLicense: "License",
        statLicenseVal: "MIT",
        scroll: "Descend",
        hudCoord: "COORD",
        hudRender: "RUNTIME",
        hudRenderVal: "Go · Rust · C++",
      },
      features: {
        tag: "// Projects",
        title1: "Open Source",
        title2: "Repositories",
        desc: "Four free tools for file transfer, remote servers, Linux services, and stream control — built to solve real problems.",
        f1Title: "rawuploader (tcpraw)",
        f1Text: "Secure TCP file transfer with 6-digit codes. Client-side AES-256-GCM encryption — servers store only ciphertext. LAN mode, secure send, browser download, and apt install on Linux.",
        f1Repo: "github.com/hdmain/rawuploader →",
        f2Title: "RSSHU",
        f2Text: "Cross-platform SSH & SFTP desktop client built with Tauri 2, React, and Rust. Encrypted local vault, integrated terminal, SFTP browser, and optional GitHub Gist sync.",
        f2Repo: "github.com/hdmain/rsshu →",
        f3Title: "mdsys",
        f3Text: "Terminal UI manager for systemd services on Linux and WSL. Browse, start, stop, restart, pin services, and register binaries as units with a single command.",
        f3Repo: "github.com/hdmain/mdsys →",
        f4Title: "CheapDeck",
        f4Text: "DIY Stream Deck alternative on ESP32 with a touchscreen. Customizable buttons, key mapping, auto-discovery, Python API, and an Electron configuration app.",
        f4Repo: "github.com/hdmain/CheapDeck →",
      },
      about: {
        status: "STATUS: ACTIVE",
        class: "CLASS: OPEN SOURCE DEV",
        tag: "// About",
        title1: "Built in the",
        title2: "Crimson Void",
        text1: "I'm hdmain — I create free open-source tools for developers and power users. From encrypted CLI file transfer to native desktop apps and embedded hardware, every project ships with install scripts and real-world usability.",
        text2: "All repositories are MIT-licensed, published on GitHub, and designed to work without accounts or paid services. Linux packages via apt, dnf, and pacman where it makes sense.",
      },
      capabilities: {
        tag: "// Stack",
        title1: "Tech",
        title2: "Constellation",
        stack: "STACK",
      },
      pricing: {
        tag: "// Install",
        title1: "Quick",
        title2: "Deploy",
        desc: "Get any project running in minutes — pre-built packages, install scripts, or GitHub Releases.",
        badge: "Recommended",
        rawTitle: "tcpraw",
        rawPlatform: "Linux · Windows",
        rawF1: "apt install tcpraw (Debian/Ubuntu)",
        rawF2: "curl install.sh | bash (Linux)",
        rawF3: "irm install-win.ps1 | iex (Windows)",
        rawF4: "Go 1.21+ to build from source",
        rsshuTitle: "RSSHU",
        rsshuPlatform: "Linux · Windows",
        rsshuF1: "Download .AppImage / .msi from Releases",
        rsshuF2: "npm install && npm run tauri -- dev",
        rsshuF3: "npm run tauri -- build for installer",
        rsshuF4: "Requires Node.js LTS + Rust toolchain",
        mdsysTitle: "mdsys",
        mdsysPlatform: "Linux · WSL",
        mdsysF1: "apt install mdsys (Debian/Ubuntu)",
        mdsysF2: "dnf install mdsys (Fedora/RHEL)",
        mdsysF3: "pacman -S mdsys (Arch)",
        mdsysF4: "cmake build from source",
        cheapTitle: "CheapDeck",
        cheapPlatform: "ESP32 · PC",
        cheapF1: "Flash firmware via Web Flasher (Chrome/Edge)",
        cheapF2: "Configure WiFi during flash",
        cheapF3: "Python API + Electron desktop app",
        cheapF4: "ESP32 + TFT touch display required",
        btnGithub: "View on GitHub",
        btnReleases: "Download Releases",
      },
      testimonials: {
        tag: "// Highlights",
        title1: "Key",
        title2: "Features",
        h1Title: "rawuploader",
        h1Text: "6-digit codes generated on the client. AES-256-GCM encryption before upload. Secure send with a 256-bit key the server never sees. SHA256 checksums and optional long-term storage.",
        h1Meta: "Go · CLI · TCP",
        h2Title: "RSSHU",
        h2Text: "Encrypted credential vault with Argon2 + AES-GCM. Full SSH terminal and SFTP file browser in one native app. Sync hosts across machines via private GitHub Gist — free, no telemetry.",
        h2Meta: "Tauri 2 · Rust · React",
        h3Title: "mdsys",
        h3Text: "Keyboard-driven TUI for system and user systemd units. Pin services, view RAM usage, open journalctl logs, and register any binary as a service with one command.",
        h3Meta: "C++ · ncurses · systemd",
        h4Title: "CheapDeck",
        h4Text: "Touch-enabled macro pad on cheap ESP32 hardware. Drag-and-drop key mapping, color themes, system info mode, and auto-discovery — a Stream Deck alternative you can build yourself.",
        h4Meta: "ESP32 · Python · Electron",
      },
      contact: {
        tag: "// Contact",
        title1: "Open a",
        title2: "Channel",
        desc: "Questions, bug reports, or ideas for any project? Send a message or open an issue on GitHub.",
        labelName: "Name",
        labelEmail: "Email",
        labelMission: "Project",
        labelMessage: "Message",
        placeholderName: "Your name",
        placeholderEmail: "you@domain.com",
        placeholderMessage: "Your message...",
        optRaw: "rawuploader / tcpraw",
        optRsshu: "RSSHU",
        optMdsys: "mdsys",
        optCheap: "CheapDeck",
        optOther: "Other / General",
        btnSubmit: "Send Message",
        btnSending: "Sending...",
        success: "Message received. I'll get back to you soon.",
      },
      footer: {
        tagline: "Free tools. Open source. Built for developers.",
        rights: "All rights reserved.",
        hint: "Move cursor to disturb the nebula field",
        hintFallback: "WebGL unavailable — static nebula fallback active",
      },
    },
    pl: {
      meta: {
        title: "HDMAIN — Narzędzia Open Source · hdmain.eu",
        description: "HDMAIN — Twórca open source: tcpraw, RSSHU, mdsys i CheapDeck. Darmowe narzędzia w Go, Rust i C++.",
        ogDescription: "Developer Open Source · Go · Rust · C++ · ESP32",
      },
      a11y: {
        nav: "Główne menu",
        navToggle: "Przełącz menu",
        footerNav: "Menu stopki",
        langSwitch: "Język",
      },
      nav: {
        systems: "Projekty",
        origin: "O mnie",
        arsenal: "Stack",
        access: "Instalacja",
        signals: "Cechy",
        connect: "Kontakt",
      },
      hero: {
        badge: "Sygnał Online · hdmain.eu",
        eyebrow: "Centrum Dowodzenia Open Source",
        subtitle: "Developer Open Source · Go · Rust · C++ · ESP32",
        desc: "Tworzę darmowe, praktyczne oprogramowanie — szyfrowany transfer plików przez TCP, natywny klient SSH/SFTP, menedżer systemd w TUI i DIY Stream Deck na ESP32. Bez subskrypcji i telemetrii.",
        ctaContact: "Napisz do mnie",
        ctaExplore: "Zobacz Projekty",
        statProjects: "Projektów Open Source",
        statLangs: "Języków",
        statLicense: "Licencja",
        statLicenseVal: "MIT",
        scroll: "Zejdź",
        hudCoord: "WSPÓŁ",
        hudRender: "RUNTIME",
        hudRenderVal: "Go · Rust · C++",
      },
      features: {
        tag: "// Projekty",
        title1: "Repozytoria",
        title2: "Open Source",
        desc: "Cztery darmowe narzędzia do transferu plików, zdalnych serwerów, usług Linux i sterowania streamem — zbudowane dla realnych potrzeb.",
        f1Title: "rawuploader (tcpraw)",
        f1Text: "Bezpieczny transfer plików przez TCP z 6-cyfrowymi kodami. Szyfrowanie AES-256-GCM po stronie klienta — serwery przechowują tylko zaszyfrowane dane. Tryb LAN, secure send, pobieranie w przeglądarce i instalacja apt na Linuxie.",
        f1Repo: "github.com/hdmain/rawuploader →",
        f2Title: "RSSHU",
        f2Text: "Wieloplatformowy klient SSH i SFTP na Tauri 2, React i Rust. Zaszyfrowany lokalny vault, terminal, przeglądarka SFTP i opcjonalna synchronizacja przez GitHub Gist.",
        f2Repo: "github.com/hdmain/rsshu →",
        f3Title: "mdsys",
        f3Text: "Menedżer usług systemd w terminalu dla Linuxa i WSL. Przeglądaj, uruchamiaj, zatrzymuj, restartuj i przypinaj usługi — rejestruj binarki jako unit jedną komendą.",
        f3Repo: "github.com/hdmain/mdsys →",
        f4Title: "CheapDeck",
        f4Text: "DIY alternatywa Stream Deck na ESP32 z ekranem dotykowym. Konfigurowalne przyciski, mapowanie klawiszy, auto-discovery, API w Pythonie i aplikacja Electron.",
        f4Repo: "github.com/hdmain/CheapDeck →",
      },
      about: {
        status: "STATUS: AKTYWNY",
        class: "KLASA: OPEN SOURCE DEV",
        tag: "// O mnie",
        title1: "Zbudowane w",
        title2: "Karmazynowej Pustce",
        text1: "Jestem hdmain — tworzę darmowe narzędzia open source dla developerów i power userów. Od szyfrowanego CLI do transferu plików, przez natywne aplikacje desktopowe, po embedded hardware — każdy projekt ma skrypty instalacyjne i realną użyteczność.",
        text2: "Wszystkie repozytoria są na licencji MIT, publikowane na GitHubie i działają bez kont i płatnych usług. Pakiety Linux przez apt, dnf i pacman tam, gdzie to ma sens.",
      },
      capabilities: {
        tag: "// Stack",
        title1: "Tech",
        title2: "Konstelacja",
        stack: "STACK",
      },
      pricing: {
        tag: "// Instalacja",
        title1: "Szybki",
        title2: "Start",
        desc: "Uruchom dowolny projekt w kilka minut — gotowe pakiety, skrypty instalacyjne lub GitHub Releases.",
        badge: "Polecane",
        rawTitle: "tcpraw",
        rawPlatform: "Linux · Windows",
        rawF1: "apt install tcpraw (Debian/Ubuntu)",
        rawF2: "curl install.sh | bash (Linux)",
        rawF3: "irm install-win.ps1 | iex (Windows)",
        rawF4: "Go 1.21+ do budowy ze źródeł",
        rsshuTitle: "RSSHU",
        rsshuPlatform: "Linux · Windows",
        rsshuF1: "Pobierz .AppImage / .msi z Releases",
        rsshuF2: "npm install && npm run tauri -- dev",
        rsshuF3: "npm run tauri -- build — installer",
        rsshuF4: "Wymaga Node.js LTS + Rust",
        mdsysTitle: "mdsys",
        mdsysPlatform: "Linux · WSL",
        mdsysF1: "apt install mdsys (Debian/Ubuntu)",
        mdsysF2: "dnf install mdsys (Fedora/RHEL)",
        mdsysF3: "pacman -S mdsys (Arch)",
        mdsysF4: "cmake build ze źródeł",
        cheapTitle: "CheapDeck",
        cheapPlatform: "ESP32 · PC",
        cheapF1: "Flash firmware przez Web Flasher (Chrome/Edge)",
        cheapF2: "Konfiguracja WiFi podczas flashowania",
        cheapF3: "API Python + aplikacja Electron",
        cheapF4: "Wymaga ESP32 + wyświetlacz TFT",
        btnGithub: "Zobacz na GitHubie",
        btnReleases: "Pobierz Releases",
      },
      testimonials: {
        tag: "// Cechy",
        title1: "Kluczowe",
        title2: "Funkcje",
        h1Title: "rawuploader",
        h1Text: "6-cyfrowe kody generowane na kliencie. Szyfrowanie AES-256-GCM przed wysłaniem. Secure send z 256-bitowym kluczem, którego serwer nie zna. Sumy SHA256 i opcjonalne długoterminowe przechowywanie.",
        h1Meta: "Go · CLI · TCP",
        h2Title: "RSSHU",
        h2Text: "Zaszyfrowany vault haseł z Argon2 + AES-GCM. Pełny terminal SSH i przeglądarka SFTP w jednej natywnej aplikacji. Synchronizacja hostów przez prywatny GitHub Gist — za darmo, bez telemetrii.",
        h2Meta: "Tauri 2 · Rust · React",
        h3Title: "mdsys",
        h3Text: "TUI sterowane klawiaturą dla usług systemowych i użytkownika. Przypinaj usługi, sprawdzaj RAM, otwieraj logi journalctl i rejestruj binarki jako usługi jedną komendą.",
        h3Meta: "C++ · ncurses · systemd",
        h4Title: "CheapDeck",
        h4Text: "Panel makr z ekranem dotykowym na tanim ESP32. Mapowanie klawiszy drag-and-drop, motywy kolorystyczne, tryb info systemu i auto-discovery — alternatywa Stream Deck do samodzielnego złożenia.",
        h4Meta: "ESP32 · Python · Electron",
      },
      contact: {
        tag: "// Kontakt",
        title1: "Otwórz",
        title2: "Kanał",
        desc: "Pytania, zgłoszenia błędów lub pomysły na którykolwiek projekt? Wyślij wiadomość lub otwórz issue na GitHubie.",
        labelName: "Imię",
        labelEmail: "E-mail",
        labelMission: "Projekt",
        labelMessage: "Wiadomość",
        placeholderName: "Twoje imię",
        placeholderEmail: "ty@domena.pl",
        placeholderMessage: "Twoja wiadomość...",
        optRaw: "rawuploader / tcpraw",
        optRsshu: "RSSHU",
        optMdsys: "mdsys",
        optCheap: "CheapDeck",
        optOther: "Inne / Ogólne",
        btnSubmit: "Wyślij Wiadomość",
        btnSending: "Wysyłanie...",
        success: "Wiadomość odebrana. Odezwę się wkrótce.",
      },
      footer: {
        tagline: "Darmowe narzędzia. Open source. Dla developerów.",
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
