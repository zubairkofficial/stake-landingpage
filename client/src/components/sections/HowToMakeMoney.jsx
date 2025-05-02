import React from "react";
import { motion } from "framer-motion";
import wallet from "../../assets/images/walletleft.png";
import portfolio from "../../assets/images/port3500.png";
import studio from "../../assets/images/studioone.png";

const HowToMakeMoney = () => {
  return (
    <section className="bg-[#F6F7F9] py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px]">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#209476] text-[16px] font-semibold mb-4">
            It's your money, grow it
          </p>
          <h2 className="text-[#121C30] text-[48px] font-bold">
            So, how do I make money?
          </h2>
          <p className="text-[30px] font-semibold mt-6 max-w-2xl mx-auto">
            Join <span className="text-[#6DCB93] font-bold">1M+</span> other
            real estate <br /> investors who made{" "}
            <span className="text-[#6DCB93] font-bold">10.1%</span> in 2024
          </p>
        </div>

        {/* First Feature - Passive Income */}
        <div className="flex flex-col max-w-[1010px] mx-auto lg:flex-row items-center mb-32">
          {/* Phone Image Container - Left */}
          <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
            <div className="rounded-full bg-[#6DE1A1] w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[520px] md:h-[520px] lg:w-[550px] lg:h-[550px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
              <motion.img
                src={wallet}
                alt="Stake Wallet interface"
                className="relative z-10 max-w-full h-auto w-[250px] md:w-[320px]"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12 py-10 rounded-2xl ">
            <div className="px-8">
              <h3 className="text-[36px] leading-[43.2px] font-bold mb-6 text-[#121C30]">
                Earn consistent
                <br />
                passive income
              </h3>
              <p className="text-[17px] leading-[27px] font-normal text-[#5A616E] mb-8">
                Build new income streams with rental payments from income
                generating properties and funds
              </p>

              <div className="flex flex-col md:flex-row gap-8 mb-4">
                <div>
                  <p className="flex items-center">
                    <span className="text-[26px] font-bold text-[#121726]">
                      AED 32.2M+
                    </span>
                  </p>
                  <p className="text-[#80858F] font-semibold text-[16px]">
                    Total Rental Income Paid
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <span className="text-3xl font-bold text-[#121726]">
                      5.40
                    </span>
                    <span className="text-3xl font-bold text-[#6DCB93]">%</span>
                  </p>
                  <p className="text-[#80858F] font-semibold text-[16px]">
                    Average Rental Yield in 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature - Capital Appreciation */}
        <div className="flex flex-col mx-auto max-w-[1004px] lg:flex-row-reverse items-center mb-32">
          {/* Phone Image Container - Right */}
          <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
            <div className="rounded-full bg-[#6DE1A1] w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[520px] md:h-[520px] lg:w-[550px] lg:h-[550px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
              <motion.img
                src={portfolio}
                alt="Stake Portfolio interface"
                className="relative z-10 max-w-full h-auto w-[250px]  md:w-[320px]"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </div>
          </div>

          {/* Content - Left */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12 py-10 rounded-2xl">
            <div className="px-8">
              <h3 className="text-[36px] leading-[43.2px] font-bold mb-6 text-[#121C30]">
                Long term capital
                <br />
                appreciation
              </h3>
              <p className="text-[17px] leading-[27px] font-normal text-[#5A616E] mb-8">
                Watch your investment grow as property values appreciate and
                funds near maturity
              </p>

              <div className="flex flex-col md:flex-row gap-18 mb-4">
                <div>
                  <p className="flex items-center">
                    <span className="text-3xl font-bold text-[#121726]">
                      350
                    </span>
                    <span className="text-3xl font-bold text-[#6DCB93]">+</span>
                  </p>
                  <p className="text-[#80858F] font-semibold text-[16px]">
                    Properties Funded <br /> Since 2021
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <span className="text-3xl font-bold text-[#121726]">
                      5.48
                    </span>
                    <span className="text-3xl font-bold text-[#6DCB93]">%</span>
                  </p>
                  <p className="text-[#80858F] font-semibold text-[16px]">
                    Average Investor <br /> Appreciation in 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Feature - Liquidity */}
        <div className=" flex flex-col mx-auto max-w-[1004px] lg:flex-row items-center">
          {/* Phone Image Container - Left */}
          <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
            <div className="rounded-full bg-[#6DE1A1] w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[520px] md:h-[520px] lg:w-[550px] lg:h-[550px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
              <motion.img
                src={studio}
                alt="Studio One Dubai Marina property"
                className="relative z-10 max-w-full h-auto w-[250px] md:w-[320px]"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12 py-10 rounded-2xl">
            <div className="px-8">
              <h3 className="text-[36px] leading-[43.2px] font-bold mb-6 text-[#121C30]]">
                Liquidity, when you
                <br />
                need it most
              </h3>
              <p className="text-[17px] leading-[27px] font-normal text-[#5A616E] mb-8">
                Exit your investments at maturity or take early profits by
                selling during our bi-annual exit windows
              </p>

              <div className="flex flex-col md:flex-row gap-8 mb-4">
                <div>
                  <p className="flex items-center">
                    <span className="text-3xl font-bold text-[#121726]">
                      10
                    </span>
                    <span className="text-3xl font-bold text-[#6DCB93]">+</span>
                  </p>
                  <p className="text-[#80858F] font-semibold text-[16px]">
                    Properties Fully Exited
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <span className="text-3xl font-bold text-[#121726]">
                      AED 12.3
                    </span>
                    <span className="text-3xl font-bold text-[#6DCB93]">
                      M+
                    </span>
                  </p>
                  <p className="text-[#80858F] font-semibold text-[16px]">
                    Traded During Exit Windows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToMakeMoney;
