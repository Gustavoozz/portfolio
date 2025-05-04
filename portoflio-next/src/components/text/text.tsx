interface TitleProps {
  children: string;
  styles?: string;
}


export const Title: React.FC<TitleProps> = ({ children, styles }) => {
  return (
    <h1 className={`font-poppins text-3xl sm:text-5xl text-center font-bold ${styles}`}>
      {children}
    </h1>
  );
};

interface SubTitleProps {
  children: string;
  styles?: string;
}

export const SubTitle: React.FC<SubTitleProps> = ({ children, styles }) => {
  return (
    <span className={`text-3xl font-poppins sm:text-5xl inline-flex animate-shine  dark:bg-[linear-gradient(110deg,#0052A2,45%,#02386E,55%,#00498D)] bg-[linear-gradient(110deg,#6366f1,45%,#0ea5e9,55%,#4f46e5)] bg-[length:200%_100%] font-bold text-transparent bg-clip-text text-center bg-indigo-600 ${styles}`}>
      {children}
    </span>
  );
};

interface ParagraphProps {
  children: string;
  styles?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, styles }) => {
  return (
    <p className={`font-poppins text-center text-lg sm:text-xl font-thin text-mainColors-light ${styles}`}>
      {children}
    </p>
  );
};

interface ParagraphTypeWriterProps {
  children: React.ReactNode;
  styles?: string;
}


export const ParagraphTypeWriter: React.FC<ParagraphTypeWriterProps> = ({ children, styles }) => {
  return (
    <p className={`font-mono text-center mb-2 sm:mb-0 text-lg sm:text-2xl font-thin text-mainColors-light ${styles}`}>
      {children}
    </p>
  )
}

interface TextLinkProps {
  children: string;
  styles?: string;
}

export const TextLink: React.FC<TextLinkProps> = ({ children, styles }) => {
  return (
    <a className={`font-poppins text-xl sm:text-md md:text-lg lg:text-xl font-semibold text-mainColors-light ${styles}`}>
      {children}
    </a>
  );
};

interface TextNavProps {
  children: string;
  styles?: string;
}

export const TextNav: React.FC<TextNavProps> = ({ children, styles }) => {
  return (
    <div className={`relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left sm:hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 ${styles}`}>
      <span>{children}</span>
    </div>
  );
}
