import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Featured from "./components/sections/Featured";
import Testimonials from "./components/sections/Testimonials";
import DubaiFunds from "./components/sections/DubaiFunds";
import SaudiFunds from "./components/sections/SaudiFunds";
import Trust from "./components/sections/Trust";
import CTA from "./components/sections/CTA";
import Stats from "./components/sections/Stats";
import HowToMakeMoney from "./components/sections/HowToMakeMoney";
import ReviewCarousel from "./components/sections/ReviewCarousel";
import AgeVerificationPopup from "./components/AgeVerificationPopup";
import NotFound from "./components/NotFound";
import "./App.css";

function AppContent({ showAgeVerification, closeAgeVerification, isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  const is404 = location.pathname === "/404";

  if (is404) {
    return (
      <>
        <Routes>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-jakarta">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Featured />
              <HowItWorks />
              <Stats />
              <DubaiFunds />
              <SaudiFunds />
              <HowToMakeMoney />
              <Trust />
              <Testimonials />
              <ReviewCarousel />
              <CTA />
            </>
          } />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
      {showAgeVerification && <AgeVerificationPopup onClose={closeAgeVerification} />}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAgeVerification, setShowAgeVerification] = useState(true);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
    if (ageVerified === "true") {
      setShowAgeVerification(false);
    } else {
      setShowAgeVerification(true);
    }
  }, []);

  const closeAgeVerification = () => {
    setShowAgeVerification(false);
  };

  return (
    <Router>
      <AppContent
        showAgeVerification={showAgeVerification}
        closeAgeVerification={closeAgeVerification}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </Router>
  );
}

export default App;
