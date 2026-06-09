"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Réalisations" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <nav className="mx-auto max-w-5xl px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="#hero" className="text-xl font-bold tracking-tighter" aria-label="Retour à l'accueil">
          Mathieu.
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-[var(--color-muted-foreground)]">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--foreground)] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary-foreground)] shadow transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Parlons de votre projet
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-[var(--foreground)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[var(--background)] border-b border-[var(--color-border)] shadow-lg"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 mt-2 border-t border-[var(--color-border)]">
                <Link
                  href="#contact"
                  className="inline-flex w-full h-11 items-center justify-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-base font-medium text-[var(--color-primary-foreground)] shadow transition-colors hover:opacity-90"
                  onClick={() => setIsOpen(false)}
                >
                  Parlons de votre projet
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
