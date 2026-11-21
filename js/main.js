const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const inPageNavLinks = navLinks.filter(link => link.getAttribute('href')?.startsWith('#'));
const sections = [...document.querySelectorAll('main section[id]')];

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '打开导航菜单' : '关闭导航菜单');
  nav.classList.toggle('open', !isOpen);
});

navLinks.forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开导航菜单');
  nav.classList.remove('open');
}));

document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    inPageNavLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

// Add a soft fade between separate HTML pages while preserving in-page anchor scrolling.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

window.addEventListener('pageshow', () => document.body.classList.remove('page-leaving'));

document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (link.hasAttribute('download') || link.target === '_blank' || reducedMotion.matches) return;

  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

  const destination = new URL(link.href, window.location.href);
  if (!['http:', 'https:', 'file:'].includes(destination.protocol)) return;
  if (destination.protocol !== 'file:' && destination.origin !== window.location.origin) return;

  const current = new URL(window.location.href);
  const sameDocument = destination.pathname === current.pathname && destination.search === current.search;
  if (sameDocument) return;

  event.preventDefault();
  document.body.classList.add('page-leaving');
  window.setTimeout(() => { window.location.href = destination.href; }, 340);
});
