import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "/src/sass/style.scss";

//swiper
try {
  new Swiper(".works__slider", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".icon-right-open",
      prevEl: ".icon-left-open",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
  });
} catch (e) {}

// header menu
const burger = document.querySelector(".burger"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});

//tabs in catalog
try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
      contents.forEach((c) => (c.style.display = "none"));

      tab.classList.add("catalog__tab_active");
      contents[index].style.display = "flex";
    });
  });

  contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}
