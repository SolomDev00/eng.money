import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import facebook from "../../assets/media/facebook.png";
import twitter from "../../assets/media/twitter_light.png";
import instagram from "../../assets/media/instagram.png";
import telegram from "../../assets/media/telegram.png";
import tiktok from "../../assets/media/tiktok_light.png";
import whatsapp from "../../assets/media/whatsapp.png";
import youtube from "../../assets/media/youtube.png";
import Button from "../../components/schema/Button";
import BackgroundImg from "../../assets/landing.jpg";

const ContactUsPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="contact"
      className={`flex flex-col gap-12 justify-between items-center pt-72 pb-32 text-center bg-contact`}
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
      <div className="overlayContact dark:bg-[#000000cc]" />
      <div className="mb-2">
        <h2 className="text-4xl text-center mb-4 text-yhover">
          <span className="mark-zigzag">{t("contact.title")}</span>
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-7">
        <Link
          to={"https://facebook.com/ENG.MONEY.LTD"}
          target="_blank"
          className="hover:scale-110 duration-200"
          title="Facebook"
        >
          <img className="w-9" src={facebook} alt="" />
        </Link>
        <Link
          to={"https://instagram.com/eng_money_ltd"}
          target="_blank"
          className="hover:scale-110 duration-200"
          title="Instagram"
        >
          <img className="w-9" src={instagram} alt="" />
        </Link>
        <Link
          to={"https://whatsapp.com/channel/0029VaDjoncAojZ1c85qv327"}
          target="_blank"
          className="hover:scale-110 duration-200"
          title="Whatsapp"
        >
          <img className="w-9" src={whatsapp} alt="" />
        </Link>
        <Link
          target="_blank"
          to={"https://twitter.com/eng_money_ltd"}
          className="bg-black dark:bg-transparent p-1 rounded-md hover:scale-110 duration-200"
          title="Twitter"
        >
          <img className="w-7 dark:w-7" src={twitter} alt="" />
        </Link>
        <Link
          to={"https://t.me/ENG_MONEY_LTD_CHANNEL"}
          target="_blank"
          className="hover:scale-110 duration-200"
          title="Telegram"
        >
          <img className="w-9" src={telegram} alt="" />
        </Link>
        <Link
          to={"https://www.youtube.com/@Eng_Money"}
          target="_blank"
          className="hover:scale-110 duration-200"
          title="Youtube"
        >
          <img className="w-9" src={youtube} alt="" />
        </Link>
        <Link
          to={"https://tiktok.com/@eng_money_ltd"}
          target="_blank"
          className="bg-black dark:bg-transparent p-1 rounded-md hover:scale-110 duration-200"
          title="Tiktok"
        >
          <img className="w-7 dark:w-7" src={tiktok} alt="" />
        </Link>
      </div>
      <h3 className="text-black dark:text-white text-2xl">
        <span className="text-yhover">Email</span>: support@eng-money.com
      </h3>
      <div className="flex flex-row gap-5">
        <a href="https://www.eng-money.com/system/register" target="_blank">
          <Button
            variant={"outline"}
            className="px-6 text-black dark:text-white border-yhover hover:bg-yhover duration-300"
          >
            {t("contact.register")}
          </Button>
        </a>
        <a href="https://www.eng-money.com/system/login" target="_blank">
          <Button
            variant={"outline"}
            className="px-4 text-black dark:text-white border-yhover hover:bg-yhover duration-300"
          >
            {t("contact.login")}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactUsPage;
