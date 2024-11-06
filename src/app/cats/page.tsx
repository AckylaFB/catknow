import { fetchCats } from "@/actions/fetch-cats";
import { fetchCategories } from "@/actions/fetch-categories";
import CatsGrid from "@/components/cats-grid";
import Categories from "@/components/categories";

export default async function CatsPage() {
  const [categories, initialCats] = await Promise.all([
    fetchCategories(),
    fetchCats(24),
  ]);

  return (
    <>
      <Categories categories={categories} />

      <main>
        <CatsGrid initialCats={initialCats} />
      </main>
    </>
  );
}
