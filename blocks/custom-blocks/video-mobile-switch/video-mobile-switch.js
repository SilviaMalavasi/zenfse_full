import { mediaQueryAllMobile } from "../../../src/js/base/globals.js";

document.addEventListener("DOMContentLoaded", function () {
  var video_divs = document.querySelectorAll(".video-mobile-switch");
  video_divs.forEach(function (video_div) {
    var figure = video_div.querySelector(".wp-block-video");
    var video = document.createElement("video");
    var attrs = [];
    var mediaSrc;
    var mediaElement;

    if (mediaQueryAllMobile) {
      mediaSrc = figure.getAttribute("data-mobilesrc");
    } else {
      mediaSrc = figure.getAttribute("data-src");
    }

    // Loop through the figure's data- attributes
    for (var i = 0; i < figure.attributes.length; i++) {
      // Add the attribute to the array
      var attr = figure.attributes[i];
      if (attr.name !== "class" && attr.name !== "data-mobilesrc" && attr.name !== "data-src") {
        // Add the attribute to the array
        attrs.push(attr.name);
      }
    }

    // Check if the mediaSrc is an image
    if (mediaSrc.match(/\.(jpeg|jpg|gif|png|webp)$/) != null) {
      mediaElement = document.createElement("img");
      mediaElement.src = mediaSrc;
      mediaElement.onload = function () {
        this.width = this.naturalWidth;
        this.height = this.naturalHeight;
      };
    } else {
      mediaElement = document.createElement("video");
      mediaElement.src = mediaSrc;

      attrs.forEach(function (attr) {
        var attrName = attr.replace("data-", "");
        mediaElement.setAttribute(attrName, "");
        mediaElement[attr.replace("data-", "")] = true;
        if (attrName === "loop") {
          mediaElement.loop = false;
          mediaElement.onended = () => {
            mediaElement.load();
          };
          mediaElement.play();
        }
      });
    }

    // Append the mediaElement to the figure element
    figure.appendChild(mediaElement);
  });
});
