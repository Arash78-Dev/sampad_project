import { FC } from "react";
import MainButton from "../component/MainButton";
import frame2 from "/assets/images/Hero section/Frame 2.png";
import moshtImage from "/assets/images/Titles/تیـــزهوشـان تو مُشتــــته!.png";

const Mosht: FC = () => {
  return (
    <div className="flex flex-col items-center gap-9">
      <img className="w-full" style={{ aspectRatio: 7 / 2 }} src={frame2} />

      <div className="flex flex-col items-center gap-3">
        <img
          className="w-[70%] md:w-[60%] lg:w-[70%]"
          style={{ aspectRatio: 6 / 1 }}
          src={moshtImage}
        />

        <p className="text-[#191919] w-[70%] text-[16px] md:text-[24px] lg:text-[32px]  text-center">
          کلاس‌های آنلاین IQ ویژه آمادگی آزمون ورودی مدارس برتر و تیزهوشان
        </p>

        <MainButton>رایگان تجربه کن</MainButton>
      </div>
    </div>
  );
};

export default Mosht;
