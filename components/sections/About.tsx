import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BRAND_INFO, BRAND_NAME } from "@/lib/constants";
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
            About {BRAND_NAME.display}
          </h2>
          <div className="w-24 h-1 bg-primary-maroon mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            {BRAND_NAME.display} was founded in April 2018 by Bosco Menezes with a vision to
            inspire, to educate, to inform, and bring communities together.
          </p>
          <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
            Through its five pillars themed on Sports &amp; Wellness, Celebrating Art &amp; Culture, This Ability – championing people who are differently abled, Estedama (Arabic for Sustainability) and Animal Welfare.
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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

        {/* About Founder Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-maroon mb-4">
              About Founder
            </h3>
            <div className="w-24 h-1 bg-primary-maroon mx-auto"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
              <strong className="font-semibold text-neutral-charcoal">Bosco Menezes</strong> is a well-known figure in Qatar&apos;s business and creative circles — a dynamic professional whose journey bridges corporate excellence, creative expression, and community impact. Bosco is the go to person for impactful CSR events, a title earned through his unwavering dedication to social responsibility, community engagement, and meaningful change.
            </p>
            <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
              A long term resident of Qatar with expertise in the field of publishing, advertising, sales, and marketing, Bosco brings decades of experience as a results-driven executive who understands both strategy and storytelling. His career spans successful campaigns, brand building, and market expansion for leading businesses in the Qatar.
            </p>
            <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
              Bosco is an accomplished artist and people&apos;s person, known for connecting effortlessly across cultures and communities. He has been featured as one of the 30 most influential people in 2019.
            </p>
            <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
              Invited often on national radio channels QBS, Olive Radio, featured on Euronews, Al Jazeera TV &amp; QTV and local newspapers Gulf Times, Al Sharq, Qatar Tribune, Al Raya.
            </p>
            <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
              His creativity, empathy, and communication skills allow him to inspire action, whether it&apos;s through a social campaign, a marketing pitch or a work of art.
            </p>
            <p className="text-lg font-body text-neutral-charcoal/80 leading-relaxed">
              Today, Bosco continues to be a catalyst for innovation, connection, and positive change — using his diverse talents to build bridges between business, creativity, and community.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
