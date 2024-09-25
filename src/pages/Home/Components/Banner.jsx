import { info } from "../../../constant/info";
import { useBannerAnimations } from "../../../animation/Home/useBannerAnimations";
import assets from "../../../assets";
import Button from "../../../components/Button";

const Banner = () => {
  // Banner Animations
  useBannerAnimations();

  return (
    <section className="overflow-hidden relative  flex items-center justify-center pt-[70px]">
      {/* Background 3D Images */}
      <img
        src={assets.icons.globe}
        className="absolute hidden lg:block top-[20%] right-8  globe-animate animate-slow-spin"
        alt="globe"
      />

      <img
        src={assets.icons.bitcoin}
        className="absolute   left-[5%]  bottom-[30%]  coin-animate   animate-slow-reverse"
        alt="bitcoin"
      />
      <img
        src={assets.icons.ellipse}
        className="absolute hidden lg:block right-0 bottom-0"
        alt="ellipse"
      />

      <img
        src={assets.icons.rocket}
        className="absolute   hidden w-[170px] lg:block left-[-5%] -z-[3] bottom-[-5%] rocket-animate"
        alt="rocket"
      />

      <div>
        <div className="grid container text-center lg:text-left py-20 grid-cols-12 items-center ">
          <div className="  py-20  col-span-12 lg:col-span-6">
            <h1 className="lg:text-5xl text-3xl  font-bold banner-title">
              Find the Next Crypto Gem on{" "}
              <span className="text-blue-500 underline">
                Crito<span className="text-yellow-500 underline">X</span>
              </span>
            </h1>
            <p className="mt-5 lg:text-lg text-gray-300 max-w-md  mb-8 banner-text">
              Coin CritoX is the easiest, safest, and fastest way to buy & sell
              crypto asset exchange.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button>Connect Wallet</Button>
              <Button variant="accent">Explore More</Button>
            </div>
          </div>
          <div className="  lg:p-4 col-span-12 lg:col-span-5 lg:col-start-8 relative max-lg:flex max-lg:justify-center ">
            <img
              className="relative z-[3] banner-img"
              src={assets.icons.hero}
              alt="Hero"
            />
            <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] absolute top-[6%] blur-[85px] left-0 bg-[#3a96ff]/50" />
          </div>

          {/* Column Information */}
          <div className="col-span-12 grid grid-cols-12 pt-[120px] xl:divide-x divide-gray-400/70 gap-6 ">
            {info.map((item, index) => (
              <div
                key={index}
                className="col-span-6 lg:col-span-3 lg:pl-8 py-2 w-full text-start space-y-4"
              >
                <p className="lg:text-2xl text-xl font-bold">{item.count}</p>
                <p className="text-gray-300  font-medium text-sm lg:text-base">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Blurs Shadows */}

        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[6%] blur-[85px] left-[-12%] bg-[#3a96ff]/50" />
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[6%] blur-[85px] right-[-8%] bg-[#12CE95]/50"></div>
        <div className="max-lg:hidden w-[250px] h-[204px] xxl:w-[404px] xxl:h-[404px] absolute bottom-[-15%] blur-[85px] -z-[4] left-[-12%] bg-[rgba(240,185,11,0.50)]" />
      </div>
    </section>
  );
};

export default Banner;
