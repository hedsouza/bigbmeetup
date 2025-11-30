"use client";

import { Logo } from "@/components/shared/Logo";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { BRAND_NAME } from "@/lib/constants";

const navigation = [
  { name: "About", href: "#about", type: "anchor" as const },
  { name: "Five Pillars", href: "#five-pillars", type: "anchor" as const },
  { name: "Stories", href: "#stories", type: "anchor" as const },
  { name: "Partners", href: "#partners", type: "anchor" as const },
  { name: "Media", href: "#media", type: "anchor" as const },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  // Enhanced smooth scroll with header offset
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Height of sticky header + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/") {
      handleScroll(e, href);
    } else {
      e.preventDefault();
      router.push(`/${href}`);
      setMobileMenuOpen(false);
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      // Check each section to see which one is currently in view
      for (let i = navigation.length - 1; i >= 0; i--) {
        const item = navigation[i];
        if (item.type !== "anchor") continue;
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          const sectionHeight = section.getBoundingClientRect().height;
          
          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            setActiveSection(item.href);
            break;
          }
        }
      }

      // If at top of page, set active to first section or empty
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5" aria-label={`${BRAND_NAME.plain} home`}>
              <Logo priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              if (item.type === "anchor") {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={cn(
                      "text-sm font-body font-semibold leading-6 transition-colors relative",
                      isActive
                        ? "text-primary-maroon"
                        : "text-neutral-charcoal hover:text-primary-maroon"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-maroon"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              }

              const isRouteActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-body font-semibold leading-6 transition-colors relative",
                    isRouteActive
                      ? "text-primary-maroon"
                      : "text-neutral-charcoal hover:text-primary-maroon"
                  )}
                >
                  {item.name}
                  {isRouteActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-maroon"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-charcoal hover:text-primary-maroon transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="space-y-2 px-4 pb-6 pt-4 border-t">
                {navigation.map((item) => {
                  if (item.type === "anchor") {
                    const isActive = activeSection === item.href;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                        className={cn(
                          "block rounded-md px-3 py-2 text-base font-body font-semibold leading-7 transition-colors",
                          isActive
                            ? "text-primary-maroon bg-primary-maroon/10"
                            : "text-neutral-charcoal hover:text-primary-maroon hover:bg-accent"
                        )}
                      >
                        {item.name}
                      </a>
                    );
                  }

                  const isRouteActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-body font-semibold leading-7 transition-colors",
                        isRouteActive
                          ? "text-primary-maroon bg-primary-maroon/10"
                          : "text-neutral-charcoal hover:text-primary-maroon hover:bg-accent"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
