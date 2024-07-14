import {
  ComponentProps,
  FC,
  Fragment,
  MouseEventHandler,
  useState,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Check, CircleX, Sparkles, Loader } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import { cn } from "@/lib/utils";

interface IInputWithLabelProps extends ComponentProps<typeof Input> {
  label: string;
}

interface ITextareaWithLabelProps extends ComponentProps<typeof Textarea> {
  label: string;
  showAIButton?: boolean;
  promptAcceptClassName?: string;
  promptRejectClassName?: string;
}

export const InputWithLabel: FC<IInputWithLabelProps> = ({
  id,
  label,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        {...props}
        className="w-full text-foreground focus-visible:ring-none"
      />
    </div>
  );
};

export const TextareaWithLabel: FC<ITextareaWithLabelProps> = ({
  id,
  label,
  showAIButton = true,
  defaultValue,
  promptAcceptClassName,
  promptRejectClassName,
  ...props
}) => {
  const [value, setValue] = useState(props.value || defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const callImproveWithAI: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (!value) return;

    e.preventDefault();
    e.stopPropagation();

    try {
      setIsLoading(true);
      setPopupContent("");

      const { data } = await axios.post<{ content: string }>(
        `${import.meta.env.VITE_API_URL}/improve`,
        { text: value }
      );

      setPopupContent(data.content);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error("Failed to improve with AI. Please try again later");
    }
  };

  const onAccept = () => {
    setValue(popupContent);
    setPopupContent("");
  };

  const onReject = () => {
    setPopupContent("");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-6">
        <label className="flex items-center gap-4" htmlFor={id}>
          {label}
          {showAIButton && (
            <Fragment>
              {!isLoading ? (
                <button
                  type="button"
                  onClick={callImproveWithAI}
                  className="flex py-1 px-4 text-[12px] rounded-2xl bg-[#C8ACD6] text-white gap-2 items-center"
                >
                  <span className="tracking-wider">Improve with AI</span>
                  <Sparkles className="h-4 w-4" />
                </button>
              ) : (
                <Loader className="h-5 w-5 animate-spin" />
              )}
            </Fragment>
          )}
        </label>
        {!!popupContent && (
          <div className="flex gap-2">
            <CustomTooltip tooltip="Reject">
              <button type="button" onClick={onReject}>
                <CircleX
                  className={cn("h-5 w-5 text-red-500", promptRejectClassName)}
                />
              </button>
            </CustomTooltip>
            <CustomTooltip tooltip="Accept">
              <button type="button" onClick={onAccept}>
                <Check
                  className={cn(
                    "h-5 w-5 text-green-900",
                    promptAcceptClassName
                  )}
                />
              </button>
            </CustomTooltip>
          </div>
        )}
      </div>

      <div
        className={cn(
          "grid grid-rows-[0fr] w-full transition-all duration-500",
          {
            "grid-rows-[1fr] mb-3": !!popupContent,
          }
        )}
      >
        <div className="overflow-hidden w-full">
          <div className="bg-[#C8ACD6] text-white p-4 rounded-lg max-h-[125px] overflow-y-auto">
            <p>{popupContent}</p>
          </div>
        </div>
      </div>

      <Textarea
        id={id}
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full text-foreground focus-visible:ring-none resize-none"
      />
    </div>
  );
};
