import "./Marketing.style.css";

const LoadingMarketing = () => {
  return (
    <span
      className="Mloader max-sm:hidden"
      onClick={() => scrollTo(0, 0)}
    ></span>
  );
};

export default LoadingMarketing;
