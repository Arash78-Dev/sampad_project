import { FC } from "react";
// import bgImage from "../../public/assets/images/BG/BG_PNG.png";
import Mosht from "./Mosht";
import Options from "./Options";
import GoodClassino from "./GoodClassino";
import Ghadam from "./Ghadam";

const MainPage: FC = () => {
  return (
    <div className="flex flex-col relative bg-[#FCFBFF] ">
      {/* <img
        className="w-full  absolute object-fit top-56"
        src={bgImage}
        style={{ aspectRatio: 0.3186 }}
      /> */}
      <div className="flex flex-col z-10 gap-36">
        <Mosht />

        <Options />

        <GoodClassino />

        <Ghadam />
      </div>
    </div>
  );
};

export default MainPage;
