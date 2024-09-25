import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const useBannerAnimations = () => {
  useGSAP(() => {
    // Rocket Animation
    gsap.to(".rocket-animate", {
      x: 300,
      y: -300,
      scrollTrigger: {
        trigger: ".rocket-animate",
        start: "top 90%",
        end: "bottom center",
        scrub: 1,
      },
    });
  });

  useGSAP(() => {
    // Text and Image Animations
    const tl = gsap.timeline();

    tl.from(".banner-title", {
      delay: 0.7,
      opacity: 0,
      y: 15,
      duration: 0.6,
    });

    tl.from(
      ".banner-img",
      {
        opacity: 0,
        y: 15,
        duration: 0.5,
      },
      "<"
    );

    tl.from(".banner-text", {
      opacity: 0,
      y: 15,
      duration: 0.5,
    });

    tl.from(".banner-btn", {
      opacity: 0,
    });
  });
};
