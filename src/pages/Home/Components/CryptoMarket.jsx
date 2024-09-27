import useWeb3Animation from "../../../animation/Home/useWeb3Animation";
import { marketData } from "../../../constant/cryptoMarket";

import { useRef } from "react";

const CryptoMarket = () => {
  const containerRef = useRef(null);

  useWeb3Animation(containerRef);

  return (
    <div ref={containerRef} className="min-h-screen">
      <div className="container py-100">
        <div className="flex justify-between flex-wrap gap-4 items-center mb-10 xl:mb-[60px]">
          <h1 className="title-head heading-title">
            Crypto Market <span className="text-primary">Today</span>
          </h1>
          <button className="text-yellow-500 text-sm hover:underline lg:text-lg font-semibold sub-text">
            View all 750+ Coins
          </button>
        </div>

        <div className="grid grid-cols-12 gap-5 cards-animate">
          {marketData.map((market, idx) => (
            <div
              key={idx}
              className="col-span-12 lg:col-span-6  border p-5 border-gray-600/50 rounded-lg"
            >
              <div className="mb-5 pb-5 border-b-2 border-gray-600/50">
                <h1 className=" font-bold  text-lg pl-4 border-l-4 border-[#12FFB8]">
                  {market.heading}
                </h1>
              </div>

              <div className="space-y-4 lg:space-y-6 xl:space-y-8 ">
                {market.data.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={item.icon} alt="bitcoin" />
                      <div>
                        <h1 className="lg:text-lg font-medium text-gray-200">
                          {item.name}
                        </h1>
                        <p className="text-sm text-gray-400">{item.symbol}</p>
                      </div>
                    </div>

                    <div className="text-end">
                      <p className="lg:text-lg font-medium text-gray-200">
                        ${item.price}
                      </p>
                      <p className="lg:text-sm text-xs text-gray-400 font-medium">
                        {item.change.includes("-") ? (
                          <span className="text-red-500">{item.change}</span>
                        ) : (
                          <span className="text-[#12FFB8]">{item.change}</span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoMarket;
