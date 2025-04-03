import { Coffee } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LogIn = () => {
  return (
    <div className=" flex h-[100vh] w-full m-auto ">
      <div className="bg-amber-400 w-[50%]  m-auto h-[100vh] flex flex-col py-10 px-4 ">
        <Link href={"/"}>
          <div className="text-black flex gap-2">
            <Coffee color="black" />
            <p className="font-bold text-lg">Buy Me Coffee</p>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center px-10 m-auto w-[455px] h-[370px]">
          <div className="bg-amber-600 size-50 rounded-full  flex justify-center overflow-hidden">
            <img src="/logo.png" alt="" className="h-[198px] " />
          </div>
          <h4 className="font-bold text-2xl justify-center">
            Fund your creative work
          </h4>
          <p className="text-[12px] justify-center">
            Accept support. Start a membership. Setup a shop. it's easier than
            you think.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 px-10 h-[509px] w-[50%] m-auto">
        <h2 className="font-bold text-[16px]">Welcome back</h2>

        <div>
          <p className="font-semibold text-[12px]">Email</p>
          <Input type="Enter email here" />
        </div>

        <div>
          <p className="font-semibold text-[12px]">Password</p>
          <Input type="Enter password here" />
        </div>

        <Button variant={"secondary"}>Continue</Button>
      </div>
    </div>
  );
};
export default LogIn;
