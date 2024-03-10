import { useTranslation } from "react-i18next";
import GFaqCards from "../../components/cards/GFaqCards";
import OFaqCards from "../../components/cards/OFaqCards";
import BFaqCards from "../../components/cards/BFaqCards";
import YFaqCards from "../../components/cards/YFaqCards";

const FaqPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <main
      className="w-full max-h-[200%] mt-32 bg-faq"
      dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
    >
      <div className="overlayFaq bg-[#e7e7e74d] dark:bg-[#000000cc]" />
      <div className="mb-2">
        <h2 className="text-4xl text-center mb-4 text-hover">
          {t("faq.title")}
        </h2>
      </div>
      <div className="w-full pb-20">
        <div className="w-full flex flex-col justify-between items-start mt-12">
          <h3 className="w-full mt-5 text-2xl text-center text-ghover">
            {t("faq.invest.title")}
          </h3>
          <GFaqCards
            question={t("faq.invest.Q1")}
            answer={t("faq.invest.A1")}
          />
          <GFaqCards
            question={t("faq.invest.Q1")}
            answer={t("faq.invest.A1")}
          />
          <GFaqCards
            question={t("faq.invest.Q1")}
            answer={t("faq.invest.A1")}
          />
        </div>
        <div className="w-full flex flex-col justify-between items-start mt-20">
          <h3 className="w-full mt-5 text-2xl text-center text-ohover">
            {t("faq.signal.title")}
          </h3>
          <OFaqCards
            question={t("faq.signal.Q1")}
            answer={t("faq.signal.A1")}
          />
          <OFaqCards
            question={t("faq.signal.Q1")}
            answer={t("faq.signal.A1")}
          />
        </div>
        <div className="w-full flex flex-col justify-between items-start mt-20">
          <h3 className="w-full mt-5 text-2xl text-center text-bhover">
            {t("faq.wallet.title")}
          </h3>
          <BFaqCards
            question={t("faq.wallet.Q1")}
            answer={t("faq.wallet.A1")}
          />
          <BFaqCards
            question={t("faq.wallet.Q1")}
            answer={t("faq.wallet.A1")}
          />
        </div>
        <div className="w-full flex flex-col justify-between items-start mt-20">
          <h3 className="w-full mt-5 text-2xl text-center text-yhover">
            {t("faq.general.title")}
          </h3>
          <YFaqCards
            question={t("faq.general.Q1")}
            answer={t("faq.general.A1")}
          />
          <YFaqCards
            question={t("faq.general.Q1")}
            answer={t("faq.general.A1")}
          />
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
