const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
});