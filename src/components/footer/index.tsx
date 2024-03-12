import "./Footer.style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import logoDark from "../../assets/logo02.webp";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18] = useTranslation("global");

  return (
    <footer className="bg-white dark:bg-[#333] h-[18.5vh]">
      <div className="container">
        <div className="flex flex-row items-center justify-center mb-5 pt-5">
          <Link
            to={"/"}
            className={`flex gap-20 max-sm:gap-2 items-center text-black dark:text-white font-semibold text-lg ${
              i18.language === "en" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <img className="w-16 hidden dark:block" src={logo} alt="logo" />
            <img className="w-16 dark:hidden" src={logoDark} alt="logo" />
            {i18.language === "en" ? (
              <span className="text-2xl en">
                Your <span className="text-ghover">Money</span> Is the{" "}
                <span className="text-yhover">Max</span> ..{" "}
                <span className="text-bhover">Enjoy</span> &{" "}
                <span className="text-ohover">Relax</span>
              </span>
            ) : (
              <span className="text-2xl ar">
                <span className="text-ghover">فلوسك</span> في{" "}
                <span className="text-yhover">زيادة</span> .. استمتع{" "}
                <span className="text-bhover">بالراحة</span> و{" "}
                <span className="text-ohover">السعادة</span>
              </span>
            )}
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="border-t-[1px] border-black dark:border-white w-[600px]" />
        </div>
        <div className="flex flex-row justify-center items-center pt-2 text-sm text-black dark:text-gray-400">
          <h5 className="text-center">&#169; {t("footer.copyrights")}</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
