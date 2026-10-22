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
  "mx-auto w-full max-w-[794px] rounded-xl border bg-card p-5 text-card-foreground shadow-lg sm:p-8 print:break-after-page print:rounded-none print:shadow-none";

const sectionHeadingClass =
  "text-center font-heading text-sm font-bold uppercase tracking-wide text-primary-maroon";

const dividerClass = "mx-auto mt-2 h-0.5 w-12 bg-primary-maroon";

export default function RateCardPage() {
  return (
    <main className="min-h-screen bg-background px-3 py-6 text-neutral-charcoal print:bg-white print:p-0">
      <div className="mx-auto mb-4 flex max-w-[794px] justify-end print:hidden">
        <PrintButton />
      </div>

      <div className="space-y-6">
        {/* Page 1: rate card */}
        <article className={pageClass}>
          <header className="text-center">
            <Image
              src="/images/logo.png"
              alt="Bigbfotografi logo"
              width={1585}
              height={284}
              className="mx-auto mb-3 h-10 w-auto sm:h-14"
            />
            <h1 className="font-heading">
              <span className="block text-4xl font-bold uppercase tracking-wide text-primary-maroon sm:text-6xl">
                Rate Card
              </span>
            </h1>
            <div className={dividerClass} />
            <p className="mt-3 text-xs font-subheading font-semibold uppercase tracking-wider text-neutral-charcoal/70 sm:text-sm">
              48 Years of Qatar • Visual Story • High Profile Networker
            </p>
            <p className="mt-1 text-xs font-subheading font-semibold text-primary-maroon">
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

          <h2 className={`mt-8 ${sectionHeadingClass}`}>Analytics</h2>
          <div className={dividerClass} />
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {RATE_CARD_ANALYTICS.map((stat) => (
              <StatTile key={stat.label} {...stat} />
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-neutral-charcoal/60">
            Figures as of {RATE_CARD_AS_OF}
          </p>

          <h2 className={`mt-8 ${sectionHeadingClass}`}>
            Services — QAR Only — Reels Pricing
          </h2>
          <div className={dividerClass} />
          <ol className="mt-3 rounded-xl border bg-card px-5 py-2 shadow print:break-inside-avoid">
            {RATE_CARD_SERVICES.map((service, i) => (
              <PriceRow key={service.name} index={i + 1} {...service} />
            ))}
          </ol>

          <div className="mt-6 rounded-xl border bg-card p-5 shadow print:break-inside-avoid">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-primary-maroon">
              Contact
            </h2>
            <p className="mt-2 font-body text-sm font-semibold text-neutral-charcoal">
              WhatsApp{" "}
              <a
                href={RATE_CARD_CONTACT.whatsappHref}
                className="text-primary-maroon underline hover:text-primary-maroon/80"
              >
                {RATE_CARD_CONTACT.whatsapp}
              </a>
            </p>
            <p className="mt-1 font-body text-sm font-semibold text-neutral-charcoal">
              {RATE_CARD_CONTACT.emails.map((email, i) => (
                <span key={email}>
                  {i > 0 && " | "}
                  <a
                    href={`mailto:${email}`}
                    className="text-primary-maroon underline hover:text-primary-maroon/80"
                  >
                    {email}
                  </a>
                </span>
              ))}
            </p>
            <p className="mt-1 text-xs font-semibold text-neutral-charcoal/60">
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
              className="mx-auto mb-4 h-8 w-auto"
            />
            <h2 className="font-heading">
              <span className="block text-2xl font-bold uppercase text-primary-maroon sm:text-4xl">
                Bosco&apos;s Growing
              </span>
              <span className="block text-2xl font-bold uppercase text-neutral-charcoal sm:text-4xl">
                Impact in the Community
              </span>
            </h2>
            <p className="mt-2 text-xs font-subheading font-semibold text-primary-maroon">
              #bigbmeetup 6.0 • Bigbfotografi • 48 Years Qatar
            </p>
            <p className="mt-1 text-xs text-neutral-charcoal/70">
              High Profile Networker • US Embassy • Sustainability • Inclusion
            </p>
          </header>

          <div className="mt-6">
            <PhotoGrid photos={RATE_CARD_PHOTOS} />
          </div>

          <p className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-primary-maroon">
            Powerful Legacy • 48 Years Qatar • High Profile Networker
          </p>
        </article>
      </div>
    </main>
  );
}
