import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export const CoverImage = () => {
  return (
    <div>
      <div className="flex gap-1 justify-center my-28">
        <Button variant={"default"} className=" flex gap-2 text-white">
          <Camera /> Add a cover image
        </Button>
      </div>
    </div>
  );
};
