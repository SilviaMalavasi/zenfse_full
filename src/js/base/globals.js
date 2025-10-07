// JS Media Queries

const smartphoneMaxWidth = 480;
const smallTabletMaxWidth = 768;
const smallDesktopMaxWidth = 1439;

const isDesktop = window.matchMedia(`(pointer: fine) and (hover: hover)`).matches;
const isMobile = !isDesktop;

export const mediaQueryAllMobile = isMobile;

export const mediaQuerySmartphonesOnly = isMobile && window.matchMedia(`(max-width: ${smartphoneMaxWidth}px)`).matches;

export const mediaQuerySmallTabletsOnly =
  isMobile &&
  window.matchMedia(`(min-width: ${smartphoneMaxWidth + 1}px) and (max-width: ${smallTabletMaxWidth}px)`).matches;

export const mediaQuerySmartphonesAndSmallTablets =
  isMobile && window.matchMedia(`(max-width: ${smallTabletMaxWidth}px)`).matches;

export const mediaQueryBigTabletsOnlyPortrait =
  isMobile && window.matchMedia(`(orientation: portrait) and (min-width: ${smallTabletMaxWidth + 1}px)`).matches;

export const mediaQueryBigTabletsOnlyLandscape =
  isMobile && window.matchMedia(`(orientation: landscape) and (min-width: ${smallTabletMaxWidth + 1}px)`).matches;

export const desktopOnly = isDesktop;

export const smalldesktopOnly = isDesktop && window.matchMedia(`(max-width: ${smallDesktopMaxWidth}px)`).matches;

// Dark Mode

export const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

// svw and svh

export const svh = window.visualViewport ? window.visualViewport.height * 0.01 : window.innerHeight * 0.01;
export const svw = window.visualViewport ? window.visualViewport.width * 0.01 : window.innerWidth * 0.01;

// 1rem rounded

export const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
export const onerem = parseInt(rem * 1);
