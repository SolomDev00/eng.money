import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Button from "../../components/schema/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import video from "../../assets/landing.mp4";

const SignalSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="signal"
      className={`flex flex-col justify-center items-center pt-64 pb-12 text-center`}
    >
      <div className="video-background">
        <video autoPlay muted loop id="video-background">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay dark:bg-[#000000b3]" />
      </div>
      <div className="space-y-36 z-30">
        <div className="flex flex-col justify-center items-center text-center space-y-12 max-sm:space-y-4">
          <motion.h3 className="text-5xl text-[#dc6d31] font-medium max-sm:text-xl">
            {t("home.signal.title")}
          </motion.h3>
          <h5 className="text-xl text-black dark:text-gray-400 w-[650px] text-center max-sm:text-base max-sm:w-[300px]">
            {t("home.signal.description")}
          </h5>
          <Link to={"/signal"}>
            <Button
              dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
              variant={"outline"}
              className="flex flex-row gap-2 py-2 px-6 rounded-md text-lg text-black dark:text-white hover:bg-[#dc6d31] border-[#dc6d31] border-2 max-sm:px-3 max-sm:text-base"
            >
              {t("home.signal.seeMore")}
              <InformationCircleIcon className="h-7 w-7 text-black dark:text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignalSection;
