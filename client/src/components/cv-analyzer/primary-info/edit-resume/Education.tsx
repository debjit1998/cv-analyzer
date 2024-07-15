import { FC, useContext, useState } from "react";
import { ChevronDown, PlusCircle } from "lucide-react";
import ResumeContext from "@/contexts/ResumeContext";
import { Button } from "../../../ui/button";
import { IEducation } from "@/types";
import { Card, CardDescription } from "../../../ui/card";
import { InputWithLabel } from "../../../common/InputWithLabel";
import SelectWithLabel from "../../../common/SelectWithLabel";
import { months, years } from "@/constants";
import { cn } from "@/lib/utils";
import CustomTooltip from "@/components/common/CustomTooltip";

const EducationCard: FC<IEducation> = ({
  degree,
  institution,
  completion_month,
  completion_year,
  cgpa,
  percentage,
}) => {
  return (
    <Card>
      <CardDescription className="p-4">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
          <InputWithLabel
            label="Institution"
            name="institution"
            id="institution"
            defaultValue={institution}
          />
          <InputWithLabel
            label="Degree"
            name="degree"
            id="degree"
            defaultValue={degree}
          />
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 mt-4 gap-y-4 gap-x-2">
          <SelectWithLabel
            defaultValue={completion_month}
            label="Completion Month"
            options={months}
          />
          <SelectWithLabel
            defaultValue={completion_year}
            label="Completion Year"
            options={years}
          />
          <InputWithLabel
            label="CGPA"
            name="cgpa"
            id="cgpa"
            defaultValue={cgpa}
          />
          <InputWithLabel
            label="Percentage"
            name="percentage"
            id="percentage"
            defaultValue={percentage}
          />
        </div>
      </CardDescription>
    </Card>
  );
};

const Education = () => {
  const { resumeInformation } = useContext(ResumeContext)!;
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full mt-12">
      <h2
        className={cn(
          "mt-6 text-[24px] lg:text-[28px] font-bold flex items-center justify-between delay-300 duration-300 transition-all",
          {
            "bg-white text-foreground px-4 py-2 lg:text-[24px] rounded-lg":
              isCollapsed,
          }
        )}
      >
        Education
        <div className="flex items-center gap-2">
          <CustomTooltip tooltip="Add Education">
            <Button
              className={cn("bg-transparent px-1", {
                "hover:bg-transparent": isCollapsed,
              })}
            >
              <PlusCircle
                className={cn("transition-all delay-300", {
                  "text-foreground": isCollapsed,
                })}
              />
            </Button>
          </CustomTooltip>
          <button
            onClick={() => setIsCollapsed((prev) => !prev)}
            className={cn(
              "bg-transparent cursor-pointer transition-transform duration-300",
              {
                "rotate-180": !isCollapsed,
              }
            )}
          >
            <ChevronDown />
          </button>
        </div>
      </h2>

      <div
        className={cn(
          "mt-6 w-full grid grid-rows-[0fr] transition-all duration-500",
          {
            "grid-rows-[1fr]": !isCollapsed,
          }
        )}
      >
        <div className="w-full flex flex-col gap-5 overflow-hidden">
          {resumeInformation.education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
