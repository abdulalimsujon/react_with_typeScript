import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const UseAnimatiionControl = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * i } }));
  }, []);

  return (
    <div className="border border-red-500 flex flex-col justify-center items-center size-[500px]">
      <button className="bg-green-500 mb-10 px-2 py-3">forward</button>
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex justify-center items-center flex-wrap gap-5"
        custom={1}
        animate={controls}
        onClick={() => controls.stop()}
      ></motion.div>
      <motion.div
        custom={2}
        className=" size-64 bg-indigo-500 rounded-lg flex justify-center items-center flex-wrap gap-5"
        animate={controls}
      ></motion.div>
      <motion.div
        custom={3}
        className=" size-64 bg-indigo-500 rounded-lg flex justify-center items-center flex-wrap gap-5"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default UseAnimatiionControl;
