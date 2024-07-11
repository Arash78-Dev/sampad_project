import { FC, PropsWithChildren } from "react";
import icon from "/assets/images/Icons/Icon.png"

interface Props {}

const MainButton: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <a href="https://student.classino.com/auth/login">
      <button
        className="flex flex-row gap-2 items-center rounded-[36px] bg-[#007AFF] 
      hover:px-6  transition-all py-2 px-3 md:py-2 md:px-4 text-white text-[14px] md:text-[16px] lg:text-[18px]"
      >
        <img src={icon} />
        <div>{children}</div>
      </button>
    </a>
  );
};

export default MainButton;
