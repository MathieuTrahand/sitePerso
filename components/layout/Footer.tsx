export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 md:py-12 mt-auto">
      <div className="mx-auto max-w-5xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-muted-foreground)]">
          © {new Date().getFullYear()} Mathieu Trahand. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--foreground)] transition-colors">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
