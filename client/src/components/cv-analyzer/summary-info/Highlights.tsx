import { useContext } from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import ResumeContext from "@/contexts/ResumeContext";

const cardFadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 * index },
  }),
};

const Highlights = () => {
  const { resumeInformation } = useContext(ResumeContext)!;

  return (
    <div className="mt-6">
      <h2 className="pt-6 text-[24px] lg:text-[28px] font-bold flex items-center justify-between delay-300 duration-300 transition-all">
        Highlights
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        {resumeInformation.highlights.map((highlight, index) => (
          <motion.div
            variants={cardFadeInAnimation}
            initial="initial"
            animate="animate"
            className="p-4 gap-4 flex rounded-md bg-white"
            key={index}
            custom={index}
          >
            <Lightbulb className="h-6 w-6 mt-[3px] text-green-500 flex-shrink-0" />
            <span className="text-foreground text-[18px]">{highlight}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
