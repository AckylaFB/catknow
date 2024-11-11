"use client";
import { useRef, useEffect, useState } from "react";

import { useCats } from "@/providers/cat-provider";
import { Cat } from "@/types/cat";
import CatCard from "./card";
import LoadMore from "./load-more";
import Loading from "./loading";

interface CatsGridProps {
  initialCats: Cat[];
}

export default function CatsGrid(props: CatsGridProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const { selectedCategory, isLoading } = useCats();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ul className="grid-container">
        {selectedCategory === null &&
          props.initialCats.map((cat) => (
            <li key={cat.id} className="w-full h-[25vh]">
              <CatCard cat={cat} />
            </li>
          ))}

        <LoadMore isIntersecting={isIntersecting} ref={observerRef} />
      </ul>

      {isIntersecting && isLoading && <Loading size="sm" />}
    </>
  );
}
