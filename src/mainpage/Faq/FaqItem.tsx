import { FC, useState } from "react";

interface Props {
  title: string;
  answer: string;
}

const FaqItem: FC<Props> = ({ answer, title }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={`flex flex-col  w-[80%] bg-white gap-8 p-7 ${
        isShow ? "h-36" : "h-20"
      } overflow-hidden rounded-[30px] transition-all shadow-lg cursor-pointer`}
      onClick={() => {
        setIsShow((prev) => !prev);
      }}
    >
      <div className="flex flex-row justify-between   items-center">
        <p>{title}</p>

        <img
          src="/assets/images/Icons/Icon.png"
          className={`${
            isShow ? "rotate-[270deg]" : "rotate-[90deg]"
          } transition-all h-4`}
        />
      </div>

      <p>{answer}</p>
    </div>
  );
};

export default FaqItem;
