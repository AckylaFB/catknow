"use client";

import { fetchCatById } from "@/actions/fetch-cat-by-id";
import { Cat } from "@/types/cat";
import { createContext, useContext, useState } from "react";

interface CatProviderProps {
  children: React.ReactNode;
}

interface CatContextType {
  cats: Cat[];
  handleSetCats: (newCats: Cat[]) => void;
  getCat: (id: string) => Promise<Cat | undefined>;
}

const CatContext = createContext<CatContextType>({} as CatContextType);

export default function CatProvider(props: CatProviderProps) {
  const [cats, setCats] = useState<Map<string, Cat>>(new Map());

  const handleSetCats = (newCats: Cat[]) => {
    setCats((prev) => {
      const newCatsMap = new Map(prev);
      newCats.forEach((cat) => {
        newCatsMap.set(cat.id, cat);
      });
      return newCatsMap;
    });
  };

  const getCat = async (id: string) => {
    if (cats.has(id)) {
      return cats.get(id);
    }

    const cat = await fetchCatById(id);
    handleSetCats([cat]);
    return cat;
  };

  return (
    <CatContext.Provider
      value={{ cats: Array.from(cats.values()), handleSetCats, getCat }}
    >
      {props.children}
    </CatContext.Provider>
  );
}

export const useCats = () => {
  const context = useContext(CatContext);

  if (!context) {
    throw new Error("useCats must be used within a CatProvider");
  }

  return context;
};
