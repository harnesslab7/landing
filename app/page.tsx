import WaitlistForm from "./components/WaitlistForm";

function Wordmark({ size = 20 }: { size?: number }) {
  return (
    <span className="wordmark" style={{ fontSize: size }}>
      <span>/</span>
      <span>workspace</span>
    </span>
  );
}

export default function Page() {
  return (
    <>
      <header className="nav-bar">
        <nav className="wrap row nav" aria-label="Main">
          <a href="#top">
            <Wordmark />
          </a>
          <div className="row nav-links">
            <a href="#how">How it works</a>
            <a href="#whatsapp">WhatsApp</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#waitlist" className="btn btn-primary btn-sm">
              Join the waiting list
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section>
          <div className="wrap row hero">
            <div className="col hero-copy">
              <h1>Shared AI context for small teams.</h1>
              <p className="hero-sub">
                Your team&apos;s files, rules, skills and decisions, available
                inside the Claude, ChatGPT and Gemini subscriptions you already
                pay for. No API tokens. Nothing to install on anyone&apos;s
                computer.
              </p>
              <div className="row" style={{ gap: 12, paddingTop: 8 }}>
                <a href="#waitlist" className="btn btn-primary">
                  Join the waiting list
                </a>
                <a href="#how" className="btn btn-ghost">
                  See how it works
                </a>
              </div>
              <p className="hero-note">
                Not open yet. We are onboarding teams from the waiting list in
                order.
              </p>
            </div>

            <div className="col chat" aria-label="Example of a /ws request in a chat">
              <div className="chat-label">
                <span className="dot" aria-hidden="true" />
                <span>Any chat: Claude, ChatGPT, Gemini or WhatsApp</span>
              </div>
              <div className="bubble-user">/ws write the proposal for Café Aurora</div>
              <div className="col bubble-ai">
                <p>
                  Pulled from your team context: the <strong>proposal</strong>{" "}
                  skill, the <strong>tone</strong> memory file, the client brief
                  Andres saved in Drive, and Tuesday&apos;s decision to offer a
                  10% launch discount.
                </p>
                <p>
                  Here is the draft. When you confirm the price, I will record
                  it as a team decision so nobody quotes a different one.
                </p>
              </div>
              <div className="row chips">
                <span className="chip">skill: proposal</span>
                <span className="chip">memory: tone</span>
                <span className="chip">file: cafe-aurora-brief.pdf</span>
                <span className="chip">decision: launch discount 10%</span>
              </div>
            </div>
          </div>
        </section>

        {/* The idea */}
        <section className="idea">
          <div className="wrap row">
            <div className="col idea-head">
              <p className="eyebrow">The idea</p>
              <h2 className="h2">
                Each team member uses their own AI subscription but shares the
                same context.
              </h2>
            </div>
            <div className="col idea-body">
              <p>
                One person uses Claude, another uses ChatGPT, a third uses
                Gemini. Each one re-explains the business every time, pastes the
                same contract, and makes a decision the others never hear about.
                The decisions that do get made live in a WhatsApp group nobody
                can search.
              </p>
              <p>
                The vendors do not share memory across people, and they do not
                share it with each other. The context that makes an AI useful
                for a business ends up scattered across personal accounts.
              </p>
              <p className="strong">
                /workspace keeps that context in one place and serves it to
                whichever AI each person uses.
              </p>
            </div>
          </div>
        </section>

        {/* What the team shares */}
        <section className="shares">
          <div className="wrap col">
            <div className="col section-head">
              <p className="eyebrow">What the team shares</p>
              <h2 className="h2">One context, every assistant.</h2>
            </div>
            <div className="row cards">
              <div className="col card">
                <h3>Skills</h3>
                <p>
                  Named, rerunnable procedures: list a unit, draft a renewal,
                  check the payment sheet. Written once in plain language, run
                  from any chat.
                </p>
              </div>
              <div className="col card">
                <h3>Memory</h3>
                <p>
                  Plain text files that describe the business: rules, tone,
                  templates, standing decisions. Edited in a web UI, shared with
                  everyone the moment they are saved.
                </p>
              </div>
              <div className="col card">
                <h3>Decisions</h3>
                <p>
                  An append-only log. A decision recorded from a Claude chat is
                  visible in a colleague&apos;s ChatGPT or Gemini chat, with
                  who, when and where it came from.
                </p>
              </div>
              <div className="col card">
                <h3>Files and chat</h3>
                <p>
                  Google Drive folders you mark as visible, a Slack channel, a
                  WhatsApp group. Drive stays the system of record; /workspace
                  keeps the extracted text, not the files.
                </p>
              </div>
            </div>
            <div className="row cards">
              <div className="col card card-wide">
                <h3>Agents on a schedule</h3>
                <p>
                  A skill that needs no judgment plus a trigger. After the 10th
                  of the month, check the payment sheet and tell the team who
                  has not paid. Runs on the admin&apos;s own Claude seat, no
                  tokens billed.
                </p>
              </div>
              <div className="col card card-wide">
                <h3>Personal stays personal</h3>
                <p>
                  Each member&apos;s calendar and email are their own.
                  Colleagues see free and busy blocks, never titles. Nothing
                  personal enters shared memory unless its owner records it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="how">
          <div className="wrap col">
            <div className="col section-head">
              <p className="eyebrow">How it works</p>
              <h2 className="h2">Three steps. No developer needed.</h2>
            </div>
            <div className="row steps">
              <div className="col step">
                <span className="step-n" aria-hidden="true">1</span>
                <h3>Add /workspace to your AI</h3>
                <p>
                  In Claude, add it as a connector and sign in. In ChatGPT,
                  install the plugin and connect. In Gemini, add it from the
                  extensions list. One time per person, on any plan including
                  Free.
                </p>
              </div>
              <div className="col step">
                <span className="step-n" aria-hidden="true">2</span>
                <h3>Connect what the team uses</h3>
                <p>
                  Pick the Drive folders the AI may see. Join the Slack channel
                  or WhatsApp group. Write the first memory file and skill in
                  the web UI, or let /workspace draft them from a description.
                </p>
              </div>
              <div className="col step">
                <span className="step-n" aria-hidden="true">3</span>
                <h3>
                  Type <code>/ws</code> or <code>@ws</code>
                </h3>
                <p>
                  In Claude, <code>/ws</code> and the request. In ChatGPT and
                  Gemini, <code>@ws</code>. In the team&apos;s WhatsApp group,
                  the same <code>@ws</code>. The assistant pulls the relevant
                  context and files first, does the task, and writes decisions
                  back. Nothing triggers in your personal chats.
                </p>
              </div>
            </div>
            <div className="row works">
              <span className="label">Works with</span>
              <span className="name">Claude</span>
              <span className="name">ChatGPT</span>
              <span className="name">Gemini</span>
              <span className="name">WhatsApp</span>
              <span className="name">Google Drive</span>
              <span className="name">Google Meet transcripts</span>
              <span className="name">Slack</span>
            </div>
          </div>
        </section>

        {/* WhatsApp */}
        <section id="whatsapp" className="wa">
          <div className="wrap row">
            <div className="col wa-copy">
              <p className="wa-label">WhatsApp integration</p>
              <h2 className="h2">Works inside the group your team already has.</h2>
              <p className="lead">
                /workspace joins as one more participant. Messages become
                shared context, <code>@ws</code> gets an answer in the group,
                and agent alerts land where the team talks.
              </p>
            </div>

            <div className="col wa-phone" aria-label="Example of a WhatsApp group with /workspace as a member">
              <div className="wa-head">
                <span className="wa-avatar" aria-hidden="true">CA</span>
                <div className="col" style={{ gap: 1, minWidth: 0 }}>
                  <span className="wa-title">Café Aurora team</span>
                  <span className="wa-members">Andres, Lucas, Marina, /workspace</span>
                </div>
              </div>
              <div className="col wa-thread">
                <div className="col wa-msg wa-in">
                  <span className="wa-name person">Andres</span>
                  <span>Café Aurora signed. Kickoff is next Monday.</span>
                  <span className="wa-time">10:12</span>
                </div>
                <div className="col wa-msg wa-out">
                  <span>@ws draft the kickoff agenda for Café Aurora</span>
                  <span className="wa-time">10:13</span>
                </div>
                <div className="col wa-msg wa-in wide">
                  <span className="wa-name bot">/workspace</span>
                  <span>
                    Kickoff agenda for Café Aurora is ready, built from the
                    proposal in Drive and the date Andres just confirmed.
                    Decision recorded: kickoff on Monday.
                  </span>
                  <span className="wa-time">10:16</span>
                </div>
                <div className="col wa-msg wa-in wide">
                  <span className="wa-name bot">/workspace</span>
                  <span>
                    Monthly check: the September invoice for Café Aurora has no
                    payment on the sheet. Reply <strong>paid</strong> to mark
                    it.
                  </span>
                  <span className="wa-time">Tue 09:00</span>
                </div>
                <div className="col wa-msg wa-out">
                  <span>paid</span>
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
              <p className="eyebrow">Pricing</p>
              <h2 className="h2">One plan. Per seat.</h2>
              <p className="lead">
                You keep paying your AI vendor for the model. /workspace charges
                only for the shared context. No usage meter on messages or
                requests.
              </p>
              <p className="muted">
                WhatsApp messages sent into your group are billed by Meta to
                your business at Meta&apos;s rates. Reading is free. Slack is
                free.
              </p>
              <p className="muted">
                This is the planned price. Nothing can be bought yet. Teams on
                the waiting list get it at this rate when they are onboarded.
              </p>
            </div>
            <div className="col plan">
              <div className="col" style={{ gap: 6 }}>
                <p className="plan-name">Team</p>
                <div className="plan-price">
                  <span className="big">$20</span>
                  <span className="per">per month, 5 seats included</span>
                </div>
                <p className="plan-seat">$2 per extra seat per month</p>
              </div>
              <ul className="col plan-list">
                <li><span className="tick" aria-hidden="true">✓</span><span>Skills, memory files and decision log</span></li>
                <li><span className="tick" aria-hidden="true">✓</span><span>Google Drive, Slack and WhatsApp as context</span></li>
                <li><span className="tick" aria-hidden="true">✓</span><span>Claude, ChatGPT and Gemini, on every plan including Free</span></li>
                <li><span className="tick" aria-hidden="true">✓</span><span>Scheduled agents on the admin&apos;s Claude seat</span></li>
                <li><span className="tick" aria-hidden="true">✓</span><span>Personal calendar and email, visible only to their owner</span></li>
              </ul>
              <a href="#waitlist" className="btn btn-primary">Join the waiting list</a>
              <p className="plan-fine">
                Planned terms: 30-day trial, prepaid monthly, cancel any time
                with access to the end of the paid period. No payment is taken
                on this site.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="about">
          <div className="wrap row">
            <div className="col about-head">
              <p className="eyebrow">About</p>
              <h2 className="h2">Built by a small team, for small teams.</h2>
            </div>
            <div className="col about-body">
              <p>
                /workspace started with a family real estate business where
                three people used three different AI accounts and none of them
                knew what the others had decided. The first version is being
                built with that team as the pilot.
              </p>
              <p>
                The product runs on top of the AI subscriptions teams already
                have, because early-stage businesses will not pay for API tokens
                on top of them. The server does deterministic work only; the
                model on the user&apos;s own plan does the thinking.
              </p>
              <div className="row founders">
                <div className="col founder">
                  <p className="name">Lucas Schnoller</p>
                  <p className="role">Founder, Brasil</p>
                </div>
                <div className="col founder">
                  <p className="name">Andres Ponte</p>
                  <p className="role">Co-founder, Argentina</p>
                </div>
              </div>
              <p className="muted contact">
                Contact: <a href="mailto:lucas@slashworkspace.com">lucas@slashworkspace.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Waiting list */}
        <section id="waitlist" className="waitlist">
          <div className="wrap row">
            <div className="col wl-copy">
              <p className="eyebrow">Waiting list</p>
              <h2 className="h2">Get on the list.</h2>
              <p className="lead">
                /workspace is not open yet. We are onboarding teams in order
                from the waiting list while the Claude connector and the ChatGPT
                plugin go through directory review. Tell us which assistants
                your team uses and we will write to you when it is your turn.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap row">
          <div className="col footer-brand">
            <Wordmark size={16} />
            <span>© 2026 [LEGAL ENTITY NAME]. slashworkspace.com</span>
          </div>
          <div className="row footer-links">
            <a href="mailto:lucas@slashworkspace.com">lucas@slashworkspace.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
