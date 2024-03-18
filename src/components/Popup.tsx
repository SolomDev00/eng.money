/* eslint-disable @typescript-eslint/no-explicit-any */
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PopUp = ({ onClose }: any) => {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      dir={i18n.language === "en" ? "ltr" : "rtl"}
      className="fixed bottom-2 right-3 p-4 bg-white border border-gray-300 shadow-lg rounded-lg"
    >
      <div className="mt-2 flex flex-col gap-y-3">
        <p className="text-black dark:text-black">{t("popup.title")}</p>
        <Link
          to={"https://www.eng-money.com/system/login"}
          className="px-3 py-2 bg-yhover rounded-lg text-sm hover:bg-hover duration-300 text-center"
        >
          {t("popup.btn")}
        </Link>
      </div>
      <button
        onClick={onClose}
        className="absolute top-0 right-0 p-1 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <XMarkIcon className="w-5" />
      </button>
    </div>
  );
};

export default PopUp;
