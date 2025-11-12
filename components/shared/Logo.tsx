import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="bigbmeetup logo"
        width={1585}
        height={284}
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
        priority={priority}
        className="h-10 w-auto"
      />
    </div>
  );
}
