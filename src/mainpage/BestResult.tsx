import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { students } from "./data";
import "swiper/css";
import { islg, issm } from "../utils/mediaQeuries";
import bestResultImage from "/assets/images/Titles/بهترین نتایج در سال‌های اخیر_ .svg";
import rezayat_card from "/assets/images/rezayat_card_main.png";
import classino_user_card from "/assets/images/classino_user_card.png";
import user_chart from "/assets/images/Vector/userChart.png";

const BestResult: FC = () => {
  const perView = islg ? 3 : issm ? 2 : 1;
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        swiperRef.current?.swiper.activeIndex ===
        students.length - (perView ?? 0)
      ) {
        swiperRef.current.swiper.slideToLoop(0);
      }
      swiperRef.current?.swiper.slideNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [perView]);

  return (
    <div className="flex flex-col items-center gap-6 w-full ">
      <img className="w-[80%] md:w-[60%] lg:w-[40%]" src={bestResultImage} />

      <div className="flex flex-col-reverse md:flex-row gap-6 w-[80%] lg:w-[80%] xl:[70%] 2xl:w-[60%] items-stretch">
        <div className="flex flex-col p-4 md:p-12 items-center rounded-[30px] shadow-lg gap-9 bg-white flex-[1] justify-evenly">
          <div>
            <img src={rezayat_card} className="w-full" />
          </div>

          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-center ">
            بیش از ۹۷% رضایت دانش‌آموزان و والدین
          </p>
        </div>

        <div className="flex-col p-4 md:p-12 rounded-[30px] shadow-lg bg-white flex-[2] items-center">
          <p className="text-[14px] md:text-[16px] lg:text-[20px]  text-center">
            استفاده حدود ۲ میلیون کاربر از کلاس‌های کلاسینو
          </p>

          <img src={classino_user_card} className="w-full" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-24 w-[80%] lg:w-[80%] xl:[70%] 2xl:w-[60%]  p-9 md:p-12 rounded-[30px] items-center shadow-lg bg-white">
        <div className="flex flex-col flex-[1] gap-6">
          <img src={user_chart} />

          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-center">
            صدها قبولی در مدارس برتر و تیزهوشان (سمپاد)
          </p>
        </div>

        <div className="flex-col overflow-hidden  flex-[2] relative w-full mx-24 md:mx-2">
          <div className="absolute h-full w-[5%] bg-gradient-to-tl from-white from-0% via-transparent via-60% to-transparent  z-10 right-0" />
          <div className="absolute h-full w-[5%] bg-gradient-to-tr from-white from-0% via-transparent via-60% to-transparent z-10 left-0" />

          <Swiper
            style={{ width: "100%", padding: 36, height: "100%" }}
            spaceBetween={6}
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
