import * as React from "react";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-muted)] px-3 py-1 text-sm font-medium text-[var(--foreground)] shadow-sm">
      {children}
    </span>
  );
}
