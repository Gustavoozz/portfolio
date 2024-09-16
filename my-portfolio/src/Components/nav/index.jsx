import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { PiTranslateBold } from "react-icons/pi";
import { motion } from 'framer-motion'
import React, { useState } from 'react';
import { Switch } from '../switch/index';

import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";

export const Nav = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };
  
  return (
    <motion.nav 
    initial={{ opacity: 0, y: -50, scale: 1.0}} 
        animate={{ opacity: 1, y: 0 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.5 }} 
        transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
        className="bg-transparent w-full p-4 px-20">
      <div className="flex justify-between items-center">
        <div className="flex-none">
          <h1 className="text-mainColors-white fontFamily-inter font-bold text-2xl mb-5">
            GM
          </h1>
        </div>

        <div className="p-2 flex items-center rounded-lg w-[40%]">
        <ul className="flex gap-8">
          <motion.li 
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className="fontFamily-inter font-semibold text-mainColors-white hover:text-mainColors-blue">
            <Link to="/">Home</Link>
          </motion.li>

          <motion.li 
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className="fontFamily-inter font-semibold text-mainColors-white hover:text-mainColors-blue">
            <Link to="/projects">Projects</Link>
          </motion.li>

          <motion.li 
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className="fontFamily-inter font-semibold text-mainColors-white hover:text-mainColors-blue">
            <Link to="">About me</Link>
          </motion.li>

          <motion.li 
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className="fontFamily-inter font-semibold text-mainColors-white hover:text-mainColors-blue">
            <Link to="">Contact</Link>
          </motion.li>
          
           <li className="">
          <PiTranslateBold className="mt-1" size="20" fill="#E7E7E7"/>
          </li>

          <div className=''>
             <Switch isChecked={isChecked} onChange={handleChange} />
          </div> 
         


           {/* <motion.div
          layout
          className="w-14 h-8 bg-gray-200 rounded-full shadow-inner"
          animate={{ x: isChecked ? '100%' : '0%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
          <motion.li
            className="w-6 h-6 bg-blue-500 rounded-full shadow-md"
            initial={{ x: '0%' }}
            animate={{ x: isChecked ? '100%' : '0%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
          
          <MdOutlineWbSunny className="mt-1" size="20" fill="#E7E7E7"/>
          </motion.li>
          </motion.div> 
 
           <select>
          <PiTranslateBold className="mt-1" size="20" fill="#E7E7E7"/>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
          </select>  */}
        </ul>
      </div>
        </div>
       
    </motion.nav>
  );
}


