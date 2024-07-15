import { FC, useContext, useState } from "react";
import { PlusCircle, ChevronDown } from "lucide-react";
import { Button } from "../../../ui/button";
import ResumeContext from "@/contexts/ResumeContext";
import { Card, CardDescription } from "../../../ui/card";
import { IProject } from "@/types";
import {
  InputWithLabel,
  TextareaWithLabel,
} from "../../../common/InputWithLabel";
import { cn } from "@/lib/utils";
import CustomTooltip from "@/components/common/CustomTooltip";

const ProjectCard: FC<IProject> = ({ title, description }) => {
  return (
    <Card>
      <CardDescription className="p-4">
        <div className="w-full grid grid-cols-1 gap-5">
          <InputWithLabel
            label="Title"
            name="title"
            id="title"
            defaultValue={title}
          />
          <TextareaWithLabel
            label="Description"
            name="description"
            id="description"
            defaultValue={description}
          />
        </div>
      </CardDescription>
    </Card>
  );
};

const Projects = () => {
  const { resumeInformation } = useContext(ResumeContext)!;
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full mt-12">
      <h2
        className={cn(
          "mt-6 text-[24px] lg:text-[28px] font-bold flex items-center justify-between duration-300 delay-300 transition-all",
          {
            "bg-white text-foreground px-4 py-2 lg:text-[24px] rounded-lg":
              isCollapsed,
          }
        )}
      >
        Projects
        <div className="flex items-center gap-2">
          <CustomTooltip tooltip="Add Project">
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
          {resumeInformation.projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
