import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { getInstagramPosts, getInstagramProfileUrl } from "@/lib/instagram";
import type { InstagramPost } from "@/types/instagram";
import Image from "next/image";
import Link from "next/link";
import { BRAND_NAME } from "@/lib/constants";

function formatMonthYear(isoDate: string): string {
  try {
    return new Date(isoDate).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function getDisplayCaption(caption: string | null, maxLength = 120): string {
  if (!caption || caption.trim().length === 0) {
    return "See more from our community highlights on Instagram.";
  }

  if (caption.length <= maxLength) {
    return caption;
  }

  return `${caption.slice(0, maxLength).trimEnd()}…`;
}

function getMediaSource(post: InstagramPost): string {
  if (post.mediaType === "VIDEO" && post.thumbnailUrl) {
    return post.thumbnailUrl;
  }
  return post.mediaUrl;
}

export async function SocialSpotlight() {
  const posts = await getInstagramPosts(6);
  const profileUrl = getInstagramProfileUrl();

  if (!posts.length) {
    return null;
  }

  return (
    <SectionWrapper id="social" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-maroon mb-4">
            Social Spotlight
          </h2>
          <div className="w-24 h-1 bg-primary-maroon mx-auto mb-4" />
          <p className="text-lg font-body text-neutral-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            A glimpse of the energy, creativity, and community impact happening every week on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const mediaSrc = getMediaSource(post);
            const isRemote = mediaSrc.startsWith("http");

            return (
              <Link
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-neutral-charcoal/10 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={mediaSrc}
                    alt={post.caption ?? `${BRAND_NAME.plain} Instagram post`}
                    fill
                    priority={false}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={isRemote}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  {post.mediaType === "VIDEO" && (
                    <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Video
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-sm font-body text-neutral-charcoal/70 mb-3">
                    {formatMonthYear(post.publishedAt)}
                  </p>
                  <p className="font-heading text-neutral-charcoal text-lg leading-snug line-clamp-3">
                    {getDisplayCaption(post.caption)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            asChild
            className="bg-primary-maroon text-white hover:bg-primary-maroon/90 font-heading font-semibold px-8 py-6 text-lg"
          >
            <Link href={profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              Follow {BRAND_NAME.display} on Instagram
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}


