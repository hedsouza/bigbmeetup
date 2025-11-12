import Link from 'next/link';
import type { WebsiteMention } from '@/types/article';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WebsiteMentionCardProps {
  mention: WebsiteMention;
  className?: string;
}

export function WebsiteMentionCard({ mention, className }: WebsiteMentionCardProps) {
  const displayTitle = mention.title || mention.websiteName;
  const initial = mention.websiteName.charAt(0).toUpperCase();

  return (
    <Link
      href={mention.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
    >
      <Card className={cn('h-full overflow-hidden border border-neutral-charcoal/10 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl', className)}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="flex h-full w-full flex-col justify-end bg-gradient-to-br from-primary-maroon via-primary-maroon/90 to-primary-gold/80 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl font-heading text-primary-maroon shadow">
                {initial}
              </div>
              <div className="space-y-1 text-left">
                <p className="text-xs font-heading uppercase tracking-[0.2em] text-white/80">
                  {mention.websiteName}
                </p>
                <p className="text-lg font-heading font-semibold leading-snug">
                  {displayTitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          {mention.excerpt && (
            <p className="text-sm font-body text-neutral-charcoal/70 line-clamp-3">
              {mention.excerpt}
            </p>
          )}

          <div className="flex items-center justify-end text-sm font-body text-neutral-charcoal/60">
            <span className="inline-flex items-center gap-1 font-semibold text-primary-maroon">
              Visit site
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}


