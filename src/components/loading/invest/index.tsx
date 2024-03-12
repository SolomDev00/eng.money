import "./Invest.style.css";

const LoadingInvest = () => {
  return (
    <span
      className="Iloader border-black dark:border-white"
      onClick={() => scrollTo(0, 1920)}
    ></span>
  );
};

export default LoadingInvest;
