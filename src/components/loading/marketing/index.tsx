import "./Marketing.style.css";

const LoadingMarketing = () => {
  return (
    <span
      className="Mloader border-black dark:border-white"
      onClick={() => scrollTo(0, 0)}
    ></span>
  );
};

export default LoadingMarketing;
