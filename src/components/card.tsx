import { Cat } from "@/types/cat";
import Image from "next/image";
import Link from "next/link";

export default function CatCard(props: { cat: Cat }) {
  return (
    <Link
      href={`/${props.cat.id}`}
      className="flex flex-col justify-between h-full bg-tertiary border border-secondary rounded-lg"
    >
      <div className="relative h-3/4">
        <Image
          className="rounded-t-lg"
          src={props.cat.url}
          alt={props.cat.url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <footer className="flex flex-col items-center justify-center h-1/4 p-1">
        <span className="text-sm text-primary">
          {props.cat.breeds?.[0]?.name}
        </span>
      </footer>
    </Link>
  );
}
