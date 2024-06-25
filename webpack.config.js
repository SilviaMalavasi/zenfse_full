const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

const imageDimensionConfig = {
  ...defaultConfig,
  entry: {
    "image-dimension": "./blocks/core-blocks/image/image-dimension.js",
    "image-dimension-frontend": "./blocks/core-blocks/image/image-dimension-frontend.js",
    "image-style": "./blocks/core-blocks/image/image-style.js",
  },
  output: {
    path: path.resolve(__dirname, "blocks/build-core"),
    filename: "[name].js",
  },
};

const gsapDropdownConfig = {
  ...defaultConfig,
  entry: {
    "gsap-dropdown": "./blocks/core-blocks/gsap-animations/gsap-dropdown.js",
    "gsap-frontend": "./blocks/core-blocks/gsap-animations/gsap-frontend.js",
  },
  output: {
    path: path.resolve(__dirname, "blocks/build-core"),
    filename: "[name].js",
  },
};

module.exports = [defaultConfig, imageDimensionConfig, gsapDropdownConfig];
