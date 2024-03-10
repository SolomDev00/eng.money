import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Button from "../../components/schema/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import discord from "../../assets/media/discord.svg";
import facebook from "../../assets/media/facebook.svg";
import twitter from "../../assets/media/twitter.svg";
import instagram from "../../assets/media/instagram.svg";
import linkedin from "../../assets/media/linkedin.svg";
import reddit from "../../assets/media/reddit.svg";
import telegram from "../../assets/media/telegram.svg";
import threads from "../../assets/media/threads.svg";
import video from "../../assets/landing.mp4";

const HeroSection = () => {
  const [t] = useTranslation("global");

  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center pt-64 pb-12 text-center rounded-b-[120px] bg-rounded`}
    >
      <div className="video-background">
        <video autoPlay muted loop id="video-background">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay dark:bg-[#000000b3]" />
      </div>
      <div className="space-y-36 z-30">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-sm:space-y-4">
          <motion.h3 className="text-5xl text-[#ffd700] font-medium max-sm:text-xl">
            {t("home.title")}
          </motion.h3>
          <h5 className="text-xl text-[#333] dark:text-gray-400 w-[550px] text-center max-sm:text-base max-sm:w-[300px]">
            {t("home.description")}
          </h5>
          <Link to={"/register"}>
            <Button
              variant={"outline"}
              className="flex flex-row gap-2 py-2 px-6 rounded-md text-lg text-[#333] dark:text-white hover:bg-[#ffd700] border-[#ffd700] border-2 max-sm:px-3 max-sm:text-base"
            >
              {t("home.seeMore")}
              <InformationCircleIcon className="h-7 w-7 text-[#333] dark:text-white" />
            </Button>
          </Link>
          <div className="flex flex-row gap-5">
            <Link
              to={"/"}
              className="rounded-full dark:border-white border-[#333] border-[1px] hover:border-[#FFD700] dark:hover:border-[#FFD700] duration-300"
            >
              <img src={discord} alt="" />
            </Link>
            <Link
              to={"/"}
              className="rounded-full dark:border-white border-[#333] border-[1px] hover:border-[#FFD700] dark:hover:border-[#FFD700] duration-300"
            >
              <img src={facebook} alt="" />
            </Link>
            <Link
              to={"/"}
              className="rounded-full dark:border-white border-[#333] border-[1px] hover:border-[#FFD700] dark:hover:border-[#FFD700] duration-300"
            >
              <img src={instagram} alt="" />
            </Link>
            <Link
              to={"/"}
              className="rounded-full dark:border-white border-[#333] border-[1px] hover:border-[#FFD700] dark:hover:border-[#FFD700] duration-300"
            >
              <img src={linkedin} alt="" />
            </Link>
            <Link
              to={"/"}
              className="rounded-full dark:border-white border-[#333] border-[1px] hover:border-[#FFD700] dark:hover:border-[#FFD700] duration-300"
            >
              <img src={reddit} alt="" />
            </Link>
            <Link
              to={"/"}
              className="rounded-full dark:border-white border-[#333] border-[1px] hover:border-[#FFD700] dark:hover:border-[#FFD700] duration-300"
            >
              <img src={telegram} alt="" />
            </Link>
            <Link
              to={"/"}
              className="rounded-full dark:dark:border-white border-[#333] border-[1px] hover:border-[#FFD700] dark:hover:border-[#FFD700] duration-300"
            >
              <img src={threads} alt="" />
            </Link>
            <Link
              to={"/"}
              className="rounded-full dark:border-white border-[#333] border-[1px] hover:border-[#FFD700] dark:hover:border-[#FFD700] duration-300"
            >
              <img src={twitter} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
