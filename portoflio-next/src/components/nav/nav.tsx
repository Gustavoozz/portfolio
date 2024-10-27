"use client";
// import { PiTranslateBold } from "react-icons/pi";
import { motion } from 'framer-motion';
import { TextNav } from '../text/text';
import ThemeToggle from '../themeSwitch/themeSwitch';


export const Nav = () => {

  const scrollToHome = () => {
    const section = document.getElementById('home');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    const section = document.getElementById('skills');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="bg-transparent w-full p-4 px-20"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex-none">
          <h1 className="font-poppins font-bold text-2xl">
            GM
          </h1>
        </div>

        <div className="p-2 flex justify-end rounded-lg w-[50%]">
          <ul className="flex gap-8">
            <motion.li 
              whileHover={{ scale: 1.1 }}
              className="nav-item"
            >
             <button onClick={scrollToHome}><TextNav>Home</TextNav></button>
            </motion.li>

            <motion.li 
              whileHover={{ scale: 1.1 }}
              className="nav-item"
            >
              <button onClick={scrollToSkills}><TextNav>Skills</TextNav></button>
            </motion.li>

            <motion.li 
              whileHover={{ scale: 1.1 }}
             className="nav-item"
            >
             <button onClick={scrollToAbout}><TextNav>About</TextNav></button>
            </motion.li>

            <motion.li 
              whileHover={{ scale: 1.1 }}
              className="nav-item"
            >
              <button onClick={scrollToProjects}><TextNav>Projects</TextNav></button>
            </motion.li>

            <li>
              <ThemeToggle />
            </li>

            {/* <div className="relative">
              <div className="cursor-pointer">
                <PiTranslateBold size="20" fill="#E7E7E7"/>
              </div>
              
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
