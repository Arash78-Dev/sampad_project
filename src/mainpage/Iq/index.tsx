import { FC, useState } from "react";
import MainButton from "../../component/MainButton";
import GradeTabs from "./GradeTabs";
import TeacherSwiper from "./TeacherSwiper";
import azmoonImage from "/assets/images/Titles/دوره IQ ویژه آمادگی آزمون ورودی تیزهوشان (سمپاد) و مدارس برتر.svg";

const Iq: FC = () => {
  const [grade, setGrade] = useState<"six" | "nine">("nine");

  return (
    <div className="flex flex-col items-center gap-6">
      <img src={azmoonImage} />

      <GradeTabs value={grade} onChange={setGrade} />

      <TeacherSwiper grade={grade} />

      <MainButton>مشاهده دروس و اساتید</MainButton>
    </div>
  );
};

export default Iq;
