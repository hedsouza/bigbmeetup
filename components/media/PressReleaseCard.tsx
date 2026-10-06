'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { PressRelease } from '@/types/pressRelease';
import { formatArticleDate } from './utils';

export function PressReleaseCard({ release }: { release: PressRelease }) {
  const [open, setOpen] = useState(false);
  const formattedDate = formatArticleDate(release.releaseDate);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
      >
        <Card className="h-full overflow-hidden border border-neutral-charcoal/10 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-charcoal/10">
            <Image
              src={release.coverImage}
              alt={release.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-heading uppercase tracking-wide text-primary-maroon/80">
                Press release · {release.source}
              </p>
              <h3 className="text-xl font-heading font-semibold text-neutral-charcoal line-clamp-2">
                {release.title}
              </h3>
              <p className="text-sm font-body text-neutral-charcoal/70 line-clamp-3">
                {release.summary}
              </p>
            </div>
            <div className="flex items-center justify-between text-sm font-body text-neutral-charcoal/60">
              <span>{formattedDate}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-primary-maroon">
                Read release
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </CardContent>
        </Card>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0">
          <div className="relative aspect-[3/2] w-full bg-neutral-charcoal/5">
            <Image
              src={release.coverImage}
              alt={release.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
          <div className="space-y-6 p-6 sm:p-8">
            <DialogHeader className="space-y-3 text-left">
              <Badge className="w-fit bg-primary-maroon text-white">
                {release.source}
              </Badge>
              <DialogTitle className="text-2xl font-heading text-neutral-charcoal">
                {release.title}
              </DialogTitle>
              <DialogDescription className="text-sm font-body text-neutral-charcoal/70">
                {formattedDate} – {release.location}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {release.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base font-body leading-relaxed text-neutral-charcoal/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {release.images.length > 1 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {release.images.slice(1).map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-[3/2] overflow-hidden rounded-lg bg-neutral-charcoal/10"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 240px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {release.tags && release.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {release.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-neutral-charcoal/10 text-neutral-charcoal/70"
                  >
                    #{tag.replace(/\s+/g, '')}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
