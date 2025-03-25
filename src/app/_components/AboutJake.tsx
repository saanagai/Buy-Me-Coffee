import { Button } from "@/components/ui/button";

export const AboutJake = () => {
  return (
    <div className=" h-[509px] bg-blue-50 px-5 py-6">
      <div className="rounded-2xl bg-white py-1 px-2">
        <div className="flex gap-3 justify-between">
          <div className="rounded-full size-10 bg-blue-500 "></div>
          <p className="flex py-1.5 font-semibold text-[14px] ">Jake</p>
          <Button variant={"secondary"}>Edit page</Button>
        </div>
        <div className="border-t-1 w-[600px] font-black mt-5"></div>
        <div>
          <h4 className="font-bold mb-2">About Jake</h4>
          <p>
            I'm a typical person who enjoys exploring different things. i also
            make music art as a hobby.Follow me along.
          </p>
        </div>
      </div>
    </div>
  );
};
