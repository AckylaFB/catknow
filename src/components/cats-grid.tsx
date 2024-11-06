"use client";
import { useInView } from "react-intersection-observer";

import { useCats } from "@/providers/cat-provider";
import { Cat } from "@/types/cat";
import CatCard from "./card";
import LoadMore from "./load-more";
import Loading from "./loading";

interface CatsGridProps {
  initialCats: Cat[];
}

export default function CatsGrid(props: CatsGridProps) {
  const { ref, inView } = useInView();
  const { selectedCategory, isLoading } = useCats();

  return (
    <>
      <ul className="grid-container">
        {selectedCategory === null &&
          props.initialCats.map((cat) => (
            <li key={cat.id} className="w-full aspect-square relative">
              <CatCard cat={cat} />
            </li>
          ))}

        <LoadMore inView={inView} ref={ref} />
      </ul>

      {inView && isLoading && (
        <Loading size="sm" />
      )}
    </>
  );
}
