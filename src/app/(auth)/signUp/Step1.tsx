"use client";
import { Coffee } from "lucide-react";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import CoffeeLogo from "@/app/_components/CoffeeLogo";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const Step1 = ({
  setUserName,
  setCurrentSlide,
  currentSlide,
}: {
  setUserName: Dispatch<SetStateAction<string>>;
  setCurrentSlide: () => void;
  currentSlide: number;
}) => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setUserName(values.username);
    setCurrentSlide();
    console.log(values);
  }
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[50%] h-full bg-[#FBBF24] ">
        <CoffeeLogo />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="bg-amber-600 rounded-full size-55 flex justify-center overflow-hidden">
            <img src="/logo.png" width={190} height={150}></img>
          </div>
          <p className="font-700 text-[24px]">Fund your creative work</p>
          <p className="text-[16px]">
            Accept support. Start a membership. It's easier than you think.
          </p>
        </div>
      </div>
      <div className="w-[50%] justify-center items-center">
        <div className="flex justify-end">
          <Button onClick={() => router.push("/login")}>Log in</Button>
        </div>
        <div className=" w-full h-full  text-[24px] font-bold  flex flex-col gap-10 justify-center items-center">
          <div className="w-[407px] ">
            <p>Create Your Account</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-6">
                      <FormDescription>
                        Choose a username for your page
                      </FormDescription>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter username here" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Continue
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step1;
