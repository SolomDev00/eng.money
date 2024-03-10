import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import facebook from "../../assets/media/facebook.png";
import twitter from "../../assets/media/twitter.png";
import instagram from "../../assets/media/instagram.png";
import telegram from "../../assets/media/telegram.png";
import tiktok from "../../assets/media/tiktok.png";
import whatsapp from "../../assets/media/whatsapp.png";
import youtube from "../../assets/media/youtube.png";
import Button from "../../components/schema/Button";

const ContactUsPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="contact"
      className={`flex flex-col gap-12 justify-between items-center pt-44 pb-12 text-center bg-image`}
      dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
    >
      <div className="overlayContact bg-[#e7e7e74d] dark:bg-[#000000cc]" />
      <div className="mb-2">
        <h2 className="text-4xl text-center mb-4 text-yhover">
          {t("contact.title")}
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-5">
        <Link to={"/"} className="hover:scale-110 duration-200">
          <img className="w-10" src={facebook} alt="" />
        </Link>
        <Link to={"/"} className="hover:scale-110 duration-200">
          <img className="w-10" src={instagram} alt="" />
        </Link>
        <Link to={"/"} className="hover:scale-110 duration-200">
          <img className="w-10" src={whatsapp} alt="" />
        </Link>
        <Link to={"/"} className="hover:scale-110 duration-200">
          <img className="w-10" src={twitter} alt="" />
        </Link>
        <Link to={"/"} className="hover:scale-110 duration-200">
          <img className="w-10" src={telegram} alt="" />
        </Link>
        <Link to={"/"} className="hover:scale-110 duration-200">
          <img className="w-10" src={youtube} alt="" />
        </Link>
        <Link to={"/"} className="hover:scale-110 duration-200">
          <img className="w-10" src={tiktok} alt="" />
        </Link>
      </div>
      <h3 className="text-white text-2xl">
        <span className="text-yhover">Email</span>: support@eng-money.com
      </h3>
      <div className="flex flex-row gap-5">
        <Button
          variant={"outline"}
          className="px-6 text-white border-yhover yhover:bg-yhover duration-300"
        >
          {t("contact.register")}
        </Button>
        <Button
          variant={"outline"}
          className="px-4 text-white border-yhover yhover:bg-yhover duration-300"
        >
          {t("contact.login")}
        </Button>
      </div>
    </section>
  );
};

export default ContactUsPage;