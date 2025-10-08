const canvas = document.getElementById('rive-canvas');

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

// Initial sizing
resizeCanvas();

// Resize on window change
window.addEventListener('resize', resizeCanvas);

// Initialize Rive
new rive.Rive({
  src: 'animation.riv',   // path to your .riv file
  canvas: canvas,
  autoplay: true,
  loop: true,
  fit: rive.Fit.cover,          // scale animation to fill screen
  alignment: rive.Alignment.center
});
