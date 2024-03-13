/* eslint-disable react-refresh/only-export-components */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  question: string;
  answer: string | ReactNode;
  width?: string;
}

const FaqCards = ({ question, answer, width }: IProps) => {
  const [t, i18] = useTranslation("global");

  return (
    <div className="w-full pt-6">
      <div className={`w-full p-2 border-2 rounded-lg shadow-md border-ghover`}>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between gap-12 rounded-lg bg-transparent py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-ghover p-3 border-ghover border-2}`}
              >
                <span
                  className={`text-lg max-sm:text-base ${
                    i18.language === "en" ? "text-left" : "text-right"
                  } duration-150 ${
                    open ? "text-ghover" : "text-black dark:text-white"
                  }`}
                >
                  {question}
                  <span className="hidden">{t("aa")}</span>
                </span>
                {open ? (
                  <ChevronUpIcon
                    className={`transform h-6 w-6 text-ghover ${width}`}
                  />
                ) : (
                  <ChevronDownIcon
                    className={`transform h-6 w-6 text-ghover ${width}`}
                  />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-black/90 dark:text-gray-400">
                {answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FaqCards;
