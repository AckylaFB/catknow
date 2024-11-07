"use server";

import { Cat } from "@/types/cat";

export async function fetchCats(categoryId: string | null = null) {
  try {
    let url = `${process.env.API_URL}/images/search?limit=16`;

    if (categoryId) {
      url += `&category_ids=${categoryId}`;
    } else {
      url += "&has_breeds=1";
    }

    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.API_KEY || "",
      },
    });

    const data = await response.json();

    return data as Cat[];
  } catch {
    throw new Error("Failed to fetch cats");
  }
}
