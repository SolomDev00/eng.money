import "./Invest.style.css";

const LoadingInvest = () => {
  return (
    <span
      className="Iloader max-sm:hidden"
      onClick={() => scrollTo(0, 2250)}
    ></span>
  );
};

export default LoadingInvest;
