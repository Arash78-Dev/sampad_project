import { FC, useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ismd, issm, isxl } from "../../utils/mediaQeuries";
import { teachers6, teachers9 } from "../data";
import icon from "/assets/images/Icons/Icon.png";
import TeacherCard from "./TeacherCard";

interface Props {
  grade: "six" | "nine";
}

const TeacherSwiper: FC<Props> = ({ grade }) => {
  const perView = isxl ? 4 : ismd ? 3 : issm ? 2 : 1;
  const swiperRef = useRef<SwiperRef>(null);
  const [teachers, setTeachers] = useState<
    {
      src: string;
      name: string;
      jobTitle: string;
    }[]
  >([]);

  useEffect(() => {
    if (grade === "six") {
      setTeachers(teachers6);
      return;
    }

    setTeachers(teachers9);
  }, [grade]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        swiperRef.current?.swiper.activeIndex ===
        teachers.length - (perView ?? 0)
      ) {
        swiperRef.current.swiper.slideToLoop(0);
      }
      swiperRef.current?.swiper.slideNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [perView, teachers.length]);

  const isDisable = teachers.length <= perView;

  return (
    <div className="flex flex-row gap-2 md:gap-12 w-[90%] md:w-[80%] justify-evenly">
      <button
        disabled={isDisable}
        style={{ cursor: isDisable ? "not-allowed" : "pointer" }}
        onClick={() => {
          swiperRef.current?.swiper.slidePrev();
        }}
        className="bg-white rounded-full p-1 w-8 h-8 self-center flex items-center justify-center border"
      >
        <img src={icon} />
      </button>

      <div className="flex-1 overflow-hidden">
        <Swiper
          style={{ width: "100%", paddingBlock: 24 }}
          spaceBetween={8}
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
        disabled={isDisable}
        onClick={() => {
          swiperRef.current?.swiper.slideNext();
        }}
        style={{ cursor: isDisable ? "not-allowed" : "pointer" }}
        className="bg-white rounded-full p-1 rotate-180 w-8 h-8  self-center flex items-center justify-center"
      >
        <img src={icon} />
      </button>
    </div>
  );
};

export default TeacherSwiper;
