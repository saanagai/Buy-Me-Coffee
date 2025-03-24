import { ChevronDown, Coffee } from "lucide";
import { ChevronDownIcon, CoffeeIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-around bg-amber-100 h-auto  py-5 px-3">
      <div>
        <h3 className="flex gap-2 font-semibold text-14">
          <CoffeeIcon /> Buy Me Coffee
        </h3>
      </div>
      <div className="flex gap-3 ">
        <div className="rounded-full size-10 bg-blue-500 "></div>
        <p className="flex py-1.5 font-semibold text-[14px] ">Mugi</p>
        <div className="mx-10 py-1.5">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
};
