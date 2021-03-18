const logo = document.querySelector('.logo');
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const menuItems = navList.querySelectorAll('#nav-list li');

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

function onEnterViewPort(entries, observer) {
  entries.forEach(function (entry) {
    // Fade in when we enter the viewport
    if (entry.intersectionRatio !== 0) {
      entry.target.classList.add('visible');
    }
  });
}

const fadeInObserver = new IntersectionObserver(onEnterViewPort, {
  threshold: [1],
});
const fadeIns = document.querySelectorAll('.fade-in');
fadeIns.forEach((elm) => fadeInObserver.observe(elm));

function onMainEnter(entries, observer) {
  const entry = entries[0];
  if (entry.intersectionRatio >= 0.05 || entry.boundingClientRect.y < 0) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
}

const mainObersver = new IntersectionObserver(onMainEnter, {
  threshold: [0.05],
});
const mainElm = document.querySelector('main');
mainObersver.observe(mainElm);
