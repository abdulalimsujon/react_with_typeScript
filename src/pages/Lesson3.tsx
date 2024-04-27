import { motion, useMotionValue, useTransform } from "framer-motion";

const Lesson3 = () => {
  const x = useMotionValue(0);
  const rotate = useTransform(
    x,

    [-200, 200],

    [0, 180]
  );
  const scale = useTransform(
    x,

    [-200, 200],

    [0.5, 1.5]
  );

  return (
    <div
      className="border border-red-500 size-[500] flex flex-col justify-center items-center p-5 
     "
    >
      <motion.div
        className="size-64 bg-indigo-300 rounded-lg   flex-wrap gap-5"
        style={{ x, rotate, scale }}
        drag="x"
      ></motion.div>
    </div>
  );
};

export default Lesson3;
