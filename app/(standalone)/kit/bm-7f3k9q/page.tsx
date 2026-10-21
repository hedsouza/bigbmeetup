import type { Metadata } from "next";
import Image from "next/image";
import { PrintButton } from "@/components/rate-card/PrintButton";
import { BulletList, InfoPanel } from "@/components/rate-card/InfoPanel";
import { StatTile } from "@/components/rate-card/StatTile";
import { PriceRow } from "@/components/rate-card/PriceRow";
import { PhotoGrid } from "@/components/rate-card/PhotoGrid";
import {
  RATE_CARD_ABOUT,
  RATE_CARD_ANALYTICS,
  RATE_CARD_AS_OF,
  RATE_CARD_CONTACT,
  RATE_CARD_PHOTOS,
  RATE_CARD_SERVICES,
  RATE_CARD_TIMELINE,
} from "@/lib/data/rateCard";

// Unlisted client hand-out: not linked from the site and hidden from search engines.
export const metadata: Metadata = {
  title: "Bigbfotografi Rate Card",
  description: "Media kit and rate card for Bosco Menezes, bigbfotografi.",
  robots: { index: false, follow: false, nocache: true },
};

const pageClass =
  "mx-auto w-full max-w-[794px] rounded-xl border-[6px] border-[#F5A623] bg-[#4A0A1F] p-5 sm:p-8 print:break-after-page print:rounded-none";

export default function RateCardPage() {
  return (
    <main className="min-h-screen bg-[#1A030C] px-3 py-6 text-white print:bg-white print:p-0 [print-color-adjust:exact]">
      <div className="mx-auto mb-4 flex max-w-[794px] justify-end print:hidden">
        <PrintButton />
      </div>

      <div className="space-y-6">
        {/* Page 1: rate card */}
        <article className={pageClass}>
          <header className="text-center">
            <h1 className="font-heading">
              <span className="block text-3xl font-normal sm:text-5xl">
                Bigbfotografi
              </span>
              <span className="block text-4xl font-bold uppercase tracking-wide text-[#FFD21F] sm:text-6xl">
                Rate Card
              </span>
            </h1>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider sm:text-sm">
              48 Years of Qatar • Visual Story • High Profile Networker
            </p>
            <p className="mt-1 text-xs font-semibold text-[#F5A623]">
              #bigbmeetup bringing communities together
            </p>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoPanel title="About Bosco">
              <BulletList items={RATE_CARD_ABOUT} />
            </InfoPanel>
            <InfoPanel title="Powerful Timeline">
              <BulletList items={RATE_CARD_TIMELINE} />
            </InfoPanel>
          </div>

          <h2 className="mt-8 text-center font-heading text-sm font-bold uppercase tracking-wide text-[#FFD21F]">
            Analytics
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {RATE_CARD_ANALYTICS.map((stat) => (
              <StatTile key={stat.label} {...stat} />
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-white/60">
            Figures as of {RATE_CARD_AS_OF}
          </p>

          <h2 className="mt-8 text-center font-heading text-sm font-bold uppercase tracking-wide text-[#FFD21F]">
            Services — QAR Only — Reels Pricing
          </h2>
          <ol className="mt-3 rounded-2xl border border-[#FFD21F]/80 bg-[#2A0612] px-5 py-2 print:break-inside-avoid">
            {RATE_CARD_SERVICES.map((service, i) => (
              <PriceRow key={service.name} index={i + 1} {...service} />
            ))}
          </ol>

          <div className="mt-6 rounded-2xl border border-[#FFD21F]/80 bg-black p-5 print:break-inside-avoid">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-[#FFD21F]">
              Contact
            </h2>
            <p className="mt-2 text-sm font-semibold">
              WhatsApp{" "}
              <a href={RATE_CARD_CONTACT.whatsappHref} className="underline">
                {RATE_CARD_CONTACT.whatsapp}
              </a>
            </p>
            <p className="mt-1 text-sm font-semibold">
              {RATE_CARD_CONTACT.emails.map((email, i) => (
                <span key={email}>
                  {i > 0 && " | "}
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </span>
              ))}
            </p>
            <p className="mt-1 text-xs font-semibold text-white/80">
              {RATE_CARD_CONTACT.handles.join(" ")} • {RATE_CARD_CONTACT.footer}
            </p>
          </div>
        </article>

        {/* Page 2: impact */}
        <article className={pageClass}>
          <header className="text-center">
            <Image
              src="/images/logo.png"
              alt="bigbmeetup logo"
              width={1585}
              height={284}
              className="mx-auto mb-4 h-8 w-auto brightness-0 invert"
            />
            <h2 className="font-heading">
              <span className="block text-2xl font-bold uppercase text-[#FFD21F] sm:text-4xl">
                Bosco&apos;s Growing
              </span>
              <span className="block text-2xl font-bold uppercase sm:text-4xl">
                Impact in the Community
              </span>
            </h2>
            <p className="mt-2 text-xs font-semibold text-[#F5A623]">
              #bigbmeetup 6.0 • Bigbfotografi • 48 Years Qatar
            </p>
            <p className="mt-1 text-xs">
              High Profile Networker • US Embassy • Sustainability • Inclusion
            </p>
          </header>

          <div className="mt-6">
            <PhotoGrid photos={RATE_CARD_PHOTOS} />
          </div>

          <p className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-[#F5A623]">
            Powerful Legacy • 48 Years Qatar • High Profile Networker
          </p>
        </article>
      </div>
    </main>
  );
}
