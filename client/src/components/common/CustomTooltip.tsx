import { ComponentProps, FC, ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ITooltipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode;
  tooltip: string;
}

const CustomTooltip: FC<ITooltipProps> = ({ children, tooltip, ...props }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent {...props}>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
