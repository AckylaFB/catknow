"use client";

import { useEffect } from "react";

import { useCats } from "@/providers/cat-provider";
import CatCard from "@/components/card";
import LoadMore from "@/components/load-more";
import { CatImage } from "@/types/cat-image";

interface CatsGridProps {
  initialCats: CatImage[];
}

export default function CatsGrid(props: CatsGridProps) {
  const { cats, handleSetCats } = useCats();

  useEffect(() => {
    handleSetCats(props.initialCats);
  }, []);

  return (
    <main className="grid-container">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}

      <LoadMore />
    </main>
  );
}
