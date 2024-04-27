import { motion, useDragControls } from "framer-motion";

const UseDragControl = () => {
  const control = useDragControls();
  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center ">
      <motion.div
        className="size-64 h-10 bg-green-500 rounded-lg flex flex-wrap gap-5 p-5"
        onPointerDown={(e) => control.start(e)}
      ></motion.div>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5"
        drag="x"
        dragControls={control}
      ></motion.div>
    </div>
  );
};

export default UseDragControl;
