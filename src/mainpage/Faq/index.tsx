import { FC } from "react";
import { faqData } from "../data";
import FaqItem from "./FaqItem";

const Faq: FC = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-12 items-center">
      <img
        src="/assets/images/Titles/سوالات پرتکرار_.svg"
        className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%]"
      />

      <div className="flex flex-col gap-4 lg:gap-12 w-[90%] lg:w-[80%] xl:[75%] 2xl:w-[70%] items-center">
        {faqData.map((value) => (
          <FaqItem answer={value.answer} title={value.title} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
