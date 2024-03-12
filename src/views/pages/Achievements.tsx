import { useTranslation } from "react-i18next";
import BackgroundImg from "../../assets/landing.jpg";
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import CountUp from "react-countup";
import AnalyticsTabs from "../../components/analytics";

const AchievementPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="achievement"
      className={`flex flex-col gap-12 justify-between items-center pt-56 pb-20 text-center bg-achievement`}
      dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
    >
      <div className={`video-background`}>
        <img
          id="video-background"
          src={BackgroundImg}
          alt="background"
          className="dark:hidden"
        />
      </div>
      <div className="overlayAchievement dark:bg-[#000000cc]" />
      <div className="mb-5">
        <h2 className="text-4xl text-yhover mb-7">
          <span className="marky">{t("achievement.title")}</span>
        </h2>
        <p className="text-lg text-black dark:text-white max-w-[525px]">
          {t("achievement.description")}
        </p>
      </div>
      <div
        className={`flex ${
          i18n.language === "en" ? "flex-row" : "flex-row-reverse"
        } max-sm:flex-col justify-between items-center gap-7`}
      >
        <div
          className={`w-[287px] flex ${
            i18n.language === "en" ? "flex-row-reverse" : "flex-row-reverse"
          } justify-between gap-5 bg-transparent border-b-black dark:border-b-white border-b-2 duration-200 cursor-pointer hover:border-b-bhover dark:hover:border-b-bhover pb-6 `}
        >
          <div>
            <h3
              className={`${
                i18n.language === "en" ? "text-left ml-4" : "text-right ml-0"
              } text-black dark:text-white text-4xl mb-4`}
            >
              $<CountUp end={54896} duration={9} />
            </h3>
            <p className="text-black/90 dark:text-gray-400 text-2xl pl-5">
              {t("achievement.deposits")}
            </p>
          </div>
          <ArrowDownTrayIcon className="w-16 h-16 text-bhover dark:text-bhover hover:text-black dark:hover:text-white duration-300" />
        </div>
        <div
          className={`w-[287px] flex ${
            i18n.language === "en" ? "flex-row-reverse" : "flex-row-reverse"
          } justify-between gap-5 bg-transparent border-b-black dark:border-b-white border-b-2 duration-200 cursor-pointer hover:border-b-ohover dark:hover:border-b-ohover pb-6 `}
        >
          <div>
            <h3
              className={`${
                i18n.language === "en" ? "text-left" : "text-right"
              } text-black dark:text-white text-4xl mb-4`}
            >
              <CountUp
                className={`${i18n.language === "en" ? "ml-5" : "ml-0"}`}
                end={794}
                duration={5}
              />
            </h3>
            <p className="text-black/90 dark:text-gray-400 text-2xl pl-5">
              {t("achievement.investors")}
            </p>
          </div>
          <UsersIcon className="w-16 h-16 text-ohover dark:text-ohover hover:text-black dark:hover:text-white duration-300" />
        </div>
        <div
          className={`w-[287px] flex ${
            i18n.language === "en" ? "flex-row-reverse" : "flex-row-reverse"
          } justify-between gap-5 bg-transparent border-b-black dark:border-b-white border-b-2 duration-200 cursor-pointer hover:border-b-ghover dark:hover:border-b-ghover pb-6 `}
        >
          <div>
            <h3
              className={`${
                i18n.language === "en" ? "text-left ml-4" : "text-right ml-0"
              } text-black dark:text-white text-4xl mb-4`}
            >
              $
              <CountUp end={62986} duration={9} />
            </h3>
            <p className="text-black/90 dark:text-gray-400 text-2xl pl-5">
              {t("achievement.withdrawals")}
            </p>
          </div>
          <ArrowUpTrayIcon className="w-16 h-16 text-ghover dark:text-ghover hover:text-black dark:hover:text-white duration-300" />
        </div>
      </div>
      <div className="w-full">
        <AnalyticsTabs />
      </div>
    </section>
  );
};

export default AchievementPage;
