"use client";
import { useState } from "react";
import ProfileStep1 from "./ProfileStep1";
import ProfileStep2 from "./ProfileStep2";
import CoffeeLogo from "../_components/CoffeeLogo";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const CreateProfilePage = () => {
  const [name, setName] = useState("");
  const [currentSlide, setCurrent] = useState(0);
  const ProfileSteps = [ProfileStep1, ProfileStep2][currentSlide];
  const router = useRouter();

  const setCurrentSlides = () => {
    setCurrent(currentSlide + 1);
  };
  return (
    <div className=" flex h-[100vh] w-full m-auto ">
      <CoffeeLogo />
      <Button onClick={() => router.push("/login")} variant={"secondary"}>
        Log out
      </Button>
      <ProfileSteps />
    </div>
  );
};
export default CreateProfilePage;
