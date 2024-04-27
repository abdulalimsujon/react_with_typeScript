import { motion } from "framer-motion";

const lesson1 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const child = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div>
      <motion.div
        className="size-60 bg-indigo-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        variants={parent}
        initial={"hidden"}
        animate={"visible"}
        transition={{
          ease: "easeInOut",
          delayChildren: 1,
          staggerChildren: 1,
          duration: 1.5,
        }}
      >
        <motion.div
          className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default lesson1;
