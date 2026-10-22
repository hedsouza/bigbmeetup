interface PriceRowProps {
  index: number;
  name: string;
  price: string;
}

export function PriceRow({ index, name, price }: PriceRowProps) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border py-3 last:border-b-0">
      <span className="font-body text-sm font-semibold text-neutral-charcoal sm:text-base">
        {index}. {name}
      </span>
      <span className="whitespace-nowrap font-heading text-sm font-bold text-primary-maroon sm:text-base">
        {price}
      </span>
    </li>
  );
}
