import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-heading font-bold text-primary-maroon mb-4">
          Video Not Found
        </h1>
        <p className="text-lg font-body text-neutral-charcoal/70 mb-8">
          The video you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Button asChild className="bg-primary-maroon text-white hover:bg-primary-maroon/90">
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}

