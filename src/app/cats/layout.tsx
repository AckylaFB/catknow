import Image from "next/image";

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
          CatKnow
        </h1>
      </header>

      <div className="flex-1 flex flex-col">{props.children}</div>
    </div>
  );
}
