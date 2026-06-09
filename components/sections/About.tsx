import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about" title="À propos" className="bg-[var(--color-muted)]">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl border border-[var(--color-border)]">
            <Image
              src="/pp_mathieu_trahand.png"
              alt="Mathieu Trahand"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed">
          <p>
            Je suis Mathieu, étudiant ingénieur en dernière année à l&apos;ENSEEIHT (filière Science du Numérique) et admis à l&apos;ISAE-SUPAERO. Passionné par le web, je conçois et développe des sites sur-mesure pour les PME en parallèle de mes études.
          </p>
          <p>
            Mon approche est simple : être direct, rigoureux et disponible. Pas de jargon d&apos;agence inutile, juste des solutions techniques de pointe (Next.js) pour que votre présence en ligne soit impeccable, rapide, et reflète la qualité de votre activité.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
