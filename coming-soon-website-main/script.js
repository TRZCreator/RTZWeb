const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];
let width = 0;
let height = 0;
let animationId = null;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function buildStars() {
  stars = [];
  const total = Math.min(200, Math.max(120, Math.floor((width * height) / 10)));

  for (let i = 0; i < total; i += 1) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: randomBetween(0.7, 2.4),
      alpha: randomBetween(0.35, 1),
      speed: randomBetween(0.1, 0.7),
      drift: randomBetween(-0.2, 0.2)
    });
  }
}

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  buildStars();
}

function renderStars() {
  ctx.clearRect(0, 0, width, height);

  for (const star of stars) {
    star.y += star.speed;
    star.x += star.drift;

    if (star.y > height) {
      star.y = -5;
      star.x = Math.random() * width;
    }

    if (star.x < 0) star.x = width;
    if (star.x > width) star.x = 0;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  animationId = window.requestAnimationFrame(renderStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
renderStars();

window.addEventListener('beforeunload', () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
