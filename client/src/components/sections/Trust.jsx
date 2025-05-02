import React, { useState } from "react";
import { motion } from "framer-motion";
import difc from "../../assets/images/difc.png";
import ss from "../../assets/images/ss.png";
import certificationIcon from "../../assets/icons/certification.svg";
import sflag from "../../assets/images/Flag_of_Saudi_Arabia.svg";
import waid from "../../assets/images/waid.avif";
import mubadla from "../../assets/images/mubadla.avif";
import mevp from "../../assets/images/mevp.png";
import republic from "../../assets/images/republic.avif";
import aljomiah from "../../assets/images/aljomiah.png";
import madison from "../../assets/images/mos.png";
import vinum from "../../assets/images/vinum.png";
import by from "../../assets/images/by.png";
import guidance from "../../assets/images/guidnace.svg";
import CPL from "../../assets/images/cpl.svg";
import verve from "../../assets/images/verve.png";
import capital from "../../assets/images/capital.svg";
const Trust = () => {
  const [activeTab, setActiveTab] = useState("dual");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#121C30] py-20 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <p className="text-[#41CE8E] mb-4 font-semibold text-[16px]">
            Safety never sleeps
          </p>
          <h2 className="text-[48px] font-bold leading-[57.4px]">
            We value your trust as <br /> much as your investments
          </h2>
        </motion.div>

        {/* Tab buttons - Centered with fixed width container */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex  rounded-lg p-1.5 gap-2">
            <button
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all ${
                activeTab === "dual"
                  ? "bg-[#30D48C]/10 text-[#30D48C]"
                  : "bg-transparent text-white hover:bg-[#1E293B]"
              }`}
              onClick={() => setActiveTab("dual")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={
                  activeTab === "dual" ? "text-[#30D48C]" : "text-white"
                }
              >
                <path
                  d="M20.9999 10V8C20.9999 5.79086 19.209 4 16.9999 4H6.99988C4.79074 4 2.99988 5.79086 2.99988 8V16C2.99988 18.2091 4.79074 20 6.99988 20H16.9999C19.209 20 20.9999 18.2091 20.9999 16V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7.99988 12C7.99988 13.6569 9.34303 15 10.9999 15H13.9999C15.6567 15 16.9999 13.6569 16.9999 12C16.9999 10.3431 15.6567 9 13.9999 9H10.9999C9.34303 9 7.99988 10.3431 7.99988 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-medium text-[16px]">Dual regulated</span>
            </button>

            <button
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all ${
                activeTab === "ownership"
                  ? "bg-[#30D48C]/10 text-[#30D48C]"
                  : "bg-transparent text-white hover:bg-[#1E293B]"
              }`}
              onClick={() => setActiveTab("ownership")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={
                  activeTab === "ownership" ? "text-[#30D48C]" : "text-white"
                }
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 19H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium text-[16px]">
                Ownership protection
              </span>
            </button>
          </div>
        </div>

        {/* Content Cards */}
        <motion.div
          className="bg-[#1C263A]  max-w-[1032px] mx-auto justify-center items-center rounded-3xl p-8 md:p-12 border border-[#30394A]  backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={activeTab}
        >
          {activeTab === "dual" && (
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column */}
              <div>
                <div className="flex items-center mb-6">
                  <svg
                    className="w-10 h-10 text-[#30D48C] mr-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.9999 10V8C20.9999 5.79086 19.209 4 16.9999 4H6.99988C4.79074 4 2.99988 5.79086 2.99988 8V16C2.99988 18.2091 4.79074 20 6.99988 20H16.9999C19.209 20 20.9999 18.2091 20.9999 16V14" />
                    <path d="M7.99988 12C7.99988 13.6569 9.34303 15 10.9999 15H13.9999C15.6567 15 16.9999 13.6569 16.9999 12C16.9999 10.3431 15.6567 9 13.9999 9H10.9999C9.34303 9 7.99988 10.3431 7.99988 12Z" />
                  </svg>
                  
                </div>
                <h3 className="text-[32px] font-bold mb-2">Dual regulated</h3>
                <p className="text-[20px] mb-8 text-gray-300 leading-[33.2px] font-medium">
                  Invest with the assurance that we are dual regulated by the
                  most prestigious regulators in the Middle East
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-[#3A4458] rounded-lg font-medium hover:bg-[#2D3748] transition-colors"
                >
                  Learn more
                </a>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                {/* UAE Regulation Card */}
                <div className="bg-[#1C263A] border border-[#30394A] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-4 relative">
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-black  absolute top-0 left-0"></div>
                        <div className="w-full h-1/3 bg-green-600 absolute top-0 left-0"></div>
                        <div className="w-full h-1/3 bg-white absolute top-1/3 left-0"></div>
                        <div className="w-1/3 h-full bg-red-600 absolute top-0 left-0"></div>
                      </div>
                    </div>
                    
                    
                  </div>
                  <h4 className="text-[18px] font-bold mb-2">
                      Regulated in UAE by the DFSA
                    </h4>
                  <p className="text-[#D3D9E5] text-[14px] font-medium">
                    We're regulated by the Dubai Financial Services Authority
                    (DFSA) in Dubai, with a robust business cessation plan.
                  </p>
                </div>

                {/* Saudi Arabia Regulation Card */}
                <div className="bg-[#1C263A] border border-[#30394A] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-4 relative">
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <img
                          src={sflag}
                          alt="Saudi Arabia Flag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                   
                  </div>
                  <h4 className="text-[18px] font-bold mb-2">
                      Regulated in Saudi Arabia by the CMA
                    </h4>
                  <p className="text-[#D3D9E5] text-[14px] font-medium">
                    We're regulated by the Capital Markets Authority (CMA) in
                    Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Content for the ownership tab */}
          {activeTab === "ownership" && (
            <div className="grid md:grid-cols-2 gap-5">
              {/* Left column */}
              <div>
                <div className="flex items-center mb-6">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#30D48C] mr-4"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 19H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 5H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                </div>
                <h3 className="text-[32px] font-bold mb-2">Ownership protection</h3>
                <p className="text-[20px] mb-8 text-gray-300 leading-[33.2px] font-medium">
                  Investors receive verifiable ownership documents issued by
                  globally recognised government bodies and top tier fund
                  managers
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-[#3A4458] rounded-lg font-medium hover:bg-[#2D3748] transition-colors"
                >
                  Learn more
                </a>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                {/* Dubai Ownership Card */}
                <div className="bg-[#1C263A] border border-[#30394A] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <img src={difc} alt="DIFC" className="h-8" />
                      <img src={ss} alt="Land Department" className="h-8" />
                    </div>
                  </div>
                  <h4 className="text-[18px] font-bold mb-2">
                    Share Certificates and Title Deeds in Dubai
                  </h4>
                  <p className="text-[#D3D9E5] text-[14px] font-medium">
                    Share Certificates are backed by the Dubai International
                    Financial Centre, and Title Deeds are issued by the DLD.
                  </p>
                </div>

                {/* Saudi Arabia Ownership Card */}
                <div className="bg-[#1C263A] border border-[#30394A] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={certificationIcon}
                      alt="Certificate"
                      className="w-10 h-10 mr-4"
                    />
                  </div>
                  <h4 className="text-[18px] font-bold mb-2">
                    Fund Unit Certificates in Saudi Arabia
                  </h4>
                  <p className="text-[#D3D9E5] text-[14px] font-medium">
                    Subscription certificates and fund unit registries are
                    issued by professional fund administrators in Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Backed by logos */}
        <div className="mt-24 max-w-[990px] mx-auto">
          <h3 className="text-center text-[18px] font-bold mb-16">
            We're backed by
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
          <img
              src={mevp}
              alt="Wael Group"
              className="h-30"
            />

            <img
              src={waid}
              alt="Wael Group"
              className="h-22"
            />
            <img
              src={mubadla}
              alt="Mubadala"
              className="h-[43px] w-[450px]"
            />
            <img
              src={republic}
              alt="Republic"
              className="h-9"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center mt-4">
            <img
              src={aljomiah}
              alt="Al Jomaih Holding"
              className="h-30 "
            />
            <img
              src={madison}
              alt="Madison Marquette"
              className="h-25"
            />
            <img
              src={vinum}
              alt="Vinium"
              className="h-30"
            />
            <img
              src={by}
              alt="B Venture Partners"
              className="h-22"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  items-center justify-items-center mt-4 ">
            <img
              src={guidance}
              alt="Guidance"
              className="h-10 opacity-80 ml-10"
            />
            <img
              src={CPL}
              alt="CPL"
              className="h-8"
            />
            <img
              src={verve}
              alt="Verve"
              className="h-25 mr-10"
            />
            <img
              src={capital}
              alt="Capital Guidance"
              className="h-10 mr-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
