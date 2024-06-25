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

// Sub menu

document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll("li.menu-item-has-children");

  menuItems.forEach(function (menuItem) {
    var link = menuItem.querySelector("a");
    var submenu = menuItem.querySelector(".sub-menu");

    if (link && submenu) {
      submenu.style.width = link.offsetWidth + "px";
    }
  });
});

document.querySelectorAll("li.menu-item-has-children").forEach(function (li) {
  li.addEventListener("mouseenter", function () {
    var submenu = this.querySelector(".sub-menu");
    submenu.style.maxHeight = submenu.scrollHeight + "px";
  });

  li.addEventListener("mouseleave", function () {
    this.querySelector(".sub-menu").style.maxHeight = "0";
  });
});
