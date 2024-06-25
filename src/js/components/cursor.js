import gsap from "gsap";

import gsap from "gsap";
import "../../css/components/cursor.scss";

export default function Cursor() {
  let cursorOutline = document.getElementById("cursor-outline");
  let cursorDot = document.getElementById("cursor-dot");

  let cursorOutlineHeight = cursorOutline.offsetHeight;
  let cursorDotHeight = cursorDot.offsetHeight;

  const throttle = (callback, time = 300) => {
    let pause = false;

    return (...args) => {
      if (pause) return;
      pause = true;
      callback(...args);
      setTimeout(() => {
        pause = false;
      }, time);
    };
  };

  window.addEventListener("mousemove", throttle(moveCursorOutline, 50));
  window.addEventListener("mousemove", throttle(moveCursorDot, 50));

  document
    .querySelectorAll("a, button, .swiper-next, .swiper-prev, input, textarea, .swiper-pagination-bullet")
    .forEach((el) => {
      el.addEventListener("mouseenter", cursorLink);
      el.addEventListener("mouseleave", cursorLinkRevert);
    });

  function moveCursorOutline(event) {
    gsap.to(cursorOutline, {
      x: event.clientX - 0.5 * cursorOutlineHeight,
      y: event.clientY - 0.5 * cursorOutlineHeight,
      delay: 0.08,
      ease: "back.out(2)",
      duration: 0.3,
    });
  }

  function moveCursorDot(event) {
    gsap.to(cursorDot, {
      x: event.clientX - 0.5 * cursorDotHeight,
      y: event.clientY - 0.5 * cursorDotHeight,
      ease: "back.out(2)",
      duration: 0.3,
    });
  }

  function cursorLink() {
    gsap.to(cursorDot, {
      border: "solid 2px #fff",
      background: "#000",
      scale: 1.3,
      duration: 0.3,
    });
  }

  function cursorLinkRevert() {
    gsap.to(cursorDot, {
      border: "solid 2px #000",
      background: "#fff",
      scale: 1,
      duration: 0.3,
    });
  }
}
