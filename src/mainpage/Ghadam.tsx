import { FC } from "react";
import MainButton from "../component/MainButton";

const Ghadam: FC = () => {
  return (
    <div className="flex justify-center flex-col gap-12 lg:flex-row lg:gap-36 w-[70%] border-black self-center">
      <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
        <img
          src="/assets/images/Titles/اولین قدم قبولی در تیزهوشان رو بردار! .png"
          className="w-[100%]"
        />
        <p className="w-[100%] text-[14px] md:text-[16px] lg:text-[18px] text-center lg:text-start">
          وارد شدن به جمع تیزهوشانی‌ها می‌تونه کمکت کنه در کنکور و قبولی در رشته
          و دانشگاه مورد علاقه‌ات مسیر هموارتری داشته باشی.
          <br />
          <strong>
            {" "}
            چون سطح علمی و امکانات مدارس تیزهوشان بالاتر از مدرسه‌های معمولیه.
          </strong>{" "}
          <br /> پس از همین الان اولین قدم رو بردار!
        </p>

        <MainButton>رایگان تجربه کن</MainButton>
      </div>

      <img
        className="flex-1"
        src="/assets/images/Vector/vector.webp"
        style={{ aspectRatio: 4 / 3 }}
      />
    </div>
  );
};

export default Ghadam;
