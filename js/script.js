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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

const swiperContainer = document.querySelector('.mySwiper');
swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop(); // Зупиняє автопрокрутку
});

swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start(); // Відновлює автопрокрутку
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  sendForm(event);
});

function sendForm(event) {
  console.log('dfghj')
  event.preventDefault(); // Зупиняємо стандартне відправлення форми

  const form = document.getElementById('contact-form');
  const formData = new FormData(form);

  fetch('send_email.php', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text())
    .then(result => {
      alert('Повідомлення надіслано!');
      form.reset(); // Очищаємо форму
    })
    .catch(error => {
      console.error('Помилка:', error);
      alert('Сталася помилка при відправленні.');
    });
}
