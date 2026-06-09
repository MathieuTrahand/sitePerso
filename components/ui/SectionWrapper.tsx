import * as React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
}

export function SectionWrapper({ id, title, children, className = "", ...props }: SectionWrapperProps) {
  return (
    <section id={id} aria-labelledby={title ? `${id}-title` : undefined} className={`py-16 md:py-24 ${className}`} {...props}>
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {title && (
          <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
