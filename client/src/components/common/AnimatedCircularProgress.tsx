import { ComponentProps, FC, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface IAnimatedCircularProgressProps
  extends Partial<ComponentProps<typeof CircularProgressbar>> {
  value: number;
  textSize?: string;
  textColor?: string;
  pathColor?: string;
}

const AnimatedCircularProgress: FC<IAnimatedCircularProgressProps> = ({
  value,
  textSize,
  textColor,
  pathColor,
  ...props
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (value) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= value) {
            clearInterval(interval);
            return value;
          }
          return prev + 1;
        });
      }, 50);
    }
  }, [value]);

  return (
    <div className="w-full h-full">
      <CircularProgressbar
        styles={buildStyles({
          pathColor,
          textColor,
          textSize,
        })}
        value={progress}
        {...props}
        text={String(progress)}
      />
    </div>
  );
};

export default AnimatedCircularProgress;
