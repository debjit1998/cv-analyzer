import { useContext } from "react";
import { motion } from "framer-motion";
import { Flag } from "lucide-react";
import ResumeContext from "@/contexts/ResumeContext";

const cardFadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 * index },
  }),
};

const Improvements = () => {
  const { resumeInformation } = useContext(ResumeContext)!;

  return (
    <div className="mt-6">
      <h2 className="pt-6 text-[24px] lg:text-[28px] font-bold flex items-center justify-between delay-300 duration-300 transition-all">
        Recommendations
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        {resumeInformation.improvements.map((improvement, index) => (
          <motion.div
            variants={cardFadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="p-4 gap-4 flex rounded-md bg-white"
            key={index}
            custom={index}
          >
            <Flag className="h-6 w-6 mt-[6px] text-yellow-500 flex-shrink-0" />
            <span className="text-foreground text-[18px]">{improvement}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Improvements;
