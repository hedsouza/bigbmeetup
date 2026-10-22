interface StatTileProps {
  value: string;
  label: string;
}

export function StatTile({ value, label }: StatTileProps) {
  return (
    <div className="rounded-xl border bg-card px-3 py-5 text-center text-card-foreground shadow">
      <p className="font-heading text-2xl font-bold text-primary-maroon sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 font-subheading text-xs font-semibold uppercase tracking-wider text-neutral-charcoal/70">
        {label}
      </p>
    </div>
  );
}
