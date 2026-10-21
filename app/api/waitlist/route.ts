import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOOLS = new Set(["claude", "chatgpt", "gemini", "whatsapp"]);

type Payload = {
  email?: string;
  team_size?: string;
  tools?: string[];
  website?: string;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled: pretend success, store nothing.
  if (body.website) return NextResponse.json({ ok: true });

  const email = (body.email || "").trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const teamSize = Number.parseInt(body.team_size || "", 10);
  const tools = (body.tools || []).filter((t) => TOOLS.has(t));

  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (!webhook) {
    console.error("WAITLIST_WEBHOOK_URL is not set");
    return NextResponse.json(
      { error: "The waiting list is not configured yet. Email lucas@slashworkspace.com instead." },
      { status: 503 }
    );
  }

  const record = {
    submitted_at: new Date().toISOString(),
    email,
    team_size: Number.isFinite(teamSize) ? teamSize : null,
    tools: tools.join(","),
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
    return NextResponse.json(
      { error: "Could not save your request. Email lucas@slashworkspace.com instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
