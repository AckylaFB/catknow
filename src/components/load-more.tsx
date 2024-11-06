"use client";

import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

import { fetchCats } from "@/actions/fetch-cats";
import { useCats } from "@/providers/cat-provider";
import CatCard from "./card";

export default function LoadMore() {
  const { ref, inView } = useInView();
  const { cats, selectedCategory, handleSetCats } = useCats();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      fetchCats(12, selectedCategory).then((newCats) => {
        handleSetCats(newCats);
        setIsLoading(false);
      });
    }
  }, [inView]);

  return (
    <>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}

      {inView && isLoading && (
        <AiOutlineLoading3Quarters className="animate-spin text-primary text-4xl mx-auto" />
      )}

      <div ref={ref} />
    </>
  );
}
