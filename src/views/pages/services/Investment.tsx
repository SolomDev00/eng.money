import { useTranslation } from "react-i18next";
import BackgroundImg from "../../../assets/landing.jpg";
import InfoImg from "../../../assets/info_img.webp";
import IvestmentImg from "../../../assets/investment.webp";
import IvestmentDarkImg from "../../../assets/investment02.webp";
import IvestmentImg2 from "../../../assets/business-funding.webp";
import IvestmentImg3 from "../../../assets/growing-money.webp";
import IvestmentImg4 from "../../../assets/business-investor.webp";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Button from "../../../components/schema/Button";
import Footer from "../../../components/footer";

const InvestmentPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section
        id="ivestment"
        className={`container flex flex-col gap-12 justify-between items-center pt-48 pb-12 text-center bg-ivestment`}
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
        <div className="overlayIvestment dark:bg-[#000000cc]" />
        <div className="mb-8">
          <img
            className="w-72 cursor-pointer hidden dark:block"
            src={IvestmentImg}
            alt="ivestment"
          />
          <img
            className="w-72 cursor-pointer dark:hidden"
            src={IvestmentDarkImg}
            alt="ivestment"
          />
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-y-20">
          <div className="w-full flex flex-row-reverse max-sm:flex-col justify-between items-center gap-14">
            <div
              className={`${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-ghover text-4xl mb-10">
                {t("ivestment.explanation.title")}
              </h2>
              <p className="text-black dark:text-white text-lg max-w-[550px]">
                {t("ivestment.explanation.description")}
              </p>
            </div>
            <img
              className="w-80 cursor-pointer"
              src={IvestmentImg2}
              alt="ivestment"
            />
          </div>
          <div className="w-full flex flex-row max-sm:flex-col justify-between items-center gap-14">
            <div
              className={`${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-ghover text-4xl mb-5">
                {t("ivestment.date.title")}
              </h2>
              <p className="text-black dark:text-white text-lg max-w-[550px mb-5">
                {t("ivestment.date.description")}
              </p>
              <h2 className="text-ghover text-4xl mb-5">
                {t("ivestment.date.title2")}
              </h2>
              <p
                className={`text-black dark:text-white text-lg max-w-[580px] ${
                  i18n.language === "en" ? "float-left" : "float-right"
                }`}
              >
                {t("ivestment.date.description2")}
              </p>
            </div>
            <img
              className="w-80 cursor-pointer"
              src={IvestmentImg3}
              alt="ivestment"
            />
          </div>
          <div className="w-full flex flex-row-reverse max-sm:flex-col justify-between items-center gap-14">
            <div
              className={`${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-ghover text-4xl mb-10">
                {t("ivestment.method.title")}
              </h2>
              <p className="text-black dark:text-white text-lg max-sm:text-base max-w-[600px] flex flex-row-reverse justify-start items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 max-sm:w-[18px] max-sm:h-[18px] text-ghover" />
                {t("ivestment.method.para1")}
              </p>
              <p className="text-black dark:text-white text-lg max-sm:text-base max-w-[600px] flex flex-row-reverse justify-start items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 max-sm:w-[18px] max-sm:h-[18px] text-ghover" />
                {t("ivestment.method.para2")}
              </p>
              <p className="text-black dark:text-white text-lg max-sm:text-base max-w-[800px] flex flex-row-reverse justify-start items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 max-sm:w-[18px] max-sm:h-[18px] text-ghover" />
                {t("ivestment.method.para3")}
              </p>
              <p className="text-black dark:text-white text-lg max-sm:text-base max-w-[600px] flex flex-row-reverse justify-start items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 max-sm:w-[18px] max-sm:h-[18px] text-ghover" />
                {t("ivestment.method.para4")}
              </p>
              <p className="text-black dark:text-white text-lg max-sm:text-base max-w-[600px] flex flex-row-reverse justify-start items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 max-sm:w-[18px] max-sm:h-[18px] text-ghover" />
                {t("ivestment.method.para5")}
              </p>
            </div>
            <img
              className="w-80 cursor-pointer"
              src={IvestmentImg4}
              alt="ivestment"
            />
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div className="w-full flex flex-col justify-between items-center gap-4">
            <h2 className="text-ghover text-center text-4xl mb-2">
              {t("ivestment.plans.weekly")}
            </h2>
            <div
              className={`flex flex-row-reverse max-sm:flex-col
             justify-between gap-4`}
            >
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-e-3xl max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-ghover">
                    <span className="mark">{t("ivestment.plans.d1")}</span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">5%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">5%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">10%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$30</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-lg max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-bhover">
                    <span className="mark">{t("ivestment.plans.d2")}</span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">10%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">10%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">15%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$50</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-lg max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-yhover">
                    <span className="mark">{t("ivestment.plans.d3")}</span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">20%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">20%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">30%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$100</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-s-3xl max-sm:rounded-md`}
                dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-red-700">
                    <span className="mark">{t("ivestment.plans.d4")}</span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">50%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">50%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">70%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$200</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div className="w-full flex flex-col justify-between items-center gap-4">
            <h2 className="text-ghover text-center text-4xl mb-2">
              {t("ivestment.plans.monthly")}
            </h2>
            <div
              className={`flex flex-row-reverse max-sm:flex-col justify-between gap-4`}
            >
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-e-3xl max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-ghover">
                    <span className="mark">{t("ivestment.plans.d1")}</span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">5%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">7%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">15%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$30</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-lg max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-bhover">
                    <span className="mark">{t("ivestment.plans.d2")}</span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">10%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">12%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">20%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$50</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-lg max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-yhover">
                    <span className="mark">{t("ivestment.plans.d3")}</span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">20%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">25%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">40%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$100</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>

              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-s-3xl max-sm:rounded-md`}
                dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-red-700">
                    <span className="mark">{t("ivestment.plans.d4")}</span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">50%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">60%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">90%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$200</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div className="w-full flex flex-col justify-between items-center gap-4">
            <h2 className="text-ghover text-center text-4xl mb-2">
              {t("ivestment.plans.semi&long.title")}
            </h2>
            <div
              className={`flex flex-row-reverse max-sm:flex-col justify-between gap-4`}
            >
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-e-3xl max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-ghover">
                    <span className="mark flex flex-row-reverse justify-center">
                      {t("ivestment.plans.semi&long.d1")}
                      <p className="mx-[3px] inline">
                        {i18n.language === "en" ? "Months" : "أشهر"}
                      </p>
                    </span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">20%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">45%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">60%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$1,000</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-lg max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-bhover">
                    <span className="mark flex flex-row-reverse justify-center">
                      {t("ivestment.plans.semi&long.d2")}
                      <p className="mx-[3px] inline">
                        {i18n.language === "en" ? "Months" : "أشهر"}
                      </p>
                    </span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">30%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">50%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">70%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$1,500</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-lg max-sm:rounded-md`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-yhover">
                    <span className="mark flex flex-row-reverse justify-center">
                      {t("ivestment.plans.semi&long.d3")}
                      <p className="mx-[3px] inline">
                        {i18n.language === "en" ? "Months" : "أشهر"}
                      </p>
                    </span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-end">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">40%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">60%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">100%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$2,000</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className={`w-[280px] border-2 border-ghover py-4 px-3 rounded-s-3xl max-sm:rounded-md`}
                dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="w-full text-3xl text-center text-red-700">
                    <span className="mark flex flex-row-reverse justify-center">
                      {t("ivestment.plans.semi&long.d4")}
                      <p className="mx-[3px] inline">
                        {i18n.language === "en" ? "Months" : "أشهر"}
                      </p>
                    </span>
                  </h4>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-end">
                      {t("ivestment.plans.para1")}
                      <span className="text-red-600 mx-[3px]">50%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div className="flex flex-row-reverse items-start">
                      {t("ivestment.plans.para2")}
                      <span className="text-ghover mx-[3px]">70%</span>
                      {t("ivestment.plans.para3")}
                      <span className="text-ghover mx-[3px]">130%</span>
                    </div>
                  </p>
                  <p className="text-black dark:text-white text-base max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-ghover" />
                    <div>
                      {t("ivestment.plans.para4")}
                      <span className="text-blue-500 mx-[3px]">$3,000</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-ghover mt-6 hover:bg-ghover"
                  >
                    {t("signal.plans.sub")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div className="w-full flex flex-col">
            <div className="mb-8">
              <h2
                className={`text-ghover text-4xl mb-3 ${
                  i18n.language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("ivestment.info.title")}
              </h2>
              <hr />
            </div>
            <div
              className="flex flex-row-reverse max-sm:flex-col-reverse justify-between gap-12"
              dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
            >
              <img className="w-80" src={InfoImg} alt="info" />
              <div
                className={`flex ${
                  i18n.language === "en"
                    ? "text-left items-end"
                    : "text-right items-start"
                } flex-col justify-between items-end gap-y-5`}
              >
                <p className="text-black dark:text-white text-base max-w-[550px] w-full flex flex-row-reverse justify-start items-start gap-3">
                  <InformationCircleIcon className="w-10 h-10 text-ghover" />
                  {t("ivestment.info.para1")}
                </p>
                <p className="text-black dark:text-white text-base max-w-[550px] w-full flex flex-row-reverse justify-start items-start gap-3">
                  <InformationCircleIcon className="w-6 h-6 text-ghover" />
                  {t("ivestment.info.para2")}
                </p>
                <p className="text-black dark:text-white text-base max-w-[550px] w-full flex flex-row-reverse justify-start items-start gap-3">
                  <InformationCircleIcon className="w-5 h-5 text-ghover" />
                  {t("ivestment.info.para3")}
                </p>
                <p className="text-black dark:text-white text-base max-w-[550px] w-full flex flex-row-reverse justify-start items-start gap-3">
                  <InformationCircleIcon className="w-10 h-10 text-ghover" />
                  {t("ivestment.info.para4")}
                </p>
                <p className="text-black dark:text-white text-base max-w-[550px] w-full flex flex-row-reverse justify-start items-start gap-3">
                  <InformationCircleIcon className="w-7 h-7 text-ghover" />
                  {t("ivestment.info.para5")}
                </p>
                <p className="text-black dark:text-white text-base max-w-[550px] w-full flex flex-row-reverse justify-start items-start gap-3">
                  <InformationCircleIcon className="w-7 h-7 text-ghover" />
                  {t("ivestment.info.para6")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InvestmentPage;
