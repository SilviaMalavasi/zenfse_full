import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

export function doScrollSmoother() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  return new Promise((resolve, reject) => {
    let smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });
    resolve(smoother);

    // Handle anchrors

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
        console.log(rect.top, scrollTop);
        var targetPosition = rect.top + scrollTop;
        ScrollSmoother.get().scrollTo(targetPosition, true);
      }
    }

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
  });
}

// define smoother as a promise to catch it later with
// doScrollSmoother().then(() => {
//   ...do something
// });
