import { Tab } from "@headlessui/react";
import { useTranslation } from "react-i18next";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AnalyticsTabs() {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      className="w-full px-2 py-12 sm:px-0"
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
                  ? "bg-yhover text-black font-medium shadow-md border-yhover dark:border-transparent"
                  : "bg-white hover:bg-yhover/90 hover:text-white text-black"
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
                  ? "bg-yhover text-black font-medium shadow-md border-yhover dark:border-transparent"
                  : "bg-white hover:bg-yhover/90 hover:text-white text-black"
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
                  ? "bg-yhover text-black font-medium shadow-md border-yhover dark:border-transparent"
                  : "bg-white hover:bg-yhover/90 hover:text-white text-black"
              )
            }
          >
            {t("achievement.semi")}
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 rounded-md">
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
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-ghover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-ghover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-ghover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-ghover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-ghover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-ghover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-ghover hover:text-ghover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-ghover text-xl font-semibold">
                        %210
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-ghover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-ghover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-ghover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-ghover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-ghover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-ghover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-bhover text-3xl mb-5 markb">
                  {t("achievement.d2")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-bhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-bhover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-bhover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-bhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-bhover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-bhover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-bhover hover:text-bhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-bhover text-xl font-semibold">
                        %190
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-bhover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-bhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-bhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-bhover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-bhover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-bhover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-yhover text-3xl mb-5 markyy">
                  {t("achievement.d3")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-yhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-yhover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-yhover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-yhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-yhover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-yhover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-yhover hover:text-yhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-yhover text-xl font-semibold">
                        %205
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-yhover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-yhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-yhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-yhover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-yhover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-yhover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-red-700 text-3xl mb-5 markr">
                  {t("achievement.d4")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-red-700 text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-red-700 text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-red-700 text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-red-700 text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-red-700 text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-red-700 text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-red-700 hover:text-red-700 hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-red-700 text-xl font-semibold">
                        %225
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-red-700 text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-red-700 text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-red-700 text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-red-700 text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-red-700 text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-red-700 text-lg">%18</span>
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
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-ghover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-ghover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-ghover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-ghover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-ghover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-ghover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-ghover hover:text-ghover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-ghover text-xl font-semibold">
                        %210
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-ghover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-ghover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-ghover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-ghover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-ghover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-ghover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-bhover text-3xl mb-5 markb">
                  {t("achievement.d2")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-bhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-bhover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-bhover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-bhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-bhover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-bhover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-bhover hover:text-bhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-bhover text-xl font-semibold">
                        %190
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-bhover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-bhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-bhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-bhover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-bhover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-bhover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-yhover text-3xl mb-5 markyy">
                  {t("achievement.d3")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-yhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-yhover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-yhover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-yhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-yhover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-yhover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-yhover hover:text-yhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-yhover text-xl font-semibold">
                        %205
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-yhover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-yhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-yhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-yhover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-yhover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-yhover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-red-700 text-3xl mb-5 markr">
                  {t("achievement.d4")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-red-700 text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-red-700 text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-red-700 text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-red-700 text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-red-700 text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-red-700 text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-red-700 hover:text-red-700 hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-red-700 text-xl font-semibold">
                        %225
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-red-700 text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-red-700 text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-red-700 text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-red-700 text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-red-700 text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-red-700 text-lg">%18</span>
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
                  {t("achievement.d5")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-ghover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-ghover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-ghover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-ghover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-ghover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-ghover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-ghover hover:text-ghover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-ghover text-xl font-semibold">
                        %210
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-ghover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-ghover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-ghover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-ghover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-ghover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-ghover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-bhover text-3xl mb-5 markb">
                  {t("achievement.d6")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-bhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-bhover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-bhover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-bhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-bhover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-bhover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-bhover hover:text-bhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-bhover text-xl font-semibold">
                        %190
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-bhover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-bhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-bhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-bhover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-bhover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-bhover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-yhover text-3xl mb-5 markyy">
                  {t("achievement.d7")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-yhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-yhover text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-yhover text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-yhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-yhover text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-yhover text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-yhover hover:text-yhover hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-yhover text-xl font-semibold">
                        %205
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-yhover text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-yhover text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-yhover text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-yhover text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-yhover text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-yhover text-lg">%18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h4 className="text-red-700 text-3xl mb-5 markr">
                  {t("achievement.d8")}
                </h4>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jan")} / 23</p>
                        <span className="text-red-700 text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Feb")} / 23</p>
                        <span className="text-red-700 text-lg">%12</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Mar")} / 23</p>
                        <span className="text-red-700 text-lg">%14</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Apr")} / 23</p>
                        <span className="text-red-700 text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.May")} / 23</p>
                        <span className="text-red-700 text-lg">%11</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Jun")} / 23</p>
                        <span className="text-red-700 text-lg">%13</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-2 cursor-pointer rounded-lg border-[1px] border-dashed border-red-700 hover:text-red-700 hover:border-solid duration-200">
                    <div className="w-full flex flex-row justify-between items-center gap-2 px-4">
                      <p className="text-xl font-semibold">
                        {t("achievement.total")}:
                      </p>
                      <span className="text-red-700 text-xl font-semibold">
                        %225
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4">
                        <p className="text-lg">{t("achievement.Jul")} / 23</p>
                        <span className="text-red-700 text-lg">%15</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Aug")} / 23</p>
                        <span className="text-red-700 text-lg">%10</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Sep")} / 23</p>
                        <span className="text-red-700 text-lg">%16</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Oct")} / 23</p>
                        <span className="text-red-700 text-lg">%20</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Nov")} / 23</p>
                        <span className="text-red-700 text-lg">%13</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-[1px] pb-2">
                      <div className="w-full flex flex-row justify-between items-center px-4 pt-2">
                        <p className="text-lg">{t("achievement.Dec")} / 23</p>
                        <span className="text-red-700 text-lg">%18</span>
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
