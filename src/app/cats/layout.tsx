import Image from "next/image";
import Link from "next/link";

import ThemeToggler from "@/components/theme-toggler";
import cat from "../../../public/cat.svg";


interface LayoutProps {
  children: React.ReactNode;
}

export default function CatsLayout(props: LayoutProps) {
  return (
    <div className="flex flex-col gap-2 h-full mx-auto max-w-screen-lg px-4">
      <header className="flex items-end gap-1 justify-center py-4 mb-8 relative">
        <Image src={cat} alt="CatKnow" width={50} height={50} />
        <h1 className="text-4xl font-bold text-primary">
          <Link href="/cats">CatKnow</Link>
        </h1>

        <ThemeToggler />
      </header>

      <div className="flex-1 flex flex-col">{props.children}</div>
    </div>
  );
}
