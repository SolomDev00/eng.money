/* eslint-disable react-refresh/only-export-components */
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

interface IProps {
  question: string;
  answer: string | ReactNode;
}

const FaqCards = ({ question, answer }: IProps) => {
  return (
    <div className="w-full pt-6">
      <div
        className={`w-full p-2 px-5 border-2 rounded-lg shadow-md border-bhover`}
      >
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between gap-12 rounded-lg bg-transparent py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-bhover p-3}`}
              >
                <span
                  className={`text-lg duration-150 ${
                    open ? "text-bhover" : "text-black dark:text-white"
                  }`}
                >
                  {question}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-6 w-6 text-bhover`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 pt-4 text-base text-black/90 dark:text-gray-400">
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
