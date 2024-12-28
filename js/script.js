const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.header__nav');

// Додаємо слухач події на клік
burger.addEventListener('click', () => {
    // Додаємо або видаляємо клас 'show' при кліку
    burgerMenu.classList.toggle('show');
    nav.classList.toggle('show');
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: "true",
});
