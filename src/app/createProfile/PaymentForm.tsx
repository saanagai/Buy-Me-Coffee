"use client";
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
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ChevronDown } from "lucide-react";

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

export const PaymentForm = () => {
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h5 className="text-2xl font-bold mb-1">
              How would you like to be paid?
            </h5>
            <p className="text-gray-500 mb-6">
              Enter lovation and payment details
            </p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select country</FormLabel>
                <FormControl>
                  <Input placeholder="Select" {...field} />
                </FormControl>
                <div className="flex gap-5">
                  <div>
                    <FormLabel>first name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>
                  </div>
                  <div>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>
                  </div>
                </div>
                <FormLabel>Enter card number</FormLabel>
                <FormControl>
                  <Input placeholder="XXXX-XXXX-XXXX-XXXX" {...field} />
                </FormControl>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="expiryMonth"
                      className="block font-medium mb-2"
                    >
                      Expires
                    </label>
                    <div className="relative">
                      <select
                        id="expiryMonth"
                        className="w-full p-3 border border-gray-300 rounded-md appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Month
                        </option>
                        {Array.from({ length: 12 }, (_, i) => {
                          const month = i + 1;
                          return (
                            <option
                              key={month}
                              value={month.toString().padStart(2, "0")}
                            >
                              {month.toString().padStart(2, "0")}
                            </option>
                          );
                        })}
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                        size={20}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="expiryYear"
                      className="block font-medium mb-2"
                    >
                      Year
                    </label>
                    <div className="relative">
                      <select
                        id="expiryYear"
                        className="w-full p-3 border border-gray-300 rounded-md appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Year
                        </option>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() + i;
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                        size={20}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cvc" className="block font-medium mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="CVC"
                      maxLength={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                </div>
              </FormItem>
            )}
          />
          <Button variant={"secondary"}>Continue</Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
