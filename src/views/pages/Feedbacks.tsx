import Slider from "react-slick";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { StarIcon } from "@heroicons/react/20/solid";
import BackgroundImg from "../../assets/landing.jpg";
import Man_1 from "../../assets/feedbacks/man_1.png";
import Man_2 from "../../assets/feedbacks/man_2.png";
import Man_3 from "../../assets/feedbacks/man_3.png";
import Man_4 from "../../assets/feedbacks/man_4.png";
import Man_5 from "../../assets/feedbacks/man_5.png";
import Man_6 from "../../assets/feedbacks/man_6.png";

const FeedbackPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section
        className="container w-full mt-64 bg-contact"
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
        <div className="overlayContact dark:bg-[#000000cc]" />
        <div className="mb-2">
          <h2 className="text-4xl text-center mb-4 text-yhover">
            <span className="mark-zigzag">{t("feedbacks.title")}</span>
          </h2>
        </div>
        <div className="w-full pt-44 pb-44">
          <Slider
            className="flex flex-row items-center text-hover h-[125px] cursor-grab"
            {...settings}
          >
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <img className="w-10 h-10 rounded-lg" src={Man_1} alt="owner" />
                <h2 className="text-xl text-black dark:text-white">
                  Ahmed Samir
                </h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[130px] mx-auto flex flex-row justify-between items-center gap-1">
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                </div>
              </div>
              <p className="mt-3 text-black/90 dark:text-white text-center">
                ” Safe and reliable website and money is delivered! ”
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex justify-end items-end mt-3">
                2/10/2022
              </p>
            </div>
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <img className="w-10 h-10 rounded-lg" src={Man_2} alt="owner" />
                <h2 className="text-xl text-black dark:text-white">
                  Yousef Mahmoud
                </h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[130px] mx-auto flex flex-row justify-between items-center gap-1">
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                </div>
              </div>
              <p className="mt-3 text-black/90 dark:text-white text-center">
                ” Safe and reliable website and money is delivered! ”
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex justify-end items-end mt-3">
                17/12/2022
              </p>
            </div>
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <img className="w-10 h-10 rounded-lg" src={Man_3} alt="owner" />
                <h2 className="text-xl text-black dark:text-white">
                  Osama Amer
                </h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[130px] mx-auto flex flex-row justify-between items-center gap-1">
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                </div>
              </div>
              <p className="mt-3 text-black/90 dark:text-white text-center">
                ” Safe and reliable website and money is delivered! ”
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex justify-end items-end mt-3">
                4/11/2022
              </p>
            </div>
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <img className="w-10 h-10 rounded-lg" src={Man_4} alt="owner" />
                <h2 className="text-xl text-black dark:text-white">
                  Abdel-Rahman Mohammed
                </h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[130px] mx-auto flex flex-row justify-between items-center gap-1">
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                </div>
              </div>
              <p className="mt-3 text-black/90 dark:text-white text-center">
                ” Safe and reliable website and money is delivered! ”
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex justify-end items-end mt-3">
                12/2/2023
              </p>
            </div>
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <img className="w-10 h-10 rounded-lg" src={Man_5} alt="owner" />
                <h2 className="text-xl text-black dark:text-white">
                  Eslam Wael
                </h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[130px] mx-auto flex flex-row justify-between items-center gap-1">
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                </div>
              </div>
              <p className="mt-3 text-black/90 dark:text-white text-center">
                ” Safe and reliable website and money is delivered! ”
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex justify-end items-end mt-3">
                3/1/2023
              </p>
            </div>
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <img className="w-10 h-10 rounded-lg" src={Man_6} alt="owner" />
                <h2 className="text-xl text-black dark:text-white">
                  Karim Ismail
                </h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[130px] mx-auto flex flex-row justify-between items-center gap-1">
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                  <StarIcon className="text-yhover w-5 h-5" />
                </div>
              </div>
              <p className="mt-3 text-black/90 dark:text-white text-center">
                ” Safe and reliable website and money is delivered! ”
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex justify-end items-end mt-3">
                19/3/2023
              </p>
            </div>
          </Slider>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FeedbackPage;
