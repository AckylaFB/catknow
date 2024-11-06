"use client";

import { useCats } from "@/providers/cat-provider";
import { Category } from "@/types/category";

interface CategoryChipProps {
  category: Category;
  icon: React.ReactNode;
}

export default function CategoryChip(props: CategoryChipProps) {
  const { selectedCategory, handleSelectCategory } = useCats();
  const isSelected = selectedCategory === props.category.id;

  return (
    <div
      className="w-1/12 flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => handleSelectCategory(props.category.id)}
    >
      <div className={`flex-1 flex items-center justify-center w-full aspect-square rounded-lg transition-colors ${isSelected ? 'bg-primary text-secondary hover:bg-primary' : 'bg-tertiary text-primary hover:bg-secondary'}`}>
        {props.icon}
      </div>
      <span className="text-sm font-semibold">{props.category.name}</span>
    </div>
  );
}
