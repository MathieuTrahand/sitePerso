import { SectionWrapper } from "@/components/ui/SectionWrapper";

const steps = [
  {
    num: "01",
    title: "Brief",
    desc: "Comprendre votre activité et vos objectifs.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Une proposition visuelle avant une ligne de code.",
  },
  {
    num: "03",
    title: "Développement",
    desc: "Propre, performant, bien référencé.",
  },
  {
    num: "04",
    title: "Livraison",
    desc: "Déploiement, formation, 3 mois de suivi inclus.",
  },
];

export function Process() {
  return (
    <SectionWrapper id="process" title="Processus" className="bg-[var(--color-muted)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col relative group">
            {i !== steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-16 right-0 h-[1px] bg-[var(--color-border)] z-0" />
            )}
            <div className="relative z-10 w-12 h-12 bg-[var(--background)] border border-[var(--color-border)] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <span className="font-bold text-[var(--color-primary)]">{step.num}</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{step.title}</h3>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
