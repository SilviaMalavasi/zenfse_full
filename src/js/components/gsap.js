import { mediaQueryAllMobile, rem, vw, top_pos_animations } from "../base/globals.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function gsapAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Fade in

  if (document.querySelectorAll(".fade-in").length) {
    const fade_ins = gsap.utils.toArray(".fade-in");
    fade_ins.forEach((fade_in) => {
      const fade_in_anim = gsap.to(fade_in, {
        autoAlpha: 1,
        duration: 1,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: fade_in,
        start: top_pos_animations,
        onEnter: () => fade_in_anim.play(),
      });

      ScrollTrigger.create({
        trigger: fade_in,
        start: "top bottom",
        onEnterBack: () => fade_in_anim.restart(),
        onLeaveBack: () => fade_in_anim.pause(0),
      });
    });
  }

  // Fade in up

  if (document.querySelectorAll(".fade-in-up").length) {
    const fade_in_ups = gsap.utils.toArray(".fade-in-up");
    fade_in_ups.forEach((fade_in_up) => {
      const fade_in_up_anim = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: fade_in_up,
        start: "top bottom+=" + 14 * rem + "px",
        onEnter: () => fade_in_up_anim.play(),
        onLeave: () => fade_in_up_anim.pause(0),
      });

      ScrollTrigger.create({
        trigger: fade_in_up,
        start: `top bottom+=${14 * rem}px`,
        onEnterBack: () => fade_in_up_anim.restart(),
        onLeaveBack: () => fade_in_up_anim.pause(0),
      });
    });
  }

  // Fade in left

  if (document.querySelectorAll(".fade-in-left").length) {
    const fade_in_lefts = gsap.utils.toArray(".fade-in-left");
    fade_in_lefts.forEach((fade_in_left) => {
      const fade_in_left_anim = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: fade_in_left,
        start: top_pos_animations,
        onEnter: () => fade_in_left_anim.play(),
      });

      ScrollTrigger.create({
        trigger: fade_in_left,
        start: "top bottom",
        onEnterBack: () => fade_in_left_anim.restart(),
        onLeaveBack: () => fade_in_left_anim.pause(0),
      });
    });
  }

  // Fade in right

  if (document.querySelectorAll(".fade-in-right").length) {
    const fade_in_rights = gsap.utils.toArray(".fade-in-right");
    fade_in_rights.forEach((fade_in_right) => {
      const fade_in_right_anim = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: fade_in_right,
        start: top_pos_animations,
        onEnter: () => fade_in_right_anim.play(),
      });

      ScrollTrigger.create({
        trigger: fade_in_right,
        start: "top bottom",
        onEnterBack: () => fade_in_right_anim.restart(),
        onLeaveBack: () => fade_in_right_anim.pause(0),
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
      const fade_in_this_staggers = Array.from(fade_in_stagger.querySelectorAll(".fade-in-stagger"));
      const fade_in_stagger_anim = gsap.to(fade_in_this_staggers, {
        duration: 1,
        autoAlpha: 1,
        ease: "power1.inOut",
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
        onLeave: () => fade_in_stagger_anim.pause(0),
      });

      ScrollTrigger.create({
        trigger: fade_in_stagger,
        start: "top bottom",
        onEnterBack: () => fade_in_stagger_anim.restart(),
        onLeaveBack: () => fade_in_stagger_anim.pause(0),
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
      const fade_in_up_this_staggers = Array.from(fade_in_up_stagger.querySelectorAll(".fade-in-up-stagger"));
      const fade_in_up_stagger_anim = gsap.to(fade_in_up_this_staggers, {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power1.inOut",
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
        onLeave: () => fade_in_up_stagger_anim.pause(0),
      });

      ScrollTrigger.create({
        trigger: fade_in_up_stagger,
        start: "top bottom",
        onEnterBack: () => fade_in_up_stagger_anim.restart(),
        onLeaveBack: () => fade_in_up_stagger_anim.pause(0),
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
      const fade_in_left_this_staggers = Array.from(fade_in_left_stagger.querySelectorAll(".fade-in-left-stagger"));
      const fade_in_left_stagger_anim = gsap.to(fade_in_left_this_staggers, {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        ease: "power1.inOut",
        stagger: {
          from: 0,
          amount: 0.5,
        },
      });

      fade_in_left_stagger_anim.pause(0);

      ScrollTrigger.create({
        trigger: fade_in_left_stagger,
        start: "top 70%",
        onEnter: () => fade_in_left_stagger_anim.play(),
        onLeave: () => fade_in_left_stagger_anim.pause(0),
      });

      ScrollTrigger.create({
        trigger: fade_in_left_stagger,
        start: "top bottom",
        onEnterBack: () => fade_in_left_stagger_anim.restart(),
        onLeaveBack: () => fade_in_left_stagger_anim.pause(0),
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
      const fade_in_right_this_staggers = Array.from(fade_in_right_stagger.querySelectorAll(".fade-in-right-stagger"));
      const fade_in_right_stagger_anim = gsap.to(fade_in_right_this_staggers, {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        ease: "power1.inOut",
        stagger: {
          from: 0,
          amount: 0.5,
        },
      });

      fade_in_right_stagger_anim.pause(0);

      ScrollTrigger.create({
        trigger: fade_in_right_stagger,
        start: "top 70%",
        onEnter: () => fade_in_right_stagger_anim.play(),
        onLeave: () => fade_in_right_stagger_anim.pause(0),
      });

      ScrollTrigger.create({
        trigger: fade_in_right_stagger,
        start: "top bottom",
        onEnterBack: () => fade_in_right_stagger_anim.restart(),
        onLeaveBack: () => fade_in_right_stagger_anim.pause(0),
      });
    });
  }
}
