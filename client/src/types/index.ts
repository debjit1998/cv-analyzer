export interface IBasicDetails {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  about: string;
}

export interface IWorkExperience {
  company: string;
  job_title: string;
  job_description: string;
  start_month: string;
  start_year: string;
  end_month: string;
  end_year: string;
}

export interface IEducation {
  degree: string;
  institution: string;
  completion_month: string;
  completion_year: string;
  cgpa: string;
  percentage: string;
}

export interface IProject {
  title: string;
  description: string;
}

export type IScoreTyes = "ats_score" | "effectiveness" | "brevity" | "grammar";

export interface IResumeInformation {
  firstname: IBasicDetails["firstname"];
  lastname: IBasicDetails["lastname"];
  email: IBasicDetails["email"];
  phone: IBasicDetails["phone"];
  about: IBasicDetails["about"];
  experience: IWorkExperience[];
  education: IEducation[];
  projects: IProject[];
  skills: string[];
  certifications: string[];
  awards: string[];
  resume_score: number;
  ats_score: number;
  effectiveness: number;
  brevity: number;
  grammar: number;
  highlights: string[];
  improvements: string[];
  invalid?: boolean;
  role?: string;
  address?: string;
}
