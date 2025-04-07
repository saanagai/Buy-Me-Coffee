"use client";
import { Camera } from "lucide-react";
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
import { useRouter } from "next/navigation";
import { imageUpload } from "@/util/imageAdd";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
  const [previewURL, setPreviewURL] = useState<string | StaticImport>("");
  const router = useRouter;
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
    // router.push(`/profile`);
    console.log(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
    return setPreviewURL("");
    setProfileImgFile(null);
  };
  return (
    <div className="w-96 m-auto gap-3">
      <h5 className="font-medium text-[20px]">Complete your profile page</h5>
      <div>
        <p>Add photo</p>
        <div className="size-25  border-dashed border-1 rounded-full flex justify-center pt-8">
          <Camera />
          {/* <Image alt="" src={previewURL} width={100} height={100}></Image> */}
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
