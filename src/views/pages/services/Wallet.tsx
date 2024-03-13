import { useTranslation } from "react-i18next";
import Cyrbto from "../../../assets/bitcoin.png";
import Forex from "../../../assets/change.png";
import WalletImg from "../../../assets/wallets.webp";
import WalletImg2 from "../../../assets/wallets01.webp";
import WalletImg3 from "../../../assets/wallets02.webp";
import WalletDarkImg from "../../../assets/wallets03.webp";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Button from "../../../components/schema/Button";
import { Link } from "react-router-dom";
import BackgroundImg from "../../../assets/landing.jpg";
import Footer from "../../../components/footer";

const WalletPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section
        id="wallet"
        className={`container flex flex-col gap-12 justify-between items-center pt-40 pb-12 text-center bg-wallet`}
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
        <div className="overlayWallet dark:bg-[#000000cc]" />
        <div className="mb-10">
          <img
            className="w-56 cursor-pointer hidden dark:block"
            src={WalletImg}
            alt="wallet"
          />
          <img
            className="w-56 cursor-pointer dark:hidden"
            src={WalletDarkImg}
            alt="wallet"
          />
        </div>

        <div className="w-full flex flex-col justify-between items-center gap-y-20">
          <div className="w-full flex flex-row-reverse max-sm:flex-col-reverse justify-between items-center gap-10">
            <div
              className={`${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-bhover text-4xl mb-10">
                {t("wallet.explanation.title")}
              </h2>
              <p className="text-black dark:text-white text-lg max-w-[550px]">
                {t("wallet.explanation.description")}
              </p>
            </div>
            <img
              className="w-72 cursor-pointer"
              src={WalletImg2}
              alt="wallet"
            />
          </div>
          <div className="w-full flex flex-row max-sm:flex-col-reverse justify-between items-center gap-10">
            <div
              className={`${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-bhover text-4xl mb-10">
                {t("wallet.method.title")}
              </h2>
              <Link
                to={"https://www.eng-money.com/system/register"}
                target="_blank"
              >
                <p className="text-black dark:text-white text-lg max-sm:text-base max-w-[600px] flex flex-row-reverse justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-bhover" />
                  {t("wallet.method.para1")}
                </p>
              </Link>
              <p className="text-black dark:text-white text-lg max-sm:text-base max-w-[600px] flex flex-row-reverse justify-start items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 max-sm:w-[18px] max-sm:h-[18px] text-bhover" />
                {t("wallet.method.para2")}
              </p>
              <p
                className={`text-black dark:text-white text-lg max-sm:text-base max-w-[600px] flex flex-row-reverse justify-start items-center gap-3`}
              >
                <CheckCircleIcon className="w-6 h-6 text-bhover" />
                <div className="max-sm:inline-block flex flex-row-reverse">
                  {t("wallet.method.para3")}
                  <a href="https://t.me/@ENG_MONEY_LTD" target="_blank">
                    <span className="text-bhover text-base mx-1 text-right">
                      {t("wallet.method.user")}
                    </span>
                  </a>
                </div>
              </p>
            </div>
            <img
              className="w-72 cursor-pointer"
              src={WalletImg3}
              alt="wallet"
            />
          </div>
          <div className="w-full flex flex-col justify-between items-center gap-10">
            <h2 className="text-bhover text-center text-4xl mb-10">
              {t("wallet.plans.title")}
            </h2>
            <div className="flex flex-row-reverse max-sm:flex-col-reverse justify-between gap-10">
              <div className="border-2 border-bhover py-4 px-6 rounded-md rounded-e-3xl max-sm:rounded-md">
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="text-3xl text-bhover">
                    {t("wallet.plans.d1")}
                  </h4>
                  <div className="rounded-md cursor-pointer p-2">
                    <img className="w-10" src={Cyrbto} alt="Cyrbto" />
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <p className="text-black dark:text-white text- text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-bhover" />
                    {t("wallet.plans.para1")}
                    <span className="text-bhover">$15,000</span>
                  </p>
                  <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-bhover" />
                    {t("wallet.plans.para2")}
                    <span className="text-bhover">5%</span>
                  </p>
                  <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-bhover" />
                    {t("wallet.plans.para3")}
                    <span className="text-bhover">25%</span>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-bhover mt-6 hover:bg-bhover"
                  >
                    {t("wallet.plans.sub")}
                  </Button>
                </div>
              </div>
              <div
                className="border-2 border-bhover py-4 px-6 rounded-md rounded-s-3xl max-sm:rounded-md"
                dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-8">
                  <h4 className="text-3xl text-bhover">
                    {t("wallet.plans.d2")}
                  </h4>
                  <div className="rounded-md cursor-pointer p-2">
                    <img className="w-10" src={Forex} alt="Forex" />
                  </div>
                </div>
                <div className={`flex flex-col justify-between items-end`}>
                  <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-bhover" />
                    {t("wallet.plans.para1")}
                    <span className="text-bhover">$20,000</span>
                  </p>
                  <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-bhover" />
                    {t("wallet.plans.para2")}
                    <span className="text-bhover">5%</span>
                  </p>
                  <p className="text-black dark:text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-bhover" />
                    {t("wallet.plans.para3")}
                    <span className="text-bhover">25%</span>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    fullWidth
                    variant={"outline"}
                    className="px-4 border-bhover mt-6 hover:bg-bhover"
                  >
                    {t("wallet.plans.sub")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WalletPage;
