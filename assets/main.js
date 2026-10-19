/* Progressive enhancement: all content and navigation work without JavaScript. */
(() => {
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = document.querySelector('.motion-toggle');
  let reduced = preference.matches;
  const updateMotion = () => {
    document.documentElement.classList.toggle('motion-off', reduced);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(reduced));
      toggle.textContent = reduced ? 'Animações reduzidas' : 'Reduzir animações';
    }
  };
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener('click', () => { reduced = !reduced; updateMotion(); });
  }
  preference.addEventListener('change', event => { reduced = event.matches; updateMotion(); });
  updateMotion();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!reduced) entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
})();
