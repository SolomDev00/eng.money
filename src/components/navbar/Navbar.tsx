import "./Navbar.style.css";
import { Dispatch, SetStateAction, useState } from "react";
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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("menu-open", showMenu);
    document.body.classList.toggle("menu-closed", !showMenu);
  };

  const [t, i18n] = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header
      className={`header z-50 ${showMenu ? "menu-open" : ""} ${
        i18n.language === "en" ? "en" : "ar"
      }`}
      // className={`header bg-white dark:bg-[#080707] ${
      //   showMenu ? "menu-open" : ""
      // } ${i18n.language === "en" ? "en" : "ar"}`}
    >
      <div className="menu__wrapper">
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
                  <div className="dropdown">
                    <ul className="list-items-with-description">
                      <a
                        className="text-black dark:text-[#f9f9f9] duration-150"
                        href="/#invest"
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
                      </a>
                      <a
                        className="text-black dark:text-[#f9f9f9] duration-150"
                        href="/#signal"
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
                      </a>
                      <a
                        className="text-black dark:text-[#f9f9f9] duration-150"
                        href="/#wallet"
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
                      </a>
                      <Link
                        className="text-black dark:text-[#f9f9f9] duration-150"
                        to="/marketing"
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
                  <MoonIcon className="w-5 h-5" />
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
          {showMenu ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </button>
        {showMenu && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <nav>
                <ul>
                  <li>
                    <a href="#devs" title="Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" title="About Us">
                      About Us
                    </a>
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
