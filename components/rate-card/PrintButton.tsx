"use client";

import { Button } from "@/components/ui/button";

export function PrintButton() {
  return (
    <Button
      type="button"
      variant="default"
      className="bg-primary-maroon text-white hover:bg-primary-maroon/90"
      onClick={() => window.print()}
    >
      Download PDF
    </Button>
  );
}
