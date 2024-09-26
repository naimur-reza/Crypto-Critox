import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../components/Button";
import "swiper/css";
import web3Data from "../../../constant/web3";
import assets from "../../../assets";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import SwiperButtons from "./SwiperButtons";
import { useRef } from "react";
import useWeb3Animation from "../../../animation/Home/useWeb3Animation";

const Web3Products = () => {
  const containerRef = useRef(null);

  useWeb3Animation(containerRef);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-darkBlue2 py-14 lg:py-36 relative overflow-hidden"
    >
      <div className="container ">
        <div className="flex  justify-between flex-col lg:flex-row gap-5">
          <div className="max-w-lg">
            <h1 className="title-head heading-title">
              Explore CritoX
              <span className="text-blue-500 underline">Web3</span> Products
            </h1>
            <p className="subtitle mt-3 sub-text">
              Coin CritoX is the easiest, safest, and fastest way to buy & sell
              crypto asset exchange.
            </p>
          </div>

          <div>
            <Button className="btn-primary-container">View More</Button>
          </div>
        </div>

        <div className="flex justify-center items-center pt-20 cards-animate">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper cards-animate"
          >
            {web3Data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-darkBlue2 group hover:bg-darkBlue transition-colors duration-200 p-8 rounded-xl text-center space-y-4 border border-zinc-600/30 ">
                  <div className="border w-fit mx-auto p-4 border-blue-500 rounded-full group-hover:bg-blue-500 transition-colors duration-200 mb-6">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-white line-clamp-2 subtitle">
                    {item.description}
                  </p>
                  <h3 className="lg:text-lg text-base font-medium text-white group-hover:underline group-hover:text-blue-500  cursor-pointer pt-3">
                    View Details
                  </h3>
                </div>
              </SwiperSlide>
            ))}
            <SwiperButtons />
          </Swiper>
        </div>
      </div>

      {/* absolute images and shadows */}

      <img
        src={assets.icons.globe}
        className="absolute hidden z-[2] lg:block top-5 right-5  globe-animate animate-slow-spin selector globe-animate"
        alt="globe"
      />
      <img
        className="absolute right-0 bottom-0 selector"
        src={assets.web3.element1}
        alt="element"
      />

      <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute -top-[8%] -right-[8%] blur-[85px]   bg-[#12ffb8]/50" />
      <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute -bottom-[8%] blur-[85px] left-[-12%] bg-[#3a96ff]/50" />
    </section>
  );
};

export default Web3Products;
