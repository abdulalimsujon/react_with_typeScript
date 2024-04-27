import { motion, useCycle } from "framer-motion";

const UseCycle = () => {
  const [x, cycleX] = useCycle(0, 50, 100);
  return (
    <motion.div
      custom={3}
      className=" size-64 bg-indigo-500 rounded-lg flex justify-center items-center flex-wrap gap-5"
      animate={{ x: x }}
      onTap={() => cycleX()}
    ></motion.div>
  );
};

export default UseCycle;
