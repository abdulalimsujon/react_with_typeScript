import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Lesson4 = () => {
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, "change", (e) => {
    console.log(e);
  });

  useMotionValueEvent(scrollYProgress, "change", (e) => {
    console.log(e);
  });
  return (
    <motion.div
      className="w-full h-10 fixed bg-green-500 top-0"
      style={{ scaleX: scrollYProgress }}
    >
      progress bar
    </motion.div>
  );
};

export default Lesson4;
