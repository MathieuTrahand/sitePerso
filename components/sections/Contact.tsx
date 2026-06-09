"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Vous avez envoyé trop de messages. Veuillez réessayer plus tard.");
        }
        throw new Error("Une erreur est survenue lors de l'envoi.");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erreur inconnue.");
    }
  };

  return (
    <SectionWrapper id="contact" title="Contact" className="bg-[var(--color-muted)]">
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-[var(--color-muted-foreground)] mb-10 text-center">
          Un projet en tête ? Décrivez-moi votre activité et ce que vous cherchez — je vous réponds sous 24h.
        </p>

        {status === "success" ? (
          <div className="bg-[var(--background)] border border-green-200 p-8 rounded-2xl flex flex-col items-center text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
            <h3 className="text-xl font-bold">Message envoyé avec succès !</h3>
            <p className="text-[var(--color-muted-foreground)]">
              Merci pour votre message. Je reviens vers vous dans les plus brefs délais.
            </p>
            <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">
              Envoyer un autre message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[var(--background)] p-8 md:p-10 rounded-3xl border border-[var(--color-border)] shadow-sm">
            {/* Honeypot field - hidden from users but visible to bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="honeypot">Ne pas remplir ce champ si vous êtes humain.</label>
              <input type="text" id="honeypot" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={`w-full rounded-md border bg-[var(--background)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                  errors.name ? "border-red-500" : "border-[var(--color-border)]"
                }`}
                placeholder="Jean Dupont"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`w-full rounded-md border bg-[var(--background)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                  errors.email ? "border-red-500" : "border-[var(--color-border)]"
                }`}
                placeholder="jean@entreprise.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={`w-full rounded-md border bg-[var(--background)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                  errors.message ? "border-red-500" : "border-[var(--color-border)]"
                }`}
                placeholder="Décrivez votre projet..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-md">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <Button type="submit" className="w-full py-6 text-base" isLoading={status === "loading"}>
              Envoyer le message
            </Button>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}
