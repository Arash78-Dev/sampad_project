import { FC } from "react";

interface Props {
  value: "six" | "nine";
  onChange: React.Dispatch<React.SetStateAction<"six" | "nine">>;
}

const GradeTabs: FC<Props> = ({value , onChange}) => {
  return (
    <div className="bg-[#FFEED0] relative flex gap-1 py-3 px-1 w-[250px] rounded-[30px]">
      <div
        className={`absolute h-full w-[125px] p-1 top-0 ${
          value === "six" ? "right-0" : "right-[125px]"
        } transition-all`}
      >
        <div className="bg-[#FFAF20] rounded-[30px] h-full" />
      </div>

      <div
        className="font-bold text-[18p] flex-1 text-center z-1 relative cursor-pointer"
        onClick={() => onChange("six")}
      >
        پایه ششم
      </div>

      <div
        className="font-bold text-[18p] flex-1 text-center z-1 relative cursor-pointer"
        onClick={() => onChange("nine")}
      >
        پایه نهم
      </div>
    </div>
  );
};

export default GradeTabs;
