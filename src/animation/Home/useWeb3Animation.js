import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const useWeb3Animation = (containerRef) => {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
        },
      });

      tl.from(".heading-title", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
      });

      tl.from(".sub-text", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.utils.toArray(".cards-animate").forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.3,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
              trigger: card,
              start: "top 65%",
              end: "bottom 20%",
              toggleActions: "play pause resume pause",
            },
          }
        );
      });

      tl.from(".cards-animate .swiper-slide", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      tl.from(".globe-animate", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );
};

export default useWeb3Animation;
