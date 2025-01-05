import { formatNumbers } from "@/utils/converters/numbers.convert";

interface CardsProps {
  icon?: string;
  label: string;
  number: number;
}

export default function Cards({ label, number, icon = "icon" }: CardsProps) {
  return (
    <div id="card" className="card">
      <i>{icon}</i>
      <h2>{label}</h2>
      <p>{formatNumbers(number)}</p>
    </div>
  );
}
