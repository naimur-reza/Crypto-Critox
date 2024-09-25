import { useSwiper } from "swiper/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-2 justify-center pt-8 lg:pt-10">
      <button
        className="border rounded-full p-1 lg:p-3 hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white  transition-colors duration-300"
        onClick={() => swiper.slidePrev()}
      >
        <MdOutlineKeyboardArrowLeft size={35} />
      </button>
      <button
        className="border rounded-full p-1 lg:p-3 hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition-colors du ration-300"
        onClick={() => swiper.slideNext()}
      >
        <MdOutlineKeyboardArrowRight size={35} />
      </button>
    </div>
  );
};

export default SwiperButtons;
