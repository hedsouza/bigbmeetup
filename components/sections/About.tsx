import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BRAND_INFO } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Years", value: BRAND_INFO.stats.years },
  { label: "Editions", value: BRAND_INFO.stats.editions },
  { label: "Partners", value: BRAND_INFO.stats.partners },
  { label: "Participants", value: BRAND_INFO.stats.participants },
];

export function About() {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-maroon mb-4">
            About bigbmeetup
          </h2>
          <div className="w-24 h-1 bg-primary-maroon mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            #bigbmeetup was founded in April 2018 by Bosco Menezes with a vision to
            inspire, to educate, to inform, and bring communities together.
          </p>
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            Through its five pillars themed on{" "}
            <strong className="font-bold">
              Sports &amp; Wellness, Celebrating Art &amp; Culture, This Ability –
              championing people who are differently abled, Estedama (Arabic for
              Sustainability) and Animal Welfare.
            </strong>
          </p>
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            Since inception, we have organized over 85 editions, partnered with Qatar
            Museum, Ministry of Environment &amp; Climate Change, Education Above All
            to name a few.
          </p>
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            Hosted the who&apos;s who of Qatari Society from adventurers to artists,
            filmmakers to athletes, autistic to artistic and members of the royal
            family.
          </p>
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            We believe in the power of community and collective action. Every event,
            every partnership, and every story is a step toward creating a more
            inclusive, sustainable, and compassionate Qatar.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-maroon mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-subheading font-semibold text-neutral-charcoal">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
