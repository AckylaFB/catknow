"use client";

import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

import { fetchCats } from "@/actions/fetch-cats";
import { Cat } from "@/types/cat";
import CatCard from "./card";

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      fetchCats().then((newCats) => {
        setCats((prevCats) => [...prevCats, ...newCats]);
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
