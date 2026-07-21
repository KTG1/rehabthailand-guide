const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.rehab-card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    const filter = button.dataset.filter;
    cards.forEach((card) => { card.hidden = filter !== 'all' && !card.dataset.tags.includes(filter); });
  });
});

document.querySelector('.menu-button').addEventListener('click', (event) => {
  const header = document.querySelector('.site-header');
  const open = header.classList.toggle('mobile-open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
});

document.querySelector('#fit-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const choice = new FormData(event.currentTarget).get('priority');
  const target = document.querySelector(`[data-filter="${choice}"]`);
  target.click();
  document.querySelector('#list').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
});

const observed = document.querySelectorAll('.rehab-card, .question-list li, .accordion details');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  observed.forEach((item) => item.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  observed.forEach((item) => observer.observe(item));
}
