import { FC } from "react";
import { faqData } from "../data";
import FaqItem from "./FaqItem";

const Faq: FC = () => {
  return (
    <div className="flex flex-col gap-12 items-center h-[80rem]">
      <img
        src="/assets/images/Titles/سوالات پرتکرار_.svg"
        className="w-[20%]"
      />

      {faqData.map((value) => (
        <FaqItem answer={value.answer} title={value.title} />
      ))}
    </div>
  );
};

export default Faq;
