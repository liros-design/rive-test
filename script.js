function resizeCanvas() {
  const canvas = document.getElementById('rive-canvas');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
