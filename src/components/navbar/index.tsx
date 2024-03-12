import "./Navbar.style.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LogoImg from "../../assets/logo.webp";
import LogoDarkImg from "../../assets/logo02.webp";
import Investment from "../../assets/investment.webp";
import InvestmentDark from "../../assets/investment02.webp";
import Recommend from "../../assets/recommend.webp";
import RecommendDark from "../../assets/recommend02.webp";
import Wallet from "../../assets/wallets.webp";
import WalletDark from "../../assets/wallets03.webp";
import Megaphone from "../../assets/megaphone.png";
import megaphone_dark from "../../assets/megaphone_dark.png";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  MegaphoneIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import UK from "../../assets/uk.png";
import UAE from "../../assets/uae.png";
import { Link } from "react-router-dom";

interface IProps {
  darkMode: boolean;
  onClick: () => void;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode, onClick }: IProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("menu-open", showMenu);
    document.body.classList.toggle("menu-closed", !showMenu);
  };

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  const [t, i18n] = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header
      className={`header ${
        scrolling ? "bg-white dark:bg-black" : "text-transparent"
      } duration-200 ${scrolling ? "bg-transparent" : "text-black"} ${
        showMenu ? "menu-open" : ""
      } ${i18n.language === "en" ? "en" : "ar"}`}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "78px",
        zIndex: "3000",
      }}
    >
      <div
        className={`menu__wrapper duration-200 ${
          scrolling ? "bg-white dark:bg-black" : "text-transparent"
        }`}
      >
        <div className="menu__bar">
          <Link to="/" title="Home" aria-label="home" className="logo">
            <img
              className={`${i18n.language === "en" ? "ml-0" : "ml-6"}`}
              src={!darkMode ? LogoDarkImg : LogoImg}
              alt="logo"
            />
          </Link>
          <nav>
            <ul className="navigation mt-4 hide">
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/"
                  title="Home"
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/about-us"
                  title="About Us"
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <button
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  type="button"
                >
                  {t("navbar.services")}
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    fill={!darkMode ? "#000" : "#f9f9f9"}
                  >
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                  </svg>
                </button>
                <div
                  className={`dropdown__wrapper ${
                    i18n.language === "en" ? "ml-0" : "ml-[-300px]"
                  }`}
                >
                  <div className={`dropdown bg-white dark:bg-[#3e3e3e]`}>
                    <ul className="list-items-with-description">
                      <Link
                        to="/investment"
                        className="text-black dark:text-[#f9f9f9] duration-150"
                      >
                        <li>
                          <div
                            className={`${
                              darkMode ? "icon-wrapper" : "icon-border"
                            }`}
                          >
                            <img
                              src={darkMode ? Investment : InvestmentDark}
                              alt="Investment"
                            />
                          </div>
                          <div className="item-title">
                            <h3>{t("navbar.investment")}</h3>
                            <p>{t("navbar.investmentD")}</p>
                          </div>
                        </li>
                      </Link>
                      <Link
                        to="/signal"
                        className="text-black dark:text-[#f9f9f9] duration-150"
                      >
                        <li>
                          <div
                            className={`${
                              darkMode ? "icon-wrapper" : "icon-border"
                            }`}
                          >
                            <img
                              src={darkMode ? Recommend : RecommendDark}
                              alt="Recommend"
                            />
                          </div>
                          <div className="item-title">
                            <h3>{t("navbar.signal")}</h3>
                            <p>{t("navbar.signalD")}</p>
                          </div>
                        </li>
                      </Link>
                      <Link
                        to="/wallet"
                        className="text-black dark:text-[#f9f9f9] duration-150"
                      >
                        <li>
                          <div
                            className={`${
                              darkMode ? "icon-wrapper" : "icon-border"
                            }`}
                          >
                            <img
                              style={{
                                width: "87%",
                              }}
                              src={darkMode ? Wallet : WalletDark}
                              alt="Wallet"
                            />
                          </div>
                          <div className="item-title">
                            <h3>{t("navbar.wallet")}</h3>
                            <p>{t("navbar.walletD")}</p>
                          </div>
                        </li>
                      </Link>
                      <Link
                        to="/marketing"
                        className="text-black dark:text-[#f9f9f9] duration-150"
                      >
                        <li>
                          <div
                            className={`${
                              darkMode ? "icon-wrapper" : "icon-border"
                            }`}
                          >
                            {i18n.language === "en" ? (
                              <MegaphoneIcon />
                            ) : (
                              <img
                                src={darkMode ? Megaphone : megaphone_dark}
                                alt="marketing"
                              />
                            )}
                          </div>
                          <div className="item-title">
                            <h3>{t("navbar.marketing")}</h3>
                            <p>{t("navbar.marketingD")}</p>
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/faq"
                  title="FAQ"
                >
                  {t("navbar.faq")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/contact-us"
                  title="CONTACT"
                >
                  {t("navbar.contact")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center gap-3 mt-4">
          <div
            className={`flex flex-row items-center gap-1 ${
              i18n.language === "en" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <button
              className={`language-button duration-100 ${
                i18n.language === "en" ? "english" : "arabic"
              }`}
              onClick={() =>
                handleChangeLang(i18n.language === "en" ? "ar" : "en")
              }
            >
              {i18n.language === "en" ? (
                <img className="w-6" src={UK} alt="english" />
              ) : (
                <img className="w-6" src={UAE} alt="arabic" />
              )}
            </button>
            <Switch
              onClick={onClick}
              checked={darkMode}
              onChange={setDarkMode}
              className={`${darkMode ? "bg-[#252841]" : "bg-[#ff983f]"} ${
                i18n.language === "en" ? "flex-row" : "flex-row-reverse"
              }
          relative flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${darkMode ? "translate-x-9" : "translate-x-0"}
            pointer-events-none flex justify-center items-center h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              >
                {darkMode ? (
                  <MoonIcon className="w-5 h-5 text-black" />
                ) : (
                  <SunIcon className="w-5 h-5 text-black" />
                )}
              </span>
            </Switch>
          </div>
          <div className="w-[1px] h-7 bg-slate-400 hide" />
          <div className="action-buttons hide">
            <a
              href="https://www.eng-money.com/system/login"
              title="Log in"
              target="_blank"
              className="secondary text-black dark:text-[#f9f9f9] duration-150"
            >
              {t("navbar.login")}
            </a>
            <a
              href="https://www.eng-money.com/system/register"
              title="Sign up"
              target="_blank"
              className="primary"
            >
              {t("navbar.register")}
            </a>
          </div>
        </div>
        <button
          aria-label="Toggle menu"
          className="burger-menu z-20"
          type="button"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <XMarkIcon className={"fill-black dark:fill-white"} />
          ) : i18n.language === "en" ? (
            <Bars3BottomRightIcon className={"fill-black dark:fill-white"} />
          ) : (
            <Bars3BottomLeftIcon className={"fill-black dark:fill-white"} />
          )}
        </button>
        {showMenu && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <nav>
                <ul className="text-center space-y-5">
                  <li className="text-black text-xl hover:text-yhover duration-150">
                    <Link to="/" title="Home" onClick={handleNavLinkClick}>
                      {t("navbar.home")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-yhover duration-150">
                    <Link
                      to="/about-us"
                      title="about"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.about")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-yhover duration-150">
                    <Link to="/faq" title="faq" onClick={handleNavLinkClick}>
                      {t("navbar.faq")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-yhover duration-150">
                    <Link
                      to="/investment"
                      title="investment"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.investment")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-yhover duration-150">
                    <Link
                      to="/signal"
                      title="signal"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.signal")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-yhover duration-150">
                    <Link
                      to="/wallet"
                      title="wallet"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.wallet")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-yhover duration-150">
                    <Link
                      to="/marketing"
                      title="marketing"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.marketing")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-yhover duration-150">
                    <Link
                      to="/contact-us"
                      title="contact"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.contact")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
