import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

interface ILoaderProps {
  show: boolean;
  message?: string;
}

const Loader: FC<ILoaderProps> = ({ show, message }) => {
  return (
    <div
      className={cn(
        "fixed z-[1000] inset-0 backdrop-blur-sm flex gap-5 flex-col items-center justify-center",
        {
          "pointer-events-none backdrop-blur-none": !show,
        }
      )}
    >
      {show && (
        <div className="bg-blue-900 blur-sm opacity-50 absolute inset-0 " />
      )}
      <AnimatePresence>
        {show && (
          <motion.div
            key="rocket"
            initial={{ y: 0 }}
            animate={{
              y: [0, -25],
              transition: {
                repeat: Infinity,
                duration: 0.4,
                repeatType: "reverse",
              },
            }}
            exit={{ y: -800, transition: { duration: 1 } }}
            className="w-28 h-28 relative z-10"
          >
            <img src="/rocket.svg" className="h-full w-full" />
          </motion.div>
        )}
      </AnimatePresence>
      {!!message && show && (
        <p
          id="#typewriter"
          className="text-white relative z-10 text-[18px] tracking-wider"
        >
          <Typewriter words={[message]} loop />
        </p>
      )}
    </div>
  );
};

export default Loader;
