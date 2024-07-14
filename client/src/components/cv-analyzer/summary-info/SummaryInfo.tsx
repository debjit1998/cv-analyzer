import { useContext } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Upload } from "lucide-react";
import ResumeContext from "@/contexts/ResumeContext";
import AnimatedCircularProgress from "@/components/common/AnimatedCircularProgress";
import Scores from "./Scores";
import Highlights from "./Highlights";
import Improvements from "./Improvements";
import Ratings from "./Ratings";
import { Button } from "@/components/ui/button";
import CustomTooltip from "@/components/common/CustomTooltip";

const SummaryInfo = () => {
  const { resumeInformation, regenerate, uploadNewCV } =
    useContext(ResumeContext)!;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-white w-full h-auto overflow-y-auto lg:h-screen lg:w-1/2 p-4 md:p-8"
    >
      <div className="flex items-center gap-2 w-full justify-between ">
        <h1 className="bg-gradient-to-r text-white max-w-[70%] truncate text-[28px] lg:text-[38px] font-bold">
          {resumeInformation.firstname} {resumeInformation.lastname}
        </h1>
        <div className="flex gap-2">
          <CustomTooltip side="bottom" tooltip="New Resume">
            <Button
              onClick={uploadNewCV}
              className="bg-transparent text-white p-2"
            >
              <Upload />
            </Button>
          </CustomTooltip>
          <CustomTooltip side="bottom" tooltip="Regenerate">
            <Button
              onClick={regenerate}
              className="text-white bg-transparent p-2"
            >
              <RefreshCw />
            </Button>
          </CustomTooltip>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <div className="w-24 h-24 flex-shrink-0">
          <AnimatedCircularProgress
            textSize="24px"
            textColor="#fff"
            pathColor="rgb(34 197 94)"
            value={resumeInformation.resume_score}
          />
        </div>
        <div>
          <h2 className="text-[22px] leading-7">
            Your resume scored a{" "}
            <b className="text-green-500">
              {resumeInformation.resume_score} out of 100
            </b>
            . A Resume Score evaluates the relevance and quality of a resume. It
            considers factors like keyword matching, skills, experience, and
            formatting. This score will help you understand how well your resume
            fits for a specific job.
          </h2>
        </div>
      </div>

      <Scores />
      <Highlights />
      <Improvements />
      <Ratings />
    </motion.div>
  );
};

export default SummaryInfo;
