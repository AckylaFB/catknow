"use client";

import { useEffect, RefObject } from "react";

import { fetchCats } from "@/actions/fetch-cats";
import { useCats } from "@/providers/cat-provider";
import CatCard from "./card";

interface LoadMoreProps {
  isIntersecting: boolean;
  ref: RefObject<HTMLDivElement>;
}

export default function LoadMore(props: LoadMoreProps) {
  const { cats, selectedCategory, handleSetCats, handleSetIsLoading, isLoading } = useCats();

  useEffect(() => {
    if (props.isIntersecting && !isLoading) {
      handleSetIsLoading(true);
      fetchCats(selectedCategory).then((newCats) => {
        handleSetCats(newCats);
        handleSetIsLoading(false);
      });
    }
  }, [props.isIntersecting, selectedCategory]);

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
