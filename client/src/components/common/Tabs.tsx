import { cn } from "@/lib/utils";
import { FC } from "react";

interface ITabsProps {
  items: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: FC<ITabsProps> = ({ items, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-2">
      {items.map((item, index) => (
        <button
          onClick={() => setActiveTab(item)}
          key={index}
          className="text-center overflow-hidden relative p-4 shadow-md rounded-md bg-white text-foreground"
        >
          <span
            className={cn("transition-colors duration-500 opacity-60", {
              "opacity-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text":
                activeTab === item,
            })}
          >
            {item}
          </span>
          <span
            className={cn(
              "h-[5px] transition-[width] duration-500 w-full absolute left-0 bottom-0 bg-fuchsia-400",
              {
                "w-0": activeTab !== item,
              }
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default Tabs;
