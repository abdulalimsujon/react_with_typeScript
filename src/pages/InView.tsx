import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InView = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref);

  return (
    <div>
      <div className="border border-red-500 size-[600px]  flex flex-col justify-center align-center">
        <motion.div
          className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center align-center "
          ref={ref}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -500 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default InView;
