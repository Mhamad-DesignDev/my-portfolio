const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

menuIcon.addEventListener('click', (e) => {
  mobileMenu.classList.toggle('active');
  e.stopPropagation();
});

body.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

mobileMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});
