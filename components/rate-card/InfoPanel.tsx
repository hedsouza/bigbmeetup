import type { ReactNode } from "react";

interface InfoPanelProps {
  title: string;
  children: ReactNode;
}

export function InfoPanel({ title, children }: InfoPanelProps) {
  return (
    <section className="rounded-xl border bg-card p-5 text-card-foreground shadow print:break-inside-avoid">
      <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-primary-maroon">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-sm font-body text-neutral-charcoal">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-primary-maroon" aria-hidden>
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
