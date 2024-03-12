import "./Screen.style.css";

const LoadingScreen = () => {
  return (
    <span
      className="loader max-sm:hidden"
      onClick={() => scrollTo(0, 1150)}
    ></span>
  );
};

export default LoadingScreen;
