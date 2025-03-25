import Image from "next/image";
import { Header } from "./_components/Header";
import { CoverImage } from "./_components/CoverImage";
import { DonationCards } from "./_components/DonationCard";
import { AboutJake } from "./_components/AboutJake";

export default function Home() {
  const amounts = [1, 2, 5, 10];
  return (
    <div>
      <Header />
      <CoverImage />
      <div className="flex w-full gap-4">
        <AboutJake />
        <DonationCards amounts={amounts} />
      </div>
    </div>
  );
}
