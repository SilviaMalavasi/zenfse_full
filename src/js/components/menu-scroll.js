import { rem, mediaQueryAllMobile } from "../base/globals.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function menuColor() {
  gsap.registerPlugin(ScrollTrigger);
  const zenfseHeader = document.querySelector(".zenfse-header");
  const startingPosition = "top " + 2 * rem + "px";
  const endingPosition = "bottom " + 2 * rem + "px";

  const backgrounds = ["base", "cream", "white"];
  const activeBackgrounds = new Map(); // Track active sections for each background type

  backgrounds.forEach((type) => {
    const selector = `.has-${type}-background`;
    if (document.querySelector(selector)) {
      const elements = gsap.utils.toArray(selector);
      activeBackgrounds.set(type, 0); // Initialize counter

      elements.forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: startingPosition,
          end: endingPosition,
          onEnter: () => {
            activeBackgrounds.set(type, activeBackgrounds.get(type) + 1);
            zenfseHeader.classList.add(`menu-has-${type}-background`);
          },
          onLeave: () => {
            const count = activeBackgrounds.get(type) - 1;
            activeBackgrounds.set(type, count);
            if (count === 0) {
              zenfseHeader.classList.remove(`menu-has-${type}-background`);
            }
          },
          onEnterBack: () => {
            activeBackgrounds.set(type, activeBackgrounds.get(type) + 1);
            zenfseHeader.classList.add(`menu-has-${type}-background`);
          },
          onLeaveBack: () => {
            const count = activeBackgrounds.get(type) - 1;
            activeBackgrounds.set(type, count);
            if (count === 0) {
              zenfseHeader.classList.remove(`menu-has-${type}-background`);
            }
          },
        });
      });
    }
  });
}

export function menuScroll() {
  const zenfseHeader = document.querySelector(".zenfse-header");
  let timeout;

  window.addEventListener("scroll", () => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      const scrolled = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
      if (!mediaQueryAllMobile) {
        zenfseHeader.classList.toggle("scrolled", scrolled);
      }
    });
  });
}
