"use client";
import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";

type Props = {
  children: ReactNode;
};
const HomeLayout = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[24px] w-full">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default HomeLayout;
