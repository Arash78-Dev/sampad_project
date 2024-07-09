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
        className="w-[70%] md:w-[50%] lg:w-[30%]"
      />

      <div className="flex flex-col lg:flex-row gap-6 w-[50%] md:w-[90%] lg:w-[85%] xl:w-[70%] 2xl:w-[60%]">
        {goodCLassinoList.map((value) => {
          return (
            <div
              key={value.title}
              className="flex flex-1 bg-white shadow-lg rounded-[30px] py-4 md:py-8 lg:py-12 flex-col gap-4 items-center justify-center"
            >
              <img src={value.image} alt={value.title} className="h-12 lg:h-20" />

              <p className="text-[12px] md:text-[16px] lg:text-[18px]">
                {value.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoodClassino;
