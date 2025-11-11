'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Article } from '@/types/article';
import { formatArticleDate } from './utils';

export interface MediaArticleModalProps {
  article: Article | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MediaArticleModal({ article, open, onOpenChange }: MediaArticleModalProps) {
  const publicationDateLabel = article ? formatArticleDate(article.publicationDate) : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-screen w-screen max-w-none overflow-y-auto p-0 sm:rounded-none">
        {article && (
          <div className="flex flex-col">
            <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-neutral-charcoal/5 sm:h-[32rem]">
              <Image
                src={article.imageUrl}
                alt={article.title ?? 'Media article image'}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="space-y-6 p-6 sm:p-8">
              <DialogHeader className="space-y-4 text-left">
                {article.publication && (
                  <Badge className="w-fit bg-primary-maroon text-white">
                    {article.publication}
                  </Badge>
                )}
                <DialogTitle className="text-2xl font-heading text-neutral-charcoal">
                  {article.title ?? 'Media feature'}
                </DialogTitle>
                {publicationDateLabel && (
                  <DialogDescription className="text-sm font-body text-neutral-charcoal/70">
                    Published on {publicationDateLabel}
                  </DialogDescription>
                )}
              </DialogHeader>
              {article.excerpt && (
                <p className="text-base font-body leading-relaxed text-neutral-charcoal/80">
                  {article.excerpt}
                </p>
              )}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-neutral-charcoal/10 text-neutral-charcoal/70">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}
              {article.notes && (
                <p className="text-sm font-body text-neutral-charcoal/60">
                  {article.notes}
                </p>
              )}
              <p className="text-sm font-body text-neutral-charcoal/60">
                bigbmeetup in the media
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

