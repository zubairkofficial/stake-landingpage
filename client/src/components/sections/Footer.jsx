import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121C30] text-white py-44 sm:py-16  md:py-16 lg:py-16 ">
      <div className="container mx-auto px-4  md:w-[1000px]">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="flex items-center">
            <span className="text-white text-2xl font-semibold">
              sta<span className="text-green-400">k</span>e
            </span>
          </Link>
        </div>

        {/* Navigation Links - 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-8 mb-10">
          {/* Column 1 - Product */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-4 md:mb-6">
              Product
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link to="/properties" className="hover:text-green-400">
                  Properties
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/autoinvest" className="hover:text-green-400">
                  AutoInvest
                </Link>
                <span className="ml-2 px-1 py-0.5 text-[10px] border-1 text-[#B9BBC1] rounded-sm">
                  NEW
                </span>
              </li>
              <li>
                <Link to="/sell-with-stake" className="hover:text-green-400">
                  Sell with Stake
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Visa Programs */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-4">
              Visa Programs
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link to="/golden-visa" className="hover:text-green-400">
                  Golden Visa
                </Link>
              </li>
              <li>
                <Link to="/retirement-visa" className="hover:text-green-400">
                  Retirement Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Learn */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-4">Learn</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link to="/blog" className="hover:text-green-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-green-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="hover:text-green-400">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link to="/about" className="hover:text-green-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-green-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t text-[#414959] mb-6"></div>

        {/* Copyright, Legal links, and Social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div className="text-gray-400 text-sm order-3 md:order-1">
            © 2025 Stake. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-gray-400 order-2">
            <Link to="/terms" className="hover:text-white">
              Terms of use
            </Link>
            <div className="hidden md:block border-l h-4 text-[#414959]"></div>
            <Link to="/risks" className="hover:text-white">
              Key risks
            </Link>
            <div className="hidden md:block border-l h-4 text-[#414959]"></div>
            <Link to="/privacy" className="hover:text-white">
              Privacy policy
            </Link>
            <div className="hidden md:block border-l h-4 text-[#414959]"></div>
            <Link to="/cookies" className="hover:text-white">
              Cookies notice
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-5 order-1 md:order-3">
            <a
              href="https://www.facebook.com/stakeproperties/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-white hover:text-green-400 w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/GetStake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white hover:text-green-400 w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/get.stake/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white hover:text-green-400 w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/stake/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white hover:text-green-400 w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCl7ANdTMOmKOKXCCs6Fz9IA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-white hover:text-green-400 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t text-[#414959] mb-6"></div>

        {/* Legal text */}
        <div className="text-[#80858F] text-xs leading-[19.5px] space-y-4">
          <p>
            Stake Properties Limited is regulated by the Dubai Financial
            Services Authority (DFSA) as an Operator of a Property Investment
            Crowdfunding Platform. At present there are no regulatory
            restriction imposed on Stake by the DFSA. Stake platform consists of
            the website (Stake) and mobile app. By using Stake, you agree to be
            bound by the Terms & Conditions, Cookie Notice and Privacy Policy.
            All investments through Stake carry risk and are not guaranteed.
            Past performance is not a reliable indicator of future results.
            Please read Key Risks before investing. Stake Properties Limited
            also has an Islamic Finance Window endorsement from the DFSA. Stake
            is authorised to offer Shariah compliant investments.
          </p>
          <p>
            Unit 186, 188, 190, Level 1, Gate Avenue - South Zone, DIFC, PO Box
            507211, Dubai, UAE
          </p>
          <p>
            Stake Financial Technology Company is regulated by the Capital
            Market Authority (CMA) in Saudi Arabia to enter under its FinTech
            Lab and licensed to launch real estate investment fund opportunities
            in and from the Kingdom. The Stake platform, which includes our
            website and mobile apps, operates under the regulatory framework
            established by the CMA for innovative financial technologies. By
            using Stake, you agree to abide by our Terms & Conditions, Cookie
            Notice, and Privacy Policy. While offering unique investment
            opportunities in the Saudi Arabian real estate market, we remind our
            investors that all investments carry risks and returns are not
            guaranteed. We encourage you to review the Key Risks before
            investing.
          </p>
          <p>
            Unit 109, Rubeen Plaza, Northern Ring Br Road, Hittin District,
            Riyadh 13512, Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;