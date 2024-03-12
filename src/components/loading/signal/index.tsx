import "./Signal.style.css";

const LoadingSignal = () => {
  return (
    <span
      className="Sloader border-black dark:border-white"
      onClick={() => scrollTo(0, 2700)}
    ></span>
  );
};

export default LoadingSignal;
