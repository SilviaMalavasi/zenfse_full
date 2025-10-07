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
  window.addEventListener("scroll", menuScrolled);
  let header = document.querySelector(".zenfse-header");
  function menuScrolled() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (!mediaQueryAllMobile) {
        header.classList.add("scrolled");
      }
    } else {
      if (!mediaQueryAllMobile) {
        header.classList.remove("scrolled");
      }
    }
  }
}

// Sub menu

document.querySelectorAll("li.menu-item-has-children").forEach(function (li) {
  li.addEventListener("mouseenter", function () {
    var submenu = this.querySelector(".sub-menu");
    submenu.style.maxHeight = submenu.scrollHeight + "px";
  });

  li.addEventListener("mouseleave", function () {
    this.querySelector(".sub-menu").style.maxHeight = "0";
  });

  // Add click event listener for submenu opener
  if (mediaQueryAllMobile) {
    li.addEventListener("click", function (event) {
      // Only toggle submenu if the click is on the li itself, not on a submenu link
      if (event.target.closest(".sub-menu")) {
        return;
      }
      event.preventDefault();
      this.classList.toggle("open-sub-menu");
      var submenu = this.querySelector(".sub-menu");
      if (submenu) {
        if (this.classList.contains("open-sub-menu")) {
          submenu.style.maxHeight = submenu.scrollHeight + "px";
        } else {
          submenu.style.maxHeight = "0";
        }
      }
    });
  }
});
