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

export function scrollToTarget() {
  document.querySelectorAll('*[class^="from"], *[class*=" from"]').forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      let target = "";
      let clickedElement = event.target;

      // Check if the clicked element or any of its parents have a class that starts with "from"
      while (clickedElement && !Array.from(clickedElement.classList).some((item) => item.startsWith("from"))) {
        clickedElement = clickedElement.parentElement;
      }

      if (clickedElement) {
        let classList = Array.from(clickedElement.classList);
        classList.forEach(function (item) {
          if (item.startsWith("from")) {
            target = item.replace("from-", "");
          }
        });

        let to = "to-" + target;
        let targetElement = document.getElementById(to);
        if (!mediaQueryAllMobile) {
          doScrollSmoother().then(() => {
            smoother.scrollTo(targetElement, true);
          });
        } else {
          window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
        }
      }
    });
  });
}
