"use client";
import { useState } from "react";

import CoffeeLogo from "../_components/CoffeeLogo";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ProfileSteps } from "./ProfileSteps";
import PaymentForm from "./PaymentForm";

const CreateProfilePage = () => {
  // const [name, setName] = useState("");
  const [currentSlide, setCurrent] = useState(0);
  const ProfileSection = [ProfileSteps, PaymentForm][currentSlide];
  const router = useRouter();

  const setCurrentSlides = () => {
    setCurrent(currentSlide + 1);
  };
  return (
    <div className=" flex h-[100vh] w-full ml-auto ">
      <CoffeeLogo />
      <Button onClick={() => router.push("/login")} variant={"secondary"}>
        Log out
      </Button>
      <ProfileSection />
      <PaymentForm />
    </div>
  );
};
export default CreateProfilePage;
