"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full border border-[#FFD21F] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#FFD21F] hover:bg-[#FFD21F] hover:text-[#4A0A1F]"
    >
      Download PDF
    </button>
  );
}
