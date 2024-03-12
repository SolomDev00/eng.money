import "./Screen.style.css";

const LoadingScreen = () => {
  return (
    <span
      className="loader border-black dark:border-white"
      onClick={() => scrollTo(0, 993)}
    ></span>
  );
};

export default LoadingScreen;
