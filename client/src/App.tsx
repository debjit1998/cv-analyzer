import { Fragment, useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import UploadCV from "@/components/cv-upload/UploadCV";
import CVAnalyzer from "@/components/cv-analyzer";
import Loader from "@/components/common/Loader";
import { ResumeProvider } from "@/contexts/ResumeContext";
import { IResumeInformation } from "@/types";
// import data from "./mocks/data";

import "react-circular-progressbar/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isCVUploaded, setIsCVUploaded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [resumeInformation, setResumeInformation] =
    useState<IResumeInformation | null>(null);
  const prevFile = useRef<File | null>(null);

  const regenerate = () => {
    uploadCV(prevFile.current!);
  };

  const uploadNewCV = () => {
    setIsCVUploaded(false);
    prevFile.current = null;
    setUploadProgress(0);
  };

  const uploadCV = async (file: File) => {
    const formData = new FormData();
    prevFile.current = file;
    formData.append("cv", file);

    try {
      setIsLoading(true);
      setUploadProgress(0);
      const { data } = await axios.post<IResumeInformation>(
        `${import.meta.env.VITE_API_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              setUploadProgress(
                Math.round((progressEvent.loaded / progressEvent.total) * 100)
              );
            }
          },
        }
      );

      if (data.invalid) {
        toast.error(
          "The uploaded file is not a valid resume. Please upload another file"
        );
        setResumeInformation(null);
      } else {
        toast.success("Resume analyzed 😃");
        setResumeInformation(data);
        const timer = setTimeout(() => {
          setIsCVUploaded(true);
          clearTimeout(timer);
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      toast.error("Unable to analyze your resume. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="h-screen relative bg-[#17153B] w-full overflow-y-auto overflow-x-hidden">
        <Loader show={isLoading} message="Analyzing your resume..." />
        {isCVUploaded ? (
          <ResumeProvider
            resumeInformation={resumeInformation!}
            regenerate={regenerate}
            uploadNewCV={uploadNewCV}
          >
            <CVAnalyzer />
          </ResumeProvider>
        ) : (
          <UploadCV
            isLoading={isLoading}
            uploadCV={uploadCV}
            uploadProgress={uploadProgress}
          />
        )}
      </div>
    </Fragment>
  );
};

export default App;
