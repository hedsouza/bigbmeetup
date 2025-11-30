'use client';

import { useMemo, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import type { Article } from '@/types/article';
import { MediaArticleCard } from './MediaArticleCard';
import { MediaArticleModal } from './MediaArticleModal';
import { WebsiteMentionCard } from './WebsiteMentionCard';
import { WEBSITE_MENTIONS } from '@/lib/data/websiteMentions';
import { BRAND_NAME } from '@/lib/constants';

interface MediaGalleryProps {
  articles: Article[];
}

export function MediaGallery({ articles }: MediaGalleryProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedArticles = useMemo(() => {
    return [...articles];
  }, [articles]);

  const sortedMentions = useMemo(() => {
    return [...WEBSITE_MENTIONS].sort((a, b) => {
      if (!a.mentionDate) return 1;
      if (!b.mentionDate) return -1;
      return new Date(b.mentionDate).getTime() - new Date(a.mentionDate).getTime();
    });
  }, []);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-primary-maroon mb-4">
            Media &amp; Press Coverage
          </h1>
          <div className="w-24 h-1 bg-primary-maroon mx-auto mb-5" />
          <p className="text-lg font-body text-neutral-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Dive into news stories, interviews, and features that showcase how {BRAND_NAME.display} is inspiring communities across Qatar and beyond.
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="mx-auto mb-10 flex w-auto items-center rounded-full bg-neutral-charcoal/10 p-1">
            <TabsTrigger
              value="articles"
              className="rounded-full px-6 py-2 text-sm font-heading uppercase tracking-wide text-neutral-charcoal data-[state=active]:bg-primary-maroon data-[state=active]:text-white"
            >
              Articles
            </TabsTrigger>
            <TabsTrigger
              value="mentions"
              className="rounded-full px-6 py-2 text-sm font-heading uppercase tracking-wide text-neutral-charcoal data-[state=active]:bg-primary-maroon data-[state=active]:text-white"
            >
              Website Mentions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            {sortedArticles.length === 0 ? (
              <div className="rounded-xl border border-dashed border-neutral-charcoal/20 bg-white/60 p-12 text-center">
                <p className="text-lg font-heading text-neutral-charcoal/70">
                  No media articles yet
                </p>
                <p className="mt-2 text-sm font-body text-neutral-charcoal/60">
                  Add a JSON file to <code className="rounded bg-neutral-charcoal/5 px-2 py-1 text-xs">content/articles</code> and run <code className="rounded bg-neutral-charcoal/5 px-2 py-1 text-xs">npm run generate:media</code>.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {sortedArticles.map((article) => (
                  <MediaArticleCard
                    key={article.id}
                    article={article}
                    onSelect={handleSelectArticle}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="mentions">
            {sortedMentions.length === 0 ? (
              <div className="rounded-xl border border-dashed border-neutral-charcoal/20 bg-white/70 p-12 text-center">
                <p className="text-lg font-heading text-neutral-charcoal/80">
                  No website mentions yet
                </p>
                <p className="mt-2 text-sm font-body text-neutral-charcoal/60 max-w-2xl mx-auto">
                  Share links to blogs, partner spotlights, and digital coverage featuring {BRAND_NAME.display} to grow this showcase.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {sortedMentions.map((mention) => (
                  <WebsiteMentionCard key={mention.id} mention={mention} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <MediaArticleModal
        article={selectedArticle}
        open={isModalOpen}
        onOpenChange={(open) => {
          if (!open) {
            handleCloseModal();
          } else {
            setIsModalOpen(true);
          }
        }}
      />
    </SectionWrapper>
  );
}

