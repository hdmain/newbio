(function () {
  const canvas = document.getElementById("shader-canvas");

  try {
    const renderer = new ShaderBio(canvas, SHADERS);
    renderer.start();
  } catch (err) {
    console.error(err);
    document.body.classList.add("fallback-bg");
    const hint = document.querySelector(".bio__hint");
    if (hint) hint.textContent = "WebGL unavailable — showing static fallback";
  }
})();
