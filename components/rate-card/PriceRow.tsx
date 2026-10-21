interface PriceRowProps {
  index: number;
  name: string;
  price: string;
}

export function PriceRow({ index, name, price }: PriceRowProps) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3 last:border-b-0">
      <span className="text-sm font-semibold text-white sm:text-base">
        {index}. {name}
      </span>
      <span className="whitespace-nowrap font-heading text-sm font-bold text-[#FFD21F] sm:text-base">
        {price}
      </span>
    </li>
  );
}
