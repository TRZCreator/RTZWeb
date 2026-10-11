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

const audioPlayer = new Audio();
audioPlayer.preload = 'none';

const selectionHint = document.querySelector('.selection-hint');
let currentTrackName = '';
let activeRecord = null;

function setRecordAnimation(button, isAnimated) {
  const image = button.querySelector('img');
  const trackName = button.parentElement.querySelector('figcaption').textContent;

  image.src = isAnimated ? button.dataset.animation : button.dataset.still;
  button.setAttribute('aria-pressed', String(isAnimated));
  button.setAttribute(
    'aria-label',
    `${isAnimated ? 'Show cover' : 'Show animated artwork'} for ${trackName}`
  );
}

audioPlayer.addEventListener('play', () => {
  selectionHint.textContent = `Now playing: ${currentTrackName}`;
});

audioPlayer.addEventListener('pause', () => {
  if (audioPlayer.currentSrc && !activeRecord && audioPlayer.currentTime > 0) {
    selectionHint.textContent = `Paused: ${currentTrackName}`;
  }
});

audioPlayer.addEventListener('ended', () => {
  if (activeRecord) {
    setRecordAnimation(activeRecord, false);
    activeRecord = null;
  }
  selectionHint.textContent = 'Turn up a favorite. Stay awhile.';
});

audioPlayer.addEventListener('error', () => {
  if (currentTrackName) {
    selectionHint.textContent = `Unable to load: ${currentTrackName}`;
  }
});

document.querySelectorAll('.vinyl-artwork').forEach((button) => {
  button.addEventListener('click', () => {
    const trackName = button.parentElement.querySelector('figcaption').textContent;
    const trackUrl = new URL(button.dataset.track, document.baseURI).href;

    if (activeRecord === button && !audioPlayer.paused) {
      activeRecord = null;
      setRecordAnimation(button, false);
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      selectionHint.textContent = 'Turn up a favorite. Stay awhile.';
      return;
    }

    if (activeRecord && activeRecord !== button) {
      setRecordAnimation(activeRecord, false);
    }

    activeRecord = button;
    currentTrackName = trackName;
    setRecordAnimation(button, true);

    if (audioPlayer.src !== trackUrl) {
      audioPlayer.src = trackUrl;
      audioPlayer.load();
    }

    audioPlayer.play().catch(() => {
      if (activeRecord === button) {
        setRecordAnimation(button, false);
        activeRecord = null;
      }
      selectionHint.textContent = `Unable to play: ${currentTrackName}`;
    });
  });
});

window.addEventListener('beforeunload', () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
