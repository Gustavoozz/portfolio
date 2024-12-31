"use client";
import { motion } from 'framer-motion'

interface ButtonProps {
  icon?: React.ReactNode;
  children: string;
  styles?: string;
}

export const Button: React.FC<ButtonProps> = ({ icon, children, styles }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`bg-mainColors-white inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-mainColors-white hover:bg-[linear-gradient(110deg,#f2f3f2,45%,#f9f9f8,55%,#ffffff)] bg-[length:200%_100%] px-4 py-2 font-medium text-mainColors-gray transition-colors ${styles}`}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}

    </motion.button>
  );
}

interface ButtonAccessProps {
  children: React.ReactNode;
  styles?: string;
}

export const ButtonAccess: React.FC<ButtonAccessProps> = ({ children, styles }) => {
  return (
    //   <button classNameName={`inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-neutral-200 bg-[linear-gradient(110deg,#ffffff,45%,#f0f0f0,55%,#ffffff)] bg-[length:200%_100%] px-4 py-2 font-medium text-neutral-900 transition-colors ${styles}`}>
    //   {children}
    // </button>

    <button
      className={`bg-white text-center w-40 rounded-2xl h-14 relative text-black text-xl font-semibold group ${styles}`}
      type="button"
    >
      <div
        className="bg-blue-400 rounded-xl h-12 w-[30%] flex items-center justify-center absolute left-1 top-[4px] hover:w-[150px] z-10 duration-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#ffffff"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <p className="translate-x-2">{children}</p>
    </button>

  );
}

interface ButtonGoBackProps {
  onClick: () => void;
}

export const ButtonGoBack: React.FC<ButtonGoBackProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group w-12 hover:w-44 h-12 hover:bg-sky-600 bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45 fixed bottom-5 left-5 z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
      <span
        className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all font-poppins"
      >
        Voltar ao inicio
      </span>
    </button>

  );
};