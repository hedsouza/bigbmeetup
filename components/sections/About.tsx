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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-neutral-charcoal mb-4">
            About the Movement
          </h2>
          <div className="w-24 h-1 bg-primary-maroon mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            BigBMeetup was founded in April 2018 by Bosco Menezes in Qatar with a
            vision to inspire, educate, inform, and bring communities together. What
            started as a simple gathering has grown into a powerful movement that
            celebrates people, purpose, and positive change.
          </p>
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            Over the years, we&apos;ve organized 13 editions, partnered with 50+
            organizations, and touched the lives of more than 25,000 participants.
            Our journey is built on five core pillars that guide everything we do:
            Sports & Wellness, Celebrating Art & Culture, Estedama (Sustainability),
            This Ability, and Animal Welfare.
          </p>
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            We believe in the power of community, collaboration, and collective
            action. Every event, every partnership, and every story is a step toward
            creating a more inclusive, sustainable, and compassionate Qatar.
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
