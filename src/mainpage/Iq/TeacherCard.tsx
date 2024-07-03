import { FC } from "react";

interface Props {
  src: string;
  name: string;
  job_title: string;
}

const TeacherCard: FC<Props> = ({ job_title, name, src }) => {
  return (
    <div className="bg-white shadow-lg rounded-[30px] flex-col flex p-1 gap-2 ">
      <img src={src} className="rounded-[30px]" />

      <div className="py-2 flex flex-col items-center">
        <p className="text-[18px]">{name}</p>
        <h1 className="text-[18px]">{job_title}</h1>
      </div>
    </div>
  );
};

export default TeacherCard;
