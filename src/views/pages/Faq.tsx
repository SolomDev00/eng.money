import { useTranslation } from "react-i18next";
import GFaqCards from "../../components/cards/GFaqCards";
import OFaqCards from "../../components/cards/OFaqCards";
import BFaqCards from "../../components/cards/BFaqCards";
import YFaqCards from "../../components/cards/YFaqCards";
import TablesPLN from "../../assets/plans_compare.webp";
import BackgroundImg from "../../assets/landing.jpg";
import Footer from "../../components/footer";

const FaqPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section
        className="container w-full max-h-[200%] mt-44 bg-faq"
        dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
      >
        <div className={`video-background`}>
          <img
            id="video-background"
            src={BackgroundImg}
            alt="background"
            className="dark:hidden"
          />
        </div>
        <div className="overlayFaq dark:bg-[#000000cc]" />
        <div className="mb-2">
          <h2 className="text-4xl text-center mb-4 text-hover">
            <span className="mark-zigzag">{t("faq.title")}</span>
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
              width="w-8 h-8 max-sm:w-36"
            />
            <GFaqCards
              question={t("faq.invest.Q2")}
              answer={t("faq.invest.A2")}
              width="max-sm:w-16"
            />
            <GFaqCards
              question={t("faq.invest.Q3")}
              answer={t("faq.invest.A3")}
            />
            <GFaqCards
              question={t("faq.invest.Q4")}
              answer={t("faq.invest.A4")}
              width="max-sm:w-16"
            />
            <GFaqCards
              question={t("faq.invest.Q5")}
              answer={t("faq.invest.A5")}
              width="max-sm:w-14"
            />
            <GFaqCards
              question={t("faq.invest.Q6")}
              answer={t("faq.invest.A6")}
              width="max-sm:w-12"
            />
            <GFaqCards
              question={t("faq.invest.Q7")}
              answer={t("faq.invest.A7")}
              width="max-sm:w-7"
            />
            <GFaqCards
              question={t("faq.invest.Q8")}
              answer={t("faq.invest.A8")}
              width="max-sm:w-7"
            />
            <GFaqCards
              question={t("faq.invest.Q9")}
              answer={t("faq.invest.A9")}
              width="max-sm:w-14"
            />
            <GFaqCards
              question={t("faq.invest.Q10")}
              answer={t("faq.invest.A10")}
              width="max-sm:w-7"
            />
            <GFaqCards
              question={t("faq.invest.Q11")}
              answer={t("faq.invest.A11")}
              width="max-sm:w-12"
            />
            <GFaqCards
              question={t("faq.invest.Q12")}
              answer={t("faq.invest.A12")}
              width="max-sm:w-8"
            />
            <GFaqCards
              question={t("faq.invest.Q13")}
              answer={t("faq.invest.A13")}
              width="max-sm:w-12"
            />
            <GFaqCards
              question={t("faq.invest.Q14")}
              answer={t("faq.invest.A14")}
            />
            <GFaqCards
              question={t("faq.invest.Q15")}
              answer={t("faq.invest.A15")}
              width="max-sm:w-12"
            />
            <GFaqCards
              question={t("faq.invest.Q16")}
              answer={t("faq.invest.A16")}
              width="max-sm:w-24"
            />
            <GFaqCards
              question={t("faq.invest.Q17")}
              answer={t("faq.invest.A17")}
              width="max-sm:w-20"
            />
            <GFaqCards
              question={t("faq.invest.Q18")}
              answer={t("faq.invest.A18")}
              width="max-sm:w-9"
            />
            <GFaqCards
              question={t("faq.invest.Q19")}
              answer={t("faq.invest.A19")}
              width="max-sm:w-8"
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
              question={t("faq.signal.Q2")}
              answer={t("faq.signal.A2")}
              width="max-sm:w-9"
            />
          </div>
          <div className="w-full flex flex-col justify-between items-start mt-20">
            <h3 className="w-full mt-5 text-2xl text-center text-bhover">
              {t("faq.wallet.title")}
            </h3>
            <BFaqCards
              question={t("faq.wallet.Q1")}
              answer={t("faq.wallet.A1")}
              width="max-sm:w-9"
            />
            <BFaqCards
              question={t("faq.wallet.Q2")}
              answer={t("faq.wallet.A2")}
              width="max-sm:w-14"
            />
          </div>
          <div className="w-full flex flex-col justify-between items-start mt-20">
            <h3 className="w-full mt-5 text-2xl text-center text-yhover">
              {t("faq.general.title")}
            </h3>
            <YFaqCards
              question={t("faq.general.Q1")}
              answer={t("faq.general.A1")}
              width="max-lg:w-20 max-sm:w-28"
            />
            <YFaqCards
              question={t("faq.general.Q2")}
              answer={t("faq.general.A2")}
              width="max-sm:w-14"
            />
            <YFaqCards
              question={t("faq.general.Q3")}
              answer={<img src={TablesPLN} alt="tables" />}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FaqPage;
