import Image from "next/image";
import { Header } from "../_components/Header";
import { CoverImage } from "./components/CoverImage";
import { DonationCards } from "./components/DonationCard";
import { AboutJake } from "./components/AboutJake";

export default function Home() {
  const amounts = [1, 2, 5, 10];
  return (
    <div className="w-full bg-stone-100">
      <Header />
      <CoverImage />
      <div className="flex w-full gap-4">
        <AboutJake />
        <DonationCards amounts={amounts} />
      </div>
    </div>
  );
}
