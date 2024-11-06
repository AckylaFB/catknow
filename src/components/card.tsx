import { Cat } from "@/types/cat";
import Image from "next/image";
import Link from "next/link";

export default function CatCard(props: { cat: Cat }) {
  return (
    <Link
      href={`/cats/${props.cat.id}`}
    >
      <Image
        className="border border-primary rounded-lg"
        src={props.cat.url}
        alt={props.cat.url}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
}
