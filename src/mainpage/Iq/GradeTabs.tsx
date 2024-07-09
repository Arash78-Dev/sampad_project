import { FC } from "react";

interface Props {
  value: "six" | "nine";
  onChange: React.Dispatch<React.SetStateAction<"six" | "nine">>;
}

const GradeTabs: FC<Props> = ({value , onChange}) => {
  return (
    <div className="bg-[#FFEED0] relative flex gap-2 py-2 lg:py-3 px-1 w-[50%]  md:w-[250px] rounded-[30px]">
      <div
        className={`absolute h-full w-[50%] md:w-[125px] p-1 top-0 ${
          value === "six" ? "left-[50%]" : "left-0"
        } transition-all`}
      >
        <div className="bg-[#FFAF20] rounded-[30px] h-full" />
      </div>

      <div
        className="font-bold text-[12px] md:text-[16px] lg:text-[18px] flex-1 text-center z-1 relative cursor-pointer"
        onClick={() => onChange("six")}
      >
        پایه ششم
      </div>

      <div
        className="font-bold text-[12px] md:text-[16px] lg:text-[18px] flex-1 text-center z-1 relative cursor-pointer"
        onClick={() => onChange("nine")}
      >
        پایه نهم
      </div>
    </div>
  );
};

export default GradeTabs;
