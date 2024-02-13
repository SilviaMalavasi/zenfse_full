import { mediaQueryAllMobile } from "./base/globals.js";

import { scrollToTarget, scrollToTop } from "./components/scroll-to.js";
import Cursor from "./components/cursor.js";

import { removeAltOnHover } from "./base/remove-alt-on-hover.js";
import { gsapAnimations } from "./components/gsap.js";

// Reload on resize

if (
  !mediaQueryAllMobile &&
  !document.body.classList.contains("wp-admin") &&
  !document.body.classList.contains("login")
) {
  window.onresize = function () {
    location.reload();
  };
}

/* Open document ready */

document.addEventListener("DOMContentLoaded", function () {
  // Scroll-related functions

  if (
    !mediaQueryAllMobile &&
    !document.body.classList.contains("wp-admin") &&
    !document.body.classList.contains("trp-editor-body") &&
    !document.body.classList.contains("login")
  ) {
    Cursor();
  }

  scrollToTop();
  scrollToTarget();

  removeAltOnHover();

  if (
    !document.body.classList.contains("wp-admin") &&
    !document.body.classList.contains("trp-editor-body") &&
    !document.body.classList.contains("login")
  ) {
    gsapAnimations();
  }
}); // Chiudi document ready
