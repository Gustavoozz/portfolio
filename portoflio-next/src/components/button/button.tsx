"use client";
import { motion } from 'framer-motion'
import { toast } from 'react-toastify';

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
    <button
      className={`bg-white text-center w-36 sm:w-40 rounded-2xl h-14 relative text-black text-md sm:text-lg font-semibold group ${styles}`}
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
      <p className="translate-x-2 ml-4">{children}</p>
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
      className="hidden sm:flex group w-12 hover:w-44 h-12 hover:bg-sky-400 bg-sky-500 dark:hover:bg-sky-600 dark:bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45 fixed bottom-5 left-5 z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
      <span
        className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all font-poppins text-[13px] ml-3 w-full"
      >
        Voltar ao inicio
      </span>
    </button>

  );
};

interface SocialMediaProps {
  icon?: React.ReactNode;
}

export const SocialMediaButtons: React.FC<SocialMediaProps> = () => {
  return (
    <div className="*:transition-all *:duration-300 flex justify-start text-2xl items-center z-10 bg-transparent gap-2 p-2 rounded-full">
      <a
        href="mailto:gustavonascimento928@gmail.com?subject=Assunto%20do%20E-mail&body=Olá,%20Gustavo!%20Gostaria%20de%20contatar%20você."
        target="_blank"
        rel="noopener noreferrer"
        className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Gmail'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-xl before:right-0 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#191818] rounded-full p-2 font-poppins"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/gustavo-magalh%C3%A3es-nasc/"
        target="_blank"
        rel="noopener noreferrer"
        className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Linkedin'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-xl before:right-0 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#191818] rounded-full p-2 font-poppins"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      <a
        href="https://github.com/Gustavoozz"
        target="_blank"
        rel="noopener noreferrer"
        className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Github'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-xl before:right-0 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#191818] rounded-full p-2 font-poppins"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </a>
    </div>
  )
}


const handleDownload = () => {
  toast.success('Download concluído!');
};

export const ButtonDownloadCV = () => {
  return (
    <a
      href="/pdf/Currículo - Gustavo Magalhães (2).pdf"
      download="Currículo - Gustavo Magalhães.pdf"
      onClick={handleDownload}
      className="group/button relative inline-flex items-center justify-center overflow-hidden bg-sky-500 dark:bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20 rounded-xl font-poppins mt-0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
      <span className="text-lg ml-4">Download CV</span>
      <div
        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
      >
        <div className="relative h-full w-10 bg-white/30"></div>
      </div>
    </a>

  )
}