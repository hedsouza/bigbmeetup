'use client';

import Image from 'next/image';
import type { Article } from '@/types/article';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatArticleDate } from './utils';

export interface MediaArticleCardProps {
  article: Article;
  onSelect?: (article: Article) => void;
  className?: string;
  showDetailsCta?: boolean;
}

export function MediaArticleCard({ article, onSelect, className, showDetailsCta = true }: MediaArticleCardProps) {
  const publicationLabel = article.publication ?? 'Media coverage';
  const articleTitle = article.title ?? 'Untitled article';
  const formattedDate = formatArticleDate(article.publicationDate);

  const content = (
    <Card className={cn('h-full overflow-hidden border border-neutral-charcoal/10 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl', className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-charcoal/10">
        <Image
          src={article.imageUrl}
          alt={article.title ?? 'Media article image'}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          {publicationLabel && (
            <p className="text-sm font-heading uppercase tracking-wide text-primary-maroon/80">
              {publicationLabel}
            </p>
          )}
          <h3 className="text-xl font-heading font-semibold text-neutral-charcoal line-clamp-2">
            {articleTitle}
          </h3>
          {article.excerpt && (
            <p className="text-sm font-body text-neutral-charcoal/70 line-clamp-3">
              {article.excerpt}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between text-sm font-body text-neutral-charcoal/60">
          <span>{formattedDate ?? 'Date to be confirmed'}</span>
          {showDetailsCta && (
            <span className="inline-flex items-center gap-1 font-semibold text-primary-maroon">
              View details
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (!onSelect) {
    return content;
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(article)}
      className="group h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
    >
      {content}
    </button>
  );
}

