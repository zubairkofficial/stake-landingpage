import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import mobdub from "../../assets/images/propertiesmarina.png";
import mobdub2 from "../../assets/images/lepont.avif";
import mobdub3 from "../../assets/images/mobileportfolio.avif";
import mobdub4 from "../../assets/images/hittin.jpg";
import burjarab from "../../assets/images/burjalarab.avif";
import citystrreet from "../../assets/images/dubaicitywalk.avif";
import propbg from "../../assets/images/propbg.avif";
import notch from "../../assets/images/notch.avif";
import lebg from "../../assets/images/lepontbgtop.avif";
import invest from "../../assets/images/invest.png";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master.png";
import apple from "../../assets/images/apple.png";
import logo from "../../assets/images/Klogo.avif";
import onlasgreen from "../../assets/images/onlasegreen.avif";
import jbr from "../../assets/images/jbr.avif";
import threebulid from "../../assets/images/threebuildings.avif";

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const textSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Steps data
  const steps = [
    {
      title: "Browse",
      titleColor: "#41CE8E",
      subtitle: "Access prime real estate across multiple markets",
      description:
        "Sign up in less than 3 minutes and browse our collection of global properties and funds, sourced by experts",
      mainImage: mobdub,
      bgColor: "#30D48C",
      extraContent: (
        <div className="flex gap-3 mt-6">
          <a href="https://apps.apple.com/ae/app/stake-easy-property-investing/id1591107922?mt=8" className="h-24 w-[130px] rounded">
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="Download on App Store"
              className="h-full w-full object-contain rounded"
            />
          </a>
          <a href="https://apps.apple.com/ae/app/stake-easy-property-investing/id1591107922?mt=8" className="h-24 w-[170px] rounded">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-full w-full object-contain rounded"
            />
          </a>
        </div>
      ),
    },
    {
      title: "Invest",
      titleColor: "#41CE8E",
      subtitle: "Grab a piece of the ones you love, from only AED 500",
      description:
        "Skip the hassle, and buy shares in your favourite deals, no matter where you are in the world.",
      mainImage: mobdub2,
      bgColor: "#121C30",
      extraContent: (
        <div className="flex gap-3 mt-6">
          <div className="flex items-center space-x-4">
            <img src={visa} alt="Visa" className="h-8" />
            <img src={master} alt="Mastercard" className="h-8" />
            <img src={apple} alt="Apple Pay" className="h-8" />
          </div>
        </div>
      ),
    },
    {
      title: "Earn",
      titleColor: "#41CE8E",
      subtitle: "Enjoy regular passive income with no effort",
      description:
        "Sit back and earn consistent rental income from your brand new real estate portfolio",
      mainImage: mobdub3,
      bgColor: "#FFD146",
      extraContent: (
        <div className="flex items-center gap-2 mt-6 text-gray-700">
          <svg
            className="w-6 h-6 text-[#41CE8E]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>Paid directly to your Stake wallet</span>
        </div>
      ),
    },
    {
      title: "Sell",
      titleColor: "#41CE8E",
      subtitle: "Tap into liquidity when you need it most",
      description:
        "Realise your full investment appreciation at maturity or take early profits by selling within our community",
      mainImage: mobdub4,
      bgColor: "#FFFFFF",
      extraContent: (
        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-2 text-gray-700">
            <svg
              className="w-6 h-6 text-[#41CE8E]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            <span>Sell during our Exit Windows</span>
            <span className="ml-auto text-sm bg-[#e8f9f1] text-[#41CE8E] px-2 py-1 rounded-full">
              Every 6 months
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <svg
              className="w-6 h-6 text-[#41CE8E]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>Full sale of properties and funds</span>
            <span className="ml-auto text-sm bg-[#e8f9f1] text-[#41CE8E] px-2 py-1 rounded-full">
              2-5 year holding terms
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Calculate which section is active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!textSectionRef.current) return;

      const textSectionRect = textSectionRef.current.getBoundingClientRect();
      const textSectionHeight = textSectionRect.height;
      const windowHeight = window.innerHeight;

      // Update scroll position
      setScrollY(window.scrollY);

      // Calculate which text section is currently in view
      const sectionHeight = textSectionHeight / steps.length;
      const scrollPosition = Math.max(
        0,
        window.scrollY - textSectionRect.top - window.scrollY + windowHeight / 2
      );
      const newActiveSection = Math.min(
        steps.length - 1,
        Math.floor(scrollPosition / sectionHeight)
      );

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [steps.length]);

  // Add a responsive styles object
  const responsiveStyles = {
    // Invisible on small screens, but added via CSS
    "@media (max-width: 768px)": {
      display: "none",
    },
  };

  return (
    <div className="bg-[#F6F7F9]">
      {isMobile ? (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-[16px] text-[#209476] font-bold mb-4">
              How It Works
            </h2>
            <h3 className="text-[#121C30] text-3xl px-4">
              Build an income-generating real estate portfolio, easily
            </h3>
          </div>
          {steps.map((step, index) => (
            <div key={index} className="mb-8">
              {/* Mobile Layout Content */}
              <div className="mb-6 px-4">
                <h3 className="text-xl text-[#209476] font-semibold mb-3">
                  {step.title}
                </h3>
                <h4 className="text-2xl text-[#121C30] font-bold mb-4">
                  {step.subtitle}
                </h4>
                <p className="text-[#5A616E] text-sm mb-4">
                  {step.description}
                </p>
                <div className="mobile-extra-content">{step.extraContent}</div>
              </div>
              <div className="px-4 overflow-hidden relative z-0 max-h-[280px] ">
                {index === 0 && (
                  <div
                    className="rounded-3xl p-4"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <img
                      src={propbg}
                      alt="prop bg"
                      className="absolute top-28  w-[80px] h-[90px] object-cover rotate-[-13deg]"
                    />
                    <img
                      src={citystrreet}
                      alt="Dubai City Walk"
                      className="absolute right-15 top-8 w-[80px] h-[90px] object-cover rotate-[18deg] z-10"
                    />
                    <img
                      src={burjarab}
                      alt="Burj Al Arab"
                      className="absolute right-15 bottom-5 w-[90px] h-[100px] object-cover z-10"
                    />
                    <img
                      src={step.mainImage}
                      alt="Step 1 visualization"
                      className="w-[220px] mt-9 object-contain mx-auto rounded-2xl"
                    />
                  </div>
                )}

                {index === 1 && (
                  <div
                    className="rounded-2xl p-4"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <img
                      src={step.mainImage}
                      alt="Step 2 visualization"
                      className="w-[220px] mx-auto object-contain rounded-2xl mt-5"
                    />
                    <img
                      src={invest}
                      alt="prop bg"
                      className="absolute top-[150px] left-14 h-[120px] object-cover z-[10]"
                    />
                    <img
                      src={lebg}
                      alt="dubai bg"
                      className="absolute left-[200px] top-2 w-[100px] h-[100px] object-cover z-[-1]"
                    />
                    <img
                      src={notch}
                      alt="notch"
                      className="absolute left-43 top-[50px] object-cover w-[50px] z-10"
                    />
                    <div
                      className="absolute"
                      style={{
                        left: "85px",
                        top: "20px",
                        zIndex: 30,
                        width: "50px",
                        height: "50px",
                        background: "#30D48C",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 32px 0 rgba(60,60,60,0.10)",
                        rotate: "-18deg",
                      }}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44772 20 7 20C7.55228 20 8 19.5523 8 19C8 18.4477 7.55228 18 7 18Z"
                          fill="white"
                        />
                        <path
                          d="M17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18Z"
                          fill="white"
                        />
                        <path
                          d="M7.16 15H16.74C17.37 15 17.92 14.59 18.09 13.98L20.36 6.59C20.49 6.18 20.18 5.75 19.75 5.75H6.21L5.27 2.61C5.13 2.22 4.76 2 4.36 2H2V4H3.42L6.6 13.59C6.77 14.18 7.32 14.59 7.96 14.59L7.16 15ZM6.16 7.75H18.31L16.36 13H8.53L6.16 7.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div
                    className="rounded-2xl p-4"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <img
                      src={step.mainImage}
                      alt="Step 3 visualization"
                      className="w-[220px] mx-auto object-contain rounded-2xl"
                    />
                    <div
                      className="absolute z-30"
                      style={{
                        top: "120px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "200px",
                        maxWidth: "90%",
                      }}
                    >
                      <div
                        className="bg-white p-2 rounded-xl shadow-lg flex items-center gap-2"
                        style={{
                          boxShadow: "2px 2px 2px 2px #FFE8A3",
                        }}
                      >
                        <div className="bg-white rounded-md overflow-hidden w-8 h-8 flex-shrink-0">
                          <img
                            src={logo}
                            alt="Stake Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 text-xs">
                            Stake
                          </div>
                          <div className="text-gray-600 text-[10px]">
                            You've been paid AED 18,000 in rent
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute z-30"
                      style={{
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "240px",
                        maxWidth: "90%",
                      }}
                    >
                      <div className="bg-white rounded-xl shadow-lg py-2 px-3">
                        <div className="text-gray-600 text-xs mb-1">
                          All time returns
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-lg font-bold">AED 89,000</div>
                          <div className="bg-[#E6F8F1] text-[#30D48C] px-2 py-1 rounded-full text-[10px] font-medium">
                            30.8%
                          </div>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="flex h-full">
                            <div className="bg-[#30D48C] h-full w-1/3"></div>
                            <div className="bg-[#1A9A74] h-full w-1/3"></div>
                            <div className="bg-[#FFD146] h-full w-1/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {index === 3 && (
                  <div
                    className="rounded-2xl p-4 "
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <img
                      src={jbr}
                      alt="JBR Dubai Marina"
                      className="w-[100px] h-[80px] object-cover rounded-xl rotate-[-12deg] absolute  top-[110px] z-10"
                    />
                    <img
                      src={threebulid}
                      alt="Properties"
                      className="absolute right-10 top-[20px] w-[100px] h-[70px] object-cover rounded-xl rotate-[15deg] z-999"
                    />
                    <img
                      src={onlasgreen}
                      alt="Properties"
                      className="absolute right-14 bottom-[20px] w-[70px] h-[65px] object-cover rounded-xl rotate-[-5deg] z-999"
                    />
                    <div
                      className="relative mx-auto w-[200px] z-20"
                      style={{
                        borderRadius: "25px",
                        boxShadow:
                          "0px 0px 0px 4px #121C30, 0px 0px 0px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        padding: "3px",
                        background: "#121C30",
                      }}
                    >
                      <img
                        src={notch}
                        alt="notch"
                        className="absolute left-[70px] top-1.5 object-cover w-[60px] z-10"
                      />
                      <img
                        src={step.mainImage}
                        alt="Step 4 visualization"
                        className="w-[200px] object-contain rounded-[20px]"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={sectionRef}
          className="relative py-30 max-w-[1180px] mx-auto"
          style={{ minHeight: "200vh" }} // Make section tall enough to scroll
        >
          <div className="container mx-auto px-4">
            {/* Section title */}
            <div className="text-center mb-20 md:mb-16 sm:mb-12">
              <h2 className="text-[16px] text-[#209476] font-bold mb-4">
                How It Works
              </h2>
              <h3 className="text-[#121C30] text-5xl max-w-2xl mx-auto md:text-4xl sm:text-3xl px-4">
                Build an income-generating real estate portfolio, easily
              </h3>
            </div>

            {/* Main content - add responsive classes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2">
              {/* Left side - adjust spacing for mobile */}
              <div
                ref={textSectionRef}
                className="space-y-[70vh] md:space-y-[60vh] sm:space-y-[50vh]"
              >
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="min-h-[70vh] md:min-h-[60vh] sm:min-h-[50vh] flex items-center max-w-[500px] px-4"
                  >
                    <div
                      className={`transition-all duration-300 ${
                        activeSection === index ? "opacity-100" : "opacity-10"
                      }`}
                    >
                      <h3
                        className="text-2xl text-[#209476] font-semibold mb-4 sm:text-xl"
                        style={{ color: step.titleColor }}
                      >
                        {step.title}
                      </h3>
                      <h4 className="text-4xl text-[#121C30] md:text-3xl sm:text-2xl font-bold mb-6">
                        {step.subtitle}
                      </h4>
                      <p className="text-[#5A616E] text-[16px] mb-6 sm:text-[14px]">
                        {step.description}
                      </p>
                      {step.extraContent}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right side - Images (now visible on mobile) */}
              <div className="lg:block">
                <div className="sticky top-1/4">
                  {/* Step 1 image section */}
                  <div
                    className={`transition-opacity duration-700 ease-in-out ${
                      activeSection === 0 ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="pl-4 w-full relative">
                      <div
                        className="max-h-[430px] max-w-[680px] rounded-3xl p-4 lg:p-12 relative z-0 overflow-hidden"
                        style={{ backgroundColor: steps[0].bgColor }}
                      >
                        <img
                          src={propbg}
                          alt="prop bg"
                          className="absolute top-35 left-7  w-[160px] h-[180px] object-cover  rotate-[-13deg] z-[-1]"
                        />
                        <img
                          src={citystrreet}
                          alt="Dubai City Walk"
                          className="absolute right-11 top-10 w-[150px] h-[170px] object-cover  rotate-[18deg] z-10"
                        />
                        {/* Overlay: Top right floating image */}
                        <img
                          src={burjarab}
                          alt="Burj Al Arab"
                          className="absolute right-[40px] bottom-1 w-[176px] h-[184px] object-cover z-10"
                        />
                        <img
                          src={steps[0].mainImage}
                          alt="Step 1 visualization"
                          className="w-[330px] mt-9 mx-auto object-contain "
                        />
                      </div>
                    </div>
                  </div>
                  {/* Step 2 image section */}
                  <div
                    className={`transition-opacity duration-700 ease-in-out ${
                      activeSection === 1 ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="pl-4 w-full relative">
                      <div
                        className="max-h-[430px] max-w-[650px] rounded-3xl p-2 lg:p-10 relative z-0 overflow-hidden"
                        style={{ backgroundColor: steps[1].bgColor }}
                      >
                        <img
                          src={steps[1].mainImage}
                          alt="Step 2 visualization"
                          className="w-[320px] mt-12 mx-auto object-contain"
                        />

                        <img
                          src={invest}
                          alt="prop bg"
                          className="absolute top-60 left-2 h-[220px]  object-cover   z-[10]"
                        />
                        <img
                          src={lebg}
                          alt="dubai bg"
                          className="absolute left-82 top-1 w-[223px] h-[223px] object-cover z-[-1]"
                        />
                        <img
                          src={notch}
                          alt="notch"
                          className="absolute left-58 top-28  object-cover w-[95px] z-10"
                        />
                        <div
                          className="absolute"
                          style={{
                            left: "90px",
                            top: "60px",
                            zIndex: 30,
                            width: "80px",
                            height: "80px",
                            background: "#30D48C",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 8px 32px 0 rgba(60,60,60,0.10)",
                            rotate: "-18deg",
                          }}
                        >
                          {/* White trolley SVG icon */}
                          <svg
                            width="42"
                            height="42"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44772 20 7 20C7.55228 20 8 19.5523 8 19C8 18.4477 7.55228 18 7 18Z"
                              fill="white"
                            />
                            <path
                              d="M17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18Z"
                              fill="white"
                            />
                            <path
                              d="M7.16 15H16.74C17.37 15 17.92 14.59 18.09 13.98L20.36 6.59C20.49 6.18 20.18 5.75 19.75 5.75H6.21L5.27 2.61C5.13 2.22 4.76 2 4.36 2H2V4H3.42L6.6 13.59C6.77 14.18 7.32 14.59 7.96 14.59L7.16 15ZM6.16 7.75H18.31L16.36 13H8.53L6.16 7.75Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Step 3 image section */}
                  <div
                    className={`transition-opacity duration-700 ease-in-out ${
                      activeSection === 2 ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="pl-4 w-full relative">
                      <div
                        className="max-h-[430px] max-w-[650px] rounded-3xl p-4 lg:p-12 relative z-0 overflow-hidden"
                        style={{ backgroundColor: steps[2].bgColor }}
                      >
                        <img
                          src={steps[2].mainImage}
                          alt="Step 3 visualization"
                          className="w-[360px] mt-11 mx-auto object-contain"
                        />

                        {/* Stake notification overlay */}
                        <div
                          className="absolute z-30"
                          style={{
                            top: "190px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "320px",
                            maxWidth: "90%",
                          }}
                        >
                          <div
                            className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 "
                            style={{
                              boxShadow: "3px 3px 3px 3px #FFE8A3",
                            }}
                          >
                            <div className="bg-white rounded-md overflow-hidden w-12 h-12 flex-shrink-0">
                              <img
                                src={logo}
                                alt="Stake Logo"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800">
                                Stake
                              </div>
                              <div className="text-gray-600 text-sm">
                                You've been paid AED 18,000 in rent
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Returns card overlay */}
                        <div
                          className="absolute z-30 "
                          style={{
                            bottom: "12px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "380px",
                            maxWidth: "90%",
                            maxHeight: "100%",
                          }}
                        >
                          <div className="bg-white  rounded-xl shadow-lg py-4 px-4">
                            <div className="text-gray-600 mb-1">
                              All time returns
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                              <div className="text-2xl font-bold">
                                AED 89,000
                              </div>
                              <div className="bg-[#E6F8F1] text-[#30D48C] px-2 py-1 rounded-full text-sm font-medium">
                                30.8%
                              </div>
                            </div>
                            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                              <div className="flex h-full">
                                <div className="bg-[#30D48C] h-full w-1/3"></div>
                                <div className="bg-[#1A9A74] h-full w-1/3"></div>
                                <div className="bg-[#FFD146] h-full w-1/3"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Step 4 image section */}
                  <div
                    className={`transition-opacity duration-700 ease-in-out ${
                      activeSection === 3 ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="pl-4 w-full relative">
                      <div
                        className="max-h-[430px] max-w-[650px] rounded-3xl p-4 lg:p-12 relative z-0 overflow-hidden"
                        style={{ backgroundColor: steps[3].bgColor }}
                      >
                        {/* Floating image - left */}

                        <img
                          src={jbr}
                          alt="JBR Dubai Marina"
                          className="w-[200px] h-[150px] object-cover rounded-xl  rotate-[-12deg] absolute right-90 top-[160px] z-10"
                        />

                        {/* Floating image - top right */}

                        <img
                          src={threebulid}
                          alt="Properties"
                          className=" absolute right-10  top-[20px] w-[180px] h-[160px] object-cover rounded-xl  rotate-[15deg] z-999"
                        />
                        <img
                          src={onlasgreen}
                          alt="Properties"
                          className=" absolute right-13  bottom-18 w-[160px] h-[140px] object-cover rounded-xl  rotate-[-5deg] z-999"
                        />

                        {/* Phone frame with main image */}
                        <div
                          className="relative mx-auto w-[310px] z-20"
                          style={{
                            borderRadius: "36px",
                            boxShadow:
                              "0px 0px 0px 6px #121C30, 0px 0px 0px rgba(0, 0, 0, 0.1)",
                            overflow: "hidden",
                            padding: "3px",
                            background: "#121C30",
                          }}
                        >
                          <img
                            src={notch}
                            alt="notch"
                            className="absolute left-26 top-2  object-cover w-[95px] z-10"
                          />

                          {/* Main image (unchanged) */}
                          <img
                            src={steps[3].mainImage}
                            alt="Step 4 visualization"
                            className="w-[310px]  object-contain rounded-[28px]"
                            style={{ borderRadius: "28px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorks;
