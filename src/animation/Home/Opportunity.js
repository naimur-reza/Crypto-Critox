import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OpportunityAnimation = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".opportunities-title",
        start: "top 90%",
        end: "bottom center",
        markers: true,
      },
    });

    tl.from(".opportunities-title", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    });

    tl.from(".opportunities-description", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    });

    tl.from(".opportunities-card", {
      delay: 0.4,
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.3,
    });
  });
};

export default OpportunityAnimation;
