import { CardsProps } from "@/interface/IUser";
import { formatNumbers } from "@/utils/converters/numbers.convert";
import Image from "next/image";

export default function Card({ label, number, icon }: CardsProps) {
  return (
    <div id="card" className="card">
      <Image width={35} height={35} alt={label} src={`/icons/${icon}`} />
      <h2>{label}</h2>
      <p>{formatNumbers(number)}</p>
    </div>
  );
}
