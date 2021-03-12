const logo = document.querySelector('.logo');

logo.innerHTML = logo.textContent
  .split('')
  .map(
    (character, i) =>
      `<span style="transition-delay: ${i * 300}ms">${character}</span>`
  )
  .join('');
