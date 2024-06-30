import { FC } from "react";
import tadris from "../../public/assets/images/Icons/Section 01/تدریس کامل دروس.svg";
import nemone from "../../public/assets/images/Icons/Section 01/حل نمونه‌سوال.svg";
import porsesh from "../../public/assets/images/Icons/Section 01/پرسش و پاسخ کلاسی .svg";

const optionList = [
  { title: "تدریس کامل دروس", image: tadris },
  { title: "حل نمونه‌سوال", image: nemone },
  { title: "پرسش و پاسخ کلاسی", image: porsesh },
];

const Options: FC = () => {
  return (
    <div className="flex gap-56 justify-center">
      {optionList.map((value) => {
        return (
          <div
            key={value.title}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <img src={value.image} alt={value.title} className="w-44 h-20" />

            <text>{value.title}</text>
          </div>
        );
      })}
    </div>
  );
};

export default Options;
