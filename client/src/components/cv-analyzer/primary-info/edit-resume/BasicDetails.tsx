import { FC, useContext } from "react";
import ResumeContext from "@/contexts/ResumeContext";
import {
  InputWithLabel,
  TextareaWithLabel,
} from "@/components/common/InputWithLabel";
import { cn } from "@/lib/utils";

interface IBasicDetailsProps {
  className?: string;
}

const BasicDetails: FC<IBasicDetailsProps> = ({ className }) => {
  const { resumeInformation } = useContext(ResumeContext)!;

  return (
    <div className="w-full">
      <h2
        className={cn("mt-6 text-[24px] lg:text-[28px] font-bold", className)}
      >
        Basic Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        <InputWithLabel
          name="firstname"
          id="firstname"
          defaultValue={resumeInformation.firstname}
          placeholder="First Name"
          label="First Name"
        />
        <InputWithLabel
          name="lastname"
          id="lastname"
          defaultValue={resumeInformation.lastname}
          placeholder="Last Name"
          label="Last Name"
        />
        <InputWithLabel
          name="email"
          id="email"
          defaultValue={resumeInformation.email}
          placeholder="Email"
          label="Email"
        />
        <InputWithLabel
          name="phone"
          id="phone"
          defaultValue={resumeInformation.phone}
          placeholder="Phone Number"
          label="Phone Number"
        />
      </div>
      <div className="mt-5 w-full">
        <TextareaWithLabel
          className="w-full text-foreground focus-visible:ring-none resize-none h-32"
          label="About"
          name="about"
          id="about"
          defaultValue={resumeInformation.about}
          promptAcceptClassName="text-green-200"
        />
      </div>
    </div>
  );
};

export default BasicDetails;
