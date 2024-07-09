import { FC } from "react";
import { ismd } from "../utils/mediaQeuries";

const Options: FC = () => {
  return ismd ? (
    <div className="flex flex-col md:flex-row gap-12 md:gap-36 lg:gap-54  justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="/assets/images/Icons/Section 01/تدریس کامل دروس.svg"
          alt={"تدریس کامل دروس"}
          className="h-12 md:h-16 lg:h-20"
        />

        <p className="text-[12px] md:text-[16px] lg:text-[18px]">
          تدریس کامل دروس
        </p>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="/assets/images/Icons/Section 01/حل نمونه‌سوال.svg"
          alt="حل نمونه‌سوال"
          className="h-12 md:h-16 lg:h-20"
        />

        <p className="text-[12px] md:text-[16px] lg:text-[18px]">
          حل نمونه‌سوال
        </p>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="/assets/images/Icons/Section 01/پرسش و پاسخ کلاسی .svg"
          alt="پرسش و پاسخ کلاسی"
          className="h-12 md:h-16 lg:h-20"
        />

        <p className="text-[12px] md:text-[16px] lg:text-[18px]">
          پرسش و پاسخ کلاسی
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col md:flex-row  md:gap-36 lg:gap-54  justify-center">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <img
            src="/assets/images/Icons/Section 01/حل نمونه‌سوال.svg"
            alt="حل نمونه‌سوال"
            className="h-12 md:h-16 lg:h-20"
          />

          <p className="text-[12px] md:text-[16px] lg:text-[18px]">
            حل نمونه‌سوال
          </p>
        </div>
      </div>

      <div className="flex flex-row px-6 justify-between">
        <div className="flex flex-col gap-4 items-center justify-center">
          <img
            src="/assets/images/Icons/Section 01/تدریس کامل دروس.svg"
            alt={"تدریس کامل دروس"}
            className="h-12 md:h-16 lg:h-20"
          />

          <p className="text-[12px] md:text-[16px] lg:text-[18px]">
            تدریس کامل دروس
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <img
            src="/assets/images/Icons/Section 01/پرسش و پاسخ کلاسی .svg"
            alt="پرسش و پاسخ کلاسی"
            className="h-12 md:h-16 lg:h-20"
          />

          <p className="text-[12px] md:text-[16px] lg:text-[18px]">
            پرسش و پاسخ کلاسی
          </p>
        </div>
      </div>
    </div>
  );
};

export default Options;
