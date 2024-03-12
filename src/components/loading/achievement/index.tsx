import "./Achievement.style.css";

const LoadingAchievement = () => {
  return (
    <span
      className="Aloader border-black dark:border-white"
      onClick={() => scrollTo(0, 0)}
    ></span>
  );
};

export default LoadingAchievement;
