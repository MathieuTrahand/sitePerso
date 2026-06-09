"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export function Services() {
  return (
    <SectionWrapper id="services" title="Services">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Service 1 */}
        <div className="bg-[var(--background)] border border-[var(--color-border)] rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Site vitrine sur-mesure</h3>
          <ul className="space-y-5 text-[var(--color-muted-foreground)]">
            {[
              "Brief stratégique",
              "Design sur-mesure",
              "Next.js + Vercel",
              "SEO technique inclus",
              "Livraison en 4 semaines",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Service 2 */}
        <div className="bg-[var(--background)] border border-[var(--color-border)] rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Maintenance & suivi</h3>
          <ul className="space-y-5 text-[var(--color-muted-foreground)]">
            {[
              "Mises à jour de contenu",
              "Monitoring & sécurité",
              "Petites évolutions",
              "Réactivité garantie",
              "Abonnement mensuel",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <Button 
          variant="outline" 
          className="rounded-full px-6 py-2"
          onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Voir comment je travaille ↓
        </Button>
      </div>
    </SectionWrapper>
  );
}
