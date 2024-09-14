import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineWbSunny } from 'react-icons/md'; // Importa o ícone desejado

export const Switch = ({ isChecked, onChange }) => {
  return (
    <motion.div
      className="relative inline-flex items-center cursor-pointer"
      onClick={onChange}
    >
      <motion.div
        className="relative w-14 h-8 p-1 bg-mainColors-light rounded-full shadow-inner flex items-center"
        animate={{ x: isChecked ? '0%' : '0%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="absolute w-6 h-6 bg-mainColors-gray rounded-full shadow-md flex items-center justify-center"
          initial={{ x: '0%' }}
          animate={{ x: isChecked ? '100%' : '0%' }} 
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <MdOutlineWbSunny size="12" fill="#E7E7E7"/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
