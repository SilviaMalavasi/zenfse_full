// Scroll to top button

export function scrollToTop() {
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopBtn").style.opacity = "1";
    } else {
      document.getElementById("scrollTopBtn").style.opacity = "0";
    }
  });

  document.body.addEventListener("click", function (event) {
    if (event.target.id === "scrollTopBtn" || event.target.closest(".freccia-single img")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      event.preventDefault();
    }
  });
}

// Scroll to target works that way: give a from- class to the element that triggers the scroll, and a to- ID to the target element. The from- class must be the same as the to- ID. For example, if you want to scroll to an element with the id "target", you have to give the class "from-target" to the element that triggers the scroll, and the ID "to-target" to the target element.

export function scrollToTarget() {
  document.querySelectorAll('*[class^="from"], *[class*=" from"]').forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      let target = "";
      let classList = element.className.split(/\s+/);
      classList.forEach(function (item) {
        if (item.startsWith("from")) {
          target = item.replace("from-", "");
        }
      });

      let to = "to-" + target;
      let targetElement = document.getElementById(to);
      window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
    });
  });
}
