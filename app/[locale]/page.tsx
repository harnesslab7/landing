import { notFound } from "next/navigation";
import LanguageSwitcher from "../components/LanguageSwitcher";
import SiteNav from "../components/SiteNav";
import SyncDemo from "../components/SyncDemo";
import WaitlistForm from "../components/WaitlistForm";
import { FolderIcon, RouteIcon } from "../components/icons";
import { getDictionary, type Dict } from "../../lib/dictionaries";
import { isLocale } from "../../lib/i18n";

function Eyebrow({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: "dark" | "wa";
}) {
  const cls =
    variant === "dark"
      ? "eyebrow eyebrow--dark"
      : variant === "wa"
        ? "eyebrow eyebrow--wa"
        : "eyebrow";
  return (
    <p className={cls}>
      <span className="slash" aria-hidden="true">
        /
      </span>
      {children}
    </p>
  );
}

function Diagram({ t }: { t: Dict["overview"] }) {
  return (
    <svg
      className="dg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 520"
      role="img"
      aria-label={t.diagramAria}
    >
      <defs>
        <marker
          id="fa"
          markerWidth="7"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto-start-reverse"
          markerUnits="userSpaceOnUse"
        >
          <path className="arrow" d="M1 1L5 3.5L1 6" />
        </marker>
      </defs>
      <text className="lbl" x="0" y="22">
        {t.lblShares}
      </text>
      <text className="lbl" x="950" y="62">
        {t.lblTools}
      </text>
      <g className="connector" markerStart="url(#fa)" markerEnd="url(#fa)">
        <path d="M352 72H370C415 72 390 168 435 168H478" />
        <path d="M352 152H370C415 152 390 184 435 184H478" />
        <path d="M352 232H370C415 232 390 200 435 200H478" />
        <path d="M352 312H370C415 312 390 216 435 216H478" />
        <path d="M782 176H814C877 176 854 112 914 112H948" />
        <path d="M782 192H948" />
        <path d="M782 208H814C877 208 854 272 914 272H948" />
      </g>
      <g className="connector" markerStart="url(#fa)">
        <path d="M630 246V400" />
      </g>
      <g className="connector">
        <path d="M360 400H840" />
      </g>
      <g className="connector" markerEnd="url(#fa)">
        <path d="M360 400V450" />
        <path d="M600 400V450" />
        <path d="M840 400V450" />
      </g>

      <rect className="node" x="0" y="40" width="350" height="64" rx="6" />
      <rect className="node" x="0" y="120" width="350" height="64" rx="6" />
      <rect className="node" x="0" y="200" width="350" height="64" rx="6" />
      <rect className="node" x="0" y="280" width="350" height="64" rx="6" />
      <g className="dgic" transform="translate(20 52) scale(1.667)">
        <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
      </g>
      <g className="dgic" transform="translate(20 132) scale(1.667)">
        <path d="M4 6l16 0" />
        <path d="M4 12l10 0" />
        <path d="M4 18l6 0" />
        <path d="M15 16l3 3l4 -5" />
      </g>
      <g className="dgic" transform="translate(20 212) scale(1.667)">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 7v5l3 3" />
      </g>
      <g className="dgic" transform="translate(20 292) scale(1.667)">
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </g>
      <text x="76" y="80">
        {t.nodeDrive}
      </text>
      <text x="76" y="160">
        {t.nodeWorkflows}
      </text>
      <text x="76" y="240">
        {t.nodeScheduled}
      </text>
      <text x="76" y="320">
        {t.nodeExperts}
      </text>

      <rect className="node" x="480" y="140" width="300" height="104" rx="7" />
      <text className="bslash" x="519" y="212">
        /
      </text>
      <text className="brand" x="550" y="204">
        workspace
      </text>

      <rect className="node" x="950" y="80" width="250" height="64" rx="6" />
      <rect className="node" x="950" y="160" width="250" height="64" rx="6" />
      <rect className="node" x="950" y="240" width="250" height="64" rx="6" />
      <circle className="dot" cx="978" cy="112" r="6" />
      <circle className="dot" cx="978" cy="192" r="6" />
      <circle className="dot" cx="978" cy="272" r="6" />
      <text x="998" y="120">
        Claude
      </text>
      <text x="998" y="200">
        ChatGPT
      </text>
      <text x="998" y="280">
        Gemini
      </text>
      <text className="inv" x="1182" y="119" textAnchor="end">
        /ws
      </text>
      <text className="inv" x="1182" y="199" textAnchor="end">
        @ws
      </text>
      <text className="inv" x="1182" y="279" textAnchor="end">
        @ws
      </text>

      <text className="lbl" x="644" y="330">
        {t.lblIntegrations}
      </text>
      <rect className="node" x="250" y="452" width="220" height="64" rx="6" />
      <rect className="node" x="490" y="452" width="220" height="64" rx="6" />
      <rect className="node" x="730" y="452" width="220" height="64" rx="6" />
      <g transform="translate(268 465) scale(1.3)" style={{ fill: "#F3F6F1" }}>
        <path d="M30.31 14.32A14.87 14.87 0 0 0 15.54 0h-.07A14.87 14.87 0 0 0 2.41 22L1.1 29.87a.11.11 0 0 0 .11.13h.02l7.79-1.73c2 .96 4.2 1.47 6.44 1.46h.42a14.86 14.86 0 0 0 14.43-15.4Zm-14.5 12.83h-.35a12.3 12.3 0 0 1-5.67-1.38l-.4-.2-5.27 1.24.97-5.34-.22-.38a12.3 12.3 0 0 1 10.25-18.5h.36a12.29 12.29 0 0 1 .34 24.56h-.01Z" />
        <path d="M10.29 7.69a1.37 1.37 0 0 0-.98.44c-.35.36-1.34 1.23-1.4 3.07-.06 1.84 1.23 3.65 1.4 3.9.18.26 2.46 4.23 6.2 5.84 2.2.95 3.170 1.11 3.8 1.11.25 0 .45-.03.65-.04.69-.04 2.24-.83 2.57-1.7.34-.86.36-1.61.28-1.76-.1-.15-.34-.26-.7-.46-.37-.19-2.18-1.150-2.52-1.29a.91.91 0 0 0-.4-.1.55.55 0 0 0-.44.26c-.3.38-1 1.2-1.230 1.43a.55.55 0 0 1-.4.19.97.97 0 0 1-.41-.11 9.52 9.52 0 0 1-2.94-1.96c-.8-.78-1.47-1.68-2-2.66-.2-.38 0-.57.19-.75.19-.18.39-.42.58-.64.16-.18.29-.38.4-.6a.69.69 0 0 0-.02-.66c-.09-.19-.75-2.05-1.07-2.8-.25-.64-.55-.66-.81-.68a8.15 8.15 0 0 0-.72-.03h-.03" />
      </g>
      <g className="dgic" transform="translate(508 464) scale(1.667)">
        <path d="M5 9l14 0" />
        <path d="M5 15l14 0" />
        <path d="M11 4l-4 16" />
        <path d="M17 4l-4 16" />
      </g>
      <g className="dgic" transform="translate(748 464) scale(1.667)">
        <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
        <path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
      </g>
      <text x="320" y="492">
        {t.integrations[0]}
      </text>
      <text x="560" y="492">
        {t.integrations[1]}
      </text>
      <text x="800" y="492">
        {t.integrations[2]}
      </text>
    </svg>
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
      {/* Masthead + hero, dark */}
      <section id="top" className="hero-dark">
        <div className="band band--hero" aria-hidden="true" />

        <header className="masthead">
          <SiteNav t={t.nav} />
        </header>

        <div className="wrap hero">
          <Eyebrow variant="dark">{t.hero.kicker}</Eyebrow>
          <h1>
            <span>{t.hero.h1Line1}</span>
            <span>{t.hero.h1Line2}</span>
            <span className="accent">{t.hero.h1Accent}</span>
          </h1>

          <ul className="hero-pills" aria-label={t.hero.toolsAria}>
            <li>
              <img src="/logos/claude.svg" alt="" />
              Claude
            </li>
            <li>
              <img src="/logos/chatgpt.svg" alt="" />
              ChatGPT
            </li>
            <li>
              <img src="/logos/gemini.svg" alt="" />
              Gemini
            </li>
          </ul>

          <div className="hero-bottom">
            <div className="hero-lead">
              <p className="big">{t.hero.lead}</p>
              <p className="sub">{t.hero.sub}</p>
            </div>
            <div className="hero-cta">
              <a href="#waitlist" className="btn-accent">
                {t.hero.cta}
              </a>
              <p className="note">{t.hero.note}</p>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className="wrap body-wrap">
          {/* Everything your team knows */}
          <section id="shares" className="shares">
            <Eyebrow>{t.shares.eyebrow}</Eyebrow>
            <h2 className="h2">
              {t.shares.h2Line1}
              <br />
              {t.shares.h2Line2}
            </h2>
            <p className="section-lead">{t.shares.lead}</p>

            <div className="cards">
              {/* Your shared files */}
              <article className="card">
                <div className="card-art">
                  <div className="card-band" aria-hidden="true" />
                  <p className="card-label">{t.shares.drive.label}</p>
                  <div className="file-list">
                    <p className="file-head">
                      <span className="grow">{t.shares.drive.colName}</span>
                      <span>{t.shares.drive.colModified}</span>
                    </p>
                    {t.shares.drive.files.map((file) => (
                      <p key={file.name} className="file-row">
                        {file.type === "folder" ? (
                          <FolderIcon />
                        ) : (
                          <span
                            className={`file-type file-type--${file.type}`}
                            aria-hidden="true"
                          >
                            {file.type}
                          </span>
                        )}
                        <span className="grow">{file.name}</span>
                        <span className="meta">{file.modified}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="card-text">
                  <h3>{t.shares.drive.title}</h3>
                  <p>{t.shares.drive.body}</p>
                </div>
              </article>

              {/* Workflows */}
              <article className="card">
                <div className="card-art card-art--wf">
                  <div className="card-band" aria-hidden="true" />
                  <p className="card-label">{t.shares.workflows.label}</p>
                  {t.shares.workflows.items.map((item) => (
                    <p key={item.name} className="card-row">
                      <RouteIcon />
                      <span className="grow">{item.name}</span>
                      <span className="meta">{item.steps}</span>
                    </p>
                  ))}
                </div>
                <div className="card-text">
                  <h3>{t.shares.workflows.title}</h3>
                  <p>{t.shares.workflows.body}</p>
                </div>
              </article>

              {/* Experts */}
              <article className="card">
                <div className="card-art">
                  <div className="card-band" aria-hidden="true" />
                  <p className="card-label">{t.shares.experts.label}</p>
                  {t.shares.experts.items.map((item, i) => (
                    <p
                      key={item.name}
                      className={i === 0 ? "expert expert--active" : "expert"}
                    >
                      <span className="avatar" aria-hidden="true">
                        {item.initial}
                      </span>
                      {item.name}
                    </p>
                  ))}
                </div>
                <div className="card-text">
                  <h3>{t.shares.experts.title}</h3>
                  <p>{t.shares.experts.body}</p>
                </div>
              </article>

              {/* Scheduled tasks */}
              <article className="card">
                <div className="card-art card-art--row">
                  <div className="card-band" aria-hidden="true" />
                  <div className="cal" aria-hidden="true">
                    <span className="cal-badge">{t.shares.scheduled.calBadge}</span>
                    <span className="cal-day">{t.shares.scheduled.calDay}</span>
                  </div>
                  <div className="sched-info">
                    <p className="name">{t.shares.scheduled.taskName}</p>
                    <p className="desc">{t.shares.scheduled.taskDesc}</p>
                    <p className="target">{t.shares.scheduled.taskTarget}</p>
                  </div>
                </div>
                <div className="card-text">
                  <h3>{t.shares.scheduled.title}</h3>
                  <p>{t.shares.scheduled.body}</p>
                </div>
              </article>
            </div>
          </section>

          {/* How it works: live demo */}
          <section id="how" className="how">
            <Eyebrow>{t.how.eyebrow}</Eyebrow>
            <h2 className="h2">
              {t.how.h2Line1}
              <br />
              {t.how.h2Line2}
            </h2>
            <p className="section-lead">{t.how.lead}</p>
            <SyncDemo t={t.how} />
          </section>
        </div>

        {/* WhatsApp integration */}
        <section id="whatsapp" className="wa">
          <div className="wrap">
            <div className="wa-copy">
              <div className="wa-logos">
                <img src="/logos/whatsapp.svg" alt="" className="iso" />
                <img
                  src="/logos/whatsapp-wordmark.svg"
                  alt="WhatsApp"
                  className="word"
                />
              </div>
              <Eyebrow variant="wa">{t.wa.label}</Eyebrow>
              <h2 className="h2">{t.wa.h2}</h2>
              <p
                className="lead"
                dangerouslySetInnerHTML={{ __html: t.wa.leadHtml }}
              />
            </div>

            <div className="wa-phone" aria-label={t.wa.phoneAria}>
              <div className="wa-head">
                <span className="wa-avatar" aria-hidden="true">
                  CA
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 0 }}>
                  <span className="wa-title">{t.wa.title}</span>
                  <span className="wa-members">{t.wa.members}</span>
                </div>
              </div>
              <div className="wa-thread">
                <div className="wa-msg wa-in">
                  <span className="wa-name person">Andres</span>
                  <span>{t.wa.msg1}</span>
                  <span className="wa-time">10:12</span>
                </div>
                <div className="wa-msg wa-out">
                  <span>{t.wa.msg2}</span>
                  <span className="wa-time">10:13</span>
                </div>
                <div className="wa-msg wa-in wide">
                  <span className="wa-name bot">/workspace</span>
                  <span>{t.wa.msg3}</span>
                  <span className="wa-time">10:16</span>
                </div>
                <div className="wa-msg wa-in wide">
                  <span className="wa-name bot">/workspace</span>
                  <span dangerouslySetInnerHTML={{ __html: t.wa.msg4Html }} />
                  <span className="wa-time">{t.wa.time4}</span>
                </div>
                <div className="wa-msg wa-out">
                  <span>{t.wa.msg5}</span>
                  <span className="wa-time">09:41</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap body-wrap">
          {/* Diagram */}
          <section id="overview" className="overview">
            <Eyebrow>{t.overview.eyebrow}</Eyebrow>
            <h2 className="h2">
              {t.overview.h2Line1}
              <br />
              {t.overview.h2Line2}
            </h2>
            <figure className="diagram">
              <div className="scroll">
                <Diagram t={t.overview} />
              </div>
              <figcaption>{t.overview.caption}</figcaption>
            </figure>
          </section>

          {/* About */}
          <section id="about" className="about">
            <div className="about-copy">
              <Eyebrow>{t.about.eyebrow}</Eyebrow>
              <h2 className="h2 h2--about">
                {t.about.h2Line1}
                <br />
                {t.about.h2Line2}
              </h2>
              <p className="body">{t.about.p1}</p>
            </div>
            <div className="about-side">
              {t.about.founders.map((f) => (
                <div key={f.name}>
                  <p className="name">{f.name}</p>
                  <p className="role">{f.role}</p>
                </div>
              ))}
              <p className="contact">
                {t.about.contact}{" "}
                <a href="mailto:lucas@slashworkspace.com">
                  lucas@slashworkspace.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Waiting list + footer, dark */}
      <footer id="waitlist" className="footer-dark">
        <div className="band band--footer" aria-hidden="true" />
        <div className="wrap body-wrap">
          <div className="wl-row">
            <div className="wl-copy">
              <Eyebrow variant="dark">{t.waitlist.eyebrow}</Eyebrow>
              <h2 className="h2 h2--wl">
                {t.waitlist.h2Line1}
                <br />
                {t.waitlist.h2Line2}
              </h2>
              <p className="lead">{t.waitlist.lead}</p>
              <p className="wl-price">
                <span className="tag">{t.waitlist.priceTag}</span>
                <span>{t.waitlist.price}</span>
              </p>
            </div>
            <WaitlistForm locale={locale} t={t.form} />
          </div>
          <div className="footer-bar">
            <a href="#top" className="wm">
              <span className="slash">/</span>workspace
            </a>
            <a href="mailto:lucas@slashworkspace.com" className="mail">
              lucas@slashworkspace.com
            </a>
            <p className="copy">{t.footer.copyright}</p>
            <LanguageSwitcher current={locale} label={t.footer.language} />
          </div>
        </div>
      </footer>
    </>
  );
}
