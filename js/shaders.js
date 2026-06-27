const SHADERS = {
  vertex: `#version 300 es
    in vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,

  fragment: `#version 300 es
    precision highp float;

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform float u_dpr;

    out vec4 outColor;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float hash1(float n) {
      return fract(sin(n) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
      for (int i = 0; i < 6; i++) {
        v += a * noise(p);
        p = rot * p * 2.02 + 0.11;
        a *= 0.5;
      }
      return v;
    }

    float stars(vec2 uv, float t) {
      vec2 gv = fract(uv) - 0.5;
      vec2 id = floor(uv);
      float n = hash(id);
      float size = 0.003 + n * 0.004;
      float d = length(gv);
      float twinkle = sin(t * (2.0 + n * 4.0) + n * 6.28) * 0.5 + 0.5;
      float star = smoothstep(size, size * 0.2, d) * twinkle;
      return star * step(0.92, n);
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
      float t = u_time * 0.15;

      vec2 mouse = (u_mouse - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
      float dist = length(uv - mouse);
      float ripple = sin(dist * 20.0 - t * 8.0) * exp(-dist * 2.8) * 0.4;
      float warp = exp(-dist * 1.5) * 0.15;

      vec2 flow = uv;
      flow += vec2(
        fbm(uv * 1.6 + vec2(t * 0.3, 0.0)),
        fbm(uv * 1.6 + vec2(0.0, t * 0.25))
      ) * 0.6;
      flow += normalize(uv - mouse + 0.001) * (ripple + warp);

      float n1 = fbm(flow * 2.0 + t);
      float n2 = fbm(flow * 3.2 - t * 0.6 + n1 * 0.5);
      float n3 = fbm(flow * 1.4 + t * 0.4);
      float nebula = smoothstep(0.1, 0.9, n1 * 0.55 + n2 * 0.35 + n3 * 0.2);

      // Red galaxy palette
      vec3 voidCol = vec3(0.02, 0.0, 0.01);
      vec3 deepBurgundy = vec3(0.12, 0.01, 0.04);
      vec3 burgundy = vec3(0.35, 0.03, 0.1);
      vec3 crimson = vec3(0.75, 0.05, 0.15);
      vec3 neonRed = vec3(1.0, 0.08, 0.22);
      vec3 ember = vec3(1.0, 0.35, 0.2);

      vec3 col = mix(voidCol, deepBurgundy, smoothstep(0.0, 0.4, nebula));
      col = mix(col, burgundy, smoothstep(0.2, 0.6, n2));
      col = mix(col, crimson, smoothstep(0.35, 0.75, nebula) * 0.8);
      col = mix(col, neonRed, smoothstep(0.55, 0.95, n1) * smoothstep(0.4, 0.8, n2) * 0.5);
      col = mix(col, ember, pow(max(0.0, ripple + 0.1), 2.0) * 0.6);

      // Star field
      float starLayer = 0.0;
      starLayer += stars(uv * 80.0 + t * 0.02, t);
      starLayer += stars(uv * 120.0 - t * 0.01, t + 1.0) * 0.7;
      starLayer += stars(uv * 200.0, t + 2.0) * 0.4;
      col += vec3(1.0, 0.85, 0.9) * starLayer * 0.8;

      // Cosmic dust
      float dust = fbm(uv * 8.0 + t * 0.1) * 0.03;
      col += vec3(0.8, 0.1, 0.2) * dust;

      // Vignette
      float vignette = 1.0 - dot(uv * 0.75, uv * 0.75);
      col *= 0.5 + 0.5 * vignette;

      // Film grain
      float grain = hash(gl_FragCoord.xy + t) * 0.035;
      col += grain;

      outColor = vec4(col, 1.0);
    }
  `,
};
