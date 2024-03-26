import { Tab } from "@headlessui/react";
import { useTranslation } from "react-i18next";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AnalyticsTabs() {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      className="w-full px-2 pb-44 sm:px-0"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Tab.Group>
        <Tab.List className="w-full mb-6 flex gap-3 space-x-1 rounded-xl bg-background/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 font-medium leading-5 text-xl max-sm:text-base",
                "ring-white/60 ring-offset-2 focus:outline-none focus:ring-2 border-2 border-transparent duration-150",
                selected
                  ? "bg-[#6c35de] text-white font-medium shadow-md border-[#6c35de] dark:border-transparent"
                  : "bg-white hover:bg-[#6c35de]/90 hover:text-white text-black"
              )
            }
          >
            {t("achievement.weekly")}
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 text-xl max-sm:text-base font-medium leading-5",
                "ring-white/60 ring-offset-2 focus:outline-none focus:ring-2 border-2 border-transparent duration-150",
                selected
                  ? "bg-[#6c35de] text-white font-medium shadow-md border-[#6c35de] dark:border-transparent"
                  : "bg-white hover:bg-[#6c35de]/90 hover:text-white text-black"
              )
            }
          >
            {t("achievement.monthly")}
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 text-xl max-sm:text-base font-medium leading-5",
                "ring-white/60 ring-offset-2 focus:outline-none focus:ring-2 border-2 border-transparent duration-150",
                selected
                  ? "bg-[#6c35de] text-white font-medium shadow-md border-[#6c35de] dark:border-transparent"
                  : "bg-white hover:bg-[#6c35de]/90 hover:text-white text-black"
              )
            }
          >
            {t("achievement.semi")}
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 rounded-md min-h-[1470px]">
          <Tab.Panel
            className={classNames(
              "rounded-md bg-black/90 dark:bg-white p-3 dark:shadow-lg",
              "focus:outline-none"
            )}
          >
            <>
              <div className="py-3 px-3">
                <h4 className="text-ghover text-3xl mb-5 mark">
                  {t("achievement.d1")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} - 23</p>
                        <span className="text-ghover text-lg max-sm:text-sm">
                          -
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} - 23</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} - 23</p>
                        <span
                          className={`text-ghover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          5.5<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jan")} - 24</p>
                        <span
                          className={`text-ghover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          8.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} - 24</p>
                        <span
                          className={`text-ghover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          8.8<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-ghover hover:text-ghover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span
                        className={`text-ghover text-xl font-semibold ${
                          i18n.language === "en" ? "flex" : ""
                        }`}
                      >
                        22.3<span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jul")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-bhover text-3xl mb-5 markb">
                  {t("achievement.d2")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} - 23</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} - 23</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} - 23</p>
                        <span
                          className={`text-bhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          10.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jan")} - 24</p>
                        <span
                          className={`text-bhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          15.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} - 24</p>

                        <span
                          className={`text-bhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          16.5<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-bhover hover:text-bhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span
                        className={`text-bhover text-xl font-semibold ${
                          i18n.language === "en" ? "flex" : ""
                        }`}
                      >
                        41.5<span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jul")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-yhover text-3xl mb-5 markyy">
                  {t("achievement.d3")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} - 23</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} - 23</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} - 23</p>
                        <span
                          className={`text-yhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          21.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jan")} - 24</p>
                        <span
                          className={`text-yhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          30.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} - 24</p>
                        <span
                          className={`text-yhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          21.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-yhover hover:text-yhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span
                        className={`text-yhover text-xl font-semibold ${
                          i18n.language === "en" ? "flex" : ""
                        }`}
                      >
                        72.0<span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jul")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-red-700 text-3xl mb-5 markr">
                  {t("achievement.d4")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} - 23</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} - 23</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} - 23</p>
                        <span
                          className={`text-red-700 text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          42.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jan")} - 24</p>
                        <span
                          className={`text-red-700 text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          60.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} - 24</p>
                        <span
                          className={`text-red-700 text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          18.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-red-700 hover:text-red-700 hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span
                        className={`text-red-700 text-xl font-semibold ${
                          i18n.language === "en" ? "flex" : ""
                        }`}
                      >
                        120.0<span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jul")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-md bg-black/90 dark:bg-white p-3 dark:shadow-lg",
              "focus:outline-none"
            )}
          >
            <>
              <div className="py-3 px-3">
                <h4 className="text-ghover text-3xl mb-5 mark">
                  {t("achievement.d1")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} - 23</p>
                        <span
                          className={`text-ghover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          7.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} - 23</p>
                        <span
                          className={`text-ghover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          11.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} - 23</p>
                        <span
                          className={`text-ghover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          7.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jan")} - 24</p>
                        <span
                          className={`text-ghover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          10.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} - 24</p>
                        <span
                          className={`text-ghover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          11.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-ghover hover:text-ghover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span
                        className={`text-ghover text-xl font-semibold ${
                          i18n.language === "en" ? "flex" : ""
                        }`}
                      >
                        34.0<span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jul")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} - 24</p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-bhover text-3xl mb-5 markb">
                  {t("achievement.d2")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} - 23</p>
                        <span
                          className={`text-bhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          16.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} - 23</p>
                        <span
                          className={`text-bhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          19.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} - 23</p>
                        <span
                          className={`text-bhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          14.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jan")} - 24</p>
                        <span
                          className={`text-bhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          20.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} - 24</p>
                        <span
                          className={`text-bhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          22.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-bhover hover:text-bhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span
                        className={`text-bhover text-xl font-semibold ${
                          i18n.language === "en" ? "flex" : ""
                        }`}
                      >
                        91.0<span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jul")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} - 24</p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-yhover text-3xl mb-5 markyy">
                  {t("achievement.d3")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} - 23</p>
                        <span
                          className={`text-yhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          19.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} - 23</p>
                        <span
                          className={`text-yhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          29.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} - 23</p>
                        <span
                          className={`text-yhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          28.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jan")} - 24</p>
                        <span
                          className={`text-yhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          40.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} - 24</p>
                        <span
                          className={`text-yhover text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          28.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-yhover hover:text-yhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span
                        className={`text-yhover text-xl font-semibold ${
                          i18n.language === "en" ? "flex" : ""
                        }`}
                      >
                        144.0<span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jul")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} - 24</p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-red-700 text-3xl mb-5 markr">
                  {t("achievement.d4")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} - 23</p>
                        <span
                          className={`text-red-700 text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          34.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} - 23</p>
                        <span
                          className={`text-red-700 text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          60.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} - 23</p>
                        <span
                          className={`text-red-700 text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          56.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jan")} - 24</p>
                        <span
                          className={`text-red-700 text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          80.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} - 24</p>
                        <span
                          className={`text-red-700 text-lg ${
                            i18n.language === "en" ? "flex" : ""
                          }`}
                        >
                          24.0<span>%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-red-700 hover:text-red-700 hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span
                        className={`text-red-700 text-xl font-semibold ${
                          i18n.language === "en" ? "flex" : ""
                        }`}
                      >
                        254.0<span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jul")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} - 24</p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-md bg-black/90 dark:bg-white p-3 dark:shadow-lg h-[1470px]",
              "focus:outline-none"
            )}
          >
            <>
              <div className="py-3 px-3">
                <h4 className="text-ghover text-3xl mb-5 mark">
                  {t("achievement.d5")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">
                          {t("achievement.Mar")} ~ {t("achievement.May")} - 23
                        </p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">
                          {t("achievement.Jun")} ~ {t("achievement.Aug")} - 23
                        </p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-ghover hover:text-ghover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-ghover text-xl font-semibold">
                        0%
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">
                          {t("achievement.Sep")} ~ {t("achievement.Oct")} - 23
                        </p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">
                          {t("achievement.Nov")} - 23 ~ {t("achievement.Feb")} -
                          23
                        </p>
                        <span className="text-ghover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-bhover text-3xl mb-5 markb">
                  {t("achievement.d6")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">
                          {t("achievement.Mar")} ~ {t("achievement.Aug")} - 23
                        </p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-bhover hover:text-bhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-bhover text-xl font-semibold">
                        0%
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">
                          {t("achievement.Sep")} - 23 ~ {t("achievement.Feb")} -
                          24
                        </p>
                        <span className="text-bhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-yhover text-3xl mb-5 markyy">
                  {t("achievement.d7")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">
                          {t("achievement.Mar")} -23 ~ {t("achievement.Nov")} -
                          24
                        </p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-yhover hover:text-yhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-yhover text-xl font-semibold">
                        0%
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">
                          {t("achievement.Dec")} -24 ~ {t("achievement.Aug")} -
                          25
                        </p>
                        <span className="text-yhover text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-red-700 text-3xl mb-5 markr">
                  {t("achievement.d8")}
                </h4>
                <div className="w-full flex flex-row max-sm:flex-col items-center justify-between gap-5">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">
                          {t("achievement.Mar")} - 23 ~ {t("achievement.Mar")} -
                          24
                        </p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-red-700 hover:text-red-700 hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-red-700 text-xl font-semibold">
                        0%
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">
                          {t("achievement.Mar")} - 24 ~ {t("achievement.Mar")} -
                          25
                        </p>
                        <span className="text-red-700 text-lg">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
