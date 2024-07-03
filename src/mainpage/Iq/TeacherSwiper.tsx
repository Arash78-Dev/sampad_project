import { FC, useEffect, useRef } from "react";
import { SwiperRef, Swiper, SwiperSlide } from "swiper/react";
import { teachers } from "../data";
import "swiper/css";
import TeacherCard from "./TeacherCard";

const TeacherSwiper: FC = () => {
  const perView = 4;
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        swiperRef.current?.swiper.activeIndex ===
        teachers.length - (perView ?? 0)
      ) {
        swiperRef.current.swiper.slideTo(0);
      }
      swiperRef.current?.swiper.slideNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [perView]);

  return (
    <div className="flex flex-row gap-12 w-[80%]">
      <button
        onClick={() => {
          swiperRef.current?.swiper.slidePrev();
        }}
        className="bg-white rounded-full p-1 w-8 h-8  self-center flex items-center justify-center"
      >
        <img src="/assets/images/Icons/Icon.png" />
      </button>

      <div className="flex-1 overflow-hidden">
        <Swiper
          style={{ width: "100%", paddingBlock: 24 }}
          spaceBetween={10}
          slidesPerView={perView}
          ref={swiperRef}
        >
          {teachers.map((value, index) => (
            <SwiperSlide key={index}>
              <TeacherCard
                job_title={value.jobTitle}
                name={value.name}
                src={value.src}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={() => {
          swiperRef.current?.swiper.slideNext();
        }}
        className="bg-white rounded-full p-1 rotate-180 w-8 h-8  self-center flex items-center justify-center"
      >
        <img src="/assets/images/Icons/Icon.png" />
      </button>
    </div>
  );
};

export default TeacherSwiper;
