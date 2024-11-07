"use server";

import { Cat } from "@/types/cat";

export async function fetchCatById(id: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/images/${id}`, {
      headers: {
        "x-api-key": process.env.API_KEY || "",
      },
    });

    const data = await response.json();

    return data as Cat;
  } catch {
    throw new Error("Failed to fetch cat by id");
  }
}
