import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-heading font-bold text-primary-maroon mb-4">
          404
        </h1>
        <h2 className="text-2xl font-subheading font-semibold text-neutral-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-lg font-body text-neutral-charcoal/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
