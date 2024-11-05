"use client";

import { fetchCats } from "@/actions/fetch-cats";
import { CatImage } from "@/types/cat-image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CatCard from "./card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

let page = 2;

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<CatImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      fetchCats(page).then((cats) => {
        setData((prev) => [...prev, ...cats]);
        page++;
        setIsLoading(false);
      });
    }
  }, [inView, isLoading]);

  return (
    <>
      {data.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}

      {inView && isLoading && (
        <AiOutlineLoading3Quarters className="animate-spin text-primary text-4xl mx-auto" />
      )}

      <div ref={ref} />
    </>
  );
}
