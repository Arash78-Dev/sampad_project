import { FC } from "react";
import heroImage from "../../public/assets/images/Hero section/Frame 2.png";
import moshtImage from "../../public/assets/images/Titles/تیـــزهوشـان تو مُشتــــته!.png";
import MainButton from "../component/MainButton";

const Mosht: FC = () => {
  return (
    <div className="flex flex-col items-center gap-9">
      <img className="w-full" style={{ aspectRatio: 7 / 2 }} src={heroImage} />

      <div className="flex flex-col items-center gap-3">
        <img
          className="w-[80%]"
          style={{ aspectRatio: 6 / 1 }}
          src={moshtImage}
        />

        <text className="text-[#191919] text-[32px] text-center">
          کلاس‌های آنلاین IQ ویژه آمادگی آزمون <br />
          ورودی مدارس برتر و تیزهوشان
        </text>

        <MainButton>رایگان تجربه کن</MainButton>
      </div>
    </div>
  );
};

export default Mosht;
