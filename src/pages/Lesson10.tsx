import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Lesson10 = () => {
  const [visible, setVisible] = useState(true);
  const box = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
    exist: {
      opacity: 0,
      scale: 0.5,
      y: 100,
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center ">
      <AnimatePresence>
        <motion.button layout onClick={() => setVisible(!visible)}>
          toggle
        </motion.button>
        {visible && (
          <motion.div
            className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
            variants={box}
            initial="hidden"
            animate="visible"
            exit="exist"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson10;
