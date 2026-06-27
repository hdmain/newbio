# Red Galaxy — Premium Bio Platform

**Live:** [https://hdmain.eu](https://hdmain.eu)  
**GitHub Pages:** [https://hdmain.github.io/newbio/](https://hdmain.github.io/newbio/)

A cinematic personal platform with a **Red Galaxy** aesthetic — WebGL2 + GLSL nebula background, glassmorphic UI, neon red glows, and luxury sci-fi interactions. Static files only — works on **GitHub Pages** with no build step.

## Local preview

```bash
cd newbio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## GitHub Pages

1. Push this folder to [github.com/hdmain/newbio](https://github.com/hdmain/newbio).
2. In **Settings → Pages**, set source to the branch/folder with `index.html`.
3. The site is available at `https://hdmain.github.io/newbio/`.

### Custom domain (hdmain.eu)

1. In **Settings → Pages → Custom domain**, enter `hdmain.eu`.
2. At your DNS provider, add:
   - **A records** pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a **CNAME** for `www` → `hdmain.github.io` (if using `www.hdmain.eu`)
3. Enable **Enforce HTTPS** once DNS propagates.

## Customize

Edit `index.html` for personal details and links. Project copy lives in `js/i18n.js` (EN/PL).

Shader colors and nebula effects live in `js/shaders.js`. Rendering logic is in `js/webgl.js`. UI interactions (parallax, scroll reveal, particles) are in `js/main.js`. Translations (PL/EN) are in `js/i18n.js` — language auto-detects from the browser and can be switched via the header toggle; choice is saved in `localStorage`.
