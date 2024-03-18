import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Button from "../../components/schema/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import facebook from "../../assets/media/facebook.png";
import twitter from "../../assets/media/twitter_light.png";
import instagram from "../../assets/media/instagram.png";
import telegram from "../../assets/media/telegram.png";
import tiktok from "../../assets/media/tiktok_light.png";
import whatsapp from "../../assets/media/whatsapp.png";
import youtube from "../../assets/media/youtube.png";
import video from "../../assets/landing.mp4";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/loading/screen";
import BackgroundImg from "../../assets/landing.jpg";
import PopUp from "../../components/Popup";

const HeroSection = () => {
  const [t, i18n] = useTranslation("global");
  const [scrolling, setScrolling] = useState(false);
  const [showPopUp, setShowPopUp] = useState(true);

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

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

  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center pt-64 max-sm:pt-52 pb-12 text-center`}
    >
      {showPopUp && <PopUp onClose={handleClosePopUp} />}
      <div
        className={`video-background`}
        style={{ top: scrolling ? "75px" : "0px" }}
      >
        <img
          id="video-background"
          src={BackgroundImg}
          alt="background"
          className="dark:hidden"
        />
        <video autoPlay muted loop id="video-background">
          <source src={video} type="video/mp4" className="hidden dark:block" />
        </video>
        <div className="overlay dark:bg-[#000000b3] " />
      </div>
      <div className="space-y-36 z-30">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-sm:space-y-4 max-sm:px-2">
          <h3 className="text-5xl w-[860px] max-sm:w-full text-yhover font-medium max-sm:text-2xl">
            {t("home.hero.title")}
          </h3>
          <h5 className="text-xl text-black dark:text-gray-200 w-[580px] text-center max-sm:text-base max-sm:w-full">
            {t("home.hero.description")}
          </h5>
          <div className="flex flex-row justify-center gap-7 max-sm:gap-3">
            <Link
              to={"https://facebook.com/ENG.MONEY.LTD"}
              target="_blank"
              className="hover:scale-110 duration-200"
              title="Facebook"
            >
              <img className="w-9 max-sm:w-7" src={facebook} alt="" />
            </Link>
            <Link
              to={"https://instagram.com/eng_money_ltd"}
              target="_blank"
              className="hover:scale-110 duration-200"
              title="Instagram"
            >
              <img className="w-9 max-sm:w-7" src={instagram} alt="" />
            </Link>
            <Link
              to={"https://whatsapp.com/channel/0029VaDjoncAojZ1c85qv327"}
              target="_blank"
              className="hover:scale-110 duration-200"
              title="Whatsapp"
            >
              <img className="w-9 max-sm:w-7" src={whatsapp} alt="" />
            </Link>
            <Link
              target="_blank"
              to={"https://twitter.com/eng_money_ltd"}
              className="bg-black dark:bg-transparent p-1 rounded-md hover:scale-110 duration-200"
              title="Twitter"
            >
              <img
                className="w-7 dark:w-7 max-sm:w-5 max-sm:dark:w-5"
                src={twitter}
                alt=""
              />
            </Link>
            <Link
              to={"https://t.me/ENG_MONEY_LTD_CHANNEL"}
              target="_blank"
              className="hover:scale-110 duration-200"
              title="Telegram"
            >
              <img className="w-9 max-sm:w-7" src={telegram} alt="" />
            </Link>
            <Link
              to={"https://www.youtube.com/@Eng_Money"}
              target="_blank"
              className="hover:scale-110 duration-200"
              title="Youtube"
            >
              <img className="w-9 max-sm:w-7" src={youtube} alt="" />
            </Link>
            <Link
              to={"https://tiktok.com/@eng_money_ltd"}
              target="_blank"
              className="bg-black dark:bg-transparent p-1 rounded-md hover:scale-110 duration-200"
              title="Tiktok"
            >
              <img
                className="w-7 dark:w-7 max-sm:w-5 max-sm:dark:w-5"
                src={tiktok}
                alt=""
              />
            </Link>
          </div>
          <Link to={"/about-us"} onClick={() => window.scrollTo(0, 0)}>
            <Button
              dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
              variant={"outline"}
              className="flex flex-row gap-2 py-2 px-6 rounded-md text-lg text-black dark:text-white hover:bg-yhover border-yhover border-2 max-sm:px-3 max-sm:text-sm"
            >
              {t("home.hero.seeMore")}
              <InformationCircleIcon className="w-7 max-sm:w-5 text-black dark:text-white" />
            </Button>
          </Link>

          <LoadingScreen />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
