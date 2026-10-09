(() => {
  const track = (name, params = {}) => window.gtag?.('event', name, params);
  const legacy = location.hash.match(/^#\/work\/([a-z0-9-]+)/);
  if (legacy) location.replace(`work/${legacy[1]}.html`);

  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }));
  document.querySelectorAll('[data-event]').forEach(link => link.addEventListener('click', () => track(link.dataset.event, {
    section: document.body.classList.contains('case-page') ? 'case_study' : 'ma_home',
    project_slug: link.dataset.project
  })));

  const form = document.querySelector('[data-protected-form]');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const valid = form.querySelector('input').value === 'casestudy';
    form.querySelector('.form-error').hidden = valid;
    if (valid) {
      form.closest('.protected-lock').hidden = true;
      document.querySelector('[data-protected-gallery]').hidden = false;
    }
    track('case_study_protected_unlock', { case_study: location.pathname.split('/').pop().replace('.html',''), success: valid });
  });

  const dialog = document.querySelector('.lightbox');
  if (dialog) {
    let images = [], active = 0;
    const display = () => {
      const source = images[active];
      dialog.querySelector('img').src = source.dataset.src;
      dialog.querySelector('img').alt = source.querySelector('img').alt;
    };
    document.addEventListener('click', event => {
      const button = event.target.closest('[data-lightbox]');
      if (!button) return;
      images = [...document.querySelectorAll(`[data-lightbox="${button.dataset.lightbox}"]`)].filter(item => !item.closest('[hidden]'));
      active = images.indexOf(button);
      display(); dialog.showModal();
      track('case_study_image_open', { case_study: location.pathname.split('/').pop().replace('.html','') });
    });
    const move = delta => { active = (active + delta + images.length) % images.length; display(); };
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    dialog.querySelector('[data-prev]').addEventListener('click', () => move(-1));
    dialog.querySelector('[data-next]').addEventListener('click', () => move(1));
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    document.addEventListener('keydown', event => {
      if (!dialog.open) return;
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    });
  }

  const top = document.querySelector('.back-top');
  if (top) {
    addEventListener('scroll', () => top.classList.toggle('visible', scrollY > innerHeight), { passive: true });
    top.addEventListener('click', () => scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
  }
})();
