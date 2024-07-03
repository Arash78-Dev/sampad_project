import { FC } from "react";

const goodCLassinoList = [
  {
    title: "ارتباط زنده با استاد",
    image: "/assets/images/Icons/Section 02/ارتباط زنده با استاد.svg",
  },
  {
    title: "دریافت جزوه استاد",
    image: "/assets/images/Icons/Section 02/دریافت جزوه استاد.svg",
  },
  {
    title: "مشاهده انلاین کلاس ها",
    image: "/assets/images/Icons/Section 02/مشاهده انلاین کلاس ها.svg",
  },
  {
    title: "پشتیبانی ۲۴ ساعته",
    image: "/assets/images/Icons/Section 02/پشتیبانی ۲۴ ساعته.svg",
  },
];

const GoodClassino: FC = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <img
        src="/assets/images/Titles/کلاسینو خوبه؛ چون ....png"
        className="w-[30%]"
      />

      <div className="flex flex-row gap-6 w-[60%]">
        {goodCLassinoList.map((value) => {
          return (
            <div
              key={value.title}
              className="flex flex-1 bg-white shadow-lg rounded-[30px] py-12 flex-col gap-4 items-center justify-center"
            >
              <img src={value.image} alt={value.title} className="w-44 h-20" />

              <p>{value.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoodClassino;
