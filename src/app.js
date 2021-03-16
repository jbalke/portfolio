const logo = document.querySelector('.logo');
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

logo.innerHTML = logo.textContent
  .split('')
  .map(
    (character, i) =>
      `<span style="transition-delay: ${i * 300}ms">${character}</span>`
  )
  .join('');

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  navList.classList.toggle('show');
  document.body.classList.toggle('mobile-menu-open');

  const menuItems = navList.querySelectorAll('#nav-list.show li');

  menuItems.forEach((item) => {
    item.addEventListener(
      'click',
      (event) => {
        toggleMobileMenu();
      },
      { once: true }
    );
  });
}

hamburger.addEventListener('click', (event) => {
  toggleMobileMenu();
});

VanillaTilt.init(document.querySelectorAll('.project'), {
  max: 25,
  speed: 400,
  reverse: true,
  max: 3,
  scale: 1.05,
});
