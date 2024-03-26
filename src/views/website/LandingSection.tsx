import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Button from "../../components/schema/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import video from "../../assets/landing.mp4";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/loading/screen";
import BackgroundImg from "../../assets/landing.jpg";
import Countdown from "../../components/CountDown";

const LandingSection = () => {
  const [t, i18n] = useTranslation("global");
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

  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center pt-64 max-sm:pt-52 pb-12 text-center`}
    >
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
          <Countdown />
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

export default LandingSection;
