// src/CustomScrollbar.js
import React from 'react';
import { motion } from 'framer-motion';

const CustomScrollbar = ({ children }) => {
  return (
    <div className="relative w-full h-80 overflow-hidden border border-gray-300 bg-gray-100">
      <motion.div
        className="absolute right-0 top-0 h-full w-3 bg-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="overflow-y-scroll h-full pr-4">
        {children}
      </div>
    </div>
  );
};

export default CustomScrollbar;
