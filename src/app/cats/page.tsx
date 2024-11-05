import {
  FaBoxOpen,
  FaTshirt,
  FaHatCowboySide,
  FaSink,
  FaSpaceShuttle,
  FaGlasses,
} from "react-icons/fa";
import { IoIosBowtie } from "react-icons/io";

import { cats } from "@/cats";
import CatCard from "@/components/card";
import CategoryChip from "@/components/category-chip";

export default function CatsPage() {
  return (
    <>
      <section className="flex items-center justify-center gap-4 mb-8">
        <CategoryChip name="Boxes" icon={<FaBoxOpen className="icon" />} />
        <CategoryChip name="Clothes" icon={<FaTshirt className="icon" />} />
        <CategoryChip name="Hats" icon={<FaHatCowboySide className="icon" />} />
        <CategoryChip name="Sinks" icon={<FaSink className="icon" />} />
        <CategoryChip name="Space" icon={<FaSpaceShuttle className="icon" />} />
        <CategoryChip name="Sunglasses" icon={<FaGlasses className="icon" />} />
        <CategoryChip name="Ties" icon={<IoIosBowtie className="icon" />} />
      </section>

      <main className="grid-container">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </main>
    </>
  );
}
