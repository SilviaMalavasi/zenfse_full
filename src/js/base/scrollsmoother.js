import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { onerem } from "./globals.js";

export function doScrollSmoother() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  return new Promise((resolve, reject) => {
    let smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });
    resolve();

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
        var targetPosition = rect.top + scrollTop - 10 * onerem;
        ScrollSmoother.get().scrollTo(targetPosition, true);
      }
    }

    // If a link's href is within the current page, scroll to it instead
    document.querySelectorAll("a[href]").forEach((a) => {
      a.addEventListener("click", (e) => {
        scrollToHash(getSamePageAnchor(a), e);
      });
    });

    document.querySelectorAll("a[href^='#']").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToHash(a.hash);
        window.history.pushState({}, "", a.hash);
      });
    });

    window.addEventListener("load", refreshScroll);

    function refreshScroll() {
      document.querySelector("#smooth-wrapper").scrollTop = 0;
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
      // Scroll to the element in the URL's hash on load
      scrollToHash(window.location.hash);
    }

    scrollToHash(window.location.hash);
  });
}

// define smoother as a promise to catch it later with
// doScrollSmoother().then(() => {
//   ...do something
// });
