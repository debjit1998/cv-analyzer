import { useState } from "react";
import PrimaryInfo from "./primary-info/PrimaryInfo";
import SummaryInfo from "./summary-info/SummaryInfo";
import EditResume from "./primary-info/edit-resume/EditResume";

const items: string[] = ["Edit Resume", "View Templates"];

const CVAnalyzer = () => {
  const [activeTab, setActiveTab] = useState(items[0]);

  return (
    <div className="flex relative flex-col lg:flex-row">
      {activeTab === "View Templates" ? (
        <div className="text-white h-auto overflow-y-auto lg:h-screen w-full lg:w-1/2 p-4 md:p-8">
          <EditResume showDivider={false} />
        </div>
      ) : (
        <SummaryInfo />
      )}
      <div
        className="relative top-0 left-0 bottom-0 my-6 lg:my-0 lg:absolute lg:block lg:top-8 lg:bottom-8 
      lg:left-1/2 h-[1px] lg:h-auto lg:w-[1px] mx-4 md:mx-8 lg:mx-0 bg-white"
      />
      <PrimaryInfo
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        items={items}
      />
    </div>
  );
};

export default CVAnalyzer;
