import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingProps {
  size?: "sm" | "lg";
}

export default function Loading(props: LoadingProps) {
  const sizeClass = props.size === "sm" ? "text-4xl" : "text-9xl";

  return (
    <div className={`flex items-center justify-center ${props.size === "sm" ? "mb-6" : "h-full w-full"}`}>
      <AiOutlineLoading3Quarters className={`animate-spin text-primary ${sizeClass}`} />
    </div>
  );
}
