import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOOLS = new Set(["claude", "chatgpt", "gemini", "whatsapp"]);

type Lang = "en" | "es" | "pt";

const MESSAGES: Record<Lang, Record<string, string>> = {
  en: {
    invalid: "Invalid request.",
    email: "Enter a valid email address.",
    notConfigured:
      "The waiting list is not configured yet. Email lucas@slashworkspace.com instead.",
    failed: "Could not save your request. Email lucas@slashworkspace.com instead.",
  },
  es: {
    invalid: "Solicitud inválida.",
    email: "Ingresa un correo válido.",
    notConfigured:
      "La lista de espera todavía no está configurada. Escribe a lucas@slashworkspace.com.",
    failed: "No pudimos guardar tu solicitud. Escribe a lucas@slashworkspace.com.",
  },
  pt: {
    invalid: "Solicitação inválida.",
    email: "Digite um e-mail válido.",
    notConfigured:
      "A lista de espera ainda não está configurada. Escreva para lucas@slashworkspace.com.",
    failed: "Não foi possível salvar sua solicitação. Escreva para lucas@slashworkspace.com.",
  },
};

type Payload = {
  email?: string;
  team_size?: string;
  tools?: string[];
  website?: string;
  lang?: string;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: MESSAGES.en.invalid }, { status: 400 });
  }

  const lang: Lang =
    body.lang === "es" || body.lang === "pt" ? body.lang : "en";
  const msg = MESSAGES[lang];

  // Honeypot filled: pretend success, store nothing.
  if (body.website) return NextResponse.json({ ok: true });

  const email = (body.email || "").trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: msg.email }, { status: 400 });
  }

  const teamSize = Number.parseInt(body.team_size || "", 10);
  const tools = (body.tools || []).filter((t) => TOOLS.has(t));

  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (!webhook) {
    console.error("WAITLIST_WEBHOOK_URL is not set");
    return NextResponse.json({ error: msg.notConfigured }, { status: 503 });
  }

  const record = {
    submitted_at: new Date().toISOString(),
    email,
    team_size: Number.isFinite(teamSize) ? teamSize : null,
    tools: tools.join(","),
    lang,
    secret: process.env.WAITLIST_WEBHOOK_SECRET || "",
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch (err) {
    console.error("waitlist webhook failed", err);
    return NextResponse.json({ error: msg.failed }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
