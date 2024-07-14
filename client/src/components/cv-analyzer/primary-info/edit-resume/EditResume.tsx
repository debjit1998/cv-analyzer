import { FC } from "react";
import { motion } from "framer-motion";
import BasicDetails from "./BasicDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Awards from "./Awards";
import { cn } from "@/lib/utils";

interface IEditResumeProps {
  showDivider?: boolean;
}

const EditResume: FC<IEditResumeProps> = ({ showDivider = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {showDivider && <div className="h-[1px] bg-white w-full mt-4" />}
      <BasicDetails className={cn({ "mt-0": !showDivider })} />
      <WorkExperience />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Awards />
    </motion.div>
  );
};

export default EditResume;
