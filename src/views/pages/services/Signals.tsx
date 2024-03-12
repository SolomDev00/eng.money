import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import Cyrbto from "../../../assets/bitcoin2.png";
import Inclusive from "../../../assets/forex.png";
import Forex from "../../../assets/change2.png";
import SignalImg from "../../../assets/recommend.webp";
import SignalDarkImg from "../../../assets/recommend02.webp";
import SignalImg2 from "../../../assets/signals.webp";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Button from "../../../components/schema/Button";
import BackgroundImg from "../../../assets/landing.jpg";

const SignalPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="signals"
      className={`flex flex-col gap-12 justify-between items-center pt-44 pb-12 text-center bg-signals`}
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
      <div className="overlaySignals dark:bg-[#000000cc]" />
      <div className="mb-10">
        <img
          className="w-56 cursor-pointer hidden dark:block"
          src={SignalImg}
          alt="signal"
        />
        <img
          className="w-56 cursor-pointer dark:hidden"
          src={SignalDarkImg}
          alt="signal"
        />
      </div>
      <div className="w-full flex flex-col  justify-between items-center gap-y-20">
        <div className="w-full flex flex-row-reverse max-sm:flex-col justify-between items-center gap-10">
          <div
            className={`${i18n.language === "ar" ? "text-right" : "text-left"}`}
          >
            <h2 className="text-ohover text-4xl mb-10">
              {t("signal.explanation.title")}
            </h2>
            <p className="text-black dark:text-white text-lg max-w-[550px]">
              {t("signal.explanation.description")}
            </p>
            <p className="text-black dark:text-white text-lg max-w-[550px]">
              {t("signal.explanation.description2")}
            </p>
          </div>
          <img className="w-72 cursor-pointer" src={SignalImg2} alt="signal" />
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-8">
          <h2 className="text-ohover text-center text-4xl mb-10">
            {t("signal.plans.title")}
          </h2>
          <div
            className={`flex flex-row-reverse max-sm:flex-col-reverse justify-between gap-6`}
          >
            <div
              className={`border-2 border-ohover rounded-md rounded-e-3xl max-sm:rounded-md ${
                i18n.language === "en" ? "py-4 px-6" : "py-5 px-10"
              }`}
            >
              <div className="flex flex-row-reverse justify-between items-center mb-8">
                <h4 className="text-3xl text-ohover">{t("signal.plans.d1")}</h4>
                <div className="rounded-md cursor-pointer p-2">
                  <img className="w-10" src={Cyrbto} alt="Cyrbto" />
                </div>
              </div>
              <div className={`flex flex-col justify-between items-end`}>
                <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-ohover" />
                  {t("signal.plans.para1")}
                  <span className="text-ohover">$100</span>
                </p>
                <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-ohover" />
                  {t("signal.plans.para2")}
                  <span className="text-ohover">$1,000</span>
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  fullWidth
                  variant={"outline"}
                  className="px-4 border-ohover mt-6 hover:bg-ohover"
                >
                  {t("signal.plans.sub")}
                </Button>
              </div>
            </div>
            <div
              className={`border-2 border-ohover rounded-lg ${
                i18n.language === "en" ? "py-4 px-6" : "py-5 px-10"
              }`}
              dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
            >
              <div className="flex flex-row-reverse justify-between items-center mb-8">
                <h4 className="text-3xl text-ohover">{t("signal.plans.d3")}</h4>
                <div className="rounded-md cursor-pointer p-2">
                  <img className="w-10" src={Forex} alt="Forex" />
                </div>
              </div>
              <div className={`flex flex-col justify-between items-end`}>
                <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-ohover" />
                  {t("signal.plans.para1")}
                  <span className="text-ohover">$100</span>
                </p>
                <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-ohover" />
                  {t("signal.plans.para2")}
                  <span className="text-ohover">$700</span>
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  fullWidth
                  variant={"outline"}
                  className="px-4 border-ohover mt-6 hover:bg-ohover"
                >
                  {t("signal.plans.sub")}
                </Button>
              </div>
            </div>
            <div
              className={`border-2 border-ohover rounded-s-3xl max-sm:rounded-md ${
                i18n.language === "en" ? "py-4 px-6" : "py-5 px-10"
              } rounded-lg`}
            >
              <div className="flex flex-row-reverse justify-between items-center mb-8">
                <h4 className="text-3xl text-ohover">{t("signal.plans.d2")}</h4>
                <div className="rounded-md cursor-pointer p-2">
                  <img className="w-11" src={Inclusive} alt="Inclusive" />
                </div>
              </div>
              <div className={`flex flex-col justify-between items-end`}>
                <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-ohover" />
                  {t("signal.plans.para1")}
                  <span className="text-ohover">$170</span>
                </p>
                <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-ohover" />
                  {t("signal.plans.para2")}
                  <span className="text-ohover">$500</span>
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  fullWidth
                  variant={"outline"}
                  className="px-4 border-ohover mt-6 hover:bg-ohover"
                >
                  {t("signal.plans.sub")}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 max-sm:mt-5">
          <h3 className="mb-5 text-ohover text-4xl">{t("signal.numbers")}</h3>
          <span className="text-black dark:text-white text-5xl">
            <CountUp duration={15} end={1542} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignalPage;
