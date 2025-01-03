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

function validatePhone(phone) {
  const phonePattern = /^(\+380|0)\d{9}$/; // Перевіряє номери у форматах +380XXXXXXXXX або 0XXXXXXXXX
  return phonePattern.test(phone);
}

function sendForm(event) {
  event.preventDefault();
  const form = document.getElementById('contact-form');
  const phoneInput = document.getElementById('phone').value.trim();

  if (!validatePhone(phoneInput)) {
    alert('Будь ласка, введіть правильний номер телефону (у форматі +380XXXXXXXXX або 0XXXXXXXXX).');
    return;
  }
  
  const formData = new FormData(form);

  fetch('send_email.php', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text())
    .then(result => {
      alert('Ваше повідомлення успішно надіслано. Ми зв’яжемося з вами найближчим часом!');
      form.reset();
    })
    .catch(error => {
      console.error('Помилка:', error);
      alert('Сталася помилка при відправленні.');
    });
}

