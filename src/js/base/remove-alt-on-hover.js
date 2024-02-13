export function removeAltOnHover() {
  const elements = document.querySelectorAll("img, iframe, a");

  elements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const title = element.getAttribute("title");
      element.setAttribute("tmp_title", title);
      element.setAttribute("title", "");
    });

    element.addEventListener("mouseleave", function () {
      const title = element.getAttribute("tmp_title");
      element.setAttribute("title", title);
    });
  });
}
