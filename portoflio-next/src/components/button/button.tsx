"use client";
import { motion } from 'framer-motion'

interface ButtonProps {
  icon?: React.ReactNode;
  children: string;
  styles?: string;
}

export const Button:React.FC<ButtonProps> = ({ icon, children, styles }) => {
  return (
    <motion.button
    whileHover={{scale: 1.1}}
      className={`bg-mainColors-white inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-mainColors-white hover:bg-[linear-gradient(110deg,#f2f3f2,45%,#f9f9f8,55%,#ffffff)] bg-[length:200%_100%] px-4 py-2 font-medium text-mainColors-gray transition-colors ${styles}`}
    >
        {icon && <span className="mr-3">{icon}</span>}
        {children}

    </motion.button>
  );
}

interface ButtonAccessProps {
  children: string;
  styles?: string;
}

export const ButtonAccess:React.FC<ButtonAccessProps> =({ children, styles }) => {
  return (
    <button className={`inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-neutral-200 bg-[linear-gradient(110deg,#ffffff,45%,#f0f0f0,55%,#ffffff)] bg-[length:200%_100%] px-4 py-2 font-medium text-neutral-900 transition-colors ${styles}`}>
    {children}
  </button>
  
  );
}