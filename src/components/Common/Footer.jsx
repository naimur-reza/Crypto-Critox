import { useGSAP } from "@gsap/react";
import assets from "../../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaArrowRight,
} from "react-icons/fa";
import gsap from "gsap";
import { useRef } from "react";

const Footer = () => {
  const quickLinks = [
    "Buy Crypto",
    "Earn",
    "Sell Crypto",
    "Blog",
    "Swap",
    "Pricing",
    "Coin Market",
    "Contact Us",
  ];

  const footerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play pause resume pause",
      },
    });

    tl.from(".footer-animate", {
      opacity: 0,
      y: 10,
      stagger: 0.3,
    });
  });

  return (
    <div className="bg-darkBlue2 lg:pt-[100px] pt-10 relative overflow-hidden">
      <div
        ref={footerRef}
        className="container grid grid-cols-12 gap-7 lg:divide-x divide-gray-700"
      >
        <div className="col-span-12 lg:col-span-3 footer-animate">
          <h1 className="text-2xl font-semibold pb-5">Quick Links</h1>

          <div className="grid grid-cols-2 gap-5 font-medium text-gray-200 py-10">
            {quickLinks.map((link, index) => (
              <div key={index}>{link}</div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 text-center px-4 md:px-6 lg:px-10 xxl:px-16 footer-animate">
          <h1 className="text-xl lg:text-2xl font-semibold pb-5 text-center">
            Newsletter
          </h1>
          <p className="text-gray-300 text-sm lg:text-base">
            Welcome to CritoX your gateway to the world of Web3 trading! Our
            user-friendly platform
          </p>
          <div className="flex items-center  mt-8">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent border border-gray-800  text-sm font-medium py-4 rounded-full px-4 w-full "
            />
            <button className="bg-primary  p-4 text-white rounded-full">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 text-center px-5 z-[2] footer-animate">
          <h1 className="text-xl lg:text-2xl font-semibold ">Follow Us</h1>
          <div className="flex items-center gap-5 lg:py-10 py-5 justify-center text-4xl">
            <FaFacebookF className="bg-gray-800/50 hover:bg-gray-800/70  cursor-pointer rounded-full p-2 " />
            <FaTwitter className="bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer rounded-full p-2" />
            <FaInstagram className="bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer rounded-full p-2" />
            <FaDiscord className="bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer rounded-full p-2" />
          </div>
          <p className="text-gray-300 text-sm lg:text-base">
            empowers you to explore a wide range of popular cryptocurrencies
          </p>
        </div>
      </div>

      <div className="text-center text-gray-300  mt-10 py-8 border-t border-gray-800 text-sm lg:text-lg font-medium footer-animate">
        Copyright @ 2024 CritoX | Designed By Pixelaxis
      </div>

      {/* shadows */}

      <img
        src={assets.icons.howToStart2}
        className="hidden lg:block absolute top-0 right-0 footer-animate"
      />
      <img
        src={assets.icons.footerEl}
        className="hidden lg:block absolute bottom-0 right-0 footer-animate"
      />
      <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-0 blur-[85px] left-[-8%] bg-[#3a96ff]/50" />
      <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute -top-[6%] blur-[85px] right-[-8%] bg-[#12CE95]/50" />
    </div>
  );
};

export default Footer;
