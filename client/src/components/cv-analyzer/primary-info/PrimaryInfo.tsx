import { FC } from "react";
import Tabs from "@/components/common/Tabs";
import EditResume from "./edit-resume/EditResume";
import ViewTemplates from "./view-templates/ViewTemplates";

interface IPrimaryInfoProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  items: string[];
}

const PrimaryInfo: FC<IPrimaryInfoProps> = ({
  activeTab,
  setActiveTab,
  items,
}) => {
  const renderContent = () => {
    switch (activeTab) {
      case "Edit Resume":
        return <EditResume />;
      case "View Templates":
        return <ViewTemplates />;
      default:
        return <EditResume />;
    }
  };

  return (
    <div className="text-white h-auto overflow-y-auto lg:h-screen w-full lg:w-1/2 p-4 md:p-8">
      <Tabs items={items} activeTab={activeTab} setActiveTab={setActiveTab} />

      {renderContent()}
    </div>
  );
};

export default PrimaryInfo;
