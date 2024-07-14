import { FC, useContext, useState } from "react";
import { ChevronDown, PlusCircle } from "lucide-react";
import ResumeContext from "@/contexts/ResumeContext";
import { Button } from "../../../ui/button";
import { Card, CardDescription, CardHeader } from "../../../ui/card";
import { IWorkExperience } from "@/types";
import {
  InputWithLabel,
  TextareaWithLabel,
} from "../../../common/InputWithLabel";
import SelectWithLabel from "../../../common/SelectWithLabel";
import { months, years } from "@/constants";
import { cn } from "@/lib/utils";

const WorkExperienceCard: FC<IWorkExperience> = ({
  company,
  job_title,
  job_description,
  start_month,
  start_year,
  end_month,
  end_year,
}) => {
  const [jobTitle, setJobTitle] = useState(job_title);
  const [currentCompany, setCompany] = useState(company);

  return (
    <Card>
      <CardHeader className="text-[20px] p-4">
        {jobTitle} @ {currentCompany}
      </CardHeader>
      <CardDescription className="p-4">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
          <InputWithLabel
            label="Company"
            name="company"
            id="company"
            value={currentCompany}
            onChange={(e) => setCompany(e.target.value)}
          />
          <InputWithLabel
            label="Job Title"
            name="job_title"
            id="job_title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="w-full mt-4">
          <TextareaWithLabel
            label="Description"
            name="job_description"
            id="job_description"
            defaultValue={job_description}
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 gap-y-4 gap-x-2">
          <div className="grid grid-cols-2 gap-2">
            <SelectWithLabel
              defaultValue={start_month}
              label="Start Month"
              options={months}
            />
            <SelectWithLabel
              defaultValue={start_year}
              label="Start Year"
              options={years}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <SelectWithLabel
              defaultValue={end_month}
              label="End Month"
              options={months}
            />
            <SelectWithLabel
              defaultValue={end_year}
              label="End Year"
              options={years}
            />
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

const WorkExperience = () => {
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
        Work Experience
        <div className="flex items-center gap-2">
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
          {resumeInformation.experience.map((exp, index) => (
            <WorkExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
