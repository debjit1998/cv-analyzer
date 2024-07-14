import { ChangeEventHandler, FC, useRef } from "react";
import { Loader2, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import MouseTracker from "./MouseTracker";

interface IProps {
  uploadCV: (file: File) => void;
  uploadProgress: number;
  isLoading: boolean;
}

const UploadCV: FC<IProps> = ({ uploadCV, uploadProgress, isLoading }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files?.length) {
      uploadCV(e.target.files[0]);
      inputRef.current!.value = "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full flex flex-col items-center justify-center"
    >
      <MouseTracker />
      <div
        className="w-[500px] flex items-center justify-center h-56 max-w-[90%] mx-auto 
      border-none border-2 hover:bg-[#433D8B] relative rounded-xl sm:border-dashed
       border-blue-300 hover:border-blue-600"
      >
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleChange}
        />
        <Button
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-4 w-56"
          disabled={isLoading}
        >
          {!isLoading ? <Upload /> : <Loader2 className="animate-spin" />}
          <span>{!isLoading ? "Upload" : "Analyzing"} your resume</span>
        </Button>
        {isLoading && (
          <Progress
            className="absolute -bottom-10 left-0"
            value={uploadProgress}
          />
        )}
      </div>
    </motion.div>
  );
};

export default UploadCV;
