import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Loader } from "lucide-react";
import axios from "axios";
import ResumeContext from "@/contexts/ResumeContext";
import { generatePDF } from "@/lib/utils";
import CustomTooltip from "@/components/common/CustomTooltip";
import jsPDF from "jspdf";

interface ITemplate {
  src: string;
  pdf: jsPDF | null;
}

const ViewTemplates = () => {
  const { resumeInformation } = useContext(ResumeContext)!;

  const [templates, setTemplates] = useState<ITemplate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(1);

  const getTemplate = async (index: number) => {
    const { data } = await axios.post<{ html: string }>(
      `${import.meta.env.VITE_API_URL}/generate-resume`,
      {
        index,
        user: resumeInformation,
      }
    );

    return data.html;
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([1, 2].map((index) => getTemplate(index))).then(async (res) => {
      const pdfs = await Promise.all(res.map((html) => generatePDF(html)));
      setTemplates(pdfs);
      setIsLoading(false);
    });
  }, []); //eslint-disable-line

  const download = (index: number) => {
    templates[index - 1].pdf?.save(`template${index}.pdf`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full"
    >
      <div className="h-[1px] bg-white w-full mt-4" />
      <h2 className="mt-6 text-[24px] lg:text-[28px] font-bold flex justify-between items-center">
        Templates
        <div className="flex items-center gap-2">
          {!isLoading ? (
            <CustomTooltip tooltip="Download Template">
              <button onClick={() => download(currentTemplate)}>
                <Download />
              </button>
            </CustomTooltip>
          ) : (
            <Loader className="animate-spin" />
          )}

          <button
            disabled={currentTemplate === 1}
            onClick={() => setCurrentTemplate(1)}
          >
            <ChevronLeft />
          </button>
          <span className="text-[16px]">{currentTemplate}</span>
          <button
            disabled={currentTemplate === 2}
            onClick={() => setCurrentTemplate(2)}
          >
            <ChevronRight />
          </button>
        </div>
      </h2>

      {!!templates.length && (
        <div className="mt-8 w-full h-[400px] lg:h-[600px]">
          <img
            src={templates[currentTemplate - 1].src}
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </motion.div>
  );
};

export default ViewTemplates;
