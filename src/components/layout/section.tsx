import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-24 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}
