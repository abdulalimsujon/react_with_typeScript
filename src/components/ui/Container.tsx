import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full max-w-[1250px] mx-auto grid justify-items-center ">
      {children}
    </div>
  );
};

export default Container;
