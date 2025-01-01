interface TitleProps {
  children: string;
  styles?: string;
}


export const Title: React.FC<TitleProps> = ({ children, styles }) => {
  return (
    <h1 className={`font-poppins text-5xl text-center font-bold ${styles}`}>
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
    <span className={`text-5xl inline-flex animate-shine bg-[linear-gradient(110deg,#0052A2,45%,#02386E,55%,#00498D)] bg-[length:200%_100%] font-bold text-transparent bg-clip-text text-center ${styles}`}>
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
    <p className={`font-poppins text-center text-xl font-thin text-mainColors-light ${styles}`}>
      {children}
    </p>
  );
};

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
    <div className={`relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 ${styles}`}>
      <span>{children}</span>
    </div>
  );
}
