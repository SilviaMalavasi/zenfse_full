import { mediaQuerySmartphonesOnly } from "../../../src/js/base/globals";

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".wp-block-image");

  images.forEach((image) => {
    const dataset = image.dataset;

    if (mediaQuerySmartphonesOnly) {
      if (dataset.dimensionWidthMobile) {
        image.style.width = `${dataset.dimensionWidthMobile}`;
      }
      if (dataset.dimensionHeightMobile) {
        image.style.height = `${dataset.dimensionHeightMobile}`;
      }
    } else {
      if (dataset.dimensionWidth) {
        image.style.width = `${dataset.dimensionWidth}`;
      }
      if (dataset.dimensionHeight) {
        image.style.height = `${dataset.dimensionHeight}`;
      }
    }
  });
});
