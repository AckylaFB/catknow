"use server";

import { Category } from "@/types/category";

export async function fetchCategories() {
  const response = await fetch(`${process.env.API_URL}/categories`,
    {
      headers: {
        "x-api-key": process.env.API_KEY || "",
      },
    }
  );

  const data = await response.json();

  return data as Category[];
}
