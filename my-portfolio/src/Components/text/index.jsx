export const Title = (props) => {
  return (
    <h1 className={`font-poppins text-6xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-mainColors-white ${props.styles}`}>
      {props.children}
    </h1>
  );
};

export const SubTitle = (props) => {
  return (
    <span className="inline-flex animate-text-gradient bg-gradient-to-r from-mainColors-blue via-mainColors-white font-poppins to-[#0077B6] bg-[200%_auto] text-5xl sm:text-2xl md:text-3xl lg:text-5xl text-center text-transparent font-bold bg-clip-text">
      {props.children}
    </span>
  );
};

export const Paragraphy = (props) => {
  return (
    <p className={`font-poppins text-xl sm:text-md md:text-lg lg:text-xl font-semibold text-mainColors-light ${props.styles}`}>
      {props.children}
    </p>
  );
};

export const TextLink = (props) => {
  return (
    <a className={`font-poppins text-xl sm:text-md md:text-lg lg:text-xl font-semibold text-mainColors-light ${props.styles}`}>
      {props.children}
    </a>
  );
};
