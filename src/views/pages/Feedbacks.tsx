import Slider from "react-slick";
import owner from "../../assets/owner.jpeg";
import BackgroundImg from "../../assets/landing.jpg";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { StarIcon } from "@heroicons/react/20/solid";

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
                <div className="bg-background w-9 h-9 flex justify-center items-center rounded-md z-10">
                  <img className="w-10 h-10" src={owner} alt="paypal" />
                </div>
                <h2 className="text-xl text-black dark:text-white">Hotjar</h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[150px] mx-auto flex flex-row justify-between items-center gap-2">
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
                3/5/2020
              </p>
            </div>
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <div className="bg-background w-9 h-9 flex justify-center items-center rounded-md z-10">
                  <img className="w-10 h-10" src={owner} alt="paypal" />
                </div>
                <h2 className="text-xl text-black dark:text-white">Hotjar</h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[150px] mx-auto flex flex-row justify-between items-center gap-2">
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
                3/5/2020
              </p>
            </div>
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <div className="bg-background w-9 h-9 flex justify-center items-center rounded-md z-10">
                  <img className="w-10 h-10" src={owner} alt="paypal" />
                </div>
                <h2 className="text-xl text-black dark:text-white">Hotjar</h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[150px] mx-auto flex flex-row justify-between items-center gap-2">
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
                3/5/2020
              </p>
            </div>
            <div className="w-full border-2 border-yhover py-4 px-6 rounded-xl max-sm:rounded-md">
              <div className="silder">
                <div className="bg-background w-9 h-9 flex justify-center items-center rounded-md z-10">
                  <img className="w-10 h-10" src={owner} alt="paypal" />
                </div>
                <h2 className="text-xl text-black dark:text-white">Hotjar</h2>
              </div>
              <div className="mt-3 w-full">
                <div className="w-[150px] mx-auto flex flex-row justify-between items-center gap-2">
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
                3/5/2020
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
