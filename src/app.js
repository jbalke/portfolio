const logo = document.querySelector('.logo');
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const menuItems = navList.querySelectorAll('#nav-list li');

logo.innerHTML = logo.textContent
  .split('')
  .map(
    (character, i) =>
      `<span style="transition-delay: ${i * 300}ms">${character}</span>`
  )
  .join('');

menuItems.forEach((item, i) => {
  item.style.transitionDelay = `${150 + (i + 1) * 110}ms`;
});

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  navList.classList.toggle('show');
  document.body.classList.toggle('mobile-menu-open');
}

menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    hamburger.classList.remove('active');
    navList.classList.remove('show');
    document.body.classList.remove('mobile-menu-open');
  });
});

hamburger.addEventListener('click', (event) => {
  toggleMobileMenu();
});

const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!mediaQuery.matches) {
  VanillaTilt.init(document.querySelectorAll('.project'), {
    max: 3,
    speed: 400,
    reverse: true,
    scale: 1.05,
  });
}
