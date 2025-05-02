import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll events
  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingDown = prevScrollPos < currentScrollPos;
        setVisible(currentScrollPos < 100 || !isScrollingDown);
        setPrevScrollPos(currentScrollPos);
        timeoutId = null;
      }, 100); // Adjust timing as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Banner */}
      <div className="bg-[#121726] text-white py-[10px] text-center">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <p className="text-sm text-center">
            Discover the investment strategies we offer on Stake Saudi in our
            next webinar on April 23rd!{" "}
            <a href="#" className="text-green-400 hover:text-green-300">
              Save your spot
            </a>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4 md:py-6 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="text-black text-2xl md:text-3xl font-semibold">
                sta<span className="text-green-400">k</span>e
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:ml-[-120px] xl:ml-[-220px] space-x-4">
              <div className="group relative">
                <button className="flex  text-gray-800 text-[14px] font-semibold hover:text-green-500  ">
                  Investments
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute  left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="py-1">
                    <Link
                      to="/properties"
                      className="block px-4 py-2 text-gray-800  hover:bg-gray-100"
                    >
                      Properties
                    </Link>
                    <Link
                      to="/funds"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Funds
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Link
                  to="/automation"
                  className="text-gray-800 text-[14px] font-semibold hover:text-green-500"
                >
                  Automation
                </Link>
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-green-500 text-white font-medium rounded">
                  NEW
                </span>
              </div>

              <div className="group relative">
                <button className="flex items-center text-gray-800 text-[14px] font-semibold hover:text-green-500">
                  Visa Programs
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="py-1">
                    <Link
                      to="/golden-visa"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Golden Visa
                    </Link>
                    <Link
                      to="/retirement-visa"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Retirement Visa
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button className="flex items-center text-gray-800 text-[14px] font-semibold hover:text-green-500">
                  Sell
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="py-1">
                    <Link
                      to="/exit-wondows"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Exit windows
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/sell-your-property"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Sell your property
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button className="flex items-center text-gray-800 text-[14px] font-semibold hover:text-green-500">
                  Learn
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="py-1">
                    <Link
                      to="/blog"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/faqs"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      FAQs
                    </Link>
                    <Link
                      to="/glossary"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Glossary
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="relative group">
                <button className="flex items-center text-gray-700 border font-semibold text-[14px] border-gray-300 rounded-[8px] px-4 py-2">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-300 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    English
                  </span>
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <Link
                to="/login"
                className="text-gray-700 font-semibold text-[14px] border border-gray-300 px-4 py-2 hover:text-green-500 rounded-[8px]"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-[#121726] hover:bg-[#1c2a41] text-white font-semibold text-[14px] px-4 py-2 rounded-[8px]"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/properties" className="text-gray-800">
              Properties
            </Link>
            <Link to="/funds" className="text-gray-800">
              Funds
            </Link>
            <Link to="/automation" className="text-gray-800">
              Automation
            </Link>
            <Link to="/golden-visa" className="text-gray-800">
              Golden Visa
            </Link>
            {/* Add other mobile links here */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
