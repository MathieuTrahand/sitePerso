import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Tag } from "@/components/ui/Tag";
import { ArrowRight } from "lucide-react";

export function Portfolio() {
  return (
    <SectionWrapper id="portfolio" title="Réalisation">
      <div className="rounded-3xl border border-[var(--color-border)] overflow-hidden bg-[var(--background)] shadow-sm hover:shadow-lg transition-shadow group">
        <div className="relative w-full aspect-[16/10] border-b border-[var(--color-border)] overflow-hidden bg-[var(--color-muted)]">
          <Image
            src="/screen_northline_1.png"
            alt="Northline Executive Services"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[var(--foreground)]">Northline Executive Services</h3>
              <p className="text-[var(--color-muted-foreground)] max-w-2xl text-lg">
                Site bilingue FR/EN pour un dirigeant exécutif indépendant basé au Canada.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Tag>Next.js</Tag>
                <Tag>next-intl</Tag>
                <Tag>Resend</Tag>
                <Tag>Vercel</Tag>
              </div>
            </div>
            <a 
              href="https://northline-executive.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-[var(--color-primary)] bg-[var(--color-muted)] hover:bg-[var(--color-border)] px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Voir le site <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
