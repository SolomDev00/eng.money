import { useTranslation } from "react-i18next";
import Commission from "../../../assets/commission.png";
import Network from "../../../assets/network.png";
import Button from "../../../components/schema/Button";

const MarketingPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="signals"
      className={`flex flex-col gap-12 justify-between items-center pt-32 pb-12 text-center bg-marketing`}
      dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
    >
      <div className="overlayMarketing bg-[#e7e7e74d] dark:bg-[#000000cc]" />
      <div className="mb-10">
        <h2 className="text-4xl text-yhover mb-4">
          {t("marketing.explanation.title")}
        </h2>
        <p className="text-lg text-white max-w-[625px]">
          {t("marketing.explanation.description")}
        </p>
      </div>
      <div className="w-full flex flex-col justify-between items-center gap-y-3">
        <div className="w-full flex flex-row-reverse max-sm:flex-col-reverse justify-between gap-6">
          <div className="w-full border-2 border-yhover py-4 px-6 rounded-md rounded-e-3xl max-sm:rounded-md">
            <div className="flex flex-row-reverse justify-between items-center mb-8">
              <h4 className="text-3xl text-yhover">
                {t("marketing.plans.d1")}
              </h4>
              <div className="rounded-md cursor-pointer p-2">
                <img className="w-10" src={Commission} alt="Commission" />
              </div>
            </div>
            <div
              className={`flex flex-col justify-between items-end ${
                i18n.language === "en" ? "text-left" : "text-right"
              }`}
            >
              <p className="text-white mb-7 text-lg max-w-[550px] h-auto flex flex-row-reverse justify-start items-center gap-3">
                {t("marketing.plans.para1")}
              </p>
              <p className="text-white text-lg max-w-[550px] h-auto flex flex-row-reverse justify-start items-center gap-3">
                {t("marketing.plans.para2")}
              </p>
            </div>
          </div>
          <div className="w-full border-2 border-yhover py-4 px-6 rounded-md rounded-s-3xl max-sm:rounded-md">
            <div className="flex flex-row-reverse justify-between items-center mb-8">
              <h4 className="text-3xl text-yhover">
                {t("marketing.plans.d2")}
              </h4>
              <div className="rounded-md cursor-pointer p-2">
                <img className="w-10" src={Network} alt="Network" />
              </div>
            </div>
            <div
              className={`flex flex-col justify-between items-end ${
                i18n.language === "en" ? "text-left" : "text-right"
              }`}
            >
              <p className="text-white text-lg max-w-[550px] flex flex-row-reverse justify-start items-center gap-3">
                {t("marketing.plans.para3")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button
            fullWidth
            variant={"outline"}
            className="px-10 border-yhover mt-6 hover:bg-yhover"
          >
            {t("marketing.btn")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketingPage;
