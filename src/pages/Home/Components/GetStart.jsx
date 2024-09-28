import { useRef } from "react";
import assets from "../../../assets";
import Button from "../../../components/Button";
import { howToStart } from "../../../constant/howToStart";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const GetStart = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
        },
      });

      tl.from(".heading-title", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.3,
      });

      tl.from(".items-container", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      tl.from(".items", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="bg-darkBlue text-white relative overflow-hidden"
    >
      <div className="container min-h-screen py-100">
        <h1 className="title-head text-center heading-title">
          How To Get <span className="text-primary underline">Started</span>
        </h1>

        {/* bg-shadows & images */}

        <img
          className="absolute bottom-0 left-0 z-[2]"
          src={assets.icons.howToStart}
          alt="how to start"
        />
        <img
          className="absolute top-5 right-10   z-[2]"
          src={assets.icons.howToStart2}
          alt="how to start"
        />
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[-8%] blur-[85px] right-[-8%] bg-[#3a96ff]/50" />
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[-5%] -left-[8%] blur-[85px]   bg-[#12ffb8]/50" />

        {/* process items */}
        <div className="grid grid-cols-12 gap-4 xl:gap-6 z-[2] relative text-center after:w-full after:h-full after:xl:h-[90%] after:absolute after:left-0 after:rounded-xl after:top-0 after:xl:top-[5%] after:bg-darkBlue2 after:z-[-1] mt-10 items-container">
          {howToStart.map((item) => (
            <div
              key={item.id}
              className={`col-span-12 md:col-span-6 lg:col-span-3 text-center  space-y-7 py-10 px-5 items ${
                item.id == 1 ? "bg-primary rounded-xl" : ""
              }`}
            >
              {item.icon ? (
                <div className="size-[50px]  text-xl f-center rounded-full bg-white text-primary mb-4 xl:mb-6 flex items-center justify-center mx-auto ">
                  <item.icon size={24} />
                </div>
              ) : (
                <p className="size-[50px]  text-xl  rounded-full bg-gray-800/80 mb-4 xl:mb-6 flex items-center justify-center mx-auto font-bold">
                  0{item.id}
                </p>
              )}

              <h1 className="text-lg font-bold text-nowrap">{item.title}</h1>
              <p className="subtitle mb-7 xl:mb-10">{item.description}</p>
              <div className="flex justify-center">
                {item.id == 1 ? (
                  <Button
                    bg="white"
                    text="primary"
                    hover="text-white duration-200"
                  >
                    Register Now
                  </Button>
                ) : (
                  <p className="subtitle font-medium ">{item.process}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStart;
