"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[var(--foreground)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Je conçois et développe des sites web pour les PME qui veulent être bien représentées en ligne.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-[var(--color-muted-foreground)] mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Une approche sur-mesure, moderne et performante avec Next.js pour faire de votre site un véritable atout crédibilité.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Button 
            className="text-lg px-8 py-6 rounded-full shadow-lg" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Parlons de votre projet
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
