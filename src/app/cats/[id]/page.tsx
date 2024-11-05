import { fetchCatById } from "@/actions/fetch-cat-by-id";
import Image from "next/image";
import Link from "next/link";

interface CatPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CatPage(props: CatPageProps) {
  const params = await props.params;
  const cat = await fetchCatById(params.id);
  const breed = cat.breeds[0];

  return (
    <div className="grid lg:grid-cols-[1.5fr_1fr] grid-cols-1 lg:gap-0 gap-8 lg:h-2/4 h-full lg:w-auto w-3/4 lg:mx-0 mx-auto my-auto">
      <section className="relative w-full h-full ">
        <Image
          src={cat.url}
          alt={breed.name}
          fill
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </section>

      <section className="flex flex-col lg:pl-8 gap-6">
        <h2 className="text-2xl font-bold text-center">{breed.name}</h2>

        <div>
          <span className="label">Description:</span>
          <p className="text-sm text-justify">{breed.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="label">Origin:</span>
            <p className="text-sm">{breed.origin}</p>
          </div>

          <div>
            <span className="label">Life Span:</span>
            <p className="text-sm">{breed.life_span} years</p>
          </div>

          <div>
            <span className="label">Weight:</span>
            <p className="text-sm">{breed.weight.metric} kg</p>
          </div>
        </div>

        <div>
          <span className="label">Temperament:</span>
          <p className="text-sm">{breed.temperament}</p>
        </div>

        <ul className="flex gap-8 lg:mt-auto mt-8 justify-center">
          {breed.wikipedia_url && (
            <li className="link">
              <Link href={breed.wikipedia_url} target="_blank">
                Wikipedia
              </Link>
            </li>
          )}

          {breed.cfa_url && (
            <li className="link">
              <Link href={breed.cfa_url} target="_blank">
                CFA
              </Link>
            </li>
          )}

          {breed.vetstreet_url && (
            <li className="link">
              <Link href={breed.vetstreet_url} target="_blank">
                Vetstreet
              </Link>
            </li>
          )}

          {breed.vcahospitals_url && (
            <li className="link">
              <Link href={breed.vcahospitals_url} target="_blank">
                VCA Hospitals
              </Link>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
