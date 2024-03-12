import "./Screen.style.css";

const LoadingScreen = () => {
  return (
    <span
      className="loader border-black dark:border-white"
      onClick={() => scrollTo(0, 1000)}
    ></span>
  );
};

export default LoadingScreen;
