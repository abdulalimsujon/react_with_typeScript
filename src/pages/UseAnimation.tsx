import { motion, useAnimate } from "framer-motion";
const UseAnimation = () => {
  const [scope, animate] = useAnimate();

  const useControl = () => {
    animate(scope.current, { rotate: 180 });

    // animate([
    //   [scope.current, { rotate: 180 }],
    //   [scope.current, { rotate: 180 }],
    //   [scope.current, { rotate: 180 }],
    // ]);
  };
  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center ">
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5"
        onClick={useControl}
        ref={scope}
      ></motion.div>
    </div>
  );
};

export default UseAnimation;
