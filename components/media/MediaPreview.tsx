'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import type { Article } from '@/types/article';
import { MediaArticleCard } from './MediaArticleCard';
import { MediaArticleModal } from './MediaArticleModal';

interface MediaPreviewProps {
  articles: Article[];
  limit?: number;
}

export function MediaPreview({ articles, limit = 3 }: MediaPreviewProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const previewArticles = useMemo(() => {
    const items = limit > 0 ? articles.slice(0, limit) : articles;
    return items;
  }, [articles, limit]);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <SectionWrapper id="media" className="bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-maroon mb-4">
            Media &amp; Press Coverage
          </h2>
          <div className="w-24 h-1 bg-primary-maroon mx-auto mb-5" />
          <p className="text-lg font-body text-neutral-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            We are proud to have been featured in prominent publications Gulf Times, The Peninsula, Qatar Tribune, Al Sharq, Al Raya, Al Watan, IloveQatar, Qatar Living, Oryx Radio, Olive Radio, QBS, Marhaba Information Guide, Katara Magazine, Doha360, Al Jazeera TV, Qatar TV
          </p>
        </div>

        {previewArticles.length === 0 ? (
          <div className="rounded-xl border border-dashed border-neutral-charcoal/20 bg-white/60 p-12 text-center">
            <p className="text-lg font-heading text-neutral-charcoal/70">
              No media coverage yet
            </p>
            <p className="mt-2 text-sm font-body text-neutral-charcoal/60">
              Add a JSON file to <code className="rounded bg-neutral-charcoal/5 px-2 py-1 text-xs">content/articles</code> and run <code className="rounded bg-neutral-charcoal/5 px-2 py-1 text-xs">npm run generate:media</code>.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {previewArticles.map((article) => (
              <MediaArticleCard
                key={article.id}
                article={article}
                onSelect={handleSelectArticle}
              />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 rounded-full bg-primary-maroon px-6 py-3 text-sm font-heading uppercase tracking-wide text-white transition-colors hover:bg-primary-maroon/90"
          >
            View all media
          </Link>
        </div>
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

