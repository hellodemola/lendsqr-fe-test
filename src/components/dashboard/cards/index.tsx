import { formatNumbers } from "@/utils/converters/numbers.convert";
import Image from "next/image";

interface CardsProps {
  icon?: string;
  label: string;
  number: number;
}

export default function Cards({
  label,
  number,
  icon = "profile.svg",
}: CardsProps) {
  return (
    <div id="card" className="card">
      <Image
        width={35}
        height={35}
        alt=""
        src={`/icons/${icon || "profile.svg"}`}
      />
      <h2>{label}</h2>
      <p>{formatNumbers(number)}</p>
    </div>
  );
}
