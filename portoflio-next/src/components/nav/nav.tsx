'use client';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextNav } from '../text/text';
import ThemeToggle from '../themeSwitch/themeSwitch';
import { Menu, X } from 'lucide-react';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = useCallback((id: string) => {
    console.log(`Scrolling to ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Sobre mim', id: 'about' },
    { name: 'Projetos', id: 'projects' },
  ];

  const NavItem = ({
    item,
    isMobile,
    onClick,
  }: {
    item: { name: string; id: string };
    isMobile: boolean;
    onClick?: () => void;
  }) => (
    <motion.li
      whileHover={isMobile ? {} : { scale: 1.1 }}
      className="nav-item"
    >
      <button
        onClick={() => {
          console.log(`Clicked on ${item.name}`);
          if (onClick) onClick();
          scrollTo(item.id);
        }}
        className="w-full text-left py-2 px-4  rounded transition-colors"
      >
        <TextNav styles="font-poppins">{item.name}</TextNav>
      </button>
    </motion.li>
  );

  return (
    <nav className="w-full p-2 sm:p-4 bg-transparent bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-none">
          <h1 className="font-poppins font-bold text-2xl">GM</h1>
        </div>

        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="z-50 relative p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden sm:flex justify-end font-medium">
          <ul className="flex gap-8 ">
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} isMobile={false} onClick={() => setIsMenuOpen(false)} />
            ))}
            <li className="mt-0 "><ThemeToggle /></li>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-[50%] z-40 bg-mainColors-lightGray dark:bg-black sm:hidden"
          >
            <div className="h-full px-4 flex flex-col justify-start py-12">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavItem key={item.id} item={item} isMobile={true} onClick={() => setIsMenuOpen(false)} />
                ))}
                <li className=''>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
