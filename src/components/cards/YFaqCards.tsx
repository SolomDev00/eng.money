/* eslint-disable react-refresh/only-export-components */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

interface IProps {
  question: string;
  answer: string | ReactNode;
}

const FaqCards = ({ question, answer }: IProps) => {
  return (
    <div className="w-full pt-6">
      <div
        className={`w-full p-2 px-5 border-2 rounded-lg shadow-md border-yhover`}
      >
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between gap-12 rounded-lg bg-transparent py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-yhover p-3}`}
              >
                <span
                  className={`text-lg duration-150 ${
                    open ? "text-yhover" : "text-black dark:text-white"
                  }`}
                >
                  {question}
                </span>
                {open ? (
                  <ChevronUpIcon className="transform h-6 w-6 text-yhover" />
                ) : (
                  <ChevronDownIcon className="transform h-6 w-6 text-yhover" />
                )}
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
