import "./Signal.style.css";

const LoadingSignal = () => {
  return (
    <span
      className="Sloader max-sm:hidden"
      onClick={() => scrollTo(0, 3250)}
    ></span>
  );
};

export default LoadingSignal;
