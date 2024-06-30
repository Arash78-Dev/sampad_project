import { FC, PropsWithChildren } from "react";
import icon from "../../public/assets/images/Icons/Icon.svg";

interface Props {}

const MainButton: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <button
      className="flex flex-row gap-2 items-center rounded-[36px] bg-[#007AFF] 
    hover:px-9  transition-all p-2 px-6 text-white"
    >
      <img src={icon} />
      <div>{children}</div>
    </button>
  );
};

export default MainButton;
