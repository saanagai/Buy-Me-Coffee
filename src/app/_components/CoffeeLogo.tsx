import { Coffee } from "lucide-react";

export const CoffeeLogo = () => {
  return (
    <div className=" flex gap-3 font-bold w-56">
      <Coffee className="size-6" />
      <span className="font-medium">Buy Me Coffee</span>
    </div>
  );
};
export default CoffeeLogo;
