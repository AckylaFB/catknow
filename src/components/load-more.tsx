"use client";

import { useEffect } from "react";

import { fetchCats } from "@/actions/fetch-cats";
import { useCats } from "@/providers/cat-provider";
import CatCard from "./card";

interface LoadMoreProps {
  inView: boolean;
  ref: (node?: Element | null | undefined) => void;
}

export default function LoadMore(props: LoadMoreProps) {
  const { cats, selectedCategory, handleSetCats, handleSetIsLoading, isLoading } = useCats();

  useEffect(() => {
    if (props.inView && !isLoading) {
      handleSetIsLoading(true);
      fetchCats(selectedCategory).then((newCats) => {
        handleSetCats(newCats);
        handleSetIsLoading(false);
      });
    }
  }, [props.inView, selectedCategory]);

  return (
    <>
      {cats.map((cat) => (
        <li key={cat.id} className="w-full h-[25vh]">
          <CatCard cat={cat} />
        </li>
      ))}

      <div ref={props.ref} />
    </>
  );
}
