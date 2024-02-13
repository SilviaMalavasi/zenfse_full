import { mediaQueryAllMobile } from "../../../src/js/base/globals.js";

export function mobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      const mobileMenu = document.getElementById("mobile-menu");
      const zenfseHeader = document.querySelector(".zenfse-header");
      mobileMenu.classList.toggle("open-menu");
      zenfseHeader.classList.toggle("open-menu");

      if (mediaQueryAllMobile) {
        document.body.classList.toggle("fixed");
      }
    });
  }
}
mobileMenu();

if (document.querySelector(".zenfse-header")) {
  window.addEventListener("scroll", menuPadding);
  function menuPadding() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (!mediaQueryAllMobile) {
        document.querySelector(".zenfse-header").style.paddingTop = "0.5rem";
      }
    } else {
      if (!mediaQueryAllMobile) {
        document.querySelector(".zenfse-header").style.paddingTop = "2rem";
      }
    }
  }
}
