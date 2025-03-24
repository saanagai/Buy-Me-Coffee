import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Coffee } from "lucide-react";

export const DonationCards = ({ amounts }: { amounts: number[] }) => {
  return (
    <ToggleGroup type="single">
      {amounts.map((amount) => (
        <DonationCard key={amount} amount={amount} />
      ))}
    </ToggleGroup>
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
