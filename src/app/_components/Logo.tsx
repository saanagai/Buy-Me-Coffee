import Link from "next/link";
import CoffeeLogo from "./CoffeeLogo";

export const Logo = () => {
  return (
    <div className=" flex h-[100vh] w-full m-auto ">
      <div className="bg-amber-400 w-[50%]  m-auto h-[100vh] flex flex-col py-10 px-4 ">
        <Link href={"/"}>
          <CoffeeLogo />
        </Link>
      </div>
    </div>
  );
};
