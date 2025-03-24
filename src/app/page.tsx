import Image from "next/image";
import { Header } from "./_components/Header";
import { CoverImage } from "./_components/CoverImage";
import { DonationCards } from "./_components/DonationCard";

export default function Home() {
  const amounts = [1, 2, 5, 10];
  return (
    <div>
      <Header />
      <CoverImage />
      <DonationCards amounts={amounts} />
    </div>
  );
}
