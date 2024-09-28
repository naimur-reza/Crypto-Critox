import Marquee from "react-fast-marquee";
import assets from "../../../assets";

const TrustedBy = () => {
  return (
    <div className="relative overflow-hidden py-100 bg-darkBlue2">
      <div className="">
        <h1 className="title-head mb-10 xl:mb-[60px] text-center">
          Trusted By
        </h1>
        <div className="max-lg:hidden w-[250px] h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-primary/50" />
        <div className="max-lg:hidden w-[250px] h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50" />

        <Marquee direction="right" pauseOnHover>
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
        <Marquee className="mt-10" pauseOnHover>
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
