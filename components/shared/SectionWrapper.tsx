import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export function SectionWrapper({ children, className, id, style }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-16 lg:py-24 scroll-mt-24",
        className
      )}
      style={style}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
