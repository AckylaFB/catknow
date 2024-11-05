"use client";

import { CatImage } from "@/types/cat-image";
import { createContext, useContext, useState } from "react";

interface CatProviderProps {
  children: React.ReactNode;
}

interface CatContextType {
  cats: CatImage[];
  handleSetCats: (newCats: CatImage[]) => void;
  getCat: (id: string) => CatImage | undefined;
}

const CatContext = createContext<CatContextType>({} as CatContextType);

export default function CatProvider(props: CatProviderProps) {
  const [cats, setCats] = useState<Map<string, CatImage>>(new Map());

  const handleSetCats = (newCats: CatImage[]) => {
    setCats((prev) => {
      const newCatsMap = new Map(prev);
      newCats.forEach((cat) => {
        newCatsMap.set(cat.id, cat);
      });
      return newCatsMap;
    });
  };

  const getCat = (id: string) => {
    return cats.get(id);
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
