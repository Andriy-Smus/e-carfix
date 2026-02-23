const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.header__nav');
const swiperContainer = document.querySelector('.mySwiper');

document.getElementById('year').textContent = new Date().getFullYear();

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
    nav.classList.toggle('show');

    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
});

// burger.setAttribute('aria-expanded', 'false');

burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
});

const menuLinks = document.querySelectorAll('.menu__link');
const arrows = document.querySelectorAll('.arrow'); // Стрілки

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Якщо клік не на стрілку, закриваємо меню
    if (!event.target.classList.contains('arrow')) {
      if (burgerMenu.classList.contains('show')) {
        burgerMenu.classList.remove('show');
        nav.classList.remove('show');
      }
    }
  });
});

arrows.forEach(arrow => {
  arrow.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation(); // Запобігає закриттю меню

    const submenuPhone = document.querySelector('.submenu-phone'); // Отримуємо submenu-phone

    if (submenuPhone) {
      // Перемикаємо display між "block" і "none"
      submenuPhone.style.display = submenuPhone.style.display === 'block' ? 'none' : 'block';
    }
  });
});




if (swiperContainer) {
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 0,
      centeredSlides: false,
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
  });

  // Зупинка та відновлення автопрокрутки при наведенні
  swiperContainer.addEventListener('mouseenter', () => {
      swiper.autoplay.stop(); // Зупиняє автопрокрутку
  });

  swiperContainer.addEventListener('mouseleave', () => {
      swiper.autoplay.start(); // Відновлює автопрокрутку
  });
}


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

document.querySelectorAll('.link-block').forEach(link => {
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


document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".submenu a, .submenu-phone a"); // Об'єднуємо обидва селектори
  const currentPage = window.location.pathname; // Отримуємо URL поточної сторінки

  menuItems.forEach((item) => {
    const itemHref = item.getAttribute("href");

    // Перевіряємо, чи шлях в href збігається з поточним шляхом
    if (currentPage.endsWith(itemHref)) {
      item.classList.add("active"); // Додаємо клас до самого елемента <a>
    }
  });
});

