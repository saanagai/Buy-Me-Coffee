"use client";
import { Camera, X } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { imageUpload } from "@/util/imageAdd";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  addPhoto: z
    .string({ message: "Please enter image" })
    .nonempty({ message: "Please enter image" }),
  name: z
    .string({ message: "Please enter name" })
    .nonempty({ message: "Please enter name" }),
  about: z
    .string({ message: "Please enter info about yourself" })
    .nonempty({ message: "Please enter info about yourself" }),
  social: z
    .string({ message: "Please enter a social link" })
    .url({ message: "Please enter a social link" }),
});

export const ProfileSteps = () => {
  const [profileImgFile, setProfileImgFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addPhoto: "",
      name: "",
      about: "",
      social: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const imageURL = await imageUpload(profileImgFile);
    const createProfile = async () => {
      const res = await fetch("/api/userProfile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          addPhoto: imageURL,
          name: values.name,
          about: values.about,
          social: values.social,
        }),
      });
      const data = await res.json();
      console.log("this", data);
    };
    createProfile();
    router.push(`/profile`);
    console.log(values);
  }
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return alert("Зургаа сонгоно уу!");
    }
    const imageURL = URL.createObjectURL(e.target.files[0]);
    form.setValue("addPhoto", imageURL);
    setPreviewURL(imageURL);
    setProfileImgFile(e.target.files[0]);
  };
  const deleteHandler = () => {
    form.setValue("addPhoto", "");
    setPreviewURL("");
    setProfileImgFile(null);
  };
  return (
    <div className="w-96 m-auto gap-3">
      <h5 className="font-medium text-[20px]">Complete your profile page</h5>
      <div>
        <p>Add photo</p>
        <div className="rounded-full border-2 border-dashed w-[160px] h-[160px] flex justify-center items-center overflow-hidden">
          {previewURL ? (
            <div className="flex justify-center items-center">
              <Image alt="" src={previewURL} width={160} height={160}></Image>
              <Button
                type="button"
                className="absolute bg-white rounded-full w-[30px] h-[30px]"
                onClick={deleteHandler}
              >
                <X className="absolute" color="red" />
              </Button>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <Input
                type="file"
                className="rounded-full w-full h-full border-0 opacity-0 z-200"
                onChange={inputHandler}
              />
              <Camera className="absolute opacity-30" />
            </div>
          )}
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name here" {...field} />
                </FormControl>
                <FormLabel>About</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write about yourself here" />
                </FormControl>
                <FormLabel>Social media URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button variant="secondary" type="submit" className="w-60 mx-36">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileSteps;
