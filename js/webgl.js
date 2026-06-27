class ShaderBio {
  constructor(canvas, shaders) {
    this.canvas = canvas;
    this.shaders = shaders;
    this.mouse = { x: 0, y: 0 };
    this.smoothMouse = { x: 0, y: 0 };
    this.startTime = performance.now();
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
    });

    if (!gl) {
      throw new Error("WebGL2 is not supported in this browser.");
    }

    this.gl = gl;
    this.program = this.createProgram(shaders.vertex, shaders.fragment);
    this.uniforms = {
      resolution: gl.getUniformLocation(this.program, "u_resolution"),
      time: gl.getUniformLocation(this.program, "u_time"),
      mouse: gl.getUniformLocation(this.program, "u_mouse"),
      dpr: gl.getUniformLocation(this.program, "u_dpr"),
    };

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(this.program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    this.resize();
    this.bindEvents();
    this.raf = null;
  }

  createShader(type, source) {
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`Shader compile error: ${log}`);
    }
    return shader;
  }

  createProgram(vertexSrc, fragmentSrc) {
    const gl = this.gl;
    const vs = this.createShader(gl.VERTEX_SHADER, vertexSrc);
    const fs = this.createShader(gl.FRAGMENT_SHADER, fragmentSrc);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const log = gl.getProgramInfoLog(program);
      throw new Error(`Program link error: ${log}`);
    }
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    return program;
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(this.canvas.clientWidth * dpr);
    const h = Math.floor(this.canvas.clientHeight * dpr);
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
    this.dpr = dpr;
    this.gl.viewport(0, 0, w, h);
  }

  bindEvents() {
    const setMouse = (clientX, clientY) => {
      const rect = this.canvas.getBoundingClientRect();
      const dpr = this.dpr;
      this.mouse.x = (clientX - rect.left) * dpr;
      this.mouse.y = (rect.height - (clientY - rect.top)) * dpr;
    };

    window.addEventListener("pointermove", (e) => setMouse(e.clientX, e.clientY), { passive: true });
    window.addEventListener("resize", () => this.resize(), { passive: true });

    if (!this.reducedMotion) {
      setMouse(window.innerWidth * 0.5, window.innerHeight * 0.35);
    }
  }

  render() {
    const gl = this.gl;
    const t = (performance.now() - this.startTime) * 0.001;

    const lerp = this.reducedMotion ? 1 : 0.08;
    this.smoothMouse.x += (this.mouse.x - this.smoothMouse.x) * lerp;
    this.smoothMouse.y += (this.mouse.y - this.smoothMouse.y) * lerp;

    gl.useProgram(this.program);
    gl.uniform2f(this.uniforms.resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.uniforms.time, this.reducedMotion ? 0 : t);
    gl.uniform2f(this.uniforms.mouse, this.smoothMouse.x, this.smoothMouse.y);
    gl.uniform1f(this.uniforms.dpr, this.dpr);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  start() {
    const loop = () => {
      this.resize();
      this.render();
      this.raf = requestAnimationFrame(loop);
    };
    loop();
  }

  destroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
