import { easeInOut, motion } from "framer-motion";
import { useRef } from "react";

const Lesson2 = () => {
  const constraintsRef = useRef(null);
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
    hover: {
      opacity: 1,
    },
    tap: { scale: 1.3, boxShadow: " 0 10px #000" },
  };

  return (
    <div className="border border-red-500 size-[300px] " ref={constraintsRef}>
      <motion.div
        className="size-60 bg-indigo-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        dragElastic
        dragSnapToOrigin
        drag
        whileTap="tap"
        dragConstraints={constraintsRef}
      ></motion.div>
    </div>
  );
};

export default Lesson2;
