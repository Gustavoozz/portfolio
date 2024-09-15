// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { PiTranslateBold } from "react-icons/pi";
// import { motion } from 'framer-motion'
// import { MdOutlineWbSunny } from "react-icons/md";
// import React, { useState } from 'react';
// import { Switch } from '../switch/index';

// export const Nav = () => {

//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = () => {
//     setIsChecked(prev => !prev);
//   };
  
//   return (
//     <motion.nav 
//     initial={{ opacity: 0, y: -50, scale: 1.0}} 
//           animate={{ opacity: 1, y: 0 }} 
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 50, scale: 0.5 }} 
//           transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
//     className="bg-transparent  w-full p-4 px-20">
//       <div className="flex justify-between items-center">
//         <div className="flex-none">
//           <h1 className="text-mainColors-white fontFamily-inter font-bold text-2xl">
//             GM
//           </h1>
//         </div>

//         <div className="p-2 border border-mainColors-light bg-mainColors-light flex items-center rounded-lg w-[40%]">
//         <ul className="flex gap-8">
//           <motion.li 
//           whileHover={{ scale: 1.2 }}
//           onHoverStart={e => {}}
//           onHoverEnd={e => {}}
//           className="fontFamily-inter font-semibold text-mainColors-white hover:text-mainColors-blue">
//             <Link to="">Home</Link>
//           </motion.li>

//           <motion.li 
//           whileHover={{ scale: 1.2 }}
//           onHoverStart={e => {}}
//           onHoverEnd={e => {}}
//           className="fontFamily-inter font-semibold text-mainColors-white hover:text-mainColors-blue">
//             <Link to="">Projects</Link>
//           </motion.li>

//           <motion.li 
//           whileHover={{ scale: 1.2 }}
//           onHoverStart={e => {}}
//           onHoverEnd={e => {}}
//           className="fontFamily-inter font-semibold text-mainColors-white hover:text-mainColors-blue">
//             <Link to="">About me</Link>
//           </motion.li>

//           <motion.li 
//           whileHover={{ scale: 1.2 }}
//           onHoverStart={e => {}}
//           onHoverEnd={e => {}}
//           className="fontFamily-inter font-semibold text-mainColors-white hover:text-mainColors-blue">
//             <Link to="">Contact</Link>
//           </motion.li>

//           {/* <li className="">
//           <PiTranslateBold className="mt-1" size="20" fill="#E7E7E7"/>
//           </li>

//           <div>
//              <Switch isChecked={isChecked} onChange={handleChange} />
             
//           </div> */}
         


//           {/* <motion.div
//           layout
//           className="w-14 h-8 bg-gray-200 rounded-full shadow-inner"
//           animate={{ x: isChecked ? '100%' : '0%' }}
//           transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//           >
//           <motion.li
//             className="w-6 h-6 bg-blue-500 rounded-full shadow-md"
//             initial={{ x: '0%' }}
//             animate={{ x: isChecked ? '100%' : '0%' }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//           >
          
//           <MdOutlineWbSunny className="mt-1" size="20" fill="#E7E7E7"/>
//           </motion.li>
//           </motion.div> */}
 
//           {/* <select>
//           <PiTranslateBold className="mt-1" size="20" fill="#E7E7E7"/>
//           <option value="someOption">Some option</option>
//           <option value="otherOption">Other option</option>
//           </select> */}
//         </ul>
//       </div>
//         </div>
       
//     </motion.nav>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from '../../Utils/cn';

type AnimatedTabsProps = {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
};

export function Nav({
  containerClassName,
  activeTabClassName,
  tabClassName,
}: AnimatedTabsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const tabs = [
    {
      title: "Home",
    },
    {
      title: "Projects",
    },
    {
      title: "About me",
    },
    {
      title: "Contact"
    }
  ];

  return (
    <motion.nav
    initial={{ opacity: 0, y: -50, scale: 1.0}} 
    animate={{ opacity: 1, y: 0 }} 
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 50, scale: 0.5 }} 
    transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
    className={cn("relative flex flex-wrap items-center justify-between bg-transparent w-full p-4 px-20", containerClassName
    )}
    >
      <div>
        <h1 className="text-mainColors-white fontFamily-inter font-bold text-2xl">GM</h1>
      </div>

      <div className="p-2 bg-transparent flex items-center rounded-full w-auto">
      {tabs.map((tab, index) => (
        <button
          key={tab.title}
          onClick={() => setActiveIdx(index)}
          className={cn(
            "group relative z-[1] rounded-full px-4 py-2",
            { "z-0": activeIdx === index },
            tabClassName
          )}
        >
          {activeIdx === index && (
            <motion.div
              layoutId="clicked-button"
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute inset-0 rounded-full bg-white",
                activeTabClassName
              )}
            />
          )}

          <span
            className={cn(
              "relative text-sm block font-semibold fontFamily-inter text-md duration-200",
              activeIdx === index ? "text-black delay-100" : "text-white"
            )}
          >
            {tab.title}
          </span>
        </button>
      ))}
      </div>
     
    </motion.nav>
  );
}