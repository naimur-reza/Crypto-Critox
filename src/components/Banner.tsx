import React from "react";
import hero from "../assets/icons/hero.png";
import globe from "../assets/icons/globe.png";
import bitcoin from "../assets/icons/bitcoin.png";

const Banner = () => {
  return (
    <>
      <div className="  flex items-center justify-center min-h-[calc(100vh+80px)]">
        <div className="grid container text-center lg:text-left py-20 grid-cols-12 items-center ">
          <div className="  py-20  col-span-12 lg:col-span-6">
            <h1 className="lg:text-5xl text-3xl  font-bold">
              Find the Next Crypto Gem on{" "}
              <span className="text-blue-500 underline">
                Crito<span className="text-yellow-500 underline">X</span>
              </span>
            </h1>
            <p className="mt-5 lg:text-lg text-gray-300 max-w-md  mb-8">
              Coin CritoX is the easiest, safest, and fastest way to buy & sell
              crypto asset exchange.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <div className="border border-blue-500 group  hover:border-white rounded-full transition-all duration-500 p-0.5 w-fit ">
                <button className="btn-primary">Connect Wallet</button>
              </div>
              <div className="border border-blue-500 group  hover:border-white transition-all duration-500 rounded-full p-0.5 w-fit ">
                <button className="btn-accent">Explore More</button>
              </div>
            </div>
          </div>
          <div className="  lg:p-4 col-span-12 lg:col-span-5 lg:col-start-8 relative max-lg:flex max-lg:justify-center ">
            <img className="relative z-[3]" src={hero} alt="Hero" />
            <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] absolute top-[6%] blur-[85px] left-0 bg-[#3a96ff]/50" />
          </div>
        </div>
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[6%] blur-[85px] left-[-12%] bg-[#3a96ff]/50" />
      </div>
      <div className="hidden lg:block">
        <img
          src={globe}
          className="absolute top-[20%] right-12 animate-slow-spin"
          alt="globe"
        />
      </div>
      <div>
        <img
          src={bitcoin}
          className="absolute left-[5%] lg:bottom-[5%] -bottom-[35%]  animate-slow-reverse  "
          alt="bitcoin"
        />
      </div>
    </>
  );
};

export default Banner;
