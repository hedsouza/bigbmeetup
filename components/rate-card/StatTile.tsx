interface StatTileProps {
  value: string;
  label: string;
}

export function StatTile({ value, label }: StatTileProps) {
  return (
    <div className="rounded-2xl border border-[#FFD21F]/80 bg-[#1A030C] px-3 py-5 text-center">
      <p className="font-heading text-2xl font-bold text-[#FFD21F] sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white">
        {label}
      </p>
    </div>
  );
}
