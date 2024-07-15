import { useContext, useState } from "react";
import { CircleX, PlusCircle } from "lucide-react";
import ResumeContext from "@/contexts/ResumeContext";
import { Badge } from "../../../ui/badge";
import CustomTooltip from "@/components/common/CustomTooltip";

const Skills = () => {
  const { resumeInformation } = useContext(ResumeContext)!;

  const [skills, setSkills] = useState(resumeInformation.skills);

  const onDelete = (index: number) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full mt-12">
      <h2 className="mt-6 text-[24px] lg:text-[28px] font-bold flex items-center justify-between">
        Skills
        <CustomTooltip tooltip="Add Skill">
          <button className="bg-transparent">
            <PlusCircle />
          </button>
        </CustomTooltip>
      </h2>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            className="bg-white p-2 px-4 flex items-center gap-2 text-foreground hover:bg-white"
            key={index}
          >
            <span>{skill}</span>{" "}
            <CircleX
              onClick={() => onDelete(index)}
              className="cursor-pointer h-4 w-4"
            />
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
