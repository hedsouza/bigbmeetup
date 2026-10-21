import type { ReactNode } from "react";

interface InfoPanelProps {
  title: string;
  children: ReactNode;
}

export function InfoPanel({ title, children }: InfoPanelProps) {
  return (
    <section className="rounded-2xl border border-[#FFD21F]/80 bg-[#2A0612] p-5 print:break-inside-avoid">
      <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-[#FFD21F]">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-sm font-semibold text-white">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-[#FFD21F]" aria-hidden>
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
