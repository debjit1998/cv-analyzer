import { createContext, FC, ReactNode } from "react";
import { IResumeInformation } from "@/types";

interface IResumeProviderProps {
  children: ReactNode;
  resumeInformation: IResumeInformation;
  regenerate: () => void;
  uploadNewCV: () => void;
}

const ResumeContext = createContext<{
  resumeInformation: IResumeInformation;
  regenerate: () => void;
  uploadNewCV: () => void;
} | null>(null);

export const ResumeProvider: FC<IResumeProviderProps> = ({
  children,
  resumeInformation,
  regenerate,
  uploadNewCV,
}) => {
  return (
    <ResumeContext.Provider
      value={{ resumeInformation, regenerate, uploadNewCV }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext;
