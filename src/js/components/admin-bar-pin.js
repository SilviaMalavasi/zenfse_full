import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function adminBarPin() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: ".wp-site-blocks",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
    pin: "#wpadminbar",
  });
}
