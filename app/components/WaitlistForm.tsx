"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "../../lib/dictionaries";
import type { Locale } from "../../lib/i18n";

type Status = "idle" | "sending" | "ok" | "error";

export default function WaitlistForm({
  locale,
  t,
}: {
  locale: Locale;
  t: Dict["form"];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") || "").trim(),
      team_size: String(data.get("team_size") || "").trim(),
      tools: data.getAll("tools").map(String),
      website: String(data.get("website") || ""), // honeypot
      lang: locale,
    };

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || t.genericError);
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.genericError);
    }
  }

  if (status === "ok") {
    return (
      <div className="form col">
        <p className="form-ok">{t.ok}</p>
      </div>
    );
  }

  return (
    <form className="form col" onSubmit={onSubmit}>
      <div className="field col">
        <label htmlFor="wl-email">{t.email}</label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          className="input"
        />
      </div>
      <div className="field col">
        <label htmlFor="wl-team">{t.team}</label>
        <input
          id="wl-team"
          name="team_size"
          type="number"
          min={1}
          placeholder="5"
          className="input"
        />
      </div>
      <fieldset>
        <legend>{t.legend}</legend>
        <div className="checks row">
          <label htmlFor="wl-claude">
            <input id="wl-claude" name="tools" type="checkbox" value="claude" /> Claude
          </label>
          <label htmlFor="wl-chatgpt">
            <input id="wl-chatgpt" name="tools" type="checkbox" value="chatgpt" /> ChatGPT
          </label>
          <label htmlFor="wl-gemini">
            <input id="wl-gemini" name="tools" type="checkbox" value="gemini" /> Gemini
          </label>
          <label htmlFor="wl-whatsapp">
            <input id="wl-whatsapp" name="tools" type="checkbox" value="whatsapp" /> {t.whatsappGroup}
          </label>
        </div>
      </fieldset>
      {/* Honeypot: hidden from people, filled by bots */}
      <div style={{ position: "absolute", left: "-10000px" }} aria-hidden="true">
        <label htmlFor="wl-website">Website</label>
        <input id="wl-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      {status === "error" && <p className="form-err" role="alert">{error}</p>}
      <p className="form-note">{t.note}</p>
    </form>
  );
}
