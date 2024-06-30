import { FC } from "react";
import vector from "../../public/assets/images/Vector/vector.webp";
import ghadam from "../../public/assets/images/Titles/اولین قدم قبولی در تیزهوشان رو بردار! .png";
import MainButton from "../component/MainButton";

const Ghadam: FC = () => {
  return (
    <div className="flex justify-center gap-36 w-[70%] border-black self-center">
      <div className="flex-1 flex flex-col items-start gap-4">
        <img src={ghadam} className="w-[75%]" />
        <text className="w-[100%] text-[18px]">
          وارد شدن به جمع تیزهوشانی‌ها می‌تونه کمکت کنه در کنکور و قبولی در رشته
          و دانشگاه مورد علاقه‌ات مسیر هموارتری داشته باشی.
          <br />
          <strong>
            {" "}
            چون سطح علمی و امکانات مدارس تیزهوشان بالاتر از مدرسه‌های معمولیه.
          </strong>{" "}
          <br /> پس از همین الان اولین قدم رو بردار!
        </text>

        <MainButton>رایگان تجربه کن</MainButton>
      </div>

      <img className="flex-1" src={vector} style={{ aspectRatio: 4 / 3 }} />
    </div>
  );
};

export default Ghadam;
