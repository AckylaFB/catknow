"use server";

import { CatImage } from "@/types/cat-image";

export async function fetchCats(page: number = 1, limit: number = 12) {
  const response = await fetch(
    `${process.env.API_URL}/images/search?limit=${limit}&has_breeds=1&order=ASC&page=${page}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY || "",
      },
    }
  );

  const data = await response.json();

  return data as CatImage[];
}
