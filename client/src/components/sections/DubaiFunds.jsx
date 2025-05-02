import React from "react";
import sideImg2 from "../../assets/images/marinapull.avif";
import sideImg3 from "../../assets/images/burjkhalifa.avif";
import pakisland from "../../assets/images/pakislands.png";

const DubaiFunds = () => {
  return (
    <div className="bg-[#F6F7F9] rounded-2xl">
      <section className="  overflow-hidden max-w-[1200px] mx-auto">
        <div className="container bg-white  rounded-2xl  mx-auto px-12 py-10">
          <div className="flex flex-col lg:flex-row items-center  gap-8">
            {/* Phone image mockup - Left */}
            <div className="pl-6 w-full lg:w-1/2 relative">
              <div className="bg-[#30D48C] max-h-[456px] max-w-[548px]  rounded-3xl p-6 lg:p-12 relative z-0 overflow-hidden">
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
                <div className="absolute top-30 z-20 right-20 transform rotate-5 shadow-xl  max-w-[140px]">
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
                        Boulevard Point, Downtown Dubai
                      </p>
                      <p className="text-[#30D48C] font-bold">+10.4%</p>
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
                        Marina Gate 1, Dubai Marina
                      </p>
                      <p className="text-[#2FB183] text-[16px] font-bold">
                        +12.4%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="w-full lg:w-1/2 text-left pl-6 ">
              <div className="inline-flex items-center border border-[#D1D3D7] rounded-full px-3 py-2 text-sm mb-4">
                <div className="w-6 h-6 mr-4 relative">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-black  absolute top-0 left-0"></div>
                    <div className="w-full h-1/3 bg-green-600 absolute top-0 left-0"></div>
                    <div className="w-full h-1/3 bg-white absolute top-1/3 left-0"></div>
                    <div className="w-1/3 h-full bg-red-600 absolute top-0 left-0"></div>
                  </div>
                </div>
                <span className="font-bold text-[14px] text-[#121C30]">
                  United Arab Emirates
                </span>
              </div>

              <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#121C30] leading-tight">
                Invest in the world's best performing residential market
              </h2>

              <p className="text-lg text-[#5A616E] mb-6 max-w-lg">
                Purchase shares in high yield properties in Dubai and start
                building a passive income stream today
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-[#121C30] text-white px-4 py-2 rounded-lg font-medium"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-white border border-gray-300 px-4 py-3 rounded-lg text-[#121C30] font-medium"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-[#30D48C]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="currentColor"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M15.4531 11.2969L10.5781 8.17188C10.4688 8.09375 10.3438 8.07812 10.2188 8.10938C10.0938 8.14062 10 8.21875 9.9375 8.34375C9.875 8.46875 9.85938 8.59375 9.89062 8.71875C9.92188 8.84375 10 8.9375 10.125 9L14.625 11.9062C14.7188 11.9688 14.7812 12.0625 14.7812 12.1875C14.7812 12.3125 14.7188 12.4062 14.625 12.4688L10.125 15.375C10 15.4375 9.92188 15.5312 9.89062 15.6562C9.85938 15.7812 9.875 15.9062 9.9375 16.0312C10 16.1562 10.0781 16.2344 10.1875 16.2656C10.2969 16.2969 10.4219 16.2812 10.5469 16.2031L15.4219 13.0781C15.5469 13 15.6406 12.8906 15.7031 12.75C15.7656 12.6094 15.7969 12.4375 15.7969 12.2344C15.7969 12.0312 15.7656 11.8594 15.7031 11.7188C15.6406 11.5781 15.5625 11.4688 15.4531 11.2969Z"
                      fill="currentColor"
                    />
                  </svg>
                  Watch how it works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DubaiFunds;