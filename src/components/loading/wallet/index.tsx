import "./Wallet.style.css";

const LoadingWallet = () => {
  return (
    <span
      className="Wloader max-sm:hidden"
      onClick={() => scrollTo(0, 4250)}
    ></span>
  );
};

export default LoadingWallet;
