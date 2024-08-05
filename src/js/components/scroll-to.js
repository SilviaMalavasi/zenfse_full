import { doScrollSmoother } from "../base/scrollsmoother";

export function scrollToTop() {
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopBtn").style.opacity = "1";
    } else {
      document.getElementById("scrollTopBtn").style.opacity = "0";
    }
  });

  document.body.addEventListener("click", function (event) {
    if (event.target.closest("#scrollTopBtn")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      event.preventDefault();
    }
  });
}
