import Button from "../../../components/Button";
import blogs from "../../../constant/blogs";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NewsArticle = () => {
  const newsRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".news-animate").forEach(
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
              start: "top 45%",
              end: "bottom 20%",
              toggleActions: "play pause resume pause",
            },
          }
        );
      },
      { scope: newsRef }
    );
  });

  return (
    <div ref={newsRef}>
      <div className="container py-100 ">
        <div className="flex items-center justify-between mb-10 xl:mb-[60px] news-animate">
          <h1 className="title-head ">
            News & <span className="text-primary underline">Article</span>
          </h1>
          <Button>View More</Button>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {blogs.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "row-span-2 flex-col" : "lg:flex-row flex-col"
              } col-span-12 lg:col-span-6 bg-darkBlue flex gap-5 p-4 rounded-2xl items-center news-animate `}
            >
              <img
                src={item.image}
                className={`rounded-xl max-sm:w-full lg:w-auto ${
                  index === 0 ? "w-full" : "w-[260px]"
                }`}
                alt={item.title}
              />
              <div className="space-y-4">
                <div className="pl-1 space-y-5">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-[15px] tracking-wide">
                    {item.description}
                  </p>
                </div>
                <Button
                  bg="white"
                  text="primary"
                  hover="text-white duration-200"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
