import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Access Denied</h2>
        <p className="text-gray-600 mb-8">
          You don't have access to this page. Please verify your age to continue.
        </p>
      
      </div>
    </motion.div>
  );
};

export default NotFound; 