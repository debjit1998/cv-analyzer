import { useEffect } from "react";
import { motion } from "framer-motion";

const MouseTracker = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll<HTMLDivElement>(
      "[data-name='pupil']"
    );
    window.addEventListener("mousemove", (e) => {
      pupils.forEach((pupil) => {
        // get x and y postion of cursor
        const rect = pupil.getBoundingClientRect();
        const x = (e.pageX - rect.left) / 30 + "px";
        const y = (e.pageY - rect.top) / 30 + "px";
        pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
      });
    });
  }, []);

  return (
    <div
      data-name="eyes"
      className="h-[150px] justify-center items-center gap-5 hidden sm:flex"
    >
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        data-name="eye"
        className="w-[85px] h-[70px] bg-white rounded-[100%] flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 2, type: "spring" }}
          data-name="pupil"
          className="h-10 w-10 rounded-[100%] bg-gradient-to-r from-violet-500 to-fuchsia-500"
        />
      </motion.div>
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        data-name="eye"
        className="w-[85px] h-[70px] bg-white rounded-[100%] flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 2, type: "spring" }}
          data-name="pupil"
          className="h-10 w-10 rounded-[100%] bg-gradient-to-r from-violet-500 to-fuchsia-500"
        />
      </motion.div>
    </div>
  );
};

export default MouseTracker;
