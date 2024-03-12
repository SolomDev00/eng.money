import { useTranslation } from "react-i18next";
import ownerImg from "../../assets/owner.webp";
import BackgroundImg from "../../assets/landing.jpg";

const AboutUsPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="about"
      className={`pt-44 pb-12 text-center bg-image`}
      dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
    >
      <div className="flex flex-row max-sm:flex-col gap-12 justify-between items-center">
        <div className="w-[1300px] max-sm:w-[300px]">
          <img
            title="Engineer AbdulRahman Al-Semry"
            className="w-full h-auto rounded-lg cursor-pointer shadow-md border-2 border-yhover dark:border-yhover dark:border-2"
            src={ownerImg}
            alt="owner"
          />
        </div>
        <div className={`video-background`}>
          <img
            id="video-background"
            src={BackgroundImg}
            alt="background"
            className="dark:hidden"
          />
        </div>
        <div className="overlayAbout dark:bg-[#0b0b0bcc]" />
        <div
          className={`flex flex-col justify-between items-center ${
            i18n.language === "en" ? "text-left" : "text-right"
          }`}
          dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
        >
          <div className="mb-6">
            <h3 className="text-yhover text-2xl mb-4">{t("about.owner")}</h3>
            <p className="text-base text-black dark:text-white">
              {t("about.para1")}
            </p>
            <p className="text-base text-black dark:text-white">
              {t("about.para2")}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-yhover text-2xl mb-4">
              {t("about.ourmisson")}
            </h3>
            <p className="text-base text-black dark:text-white">
              {t("about.para3")}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-yhover text-2xl mb-4">{t("about.ourmsg")}</h3>
            <p className="text-base text-black dark:text-white">
              {t("about.para4")}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex flex-row justify-between items-center ${
          i18n.language === "en" ? "text-left" : "text-right"
        }`}
        dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
      >
        <div
          className={`flex flex-col justify-between items-center ${
            i18n.language === "en" ? "text-left" : "text-right"
          }`}
          dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
        >
          <div className="w-full text-center max-sm:text-justify mt-8 mb-10">
            <h3 className="text-yhover text-3xl mb-4">
              <span className="mark-zigzag">{t("about.ourhosts")}</span>
            </h3>
          </div>
          <div
            className={`w-full flex flex-row max-sm:flex-col justify-between items-start mb-6 gap-32 max-sm:gap-10 ${
              i18n.language === "en" ? "text-left" : "text-right"
            }`}
            dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
          >
            <div className="mb-6 max-w-[400px]">
              <h3 className="text-yhover text-2xl mb-4">{t("about.dubai")}</h3>
              <p className="text-base text-black dark:text-white">
                {t("about.name")}
                <span className="mx-[3px]">ENG MONEY CONSULTANCY - FZCO</span>
              </p>
              <p className="text-base text-black dark:text-white">
                {t("about.registerNum")}
                <span className="mx-[3px]">DSO-FZCO-39940</span>
              </p>
              <p className="text-base text-black dark:text-white">
                {t("about.licenseNum")}
                <span className="mx-[3px]">42085</span>
              </p>
              <p className="text-base text-black dark:text-white">
                {t("about.pobox")}
                <span className="mx-[3px]">3420001, Dubai, United</span>
              </p>
              <p className="text-base text-black dark:text-white">
                {t("about.address")}
                <span className="mx-[3px]">
                  UnitedBuilding A1, Dubai Digital Park, Dubai Silicon Oasis,
                  Dubai, United Arab Emirates.
                </span>
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.483239958333!2d55.37201538885499!3d25.119348399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651c2438dc53%3A0xe6abcc1ea38a17f5!2sD1%20-%20Dubai%20Digital%20Park!5e0!3m2!1sen!2seg!4v1710135523643!5m2!1sen!2seg"
              width="385"
              height="200"
              style={{
                border: 2,
                borderStyle: "solid",
                borderColor: "#d4af37",
                borderRadius: "8px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div
            className={`w-full flex flex-row max-sm:flex-col justify-between items-center mb-6 gap-10 ${
              i18n.language === "en" ? "text-left" : "text-right"
            }`}
            dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
          >
            <div className="mb-6">
              <h3 className="text-yhover text-2xl mb-4">{t("about.london")}</h3>
              <p className="text-base text-black dark:text-white">
                {t("about.name")}
                <span className="mx-[3px]">ENG MONEY LTD</span>
              </p>
              <p className="text-base text-black dark:text-white">
                {t("about.companyNum")}
                <span className="mx-[3px]">15438832</span>
              </p>
              <p className="text-base text-black dark:text-white">
                {t("about.address")}
                <span className="mx-[3px]">
                  128 City Road, London, United Kingdom EC1V 2NX
                </span>
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2354241378084!2d-0.09124422293392202!3d51.52724167181783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2seg!4v1710135217801!5m2!1sen!2seg"
              width="385"
              height="200"
              style={{
                border: 2,
                borderStyle: "solid",
                borderColor: "#d4af37",
                borderRadius: "8px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
