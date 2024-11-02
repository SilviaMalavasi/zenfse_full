// JS Media Queries

const mobileMaxWidth = 1024;
const smartphoneMaxWidth = 430;
const smallTabletMaxWidth = 780;
const smallDesktopMaxWidth = 1439;

export const mediaQueryAllMobile =
  window.matchMedia(
    `(hover: none) and (pointer: coarse) and (not (any-pointer: fine)) and (max-width: ${mobileMaxWidth}px), 
  (min-device-pixel-ratio: 2) and (max-width: ${mobileMaxWidth * 2}px), 
  (min-device-pixel-ratio: 3) and (max-width: ${mobileMaxWidth * 3}px), 
  (min-device-pixel-ratio: 4) and (max-width: ${mobileMaxWidth * 4}px), 
  (orientation: portrait)`
  ).matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const mediaQuerySmartphonesOnly = window.matchMedia(
  `(hover: none) and (pointer: coarse) and (not (any-pointer: fine)) and (max-width: ${smartphoneMaxWidth}px),
  (min-device-pixel-ratio: 2) and (max-width: ${smartphoneMaxWidth * 2}px),
  (min-device-pixel-ratio: 3) and (max-width: ${smartphoneMaxWidth * 3}px),
  (min-device-pixel-ratio: 4) and (max-width: ${smartphoneMaxWidth * 4}px)`
).matches;

export const mediaQuerySmallTabletsOnly = window.matchMedia(
  `(hover: none) and (pointer: coarse) and (not (any-pointer: fine)) and (min-width: ${smartphoneMaxWidth}px) and (max-width: ${smallTabletMaxWidth}px),
  (min-device-pixel-ratio: 2) and (min-width: ${smartphoneMaxWidth * 2}px) and (max-width: ${
    smallTabletMaxWidth * 2
  }px),
  (min-device-pixel-ratio: 3) and (min-width: ${smartphoneMaxWidth * 3}px) and (max-width: ${
    smallTabletMaxWidth * 3
  }px),
  (min-device-pixel-ratio: 4) and (min-width: ${smartphoneMaxWidth * 4}px) and (max-width: ${
    smallTabletMaxWidth * 4
  }px)`
).matches;

export const mediaQuerySmartphonesAndSmallTablets = window.matchMedia(
  `(hover: none) and (pointer: coarse) and (not (any-pointer: fine)) and (max-width: ${smallTabletMaxWidth}px),
  (min-device-pixel-ratio: 2) and (max-width: ${smallTabletMaxWidth * 2}px),
  (min-device-pixel-ratio: 3) and (max-width: ${smallTabletMaxWidth * 3}px),
  (min-device-pixel-ratio: 4) and (max-width: ${smallTabletMaxWidth * 4}px)`
).matches;

export const mediaQueryBigTabletsOnly = window.matchMedia(
  `(hover: none) and (pointer: coarse) and (not (any-pointer: fine)) and (min-width: ${smallTabletMaxWidth}px),
  (min-device-pixel-ratio: 2) and (min-width: ${smallTabletMaxWidth * 2}px),
  (min-device-pixel-ratio: 3) and (min-width: ${smallTabletMaxWidth * 3}px),
  (min-device-pixel-ratio: 4) and (min-width: ${smallTabletMaxWidth * 4}px)`
).matches;

export const desktopOnly = window.matchMedia(`screen and (min-width: ${mobileMaxWidth}px) and (pointer: fine)`).matches;

export const smalldesktopOnly = window.matchMedia(
  `screen and (min-width: ${smallTabletMaxWidth}px) and (max-width: ${smallDesktopMaxWidth}px) and (pointer: fine)`
).matches;

// vw and vh

export const vw = window.innerWidth * 0.01;
export const vh = window.innerHeight * 0.01;

// 1rem rounded

export const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
export const onerem = parseInt(rem * 1);
