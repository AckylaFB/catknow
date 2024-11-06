"use client";

import { createContext, useContext, useState } from "react";
import { Cat } from "@/types/cat";

interface CatProviderProps {
  children: React.ReactNode;
}

interface CatContextType {
  cats: Cat[];
  handleSetCats: (newCats: Cat[]) => void;
  selectedCategory: string | null;
  handleSelectCategory: (categoryId: string) => void;
}

const CatContext = createContext<CatContextType>({} as CatContextType);

export default function CatProvider(props: CatProviderProps) {
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSetCats = (newCats: Cat[]) => {
    setCats((prev) => [...prev, ...newCats]);
  };

  const handleSelectCategory = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
      setCats([]);
    }
  };

  return (
    <CatContext.Provider
      value={{ cats, handleSetCats, selectedCategory, handleSelectCategory }}
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
