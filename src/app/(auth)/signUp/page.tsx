"use client";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const SignUpPage = () => {
  const [username, setUserName] = useState("");
  const [currentSlide, setCurrent] = useState(0);
  const FormSteps = [Step1, Step2][currentSlide];

  const setCurrentSlides = () => {
    setCurrent(currentSlide + 1);
  };
  return (
    <div className=" flex h-[100vh] w-full m-auto ">
      <FormSteps
        username={username}
        setUserName={setUserName}
        setCurrentSlide={setCurrentSlides}
        currentSlide={currentSlide}
      />
    </div>
  );
};
export default SignUpPage;
