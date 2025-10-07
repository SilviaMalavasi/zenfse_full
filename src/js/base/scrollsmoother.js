import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { mediaQueryAllMobile } from "../base/globals";

export function doScrollSmoother(scrollToTop = true) {
  /*    define smoother as a promise to catch it later with
   doScrollSmoother().then((smoother) => {
     ...do something
   });
   If you want to prevent the automatic scroll to top, use doScrollSmoother(false).
 */
  if (!mediaQueryAllMobile) {
    // Prevent browser from restoring scroll position on reload
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    return new Promise((resolve, reject) => {
      let smoother = ScrollSmoother.get();

      if (!smoother) {
        smoother = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          normalizeScroll: true,
        });
      }
      if (scrollToTop) {
        smoother.scrollTo(0, true);
      }
      resolve(smoother);
    });
  }
}
// Handle anchors

function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    var rect = elem.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var targetPosition = rect.top + scrollTop;
    ScrollSmoother.get().scrollTo(targetPosition, true);
  }
}

export function internalAnchorsScroll() {
  document.querySelectorAll("a[href*='#']").forEach((a) => {
    a.addEventListener("click", (e) => {
      const samePageHash = getSamePageAnchor(a);
      if (samePageHash) {
        e.preventDefault();
        scrollToHash(samePageHash, e);
        window.history.pushState({}, "", samePageHash);
      }
    });
  });
}
