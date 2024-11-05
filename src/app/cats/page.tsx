import {
  FaBoxOpen,
  FaTshirt,
  FaHatCowboySide,
  FaSink,
  FaSpaceShuttle,
  FaGlasses,
} from "react-icons/fa";
import { IoIosBowtie } from "react-icons/io";

import { fetchCats } from "@/actions/fetch-cats";
import CatsGrid from "@/components/grid";
import CategoryChip from "@/components/category-chip";


export default async function CatsPage() {
  const initialCats = await fetchCats(24);

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

      <CatsGrid initialCats={initialCats} />
    </>
  );
}
