import { FC, useState } from "react";

interface Props {
  title: string;
  answer: string;
}

const FaqItem: FC<Props> = ({ answer, title }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={`flex flex-col  w-[80%] bg-white ${
        isShow ? "gap-8" : "gap-0"
      } p-7  overflow-hidden rounded-[30px] transition-all shadow-lg cursor-pointer`}
      onClick={() => {
        setIsShow((prev) => !prev);
      }}
    >
      <div className="flex flex-row justify-between gap-4  items-center">
        <p className="text-[12px] md:text-[16px] lg:text-[18px]">{title}</p>

        <img
          src="/assets/images/Icons/Icon.png"
          className={`${
            isShow ? "rotate-[270deg]" : "rotate-[90deg]"
          } transition-all h-3 md:h-4`}
        />
      </div>

      <p
        className={`text-[12px] md:text-[16px] lg:text-[18px] ${
          isShow ? "max-h-screen opacity-100" : "max-h-[0px] opacity-0"
        }  transition-all`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqItem;
