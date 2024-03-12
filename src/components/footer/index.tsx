import "./Footer.style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import logoDark from "../../assets/logo02.webp";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18] = useTranslation("global");

  return (
    <footer className="border-b-white bg-black dark:bg-white h-[18vh]">
      <div className="container">
        <div className="flex flex-row items-center justify-center mb-5 pt-5">
          <Link
            to={"/"}
            className={`flex gap-20 max-sm:gap-2 items-center text-white dark:text-black font-semibold text-lg ${
              i18.language === "en" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <img className="w-16 dark:hidden" src={logo} alt="logo" />
            <img className="w-16 hidden dark:block" src={logoDark} alt="logo" />
            <span className="text-2xl">{t("footer.title")} </span>
          </Link>
        </div>
        <div className="border-t-[1px] border-white dark:border-black" />
        <div className="flex flex-row justify-center items-center pt-2 text-sm text-gray-400 dark:text-black">
          <h5 className="text-center">{t("footer.copyrights")}</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
