import React from "react";
import { motion } from "framer-motion";
const appStoreSVG =
  "https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg";
const googlePlaySVG =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

import phoneImg from "../../assets/images/mobileportfolio.avif";
import sideImg from "../../assets/images/invest.png";
import sideImg2 from "../../assets/images/marinapull.avif";
import sideImg3 from "../../assets/images/khalifa.avif";
const CTA = () => {
  return (
    <div className="bg-[#F6F7F9] overflow-hidden">
      <section className="py-20  mx-auto container px-4  ">
        <div className="mx-auto h-[600px] md:h-[430px] max-w-[1000px] rounded-4xl overflow-hidden flex flex-col md:flex-row">
          {/* Left side - Green background */}
          <div className="bg-[#30D48C] pl-6 sm:pl-12 py-4 w-full md:w-1/2 flex flex-col justify-center">
            <h4 className="text-white text-[16px] font-medium mb-4">
              Download our app
            </h4>
            <h2 className="text-white text-4xl md:text-5xl tracking-tight font-sans font-bold leading-tight md:leading-[57.4px] mb-6 md:mb-10">
              The modern way for
              <br />
              anyone to invest in
              <br />
              real estate
            </h2>

            <div className="flex">
              <div className="h-18 w-[150px] rounded">
                <a href="https://apps.apple.com/ae/app/stake-easy-property-investing/id1591107922?mt=8">
                  <img
                    src={appStoreSVG}
                    alt="Download on App Store"
                    className="h-full w-full object-contain rounded"
                  />
                </a>
              </div>

              <div className="h-18 w-[190px] rounded">
                <a href="https://apps.apple.com/ae/app/stake-easy-property-investing/id1591107922?mt=8">
                  <img
                    src={googlePlaySVG}
                    alt="Get it on Google Play"
                    className="h-full w-full object-cover rounded"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Light/transparent background */}
          <div className="bg-[#30D48C] relative w-full md:w-1/2">
            <img
              src={phoneImg}
              alt="phoneImg"
              className="w-full h-full object-cover md:object-contain scale-90 md:-rotate-22 md:mt-11 md:scale-185"
            />
            <img
              src={sideImg}
              alt="investimg"
              className="absolute scale-120 md:scale-100 top-28 right-2 md:-top-5 md:-right-20 md:-rotate-25"
            />

            {/* Marina Gate Property Card - styled like the reference image */}
            <div className="absolute hidden  md:block  top-48 -left-1 -rotate-20 z-20 bg-white rounded-xl shadow-lg w-36 overflow-hidden">
              <div className="w-full relative">
                <img
                  src={sideImg2}
                  alt="Marina Gate"
                  className="w-full h-28 bg-white px-2 py-2 object-cover rounded-2xl"
                />
              </div>
              <div className="p-2">
                <h4 className="text-gray-800 font-medium text-[12px]">
                  Marina Gate 1, Dubai
                </h4>
                <p className="text-gray-600 text-xs">Marina</p>
                <p className="text-[#41CE8E] font-bold text-[16px] mt-1">
                  +12.4%
                </p>
              </div>
            </div>

            {/* khalifa Property Card - styled like the reference image */}
            <div className="absolute  hidden  md:block  bottom-12 right-0.5 -rotate-20 z-20 bg-white rounded-xl shadow-lg w-36 overflow-hidden">
              <div className="w-full relative">
                <img
                  src={sideImg3}
                  alt="Marina Gate"
                  className="w-full h-28 bg-white px-2 py-2 object-cover rounded-2xl"
                />
              </div>
              <div className="p-2">
                <h4 className="text-gray-800 font-medium text-[12px]">
                  Boulevard Point,
                </h4>
                <p className="text-gray-600 text-xs"> Downtown Dubai</p>
                <p className="text-[#41CE8E] font-bold text-[16px] mt-1">
                  +10.4%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;