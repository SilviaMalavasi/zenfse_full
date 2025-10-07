import { mediaQueryAllMobile, rem, svh } from "../../../src/js/base/globals.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

var top_pos_animations = "top 95%";
if (mediaQueryAllMobile) {
  top_pos_animations = "top 90%";
}
var bottom_pos_animations = `top-=${20 * svh}px bottom`;
var easing = "cubic-bezier(0,0,0.22,1)";

export function gsapAnimations() {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  if (mediaQueryAllMobile) {
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });
  }

  // Fade in

  if (document.querySelectorAll(".fade-in").length) {
    const fade_ins = gsap.utils.toArray(".fade-in");
    fade_ins.forEach((fade_in) => {
      const fade_in_anim = gsap.to(fade_in, {
        autoAlpha: 1,
        duration: 1,
        ease: easing,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: fade_in,
        start: top_pos_animations,
        onEnter: () => fade_in_anim.play(),
      });

      ScrollTrigger.create({
        trigger: fade_in,
        start: bottom_pos_animations,
        onEnterBack: () => fade_in_anim.restart(),
        onLeaveBack: () => fade_in_anim.reverse(),
      });
    });
  }

  // Fade in up

  if (document.querySelectorAll(".fade-in-up").length) {
    const fade_in_ups = gsap.utils.toArray(".fade-in-up");
    fade_in_ups.forEach((fade_in_up) => {
      var hasChildAnimation = fade_in_up.classList.contains("child-animation");
      var fade_in_up_anim_child;

      if (!mediaQueryAllMobile) {
        if (hasChildAnimation) {
          let fade_in_up_child = fade_in_up.querySelector("img");
          fade_in_up_anim_child = gsap.to(fade_in_up_child, {
            scale: "1",
            duration: 1.5,
            ease: easing,
          });
        }
      }

      const fade_in_up_anim_parent = gsap.to(fade_in_up, {
        y: "0",
        autoAlpha: "1",
        duration: 1.5,
        ease: easing,
      });

      const fade_in_up_anim = gsap.timeline({ paused: true });
      fade_in_up_anim.add(fade_in_up_anim_parent);

      if (!mediaQueryAllMobile) {
        if (hasChildAnimation) {
          fade_in_up_anim.add(fade_in_up_anim_child, "<");
        }
      }

      ScrollTrigger.create({
        trigger: fade_in_up,
        start: "top bottom+=" + 14 * rem + "px",
        onEnter: () => fade_in_up_anim.play(),
        onLeave: () => fade_in_up_anim.reverse(),
      });

      ScrollTrigger.create({
        trigger: fade_in_up,
        start: `top-=${5 * svh} bottom+=${14 * rem}px`,
        onEnterBack: () => fade_in_up_anim.restart(),
        onLeaveBack: () => fade_in_up_anim.reverse(),
      });
    });
  }

  // Fade in left

  if (document.querySelectorAll(".fade-in-left").length) {
    const fade_in_lefts = gsap.utils.toArray(".fade-in-left");
    fade_in_lefts.forEach((fade_in_left) => {
      var hasChildAnimation = fade_in_left.classList.contains("child-animation");
      var fade_in_left_anim_child;

      if (!mediaQueryAllMobile) {
        if (hasChildAnimation) {
          let fade_in_left_child = fade_in_left.querySelector("img");
          fade_in_left_anim_child = gsap.to(fade_in_left_child, {
            scale: "1",
            duration: 1.5,
            ease: easing,
          });
        }
      }

      const fade_in_left_anim_parent = gsap.to(fade_in_left, {
        x: "0",
        autoAlpha: 1,
        duration: 1.5,
        ease: easing,
      });

      const fade_in_left_anim = gsap.timeline({ paused: true });
      fade_in_left_anim.add(fade_in_left_anim_parent);

      if (!mediaQueryAllMobile) {
        if (hasChildAnimation) {
          fade_in_left_anim.add(fade_in_left_anim_child, "<");
        }
      }

      ScrollTrigger.create({
        trigger: fade_in_left,
        start: top_pos_animations,
        onEnter: () => fade_in_left_anim.play(),
      });

      ScrollTrigger.create({
        trigger: fade_in_left,
        start: bottom_pos_animations,
        onEnterBack: () => fade_in_left_anim.restart(),
        onLeaveBack: () => fade_in_left_anim.reverse(),
      });
    });
  }

  // Fade in right

  if (document.querySelectorAll(".fade-in-right").length) {
    const fade_in_rights = gsap.utils.toArray(".fade-in-right");
    fade_in_rights.forEach((fade_in_right) => {
      var hasChildAnimation = fade_in_right.classList.contains("child-animation");
      var fade_in_right_anim_child;

      if (!mediaQueryAllMobile) {
        if (hasChildAnimation) {
          let fade_in_right_child = fade_in_right.querySelector("img");
          fade_in_right_anim_child = gsap.to(fade_in_right_child, {
            scale: "1",
            duration: 1.5,
            ease: easing,
          });
        }
      }

      const fade_in_right_anim_parent = gsap.to(fade_in_right, {
        x: "0",
        autoAlpha: 1,
        duration: 1.5,
        ease: easing,
      });

      const fade_in_right_anim = gsap.timeline({ paused: true });
      fade_in_right_anim.add(fade_in_right_anim_parent);

      if (!mediaQueryAllMobile) {
        if (hasChildAnimation) {
          fade_in_right_anim.add(fade_in_right_anim_child, "<");
        }
      }

      ScrollTrigger.create({
        trigger: fade_in_right,
        start: top_pos_animations,
        onEnter: () => fade_in_right_anim.play(),
      });

      ScrollTrigger.create({
        trigger: fade_in_right,
        start: bottom_pos_animations,
        onEnterBack: () => fade_in_right_anim.restart(),
        onLeaveBack: () => fade_in_right_anim.reverse(),
      });
    });
  }

  // Fade in stagger

  if (document.querySelectorAll(".fade-in-stagger-cont").length) {
    const fade_in_staggers = Array.from(document.querySelectorAll(".fade-in-stagger-cont"));
    fade_in_staggers.forEach((fade_in_stagger) => {
      Array.from(fade_in_stagger.children).forEach((child) => {
        child.classList.toggle("fade-in-stagger");
      });
      fade_in_stagger.style.opacity = "1";

      const fade_in_this_staggers = Array.from(fade_in_stagger.querySelectorAll(".fade-in-stagger"));
      const fade_in_stagger_anim = gsap.to(fade_in_this_staggers, {
        duration: 1,
        autoAlpha: 1,
        ease: easing,
        stagger: {
          from: 0,
          amount: 0.5,
        },
      });

      fade_in_stagger_anim.pause(0);

      ScrollTrigger.create({
        trigger: fade_in_stagger,
        start: "top 70%",
        onEnter: () => fade_in_stagger_anim.play(),
        onLeave: () => fade_in_stagger_anim.reverse(),
      });

      ScrollTrigger.create({
        trigger: fade_in_stagger,
        start: "top bottom",
        onEnterBack: () => fade_in_stagger_anim.restart(),
        onLeaveBack: () => fade_in_stagger_anim.reverse(),
      });
    });
  }

  // Fade in up stagger

  if (document.querySelectorAll(".fade-in-up-stagger-cont").length) {
    const fade_in_up_staggers = Array.from(document.querySelectorAll(".fade-in-up-stagger-cont"));
    fade_in_up_staggers.forEach((fade_in_up_stagger) => {
      Array.from(fade_in_up_stagger.children).forEach((child) => {
        child.classList.toggle("fade-in-up-stagger");
      });
      fade_in_up_stagger.style.opacity = "1";

      const fade_in_up_this_staggers = Array.from(fade_in_up_stagger.querySelectorAll(".fade-in-up-stagger"));
      const fade_in_up_stagger_anim = gsap.to(fade_in_up_this_staggers, {
        duration: 0.7,
        autoAlpha: 1,
        y: 0,
        ease: easing,
        stagger: {
          from: 0,
          amount: 0.5,
        },
      });

      fade_in_up_stagger_anim.pause(0);

      ScrollTrigger.create({
        trigger: fade_in_up_stagger,
        start: "top 90%",
        onEnter: () => fade_in_up_stagger_anim.play(),
        onLeave: () => fade_in_up_stagger_anim.reverse(),
      });

      ScrollTrigger.create({
        trigger: fade_in_up_stagger,
        start: "top bottom",
        onEnterBack: () => fade_in_up_stagger_anim.restart(),
        onLeaveBack: () => fade_in_up_stagger_anim.reverse(),
      });
    });
  }

  // Fade in left stagger

  if (document.querySelectorAll(".fade-in-left-stagger-cont").length) {
    const fade_in_left_staggers = Array.from(document.querySelectorAll(".fade-in-left-stagger-cont"));
    fade_in_left_staggers.forEach((fade_in_left_stagger) => {
      Array.from(fade_in_left_stagger.children).forEach((child) => {
        child.classList.toggle("fade-in-left-stagger");
      });
      fade_in_left_stagger.style.opacity = "1";

      const fade_in_left_this_staggers = Array.from(fade_in_left_stagger.querySelectorAll(".fade-in-left-stagger"));
      const fade_in_left_stagger_anim = gsap.to(fade_in_left_this_staggers, {
        duration: 0.7,
        autoAlpha: 1,
        x: 0,
        ease: easing,
        stagger: {
          from: 0,
          amount: 0.5,
        },
      });

      fade_in_left_stagger_anim.pause(0);

      ScrollTrigger.create({
        trigger: fade_in_left_stagger,
        start: top_pos_animations,
        onEnter: () => fade_in_left_stagger_anim.play(),
        onLeave: () => fade_in_left_stagger_anim.reverse(),
      });

      ScrollTrigger.create({
        trigger: fade_in_left_stagger,
        start: "top bottom",
        onEnterBack: () => fade_in_left_stagger_anim.restart(),
        onLeaveBack: () => fade_in_left_stagger_anim.reverse(),
      });
    });
  }

  // Fade in right stagger

  if (document.querySelectorAll(".fade-in-right-stagger-cont").length) {
    const fade_in_right_staggers = Array.from(document.querySelectorAll(".fade-in-right-stagger-cont"));
    fade_in_right_staggers.forEach((fade_in_right_stagger) => {
      Array.from(fade_in_right_stagger.children).forEach((child) => {
        child.classList.toggle("fade-in-right-stagger");
      });
      fade_in_right_stagger.style.opacity = "1";

      const fade_in_right_this_staggers = Array.from(fade_in_right_stagger.querySelectorAll(".fade-in-right-stagger"));
      const fade_in_right_stagger_anim = gsap.to(fade_in_right_this_staggers, {
        duration: 0.7,
        autoAlpha: 1,
        x: 0,
        ease: easing,
        stagger: {
          from: 0,
          amount: 0.5,
        },
      });

      fade_in_right_stagger_anim.pause(0);

      ScrollTrigger.create({
        trigger: fade_in_right_stagger,
        start: top_pos_animations,
        onEnter: () => fade_in_right_stagger_anim.play(),
        onLeave: () => fade_in_right_stagger_anim.reverse(),
      });

      ScrollTrigger.create({
        trigger: fade_in_right_stagger,
        start: "top bottom",
        onEnterBack: () => fade_in_right_stagger_anim.restart(),
        onLeaveBack: () => fade_in_right_stagger_anim.reverse(),
      });
    });
  }

  // Characters animation

  if (document.querySelectorAll(".character-animation").length) {
    const character_animations = Array.from(document.querySelectorAll(".character-animation"));
    character_animations.forEach((character_animation) => {
      const splittingOutput = new SplitText(character_animation, {
        type: "chars, words",
        charsClass: "char",
      });

      function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }

      const shuffledChars = shuffle(splittingOutput.chars);

      const character_animation_anim = gsap.timeline({ paused: true }).to(shuffledChars, {
        duration: 0.6,
        autoAlpha: 1,
        scale: 1,
        ease: easing,
        stagger: {
          each: 0.02,
          from: "edges",
        },
      });

      ScrollTrigger.create({
        trigger: character_animation,
        start: top_pos_animations,
        onEnter: () => character_animation_anim.play(),
      });

      ScrollTrigger.create({
        trigger: character_animation,
        start: bottom_pos_animations,
        onEnterBack: () => character_animation_anim.restart(),
        onLeaveBack: () => character_animation_anim.reverse(),
      });
    });
  }

  // Text reveal animation

  if (document.querySelectorAll(".text-animation").length) {
    const text_animations = Array.from(document.querySelectorAll(".text-animation"));
    text_animations.forEach((text_animation) => {
      let split = SplitText.create(text_animation, {
        type: "words,chars",
        charsClass: "char",
      });

      let chars = gsap.utils.toArray(split.chars);

      const text_animation_anim = gsap.timeline({ paused: true });

      text_animation_anim
        .to(chars, {
          y: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: easing,
          stagger: 0.015,
        })
        .to(
          chars,
          {
            color: "#ffffff",
            duration: 0.5,
            ease: easing,
            stagger: 0.015,
          },
          "<+=0.5"
        );

      ScrollTrigger.create({
        trigger: text_animation,
        start: top_pos_animations,
        onEnter: () => text_animation_anim.play(),
      });

      ScrollTrigger.create({
        trigger: text_animation,
        start: bottom_pos_animations,
        onEnterBack: () => text_animation_anim.restart(),
        onLeaveBack: () => text_animation_anim.reverse(),
      });
    });
  }

  // SVG animation

  if (document.querySelectorAll(".svg-animation").length) {
    const svg_animations = Array.from(document.querySelectorAll(".svg-animation"));
    svg_animations.forEach((svg_animation) => {
      ScrollTrigger.create({
        trigger: svg_animation,
        start: top_pos_animations,
        onEnter: () => {
          svg_animation.classList.add("active");
        },
        onLeave: () => {
          svg_animation.classList.remove("active");
        },
      });

      ScrollTrigger.create({
        trigger: svg_animation,
        start: bottom_pos_animations,
        onEnterBack: () => {
          svg_animation.classList.add("active");
        },
        onLeaveBack: () => svg_animation.classList.remove("active"),
      });
    });
  }

  // GSAP Numeri

  if (document.querySelectorAll(".numeri").length) {
    const numeri_elements = Array.from(document.querySelectorAll(".numeri"));
    numeri_elements.forEach((numeri) => {
      const trigger = numeri.parentElement.parentElement || numeri.parentElement;

      let numeroNode = Array.from(numeri.querySelectorAll("strong")[0].childNodes).filter(function (node) {
        return node.nodeType === Node.TEXT_NODE;
      })[0];

      const numeri_anim = gsap.from(numeroNode, {
        textContent: 0,
        duration: 1,
        snap: { textContent: 1 },
        stagger: {
          from: 0,
          amount: 0.5,
        },
      });

      numeri_anim.pause(0);

      ScrollTrigger.create({
        trigger: trigger,
        start: "top 70%",
        onEnter: () => numeri_anim.play(),
      });

      ScrollTrigger.create({
        trigger: trigger,
        start: bottom_pos_animations,
        onEnterBack: () => numeri_anim.restart(),
        onLeaveBack: () => numeri_anim.reverse(),
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (
    !document.body.classList.contains("wp-admin") &&
    !document.body.classList.contains("trp-editor-body") &&
    !document.body.classList.contains("login")
  ) {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        gsapAnimations();
      });
    } else {
      gsapAnimations();
    }
  }
});
