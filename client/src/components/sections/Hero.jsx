import { useState, useEffect } from "react";
import portfolio from "../../assets/images/mobileportfolio.avif";
import property from "../../assets/images/mobileimgdubaitower.avif";
import funds from "../../assets/images/mobilefunds.png";
import sideImg3 from "../../assets/images/khalifa.avif";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../../assets/images/Klogo.avif";
// Import the app store and google play SVGs - using exact images from getstake.com
const appStoreSVG =
  "https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg";
const googlePlaySVG =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

const Hero = () => {
  const { scrollY } = useScroll();

  // Transform values for phone mockups
  const phoneX1 = useTransform(scrollY, [0, 300], [0, 70]);
  const phoneX2 = useTransform(scrollY, [0, 300], [0, 70]);
  const phoneX3 = useTransform(scrollY, [0, 300], [0, 70]);

  // Transform values for property card and notification
  const cardY = useTransform(scrollY, [0, 300], [0, -50]);
  const notificationY = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section className="md:py-16 overflow-hidden relative bg-gradient-to-r from-[#F6F7F9] via-white to-[#E8F9F1] py-30">
      <div className="container mx-auto px-4 max-w-[1200px] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-42">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left ">
            <div className="inline-flex items-center bg-green-50  border-green-300 border rounded-full px-4 py-1 text-sm mb-8 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-600 font-medium">
                10.1% average investor returns in 2024
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Build your wealth through{" "}
              <span className="text-[#41CE8E]">real estate</span>
            </h1>
            <p className="text-[16px] tracking-tighter font-medium text-gray-600 mb-8">
              Thousands of investors all over the world are using Stake to
              access income generating real estate deals in high growth markets,
              from only AED 500
            </p>

            <div className="flex justify-center lg:justify-start gap-1">
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

          {/* Right side phones - with responsive adjustments */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[550px] mt-20 lg:h-[600px] lg:mt-0 mx-auto lg:mx-0 w-full max-w-[650px]">
            {/* Property phone on left */}
            <motion.div
              className="absolute left-[-10px] sm:left-[-32px] bottom-32 sm:bottom-44 lg:bottom-44 md:-rotate-20 transform origin-left"
              style={{ x: phoneX1 }}
            >
              <div className="relative">
                <img
                  src={property}
                  alt="Property screen"
                  className="w-[170px] sm:w-[280px] lg:w-[310px]"
                />
              </div>
            </motion.div>

            {/* Portfolio phone on top right */}
            <motion.div
              className="absolute right-4 sm:right-8 lg:right-14 -bottom-10 sm:bottom-10 lg:bottom-23 transform md:-rotate-20 scale-75 sm:scale-90 lg:scale-100 origin-top-right"
              style={{ x: phoneX2 }}
            >
              <div className="relative">
                <img
                  src={portfolio}
                  alt="Portfolio screen"
                  className="w-[220px] sm:w-[280px] lg:w-[310px]"
                />
              </div>
            </motion.div>

            {/* Funds phone at bottom */}
            <motion.div
              className="absolute left-20 sm:left-40 lg:left-67 top-20 sm:top-40 lg:top-77 transform md:-rotate-20 origin-bottom"
              style={{ x: phoneX3 }}
            >
              <div className="relative">
                <img
                  src={funds}
                  alt="Funds screen"
                  className="w-[180px] sm:w-[250px] lg:w-[306px]"
                />
              </div>
            </motion.div>

            {/* Property card - adjust for mobile */}
            <motion.div
              className="absolute hidden sm:block left-32 sm:left-40 lg:left-48 top-0 lg:top-auto -rotate-20 z-20 bg-white rounded-xl shadow-lg w-28 sm:w-32 lg:w-36 overflow-hidden cursor-pointer"
              whileTap={{ scale: 1.0, x: 50, y: 50 }}
              animate={{ x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ y: cardY }}
              drag
            >
              <div className="w-full relative">
                <img
                  src={sideImg3}
                  alt="Marina Gate"
                  className="w-full h-24 sm:h-28 bg-white px-2 py-2 object-cover rounded-2xl"
                />
              </div>
              <div className="p-2">
                <h4 className="text-[#1A1C1E] font-medium text-[12px]">
                  Boulevard Point,
                </h4>
                <h4 className="text-[#1A1C1E] font-medium text-[12px]">
                  Downtown Dubai
                </h4>
                <p className="text-[#41CE8E] font-bold text-[16px] mt-1">
                  +10.4%
                </p>
              </div>
            </motion.div>

            {/* Notification - adjust for mobile */}
            <motion.div
              className="hidden sm:flex relative left-0 sm:left-6 lg:left-10 top-[220px] sm:top-[180px] lg:top-130 -rotate-20 bg-white rounded-xl shadow-lg max-w-[300px] sm:max-w-[320px] lg:max-w-[350px] py-2 sm:py-3 px-3 sm:px-4 items-center space-x-3"
              style={{ y: notificationY }}
            >
              {/* Notification Box */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Logo or Icon */}
                <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full rounded-xl"
                  />
                </div>

                {/* Notification Text */}
                <div className="flex flex-col">
                  <p className="font-bold text-[#1A1C1E] text-xs sm:text-sm">
                    Stake
                  </p>
                  <p className="text-[#4D4D4D] text-[11px] sm:text-xs">
                    You've been paid AED 18,550 in rent
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent backdrop-blur-[2px] pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;
