import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(366100);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <h5 dir={i18n.language === "en" ? "ltr" : "rtl"} className="text-[2.10rem] text-black dark:text-gray-200 font-semibold text-center max-sm:text-xl max-sm:w-full mb-7">
        {t("popup.title")}
      </h5>
      <div className="flex flex-row justify-center items-center gap-10 max-sm:gap-5">
        <p className="flex flex-col text-3xl max-sm:text-2xl font-semibold text-black dark:text-white">
          {days} <span className="text-2xl max-sm:text-xl">DAYS</span>
        </p>
        <p className="flex flex-col text-3xl max-sm:text-2xl font-semibold text-black dark:text-white">
          {hours} <span className="text-2xl max-sm:text-xl">HOURS</span>
        </p>
        <p className="flex flex-col text-3xl max-sm:text-2xl font-semibold text-black dark:text-white">
          {minutes} <span className="text-2xl max-sm:text-xl">MINUTES</span>
        </p>
        <p className="flex flex-col text-3xl max-sm:text-2xl font-semibold text-black dark:text-white">
          {seconds} <span className="text-2xl max-sm:text-xl">SECONDS</span>
        </p>
      </div>
    </div>
  );
}

export default Countdown;
