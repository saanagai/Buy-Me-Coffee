import { Button } from "@/components/ui/button";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Coffee } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const DonationCards = ({ amounts }: { amounts: number[] }) => {
  return (
    <div className="w-[628px] h-[509px] bg-white px-5 py-7 border-1 rounded-2xl">
      <div>
        <h3 className="font-semibold text-3xl">Buy Jake a Coffee</h3>
      </div>

      <p className="text-[12px] mt-6 px-2">Select amount:</p>
      <ToggleGroup type="single">
        {amounts.map((amount) => (
          <DonationCard key={amount} amount={amount} />
        ))}
      </ToggleGroup>
      <div className="mt-5">
        <p className="text-[12px] ">Enter BuyMeCoffee or social acount URL:</p>
        <Input placeholder="buymecoffee.com/" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="mt-8">
          <Label htmlFor="message">Special message:</Label>
          <Textarea placeholder="Please write your message here" />
        </div>
        <Button variant={"secondary"}>Support</Button>
      </div>
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
