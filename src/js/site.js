import { mediaQueryAllMobile } from "./base/globals.js";

import { doScrollSmoother, internalAnchorsScroll } from "./base/scrollsmoother.js";
import { scrollToTop } from "./components/scroll-to.js";
import Cursor from "./components/cursor.js";

import { removeAltOnHover } from "./base/remove-alt-on-hover.js";

/* Open document ready */

document.addEventListener("DOMContentLoaded", function () {
  // Reload on resize

  if (
    !mediaQueryAllMobile &&
    !document.body.classList.contains("wp-admin") &&
    !document.body.classList.contains("trp-editor-body") &&
    !document.body.classList.contains("login")
  ) {
    window.onresize = function () {
      location.reload();
    };
  }

  // Scroll-related functions

  if (
    !mediaQueryAllMobile &&
    !document.body.classList.contains("wp-admin") &&
    !document.body.classList.contains("trp-editor-body") &&
    !document.body.classList.contains("login")
  ) {
    doScrollSmoother();
    internalAnchorsScroll();
    Cursor();
  }
  scrollToTop();

  // Smooth scroll on mobile

  if (mediaQueryAllMobile) {
    document.querySelectorAll("a[href*='#']").forEach((a) => {
      a.addEventListener("click", (e) => {
        const hash = a.hash;
        const targetElement = document.querySelector(hash);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", hash);
        }
      });
    });
  }

  removeAltOnHover();
});

// Close document ready
