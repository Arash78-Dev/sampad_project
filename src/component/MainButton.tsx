import { FC, PropsWithChildren } from "react";

interface Props {}

const MainButton: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <button
      className="flex flex-row gap-2 items-center rounded-[36px] bg-[#007AFF] 
    hover:px-6  transition-all p-2 px-4 text-white"
    >
      <img src="/assets/images/Icons/Icon.svg" />
      <div>{children}</div>
    </button>
  );
};

export default MainButton;
