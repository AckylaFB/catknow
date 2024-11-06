import {
  FaBoxOpen,
  FaTshirt,
  FaHatCowboySide,
  FaSink,
  FaSpaceShuttle,
  FaGlasses,
  FaCat,
} from "react-icons/fa";
import { IoIosBowtie } from "react-icons/io";

import { Category } from "@/types/category";
import CategoryChip from "./category-chip";

interface CategoriesProps {
  categories: Category[];
}

export default function Categories(props: CategoriesProps) {
  return (
    <section className="flex items-center justify-center gap-4 mb-8">
      {props.categories.map((category) => (
        <CategoryChip
          key={category.id}
          category={category}
          icon={getIcon(category.name)}
        />
      ))}
    </section>
  );
}

function getIcon(categoryName: string) {
  switch (categoryName) {
    case "boxes":
      return <FaBoxOpen className="icon" />;
    case "clothes":
      return <FaTshirt className="icon" />;
    case "hats":
      return <FaHatCowboySide className="icon" />;
    case "sinks":
      return <FaSink className="icon" />;
    case "space":
      return <FaSpaceShuttle className="icon" />;
    case "sunglasses":
      return <FaGlasses className="icon" />;
    case "ties":
      return <IoIosBowtie className="icon" />;
    default:
      return <FaCat className="icon" />;
  }
}
