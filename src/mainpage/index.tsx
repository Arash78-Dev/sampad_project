import { FC } from "react";
import Mosht from "./Mosht";
import Options from "./Options";
import GoodClassino from "./GoodClassino";
import Ghadam from "./Ghadam";
import IQ from "./Iq";
import BestResult from "./BestResult";
import Faq from "./Faq";
import { ismd } from "../utils/mediaQeuries";

const MainPage: FC = () => {
  return (
    <div className="flex flex-col relative bg-[#FCFBFF] mb-4">
      <img
        className="w-full  absolute object-fit  top-[7rem] lg:top-[-10rem]"
        src={
          ismd
            ? "/assets/images/BG/Desktop - 4.png"
            : "/assets/images/BG/bg-mobile.png"
        }
      />
      <div className="flex flex-col z-10 gap-12 md:gap-24 lg:gap-48">
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
