# Red Galaxy — Premium Bio Platform

https://hdmain.github.io/newbio/

A cinematic personal platform with a **Red Galaxy** aesthetic — WebGL2 + GLSL nebula background, glassmorphic UI, neon red glows, and luxury sci-fi interactions. Static files only — works on **GitHub Pages** with no build step.

## Local preview

```bash
cd newbio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## GitHub Pages

1. Create a repo (e.g. `username.github.io` for a user site, or any repo for a project site).
2. Push this folder to the repo root (or to `/docs` if you use that source).
3. In **Settings → Pages**, set source to the branch/folder with `index.html`.
4. Wait a minute — your site will be live at `https://<user>.github.io` (or `.../repo-name/`).

## Customize

Edit `index.html` for your name, bio text, tags, links, pricing tiers, and testimonials.

Shader colors and nebula effects live in `js/shaders.js`. Rendering logic is in `js/webgl.js`. UI interactions (parallax, scroll reveal, particles) are in `js/main.js`.
