// JS Media Queries

export const mediaQueryAllMobile =
  window.matchMedia(
    "(hover: none) and (pointer: coarse) and (not (any-pointer: fine)), (max-width: 780px), (max-device-width: 480px), (min-device-pixel-ratio: 2) and (max-width: 1560px), (orientation: portrait)"
  ).matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const mediaQuerySmartphonesOnly = window.matchMedia(
  "(hover: none) and (pointer: coarse) and (not (any-pointer: fine)), (max-width: 780px), (min-device-pixel-ratio: 2) and (max-width: 780px), (min-device-pixel-ratio: 3) and (max-width: 1170px), (min-device-pixel-ratio: 4) and (max-width: 1560px)"
).matches;

export const mediaQueryTabletsOnly = window.matchMedia(
  "(hover: none) and (pointer: coarse) and (not (any-pointer: fine)) and (min-width: 781px), (min-device-pixel-ratio: 2) and (min-width: 780px)"
).matches;

// vw and vh

export const vw = window.innerWidth * 0.01;
export const vh = window.innerHeight * 0.01;

// 1rem rounded

export const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
export const onerem = parseInt(rem * 1);

export let top_pos_animations = "top 85%";
if (mediaQueryAllMobile) {
  top_pos_animations = "top 90%";
}
