import { Cat } from "@/types/cat";
import Image from "next/image";
import Link from "next/link";

export default function CatCard(props: { cat: Cat }) {
  return (
    <Link
      href={`/cats/${props.cat.id}`}
      className="w-full aspect-square relative"
    >
      <Image
        className="border border-primary rounded-lg"
        src={props.cat.url}
        alt={props.cat.url}
        fill
      />
    </Link>
  );
}
