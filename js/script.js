var swiper = new Swiper(".mySwiper", {
  allowSlideNext: true,
  allowSlidePrev: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".mySwiper-button-next",
    prevEl: ".mySwiper-button-prev",
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

let close = document.querySelector(".burger__close");
let burger = document.querySelector(".burger__open");
let menu = document.querySelector(".burger");

burger.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  close.classList.toggle("active");
  burger.classList.toggle("active");
});

close.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  close.classList.toggle("active");
  burger.classList.toggle("active");
});
