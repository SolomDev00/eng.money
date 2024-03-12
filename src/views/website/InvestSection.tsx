import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Button from "../../components/schema/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LoadingInvest from "../../components/loading/invest";
import video from "../../assets/landing.mp4";
import BackgroundImg from "../../assets/landing.jpg";

const InvesetSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="invest"
      className={`flex flex-col justify-center items-center pt-64 pb-12 text-center space-y-16`}
    >
      <div className="video-background">
        <img
          id="video-background"
          src={BackgroundImg}
          alt="background"
          className="dark:hidden"
        />
        <video autoPlay muted loop id="video-background">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay dark:bg-[#000000b3]" />
      </div>
      <div className="space-y-36 z-30">
        <div className="flex flex-col justify-center items-center text-center space-y-12 max-sm:space-y-4">
          <h3 className="text-5xl text-[#069603] font-medium max-sm:text-xl">
            {t("home.invest.title")}
          </h3>
          <h5 className="text-xl text-black dark:text-gray-400 w-[650px] text-center max-sm:text-base max-sm:w-[300px]">
            {t("home.invest.description")}
          </h5>
          <Link to={"/investment"} onClick={() => window.scrollTo(0, 0)}>
            <Button
              dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
              variant={"outline"}
              className="flex flex-row gap-2 py-2 px-6 rounded-md text-lg text-black dark:text-white hover:bg-[#069603] border-[#069603] border-2 max-sm:px-3 max-sm:text-base"
            >
              {t("home.invest.seeMore")}
              <InformationCircleIcon className="h-7 w-7 text-black dark:text-white" />
            </Button>
          </Link>
        </div>
      </div>
      <LoadingInvest />
    </section>
  );
};

export default InvesetSection;
