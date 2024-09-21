import React from "react";
import hero from "../assets/icons/hero.png";
import globe from "../assets/icons/globe.png";
import bitcoin from "../assets/icons/bitcoin.png";
import ellipse from "../assets/icons/ellipse-2.png";

const Banner = () => {
  const info = [
    {
      count: "200+",
      title: "Countries Coverd",
    },
    {
      count: "30 Million",
      title: "Global Investors",
    },
    {
      count: "700+",
      title: "Coins",
    },
    {
      count: "$1.36 Billion",
      title: "24h Trading Volume",
    },
  ];

  return (
    <section className="overflow-hidden relative  flex items-center justify-center pt-[50px]">
      {/* Background 3D Images */}
      <img
        src={globe}
        className="absolute hidden lg:block top-[20%] right-8 animate-slow-spin"
        alt="globe"
      />

      <img
        src={bitcoin}
        className="absolute   left-[5%]  bottom-[30%]  animate-slow-reverse  "
        alt="bitcoin"
      />
      <img
        src={ellipse}
        className="absolute hidden lg:block right-0 bottom-0"
        alt="bitcoin"
      />

      <div>
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

          {/* Column Information */}
          <div className="col-span-12 grid grid-cols-12 pt-[120px] xl:divide-x divide-gray-400/70 gap-6 ">
            {info.map((item, index) => (
              <div
                key={index}
                className="col-span-6 lg:col-span-3 lg:pl-8 py-2 w-full text-start "
              >
                <p className="lg:text-2xl text-xl font-bold">{item.count}</p>
                <p className="text-gray-300 lg:font-medium text-sm">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Blurs Shadows */}

        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[6%] blur-[85px] left-[-12%] bg-[#3a96ff]/50" />
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[6%] blur-[85px] right-[-8%] bg-[#12CE95]/50"></div>
      </div>
    </section>
  );
};

export default Banner;
