import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OpportunityAnimation = (opportunitiesCardsRef) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".opportunities-title",
        start: "top 50%",
        end: "bottom center",
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

    gsap.utils.toArray(".opportunities-card").forEach(
      (card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play pause resume pause",
            },
          }
        );
      },
      { scope: opportunitiesCardsRef }
    );
  });
};

export default OpportunityAnimation;
