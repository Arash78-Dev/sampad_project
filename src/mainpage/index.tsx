import { FC } from "react";
import Mosht from "./Mosht";
import Options from "./Options";
import GoodClassino from "./GoodClassino";
import Ghadam from "./Ghadam";
import IQ from "./Iq";
import BestResult from "./BestResult";
import Faq from "./Faq";

const MainPage: FC = () => {
  return (
    <div className="flex flex-col relative bg-[#FCFBFF] mb-4">
      <img
        className="w-full  absolute object-fit  h-full top-[-10rem]"
        src="/assets/images/BG/Desktop - 4.png"
      />
      <div className="flex flex-col z-10 gap-48">
        <Mosht />

        <Options />

        <GoodClassino />

        <Ghadam />

        <IQ />

        <BestResult />

        <Faq />
      </div>
    </div>
  );
};

export default MainPage;
