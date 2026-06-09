import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";
import { resend } from "@/lib/resend";

// Système de rate limiting en mémoire simple
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 1;

export async function POST(request: Request) {
  try {
    // 1. Vérification du Content-Type (optionnel mais recommandé)
    if (request.headers.get("content-type") !== "application/json") {
      return NextResponse.json({ error: "Content-Type must be application/json" }, { status: 415 });
    }

    // 2. Rate Limiting Logic
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recentTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);

    if (recentTimestamps.length >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    recentTimestamps.push(now);
    rateLimitMap.set(ip, recentTimestamps);

    // 3. Parser le body JSON
    const body = await request.json();

    // 4. Validation avec Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid data", details: result.error.flatten() }, { status: 400 });
    }

    const { name, email, message, honeypot } = result.data;

    // 5. Honeypot check (anti-spam bot)
    if (honeypot) {
      // On retourne un succès factice pour tromper le bot
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 6. Envoi de l'email via Resend
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!contactEmail) {
      console.error("CONTACT_EMAIL n'est pas défini dans l'environnement.");
      return NextResponse.json({ error: "Erreur de configuration serveur" }, { status: 500 });
    }

    // L'adresse from 'onboarding@resend.dev' permet d'envoyer des mails de test à l'adresse validée sur Resend.
    // Pour la prod, il faudra utiliser un domaine vérifié (ex: contact@votre-domaine.com).
    const emailResponse = await resend.emails.send({
      from: "Contact Site Personnel <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `Nouveau message de ${name} depuis votre site personnel`,
      text: `
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      replyTo: email,
    });

    if (emailResponse.error) {
      console.error("Erreur API Resend:", emailResponse.error);
      return NextResponse.json({ error: "Échec de l'envoi de l'email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur interne API Contact:", error);
    return NextResponse.json({ error: "Erreur serveur interne" }, { status: 500 });
  }
}
