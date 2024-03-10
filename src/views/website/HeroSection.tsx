import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Button from "../../components/schema/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import facebook from "../../assets/media/facebook.png";
import twitter from "../../assets/media/twitter.png";
import instagram from "../../assets/media/instagram.png";
import telegram from "../../assets/media/telegram.png";
import tiktok from "../../assets/media/tiktok.png";
import whatsapp from "../../assets/media/whatsapp.png";
import youtube from "../../assets/media/youtube.png";
import video from "../../assets/landing.mp4";

const HeroSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center pt-64 pb-12 text-center`}
    >
      <div className="video-background">
        <video autoPlay muted loop id="video-background">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay dark:bg-[#000000b3]" />
      </div>
      <div className="space-y-36 z-30">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-sm:space-y-4">
          <motion.h3 className="text-5xl text-yhover font-medium max-sm:text-xl">
            {t("home.hero.title")}
          </motion.h3>
          <h5 className="text-xl text-black dark:text-gray-400 w-[550px] text-center max-sm:text-base max-sm:w-[300px]">
            {t("home.hero.description")}
          </h5>
          <Link to={"/about-us"}>
            <Button
              dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
              variant={"outline"}
              className="flex flex-row gap-2 py-2 px-6 rounded-md text-lg text-black dark:text-white hover:bg-yhover border-yhover border-2 max-sm:px-3 max-sm:text-base"
            >
              {t("home.hero.seeMore")}
              <InformationCircleIcon className="h-7 w-7 text-black dark:text-white" />
            </Button>
          </Link>
          <div className="flex flex-row justify-center gap-5">
            <Link to={"/"} className="hover:scale-110 duration-200">
              <img className="w-10" src={facebook} alt="" />
            </Link>
            <Link to={"/"} className="hover:scale-110 duration-200">
              <img className="w-10" src={instagram} alt="" />
            </Link>
            <Link to={"/"} className="hover:scale-110 duration-200">
              <img className="w-10" src={whatsapp} alt="" />
            </Link>
            <Link to={"/"} className="hover:scale-110 duration-200">
              <img className="w-10" src={twitter} alt="" />
            </Link>
            <Link to={"/"} className="hover:scale-110 duration-200">
              <img className="w-10" src={telegram} alt="" />
            </Link>
            <Link to={"/"} className="hover:scale-110 duration-200">
              <img className="w-10" src={youtube} alt="" />
            </Link>
            <Link to={"/"} className="hover:scale-110 duration-200">
              <img className="w-10" src={tiktok} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
