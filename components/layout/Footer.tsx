import { Logo } from "@/components/shared/Logo";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { BRAND_NAME } from "@/lib/constants";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bigbmeetup",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@bigbmeetup",
    icon: Youtube,
  },
];

const hashtags = ["#BigBMovement", "#BringingCommunitiesTogether", BRAND_NAME.hashtag];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm font-body text-neutral-charcoal/70 max-w-xs">
              A movement that celebrates people, purpose, and positive change in Qatar.
            </p>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-sm font-body font-semibold text-primary-maroon hover:text-primary-maroon/80 transition-colors"
            >
              Media &amp; Press Coverage
            </Link>
          </div>

          {/* Hashtags Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-subheading font-semibold text-neutral-charcoal">
              Join the Conversation
            </h3>
            <div className="flex flex-col gap-2">
              {hashtags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-body text-primary-maroon font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-subheading font-semibold text-neutral-charcoal">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-charcoal hover:text-primary-maroon transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-xs font-body text-neutral-charcoal/60 text-center">
            © {new Date().getFullYear()} {BRAND_NAME.display}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
