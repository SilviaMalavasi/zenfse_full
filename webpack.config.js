const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

const gsapDropdownConfig = {
  ...defaultConfig,
  entry: {
    "gsap-dropdown": "./blocks/core-blocks/gsap-animations/gsap-dropdown.js",
    "gsap-frontend": "./blocks/core-blocks/gsap-animations/gsap-frontend.js",
  },
  output: {
    path: path.resolve(__dirname, "blocks/build-core-blocks"),
    filename: "[name].js",
  },
};

const siteConfig = {
  ...defaultConfig,
  entry: {
    site: "./src/js/site.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};

module.exports = [defaultConfig, siteConfig, gsapDropdownConfig];
