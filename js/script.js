const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
    nav.classList.toggle('show');
});

burger.setAttribute('aria-expanded', 'false');

burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
          if (burgerMenu.classList.contains('show')) {
            burgerMenu.classList.remove('show');
            nav.classList.remove('show');
        }
    });
});


var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  touchRatio: 1,
  resistance: true,
  resistanceRatio: 0.85,
  threshold: 20, 
  watchSlidesProgress: true,
  longSwipes: true, 
  longSwipesRatio: 0.5,
  speed: 500, 
  slideToClickedSlide: true,
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

document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hasAttribute('href') && this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId); 

      if (targetElement) {
        const offset = 59;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});


