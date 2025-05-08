import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const AgeVerificationPopup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const handleYes = () => {
    window.location.href = 'https://ad.kadserv3.icu/deliver/redirect/token/0eec846cb6e24ed';
  };

  const handleNo = () => {
    navigate('/404');
  };



  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
            
          />

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] bg-white rounded-xl shadow-xl max-w-md w-[90%] p-8"
          >


            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#121C30] mb-4">
                  Age Verification
                </h2>
                <p className="text-gray-600">
                  You must be 18 years or older to access this website. Please
                  confirm you meet the age requirement.
                </p>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleYes}
                  className="bg-[#30D48C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#28b77d] transition-colors"
                >
                  Yes, I am 18 or older
                </button>
                <button
                  onClick={handleNo}
                  className="text-gray-500 text-sm hover:text-gray-700"
                >
                  No, take me away
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AgeVerificationPopup;
