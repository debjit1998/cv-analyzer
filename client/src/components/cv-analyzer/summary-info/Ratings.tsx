import { FC, useContext, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import ResumeContext from "@/contexts/ResumeContext";

const Card: FC<{ skill: string }> = ({ skill }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="p-4 flex justify-between bg-white rounded-md shadow-md gap-2">
      <div className="truncate text-[18px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
        {skill}
      </div>
      <div className="flex gap-2 flex-shrink-0">
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            className="h-6 w-6 cursor-pointer text-foreground"
            onClick={() => setRating(index)}
            fill={index <= rating ? "#f6ad55" : "none"}
            stroke={index <= rating ? "#f6ad55" : "hsl(222.2 84% 4.9%)"}
          />
        ))}
      </div>
    </div>
  );
};

const Ratings = () => {
  const { resumeInformation } = useContext(ResumeContext)!;
  const container = useRef<HTMLDivElement>(null);

  const onScroll = (top: number) => {
    container.current?.scrollBy({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-6">
      <h2 className="pt-6 text-[24px] lg:text-[28px] font-bold flex items-center justify-between delay-300 duration-300 transition-all">
        Rate your skills
        <div className="ml-auto flex items-center gap-2">
          <button className="bg-transparent" onClick={() => onScroll(-200)}>
            <ChevronUp />
          </button>
          <button className="bg-transparent" onClick={() => onScroll(200)}>
            <ChevronDown />
          </button>
        </div>
      </h2>

      <div
        ref={container}
        className="mt-6 gap-4 grid grid-cols-1 xl:grid-cols-2 max-h-[200px] overflow-y-auto"
      >
        {resumeInformation.skills.map((skill, index) => (
          <Card key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
