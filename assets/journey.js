(() => {
  const root = document.querySelector('.journey');
  if (!root) return;
  const scenes = [...root.querySelectorAll('[data-scene]')];
  const steps = [...root.querySelectorAll('[data-step]')];
  const pause = root.querySelector('.journey-pause');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, manuallyPaused = false, visible = false, timer;
  const reduced = () => preference.matches || document.documentElement.classList.contains('motion-off');
  const sync = () => {
    clearTimeout(timer);
    const playing = !manuallyPaused && !reduced() && visible && !document.hidden;
    root.classList.toggle('is-playing', playing);
    pause.textContent = reduced() ? 'Movimento reduzido' : manuallyPaused ? 'Reproduzir' : 'Pausar';
    pause.disabled = reduced();
    if (playing) timer = setTimeout(() => show((current + 1) % scenes.length), 5200);
  };
  const show = index => {
    current = index;
    scenes.forEach((scene, i) => {
      scene.hidden = i !== index;
      scene.classList.toggle('is-active', i === index);
    });
    steps.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    sync();
  };
  steps.forEach((button, i) => button.addEventListener('click', () => {
    manuallyPaused = true;
    show(i);
  }));
  pause.addEventListener('click', () => { manuallyPaused = !manuallyPaused; sync(); });
  root.addEventListener('focusin', event => {
    if (event.target !== pause) { manuallyPaused = true; sync(); }
  });
  new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  preference.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  root.querySelector('.journey-controls').hidden = false;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }, { threshold: .15 }).observe(root);
  } else { visible = true; }
  sync();
})();
