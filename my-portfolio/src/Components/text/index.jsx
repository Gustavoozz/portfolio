export const Title = (props) => {
  return <h1 className={`fontFamily-inter text-6xl font-bold text-mainColors-white ${props.styles}`}>{props.children}</h1>
}


export const SubTitle = (props) => {
  return (
    <span className="inline-flex animate-text-gradient bg-gradient-to-r from-mainColors-blue via-mainColors-white to-[#0077B6] bg-[200%_auto] text-6xl text-center text-transparent font-bold bg-clip-text">
      {props.children}
    </span>
  );
};


export const Paragraphy = (props) => {
  return <p className={`fontFamily-inter text-xl font-semibold text-mainColors-light ${props.styles}`}>{props.children}</p>
}