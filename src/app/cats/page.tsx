
import { fetchCats } from "@/actions/fetch-cats";
import { fetchCategories } from "@/actions/fetch-categories";
import CatCard from "@/components/card";
import LoadMore from "@/components/load-more";
import Categories from "@/components/categories";

export default async function CatsPage() {
  const [categories, initialCats] = await Promise.all([
    fetchCategories(),
    fetchCats(24),
  ]);

  return (
    <>
      <Categories categories={categories} />

      <main className="grid-container">
        {initialCats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}

        <LoadMore />
      </main>
    </>
  );
}
