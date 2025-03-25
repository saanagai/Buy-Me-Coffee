"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Coffee } from "lucide-react";
import { Form } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username",
    })
    .max(50),
});

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });

export const DonationCards = ({ amounts }: { amounts: number[] }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-[628px] h-[509px] bg-amber-50 px-5 py-7">
      <div>
        <h3 className="font-semibold text-3xl">Buy Jake a Coffee</h3>
      </div>

      <p className="">Select amount:</p>
      <ToggleGroup type="single">
        {amounts.map((amount) => (
          <DonationCard key={amount} amount={amount} />
        ))}
      </ToggleGroup>
    </div>
  );
};
export const DonationCard = ({ amount }: { amount: number }) => {
  return (
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Coffee />
      {amount}$
    </ToggleGroupItem>
  );
};
