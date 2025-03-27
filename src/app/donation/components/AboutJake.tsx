import { Button } from "@/components/ui/button";

export const AboutJake = () => {
  return (
    <div className=" w-[628px] h-[509px] flex flex-col gap-4 px-5 py-6">
      <div className="border-1 rounded-2xl py-4 px-6 bg-white">
        <div className="flex gap-3 justify-between">
          <div className="rounded-full size-10 ">
            <img src="/cat.jpeg" alt="" className="size-10 rounded-full" />
          </div>
          <p className="flex py-1.5 font-semibold text-[14px] ">Jake</p>
          <Button variant={"secondary"}>Edit page</Button>
        </div>
        <div className="border-t-1 w-[780px] font-black mt-5"></div>
        <div>
          <h4 className="font-bold mb-2 ">About Jake</h4>
          <p>
            I'm a typical person who enjoys exploring different things. i also
            make music art as a hobby.Follow me along.
          </p>
        </div>
      </div>
      <div className="h-[120px] border-1 rounded-2xl py-1 px-6 mt-4 bg-white">
        <h4 className="font-bold">Social media URL</h4>

        <p>https://buymecoffee.com/spacerulz44</p>
      </div>
      <div className="border-1 rounded-2xl h-[250px] py-4 px-6 bg-white">
        <h4 className="font-bold px-6">Recent Supporters</h4>
        <div className="border-1 rounded-2xl h-280px flex flex-col justify-center items-center py-6 px-2  mt-4">
          🖤
          <p className="font-bold">Be the first one to support Jake</p>
        </div>
      </div>
    </div>
  );
};
