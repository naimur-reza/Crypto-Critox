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
      delay: 0.5,
      opacity: 0,
      y: 15,
      duration: 0.5,
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

    tl.from(".btn-animate", {
      opacity: 0,
    });

    tl.from(
      ".coin-animate",
      {
        opacity: 0,
        duration: 2,
      },
      "<"
    );

    tl.from(
      ".globe-animate",
      {
        opacity: 0,
        duration: 2,
      },
      "<"
    );
  });
};
