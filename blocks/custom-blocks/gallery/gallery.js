import Swiper from "swiper";
import { Pagination } from "swiper/modules";

export function gallery() {
  const galleryElements = document.querySelectorAll(".zenfse-block.gallery");
  galleryElements.forEach((el) => {
    var swiper_pagination = el.querySelector(".swiper-pagination");

    var swiper = new Swiper(el.querySelector(".swiper"), {
      modules: [Pagination],
      pagination: {
        el: swiper_pagination,
        clickable: true,
      },
      slidesPerView: 1,
      speed: 800,
    });
  });
}

document.addEventListener("DOMContentLoaded", gallery);
