import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { PiTranslateBold } from "react-icons/pi";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Select from 'react-select';
import { Switch } from '../switch/index';

export const Nav = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const selectVariants = {
    open: { opacity: 1, height: 'auto', overflow: 'visible' },
    closed: { opacity: 0, height: 0, overflow: 'hidden' }
  };

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };

  const handleChangeSelect = (selectedOption) => {
    console.log('Opção selecionada:', selectedOption);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50, scale: 1.0}} 
      animate={{ opacity: 1, y: 0 }} 
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.5 }} 
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      className="bg-transparent w-full p-4 px-20"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex-none">
          <h1 className="text-mainColors-white font-poppins font-bold text-2xl mb-5">
            GM
          </h1>
        </div>

        <div className="p-2 flex justify-end rounded-lg w-[50%]">
          <ul className="flex gap-8">
            <motion.li 
              whileHover={{ scale: 1.2 }}
              className="font-poppins font-semibold text-mainColors-white hover:text-mainColors-blue"
            >
              <Link to="/">Home</Link>
            </motion.li>

            <motion.li 
              whileHover={{ scale: 1.2 }}
              className="font-poppins font-semibold text-mainColors-white hover:text-mainColors-blue"
            >
              <Link to="/projects">Projects</Link>
            </motion.li>

            <motion.li 
              whileHover={{ scale: 1.2 }}
              className="font-poppins font-semibold text-mainColors-white hover:text-mainColors-blue"
            >
              <Link to="">About me</Link>
            </motion.li>

            <motion.li 
              whileHover={{ scale: 1.2 }}
              className="font-poppins font-semibold text-mainColors-white hover:text-mainColors-blue"
            >
              <Link to="">Contact</Link>
            </motion.li>

            <div className="relative">
              <div onClick={() => setIsSelectOpen(prev => !prev)} className="cursor-pointer">
                <PiTranslateBold size="20" fill="#E7E7E7"/>
              </div>
              <motion.div
                initial="closed"
                animate={isSelectOpen ? "open" : "closed"}
                variants={selectVariants}
                transition={{ duration: 0.3 }}
                className="absolute z-10"  // Ensures the select menu is above other content
              >
                {isSelectOpen && (
                  <Select
                    options={options}
                    onChange={handleChangeSelect}
                    className="w-auto transparent-select"
                    styles={{
                      option: (provided) => ({
                        ...provided,
                        backgroundColor: 'transparent',
                        color: 'black'
                      }),
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: 'transparent',
                        border: '2px solid #ffffff',
                        borderRadius: '0.75rem'
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: 'white'
                      })
                    }}
                  />
                )}
              </motion.div>
            </div>

            <div className=''>
              <Switch isChecked={isChecked} onChange={handleChange} />
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};
