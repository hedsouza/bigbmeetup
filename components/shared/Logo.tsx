import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-2xl font-heading font-bold text-primary-maroon">
        #bigbmeetup
      </span>
    </div>
  );
}
