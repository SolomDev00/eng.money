import { useTranslation } from "react-i18next";
import ownerImg from "../../assets/owner.webp";

const AboutUsPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="about"
      className={`flex flex-row max-sm:flex-col gap-12 justify-between items-center pt-32 pb-12 text-center bg-image`}
      dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
    >
      <div className="w-[1300px]">
        <img
          title="Engineer AbdulRahman Al-Semry"
          className="w-full h-auto rounded-lg cursor-pointer shadow-md border-2 border-transparent dark:border-hover dark:border-2"
          src={ownerImg}
          alt="owner"
        />
      </div>
      <div className="overlayAbout bg-[#bfbfbf4d] dark:bg-[#0b0b0bcc]" />
      <div
        className={`flex flex-col justify-between items-center ${
          i18n.language === "en" ? "text-left" : "text-right"
        }`}
        dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
      >
        <div className="mb-6">
          <h3 className="text-hover text-2xl mb-4">{t("about.owner")}</h3>
          <p className="text-base text-white dark:text-white">
            {t("about.para1")}
          </p>
          <p className="text-base text-white dark:text-white">
            {t("about.para2")}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-hover text-2xl mb-4">{t("about.ourmisson")}</h3>
          <p className="text-base text-white dark:text-white">
            {t("about.para3")}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-hover text-2xl mb-4">{t("about.ourmsg")}</h3>
          <p className="text-base text-white dark:text-white">
            {t("about.para4")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
