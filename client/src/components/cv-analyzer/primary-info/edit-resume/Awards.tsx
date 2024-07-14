import { useContext, useState } from "react";
import { ChevronDown, PlusCircle } from "lucide-react";
import ResumeContext from "@/contexts/ResumeContext";
import { Button } from "../../../ui/button";
import { cn } from "@/lib/utils";
import { Input } from "../../../ui/input";

const Awards = () => {
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
        Awards
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
          {resumeInformation.awards.map((cert, index) => (
            <div key={index} className="w-full">
              <Input
                className="w-full text-foreground focus-visible:ring-none"
                defaultValue={cert}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
