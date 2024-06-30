import { FC } from "react";
import liveConnect from "../../public/assets/images/Icons/Section 02/ارتباط زنده با استاد.svg";
import jozve from "../../public/assets/images/Icons/Section 02/دریافت جزوه استاد.svg";
import onlineClass from "../../public/assets/images/Icons/Section 02/مشاهده انلاین کلاس ها.svg";
import poshtibani from "../../public/assets/images/Icons/Section 02/پشتیبانی ۲۴ ساعته.svg";
import goodClassino from "../../public/assets/images/Titles/کلاسینو خوبه؛ چون ....png";

const goodCLassinoList = [
  { title: "ارتباط زنده با استاد", image: liveConnect },
  { title: "دریافت جزوه استاد", image: jozve },
  { title: "مشاهده انلاین کلاس ها", image: onlineClass },
  { title: "پشتیبانی ۲۴ ساعته", image: poshtibani },
];

const GoodClassino: FC = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <img src={goodClassino} className="w-[30%]" />

      <div className="flex flex-row gap-6 w-[60%]">
        {goodCLassinoList.map((value) => {
          return (
            <div
              key={value.title}
              className="flex flex-1 bg-white shadow-lg rounded-[30px] py-12 flex-col gap-4 items-center justify-center"
            >
              <img src={value.image} alt={value.title} className="w-44 h-20" />

              <text>{value.title}</text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoodClassino;
