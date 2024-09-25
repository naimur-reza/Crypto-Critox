import globe from "../assets/icons/opportunities/globe.png";
import { opportunities } from "../constant/opportunities";
import OpportunityAnimation from "../animation/Home/Opportunity";

const Opportunities = () => {
  OpportunityAnimation();

  return (
    <div className="min-h-screen container pt-[100px]">
      <div className="grid grid-cols-12 mb-10 lg:mb-[60px] gap-5">
        <h1 className="col-span-12 md:col-span-12 xl:col-span-4 text-xl lg:text-3xl font-bold tracking-wide opportunities-title">
          Find your next{" "}
          <span className="text-blue-500 underline ">crypto</span> opportunity
        </h1>

        <p className="col-span-12 md:col-span-12 xl:col-span-4 xl:col-start-9   text-dark text-xs md:text-base opportunities-description">
          Our comprehensive cybersecurity platform, driven by artificial
          intelligence, not only safeguards your organization.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 ">
        <div className="col-span-12 md:col-span-5 lg:col-span-4 rounded-xl row-span-2 flex flex-col justify-between bg-darkBlue opportunities-card">
          <div className="p-6 space-y-3">
            <h1 className="text-xl text-zinc-200">Receive up to</h1>
            <h1 className="text-5xl font-bold ">15%</h1>
            <h1 className="text-xl text-zinc-200 pt-3">
              in annual crypto rewards
            </h1>
            <h1 className="text-zinc-400 leading-relaxed">
              Earn rewards by holding cryptocurrencies in your account.
              Effortlessly.
            </h1>
          </div>

          <img src={globe} alt="globe" className="lg:ml-5" />
        </div>
        {opportunities.map((item) => (
          <div
            key={item.id}
            className="col-span-12 md:col-span-6 lg:col-span-4  bg-darkBlue rounded-xl opportunities-card"
          >
            <div className="p-6 !pb-0 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h1 className="text-2xl text-zinc-200 font-semibold">
                  {item.title}
                </h1>
                <h1 className="text-sm lg:text-base text-zinc-400 ">
                  {item.description}
                </h1>
              </div>
              <div className="flex justify-end pb-3">
                <img
                  src={item.image}
                  className="object-cover"
                  alt={item.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
