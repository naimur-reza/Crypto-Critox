import { useGSAP } from "@gsap/react";
import assets from "../../../assets";
import Button from "../../../components/Button";
import gsap from "gsap";

const CryptoExchange = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".try-el",
      {
        y: 0,
      },
      {
        y: -20,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
      }
    );
  });

  return (
    <div className="py-100 relative bg-darkBlue2 overflow-hidden">
      <div className="container grid grid-cols-12 items-center place-items-center gap-7">
        <div className="col-span-12 lg:col-span-5">
          <img src={assets.icons.tryPng} alt="try_png" />
        </div>
        <div className="col-span-12 lg:col-span-7 ">
          <h1 className="text-xl lg:text-3xl font-semibold pb-3 ">
            Try Our Crypto{" "}
            <span className="text-primary underline ">CritoX</span> Exchange Now
          </h1>
          <p className="font-medium text-sm lg:text-base tracking-wide text-gray-300">
            Start trading to get up to{" "}
            <span className="font-bold text-lg">11,200 USDT</span> in rewards!
          </p>

          <div className="flex justify-between lg:items-center bg-darkBlue p-5 rounded-3xl mt-7 flex-col lg:flex-row space-y-3">
            <div className="flex flex-col gap-3 max-w-md">
              <h1 className="text-xl lg:text-2xl font-semibold">Sign Up</h1>
              <p className="text-sm lg:text-base text-gray-300 tracking-wide">
                Sign Up and Claim 500 USDT token + 200 USDT coupon + 7500 USDT
                Futures Trial Fund
              </p>
            </div>
            <div className="">
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[-8%] blur-[85px] left-[-8%] bg-[#3a96ff]/50" />
      <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[-5%] -right-[8%] blur-[85px]   bg-[#12ffb8]/50" />
      <img
        className="hidden lg:block absolute left-10 bottom-10 z-[2] try-el"
        src={assets.icons.tryEl}
        alt="try_el"
      />
      <img
        className="hidden lg:block absolute right-10 top-10 z-[2] globe_el animate-slow-spin"
        src={assets.icons.globe}
        alt="try_el"
      />
    </div>
  );
};

export default CryptoExchange;
