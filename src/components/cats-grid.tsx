"use client";

import { useCats } from "@/providers/cat-provider";
import { Cat } from "@/types/cat";
import CatCard from "./card";
import LoadMore from "./load-more";

interface CatsGridProps {
  initialCats: Cat[];
}

export default function CatsGrid(props: CatsGridProps) {
  const { selectedCategory } = useCats();

  return (
    <main className="grid-container">
      {selectedCategory === null && props.initialCats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}

      <LoadMore />
    </main>
  );
}
