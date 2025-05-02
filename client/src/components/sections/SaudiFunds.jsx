import React from "react";
import sideImg2 from "../../assets/images/nakhlalightkothi.webp";
import sideImg3 from "../../assets/images/nkhlakothi.webp";
import pakisland from "../../assets/images/alnakhlahills.png";
import sflag from "../../assets/images/Flag_of_Saudi_Arabia.svg";
const SaudiFunds = () => {
  return (
    <div className="bg-[#F6F7F9] py-10 rounded-2xl">
      <section className="  overflow-hidden max-w-[1200px] mx-auto">
        <div className=" container bg-white  rounded-2xl  mx-auto px-12 py-10 ">
          <div className="flex flex-col lg:flex-row items-center ">
            {/* Content - Right */}
            <div className="w-full lg:w-1/2 text-left pl-6">
              <div className="inline-flex items-center border border-[#D1D3D7] rounded-full px-3 py-2 text-sm mb-4">
                <div className="w-6 h-6 mr-4 relative">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <img
                      src={sflag}
                      alt="Saudi Arabia Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="font-bold text-[14px] text-[#121C30]">
                  Saudi Arabia
                </span>
              </div>

              <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#121C30] leading-tight">
                Private funds in the world's fastest growing economy
              </h2>

              <p className="text-lg text-[#5A616E] mb-6 max-w-lg">
                Invest in commercial and residential funds that are otherwise
                only available to high net worth investors
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex mb-2 items-center justify-center bg-[#121C30] text-white px-4 py-3 rounded-lg font-medium"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* Phone image mockup - Left */}
            <div className="pl-6 w-full lg:w-1/2 relative">
              <div className="bg-[#007D8B] max-h-[456px] max-w-[548px]  rounded-3xl p-6 lg:p-12 relative z-0 overflow-hidden">
                {/* Main phone mockup */}
                <div className="relative z-20 mx-auto max-w-sm">
                  <div className="h-6  relative"></div>
                  <div className="relative">
                    <div className="h-full object-contain relative overflow-hidden">
                      {/* Main property image */}
                      <img
                        src={pakisland}
                        alt="Park Islands, Dubai Marina"
                        className="w-[295px]  mx-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Property card - Top right */}
                <div className="absolute top-35 z-20 right-20 transform rotate-5 shadow-xl  max-w-[140px]">
                  <div className="bg-white rounded-xl p-3">
                    <div className="relative  w-full h-20 rounded-lg mb-2 ">
                      <img
                        src={sideImg3}
                        alt="Boulevard Point, Downtown Dubai"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium mb-1">
                        Al Yasmeen Real Estate Fund
                      </p>
                      <p className="text-[#30D48C] font-bold">+41.4%</p>
                    </div>
                  </div>
                </div>

                {/* Property card - Bottom left */}
                <div className="absolute bottom-10 left-10 z-10 transform -rotate-12 shadow-xl max-w-[220px]">
                  <div className="bg-white rounded-xl p-3">
                    <div className="relative w-full h-24 rounded-lg mb-2 overflow-hidden">
                      <img
                        src={sideImg2}
                        alt="Marina Gate 1, Dubai Marina"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium mb-1">
                        Al Khuzama Real Estate Fund
                      </p>
                      <p className="text-[#2FB183] text-[16px] font-bold">
                        +32.2%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiFunds;