"use client";

import { useEffect, useState } from "react";
import type { Dict } from "../../lib/dictionaries";
import {
  ChevronIcon,
  CopyIcon,
  MicIcon,
  PlusIcon,
  SendArrowIcon,
  ThumbDownIcon,
  ThumbUpIcon,
} from "./icons";

// Replays the two-chat sequence from the design: a rule set in a Claude-style
// chat appears in a ChatGPT-style chat a beat later, on a repeating 8-step tick.

export default function SyncDemo({ t }: { t: Dict["how"] }) {
  const [tick, setTick] = useState(3);

  useEffect(() => {
    let reduce = false;
    try {
      reduce = !!(
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    } catch {
      // matchMedia unavailable: keep animating.
    }
    if (reduce) return;
    const timer = setInterval(() => {
      setTick((v) => (v + 1) % 8);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  const showReply = tick >= 1;
  const showAsk = tick >= 2;
  const showAnswer = tick >= 3;

  return (
    <figure className="demo" aria-label={t.figureAria}>
      <div className="demo-row">
        {/* Claude-style chat */}
        <div className="demo-col">
          <div className="demo-rule" aria-hidden="true">
            <span>01</span>
            <span className="line" />
          </div>
          <h3>{t.step1Title}</h3>
          <div className="chat chat--claude">
            <div className="chat-head">
              <span className="title">
                {t.claudeChatTitle}
                <ChevronIcon className="mi chev" />
              </span>
              <span className="avatar" aria-hidden="true">
                L
              </span>
            </div>
            <div className="chat-body">
              <p
                className="bubble pop"
                dangerouslySetInnerHTML={{ __html: t.claudeMsgHtml }}
              />
              {showReply && (
                <div className="chat-reply pop">
                  <p>{t.claudeReply}</p>
                  <div className="reply-icons" aria-hidden="true">
                    <img src="/logos/claude-chat.svg" alt="" />
                    <CopyIcon />
                    <ThumbUpIcon />
                    <ThumbDownIcon />
                  </div>
                </div>
              )}
            </div>
            <div className="composer-claude" aria-hidden="true">
              <span className="ph">{t.claudeComposer}</span>
              <div className="bar">
                <span className="plus">
                  <PlusIcon />
                </span>
                <span className="send">
                  <SendArrowIcon />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* /workspace in the middle */}
        <div className="demo-mid">
          <svg viewBox="0 0 140 14" aria-hidden="true" className="arrows">
            <path d="M3 7H137" />
            <path d="M8 2L3 7L8 12" />
            <path d="M132 2L137 7L132 12" />
          </svg>
          <span className="wm-box">
            <span className="slash">/</span>workspace
          </span>
          <span className="synced" style={{ opacity: showReply ? 1 : 0.25 }}>
            {t.synced}
          </span>
        </div>

        {/* ChatGPT-style chat */}
        <div className="demo-col">
          <div className="demo-rule" aria-hidden="true">
            <span>02</span>
            <span className="line" />
          </div>
          <h3>{t.step2Title}</h3>
          <div className="chat chat--gpt">
            <div className="chat-head">
              <span className="title">
                <img
                  src="/logos/chatgpt-chat.svg"
                  alt=""
                  style={{ width: 20, height: 20, flex: "none", marginRight: 6 }}
                />
                ChatGPT
                <ChevronIcon className="mi chev" />
              </span>
              <span className="avatar" aria-hidden="true">
                A
              </span>
            </div>
            <div className="chat-body">
              {showAsk && (
                <p
                  className="bubble pop"
                  dangerouslySetInnerHTML={{ __html: t.gptMsgHtml }}
                />
              )}
              {showAnswer && (
                <div className="chat-reply pop">
                  <p>{t.gptAnswer}</p>
                  <div className="reply-icons" aria-hidden="true">
                    <CopyIcon />
                    <ThumbUpIcon />
                    <ThumbDownIcon />
                  </div>
                </div>
              )}
            </div>
            <div className="composer-gpt" aria-hidden="true">
              <PlusIcon className="mi plus" />
              <span className="ph">{t.gptComposer}</span>
              <MicIcon className="mi mic" />
              <span className="send">
                <SendArrowIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="demo-caption">{t.caption}</figcaption>
    </figure>
  );
}
