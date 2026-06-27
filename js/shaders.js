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

    // Hash & noise helpers
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
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
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = rot * p * 2.02 + 0.11;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
      float t = u_time * 0.18;

      vec2 mouse = (u_mouse - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
      float dist = length(uv - mouse);
      float ripple = sin(dist * 18.0 - t * 6.0) * exp(-dist * 3.2) * 0.35;

      vec2 flow = uv;
      flow += vec2(
        fbm(uv * 1.8 + vec2(t, 0.0)),
        fbm(uv * 1.8 + vec2(0.0, t))
      ) * 0.55;
      flow += normalize(uv - mouse + 0.001) * ripple;

      float n1 = fbm(flow * 2.1 + t);
      float n2 = fbm(flow * 3.4 - t * 0.7 + n1);
      float field = smoothstep(0.15, 0.95, n1 * 0.65 + n2 * 0.45 + ripple);

      vec3 deep = vec3(0.03, 0.04, 0.09);
      vec3 cyan = vec3(0.18, 0.72, 0.82);
      vec3 rose = vec3(0.78, 0.38, 0.52);
      vec3 gold = vec3(0.92, 0.72, 0.38);

      vec3 col = mix(deep, cyan, smoothstep(0.2, 0.75, field));
      col = mix(col, rose, smoothstep(0.45, 0.9, n2) * 0.7);
      col = mix(col, gold, pow(max(0.0, ripple + 0.15), 2.0) * 0.5);

      float vignette = 1.0 - dot(uv * 0.85, uv * 0.85);
      col *= 0.55 + 0.45 * vignette;

      float grain = hash(gl_FragCoord.xy + t) * 0.04;
      col += grain;

      outColor = vec4(col, 1.0);
    }
  `,
};
