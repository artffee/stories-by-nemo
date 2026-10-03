const menuButton = document.querySelector('.nav-toggle');
const mainNavigation = document.querySelector('#main-navigation');
if (menuButton && mainNavigation) {
  function setMenu(open) {
    mainNavigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close menu' : 'Menu';
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mainNavigation.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!mainNavigation.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });
}
