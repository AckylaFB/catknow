interface CategoryChipProps {
  name: string;
  icon: React.ReactNode;
}

export default function CategoryChip(props: CategoryChipProps) {
  return (
    <div className="w-1/12 flex flex-col items-center gap-2 cursor-pointer">
      <div className="flex-1 flex items-center justify-center w-full aspect-square bg-tertiary rounded-lg hover:bg-secondary transition-colors">
        {props.icon}
      </div>
      <span className="text-sm font-semibold">{props.name}</span>
    </div>
  );
}
