"use client";

import { createContext, useContext, useState } from "react";
import { Cat } from "@/types/cat";

interface CatProviderProps {
  children: React.ReactNode;
}

interface CatContextType {
  cats: Cat[];
  selectedCategory: string | null;
  isLoading: boolean;
  handleSetCats: (newCats: Cat[]) => void;
  handleSelectCategory: (categoryId: string) => void;
  handleSetIsLoading: (value: boolean) => void;
}

const CatContext = createContext<CatContextType>({} as CatContextType);

export default function CatProvider(props: CatProviderProps) {
  const [cats, setCats] = useState<Record<string, Cat>>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetCats = (newCats: Cat[]) => {
    const newCatsById = newCats.reduce<Record<string, Cat>>((acc, cat) => {
      acc[cat.id] = cat;
      return acc;
    }, {});

    setCats((prev) => ({ ...prev, ...newCatsById }));
  };

  const handleSelectCategory = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
    setCats({});
  };

  const handleSetIsLoading = (value: boolean) => {
    setIsLoading(value);
  };

  return (
    <CatContext.Provider
      value={{
        cats: Object.values(cats),
        handleSetCats,
        selectedCategory,
        handleSelectCategory,
        isLoading,
        handleSetIsLoading,
      }}
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
