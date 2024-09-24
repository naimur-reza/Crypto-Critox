import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Set up smooth scrolling
    const container = containerRef.current;
    gsap.to(container, {
      y: () =>
        -(container.scrollHeight - document.documentElement.clientHeight),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmoothScroll;
