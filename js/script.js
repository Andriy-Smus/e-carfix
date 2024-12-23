const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.header__nav');

// Додаємо слухач події на клік
burger.addEventListener('click', () => {
    // Додаємо або видаляємо клас 'show' при кліку
    burgerMenu.classList.toggle('show');
    nav.classList.toggle('show');
});