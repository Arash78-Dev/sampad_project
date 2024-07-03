import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { students } from "./data";
import "swiper/css";

const BestResult: FC = () => {
  const perView = 3;
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        swiperRef.current?.swiper.activeIndex ===
        students.length - (perView ?? 0)
      ) {
        swiperRef.current.swiper.slideTo(0);
      }
      swiperRef.current?.swiper.slideNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [perView]);

  return (
    <div className="flex flex-col items-center gap-6 w-full ">
      <img
        className="w-[40%]"
        src="/assets/images/Titles/بهترین نتایج در سال‌های اخیر_ .svg"
      />

      <div className="flex gap-12 w-[70%]">
        <div className="flex-col p-12 rounded-[30px] shadow-lg bg-white flex-[1]">
          <img />

          <p className="text-[20px] text-center">
            بیش از ۹۷% رضایت دانش‌آموزان و والدین
          </p>
        </div>

        <div className="flex-col p-12 rounded-[30px] shadow-lg bg-white flex-[2]">
          <p className="text-[20px]  text-center">
            استفاده حدود ۲ میلیون کاربر از کلاس‌های کلاسینو
          </p>

          <img />
        </div>
      </div>

      <div className="flex gap-24 w-[70%]  p-12 rounded-[30px] items-center shadow-lg bg-white">
        <div className="flex flex-col flex-[1] gap-6">
          <img src="/assets/images/Vector/userChart.png" />

          <p className="text-[20px] text-center">
            صدها قبولی در مدارس برتر و تیزهوشان (سمپاد)
          </p>
        </div>

        <div className="flex-col overflow-hidden  flex-[2] relative">
          <div className="absolute h-full w-[5%] bg-gradient-to-tl from-white from-0% via-transparent via-60% to-transparent  z-10 right-0" />
          <div className="absolute h-full w-[5%] bg-gradient-to-tr from-white from-0% via-transparent via-60% to-transparent z-10 left-0" />

          <Swiper
            style={{ width: "100%", padding: 12, height: "100%" }}
            spaceBetween={0}
            slidesPerView={perView}
            ref={swiperRef}
          >
            {students.map((value, index) => (
              <SwiperSlide key={index}>
                <img src={value} className="w-[100%] rounded-[30px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestResult;
