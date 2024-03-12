import "./Wallet.style.css";

const LoadingWallet = () => {
  return (
    <span
      className="Wloader border-black dark:border-white"
      onClick={() => scrollTo(0, 4250)}
    ></span>
  );
};

export default LoadingWallet;
