import Marquee from "react-fast-marquee";
import assets from "../../../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const TrustedBy = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 45%",
        end: "bottom 20%",
        toggleActions: "play pause resume pause",
      },
    });

    tl.from(".text-animate", {
      opacity: 0,
      y: 30,
    });

    tl.from(".partner-animate", {
      opacity: 0,
      duration: 0.6,
    });
    tl.from(".partner-animate-2", {
      opacity: 0,
      duration: 0.6,
    });
  });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-100 bg-darkBlue2"
    >
      <div className="">
        <h1 className="title-head mb-10 xl:mb-[60px] text-center text-animate">
          Trusted By
        </h1>
        <div className="max-lg:hidden w-[250px] h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-primary/50" />
        <div className="max-lg:hidden w-[250px] h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50" />

        <Marquee direction="right" pauseOnHover className="partner-animate">
          <div className="flex  items-center  overflow-x-hidden">
            {assets.partners.map((item, index) => (
              <div key={index} className="will-change-transform">
                <img
                  className="mr-8 w-24 lg:w-auto lg:mr-20 z-[3] partner-item"
                  src={item}
                  alt="partners"
                />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee className="mt-10 partner-animate-2" pauseOnHover>
          <div className="flex  items-center  overflow-x-hidden">
            {assets.partners.reverse().map((item, index) => (
              <div key={index} className="will-change-transform">
                <img
                  className="mr-8 w-24 lg:w-auto lg:mr-20 z-[3] partner-item"
                  src={item}
                  alt="partners"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedBy;
