import { FC } from "react";

const optionList = [
  {
    title: "تدریس کامل دروس",
    image: "assets/images/Icons/Section 01/تدریس کامل دروس.svg",
  },
  {
    title: "حل نمونه‌سوال",
    image: "assets/images/Icons/Section 01/حل نمونه‌سوال.svg",
  },
  {
    title: "پرسش و پاسخ کلاسی",
    image: "assets/images/Icons/Section 01/پرسش و پاسخ کلاسی .svg",
  },
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

            <p>{value.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Options;
