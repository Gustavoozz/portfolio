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
          if (onClick) onClick(); // Chamando o onClick se for passado
          scrollTo(item.id);
        }}
        className="w-full text-left py-2 px-4  rounded transition-colors"
      >
        <TextNav styles="font-poppins">{item.name}</TextNav>
      </button>
    </motion.li>
  );

  return (
    <nav className="w-full p-4 bg-transparent bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
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

        <div className="hidden sm:flex justify-end rounded-lg font-medium">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} isMobile={false} onClick={() => setIsMenuOpen(false)} />
            ))}
            <li className="mt-2"><ThemeToggle /></li>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-16 right-0 w-[40%] bg-white dark:bg-black shadow-lg z-40 sm:hidden
                   flex flex-col justify-end py-4 px-4"
            >
              <ul className="flex flex-col gap-2 items-end">
                {navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    item={item}
                    isMobile={true}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}
                <li className="mr-16">
                  <ThemeToggle />
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white dark:bg-black bg-opacity-50 z-30 sm:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
