import { motion } from 'framer-motion';

export function Button({ icon, children, styles }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200  ${styles}`}
    >
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-full w-full overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-px rounded-[11px] bg-mainColors-gray transition-colors duration-200 group-hover:bg-btnGradient" />
      <span className="z-10 flex items-center text-mainColors-white text-sm font-medium">
        {icon && <span className="mr-3">{icon}</span>}
        {children}
      </span>
    </motion.button>
  );
}

export function ButtonAccess({ children, styles }) {
  return (
    <button className="inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-neutral-200 bg-[linear-gradient(110deg,#ffffff,45%,#f0f0f0,55%,#ffffff)] bg-[length:200%_100%] px-4 py-2 font-medium text-neutral-900 transition-colors">
    {children}
  </button>
  
  );
}