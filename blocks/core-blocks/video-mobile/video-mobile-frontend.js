import { mediaQueryAllMobile } from "../../../src/js/base/globals.js";

document.addEventListener("DOMContentLoaded", (event) => {
  if (mediaQueryAllMobile) {
    const videoBlocks = document.querySelectorAll(".wp-block-video");
    videoBlocks.forEach((block) => {
      const mobileSourceUrl = block.getAttribute("data-mobile-url");
      if (mobileSourceUrl) {
        const video = block.querySelector("video");
        if (video) {
          if (mobileSourceUrl.match(/\.(jpeg|jpg|gif|png|webp)$/) != null) {
            // The mobile source URL is an image
            video.remove();
            const img = document.createElement("img");
            img.src = mobileSourceUrl;
            block.appendChild(img);
            block.classList.remove("wp-block-video");
            block.classList.add("wp-block-image");
          } else {
            // The mobile source URL is a video
            video.src = mobileSourceUrl;
          }
        }
      }
    });
  }
});
