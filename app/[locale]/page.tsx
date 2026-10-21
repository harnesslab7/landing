import { notFound } from "next/navigation";
import LanguageSwitcher from "../components/LanguageSwitcher";
import WaitlistForm from "../components/WaitlistForm";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale } from "../../lib/i18n";

function Wordmark({ size = 20 }: { size?: number }) {
  return (
    <span className="wordmark" style={{ fontSize: size }}>
      <span>/</span>
      <span>workspace</span>
    </span>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <header className="nav-bar">
        <nav className="wrap row nav" aria-label="Main">
          <a href="#top">
            <Wordmark />
          </a>
          <div className="row nav-links">
            <a href="#how">{t.nav.how}</a>
            <a href="#whatsapp">{t.nav.whatsapp}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#waitlist" className="btn btn-primary btn-sm">
              {t.nav.cta}
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section>
          <div className="wrap row hero">
            <div className="col hero-copy">
              <h1>{t.hero.h1}</h1>
              <p className="hero-sub">{t.hero.sub}</p>
              <div className="row" style={{ gap: 12, paddingTop: 8 }}>
                <a href="#waitlist" className="btn btn-primary">
                  {t.hero.cta}
                </a>
                <a href="#how" className="btn btn-ghost">
                  {t.hero.see}
                </a>
              </div>
              <p className="hero-note">{t.hero.note}</p>
            </div>

            <div className="col chat" aria-label={t.hero.chatAria}>
              <div className="chat-label">
                <span className="dot" aria-hidden="true" />
                <span>{t.hero.chatLabel}</span>
              </div>
              <div className="bubble-user">{t.hero.bubbleUser}</div>
              <div className="col bubble-ai">
                <p dangerouslySetInnerHTML={{ __html: t.hero.bubbleAi1Html }} />
                <p>{t.hero.bubbleAi2}</p>
              </div>
              <div className="row chips">
                {t.hero.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The idea */}
        <section className="idea">
          <div className="wrap row">
            <div className="col idea-head">
              <p className="eyebrow">{t.idea.eyebrow}</p>
              <h2 className="h2">{t.idea.h2}</h2>
            </div>
            <div className="col idea-body">
              <p>{t.idea.p1}</p>
              <p>{t.idea.p2}</p>
              <p className="strong">{t.idea.strong}</p>
            </div>
          </div>
        </section>

        {/* What the team shares */}
        <section className="shares">
          <div className="wrap col">
            <div className="col section-head">
              <p className="eyebrow">{t.shares.eyebrow}</p>
              <h2 className="h2">{t.shares.h2}</h2>
            </div>
            <div className="row cards">
              {t.shares.cards.map((card) => (
                <div key={card.title} className="col card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
            <div className="row cards">
              {t.shares.wide.map((card) => (
                <div key={card.title} className="col card card-wide">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="how">
          <div className="wrap col">
            <div className="col section-head">
              <p className="eyebrow">{t.how.eyebrow}</p>
              <h2 className="h2">{t.how.h2}</h2>
            </div>
            <div className="row steps">
              {t.how.steps.map((step, i) => (
                <div key={step.titleHtml} className="col step">
                  <span className="step-n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 dangerouslySetInnerHTML={{ __html: step.titleHtml }} />
                  <p dangerouslySetInnerHTML={{ __html: step.bodyHtml }} />
                </div>
              ))}
            </div>
            <div className="row works">
              <span className="label">{t.how.worksLabel}</span>
              {t.how.works.map((name) => (
                <span key={name} className="name">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp */}
        <section id="whatsapp" className="wa">
          <div className="wrap row">
            <div className="col wa-copy">
              <p className="wa-label">{t.wa.label}</p>
              <h2 className="h2">{t.wa.h2}</h2>
              <p
                className="lead"
                dangerouslySetInnerHTML={{ __html: t.wa.leadHtml }}
              />
            </div>

            <div className="col wa-phone" aria-label={t.wa.phoneAria}>
              <div className="wa-head">
                <span className="wa-avatar" aria-hidden="true">CA</span>
                <div className="col" style={{ gap: 1, minWidth: 0 }}>
                  <span className="wa-title">{t.wa.title}</span>
                  <span className="wa-members">{t.wa.members}</span>
                </div>
              </div>
              <div className="col wa-thread">
                <div className="col wa-msg wa-in">
                  <span className="wa-name person">Andres</span>
                  <span>{t.wa.msg1}</span>
                  <span className="wa-time">10:12</span>
                </div>
                <div className="col wa-msg wa-out">
                  <span>{t.wa.msg2}</span>
                  <span className="wa-time">10:13</span>
                </div>
                <div className="col wa-msg wa-in wide">
                  <span className="wa-name bot">/workspace</span>
                  <span>{t.wa.msg3}</span>
                  <span className="wa-time">10:16</span>
                </div>
                <div className="col wa-msg wa-in wide">
                  <span className="wa-name bot">/workspace</span>
                  <span dangerouslySetInnerHTML={{ __html: t.wa.msg4Html }} />
                  <span className="wa-time">{t.wa.time4}</span>
                </div>
                <div className="col wa-msg wa-out">
                  <span>{t.wa.msg5}</span>
                  <span className="wa-time">09:41</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pricing">
          <div className="wrap row">
            <div className="col pricing-copy">
              <p className="eyebrow">{t.pricing.eyebrow}</p>
              <h2 className="h2">{t.pricing.h2}</h2>
              <p className="lead">{t.pricing.lead}</p>
              <p className="muted">{t.pricing.muted1}</p>
              <p className="muted">{t.pricing.muted2}</p>
            </div>
            <div className="col plan">
              <div className="col" style={{ gap: 6 }}>
                <p className="plan-name">{t.pricing.planName}</p>
                <div className="plan-price">
                  <span className="big">{t.pricing.price}</span>
                  <span className="per">{t.pricing.per}</span>
                </div>
                <p className="plan-seat">{t.pricing.seat}</p>
              </div>
              <ul className="col plan-list">
                {t.pricing.items.map((item) => (
                  <li key={item}>
                    <span className="tick" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="btn btn-primary">
                {t.pricing.cta}
              </a>
              <p className="plan-fine">{t.pricing.fine}</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="about">
          <div className="wrap row">
            <div className="col about-head">
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2 className="h2">{t.about.h2}</h2>
            </div>
            <div className="col about-body">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <div className="row founders">
                {t.about.founders.map((f) => (
                  <div key={f.name} className="col founder">
                    <p className="name">{f.name}</p>
                    <p className="role">{f.role}</p>
                  </div>
                ))}
              </div>
              <p className="muted contact">
                {t.about.contact}{" "}
                <a href="mailto:lucas@slashworkspace.com">lucas@slashworkspace.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Waiting list */}
        <section id="waitlist" className="waitlist">
          <div className="wrap row">
            <div className="col wl-copy">
              <p className="eyebrow">{t.waitlist.eyebrow}</p>
              <h2 className="h2">{t.waitlist.h2}</h2>
              <p className="lead">{t.waitlist.lead}</p>
            </div>
            <WaitlistForm locale={locale} t={t.form} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap row">
          <div className="col footer-brand">
            <Wordmark size={16} />
            <span>{t.footer.copyright}</span>
          </div>
          <div className="row footer-links">
            <a href="mailto:lucas@slashworkspace.com">lucas@slashworkspace.com</a>
          </div>
          <LanguageSwitcher current={locale} label={t.footer.language} />
        </div>
      </footer>
    </>
  );
}
