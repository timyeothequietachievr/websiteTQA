"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";
import { TONI_SUGGESTED_SCENARIOS } from "@/lib/toni/scenarios";

type UIMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  escalated?: boolean;
  pending?: boolean;
  feedback?: FeedbackRating;
};

type FeedbackRating = "helpful" | "not-useful" | "not-tim" | "ask-tim";

const ESCALATED_SENTINEL = "\n\n<<ESCALATED>>";

const feedbackLabels: Record<FeedbackRating, string> = {
  helpful: "Helpful",
  "not-useful": "Not useful",
  "not-tim": "Doesn't sound like Tim",
  "ask-tim": "Ask Tim",
};

export function ToniChat() {
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [conversationId, setConversationId] = useState(() => crypto.randomUUID());
  const transcriptRef = useRef<HTMLDivElement>(null);
  const suggested = useMemo(() => TONI_SUGGESTED_SCENARIOS, []);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    const userMessage: UIMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    const assistantId = crypto.randomUUID();
    const assistantMessage: UIMessage = {
      id: assistantId,
      role: "assistant",
      content: "",
      pending: true,
    };
    const nextMessages = [...messages, userMessage, assistantMessage];

    setMessages(nextMessages);
    setInput("");
    setSending(true);
    queueMicrotask(() => {
      transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight });
    });

    try {
      const response = await fetch("/api/toni/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })),
        }),
      });

      const responseConversationId = response.headers.get("X-Conversation-Id");
      if (responseConversationId) setConversationId(responseConversationId);

      const text = await response.text();
      if (!response.ok) throw new Error(text || `HTTP ${response.status}`);

      const escalated = text.includes(ESCALATED_SENTINEL);
      const cleanText = escalated ? text.replace(ESCALATED_SENTINEL, "") : text;

      setMessages((current) =>
        current.map((message) =>
          message.id === assistantId
            ? { ...message, content: cleanText, escalated, pending: false }
            : message,
        ),
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setMessages((current) =>
        current.map((item) =>
          item.id === assistantId
            ? {
                ...item,
                content: `I couldn't reach Toni's local model.\n\n${message}`,
                pending: false,
                escalated: true,
              }
            : item,
        ),
      );
    } finally {
      setSending(false);
    }
  }

  async function rate(message: UIMessage, rating: FeedbackRating) {
    const previousUser = [...messages]
      .slice(0, messages.findIndex((item) => item.id === message.id))
      .reverse()
      .find((item) => item.role === "user");

    setMessages((current) =>
      current.map((item) => (item.id === message.id ? { ...item, feedback: rating } : item)),
    );

    await fetch("/api/toni/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        conversationId,
        messageId: message.id,
        rating,
        question: previousUser?.content ?? "",
        answer: message.content,
      }),
    }).catch(() => undefined);
  }

  async function saveCorrection(message: UIMessage, correction: string) {
    const trimmed = correction.trim();
    if (!trimmed) return;

    const previousUser = [...messages]
      .slice(0, messages.findIndex((item) => item.id === message.id))
      .reverse()
      .find((item) => item.role === "user");

    await fetch("/api/toni/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        conversationId,
        messageId: message.id,
        rating: "not-tim",
        correction: trimmed,
        question: previousUser?.content ?? "",
        answer: message.content,
      }),
    }).catch(() => undefined);

    setMessages((current) =>
      current.map((item) =>
        item.id === message.id ? { ...item, feedback: "not-tim" } : item,
      ),
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    send(input);
  }

  return (
    <div className="grid min-h-[720px] grid-cols-1 overflow-hidden rounded-[10px] border border-charcoal/10 bg-paper-soft lg:grid-cols-[320px_minmax(0,1fr)]">
      <aside className="border-b border-charcoal/10 bg-paper p-5 lg:border-r lg:border-b-0">
        <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-ember uppercase">
          Conversation lab
        </p>
        <h2 className="mt-3 font-display text-2xl leading-tight font-semibold text-charcoal">
          Test Toni on real workplace situations.
        </h2>
        <p className="mt-3 font-reading text-sm leading-relaxed text-warm-700">
          Start with a scenario below, then rate the answer. The goal for this MVP is not polish.
          It is learning what Toni gets right, what feels generic, and when Tim should step in.
        </p>

        <div className="mt-6 space-y-2">
          {suggested.map((scenario) => (
            <button
              key={scenario}
              type="button"
              onClick={() => send(scenario)}
              disabled={sending}
              className="w-full rounded-lg border border-charcoal/10 bg-paper-soft px-3 py-3 text-left font-sans text-sm leading-snug text-charcoal transition hover:border-ember/40 hover:bg-paper disabled:opacity-50"
            >
              {scenario}
            </button>
          ))}
        </div>
      </aside>

      <section className="flex min-h-0 flex-col">
        <div ref={transcriptRef} className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            {messages.length === 0 ? (
              <div className="rounded-2xl border border-charcoal/10 bg-paper p-6">
                <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-ember uppercase">
                  Toni alpha
                </p>
                <h1 className="mt-3 font-display text-4xl leading-[0.98] font-semibold text-charcoal sm:text-5xl">
                  What specific situation are you navigating?
                </h1>
                <p className="mt-4 max-w-2xl font-reading text-base leading-relaxed text-warm-700">
                  Ask about a meeting, feedback conversation, saying no, visibility, interviews,
                  public speaking, or managing up. Toni will answer from Tim&apos;s current coaching playbook.
                </p>
              </div>
            ) : null}

            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                onRate={rate}
                onSaveCorrection={saveCorrection}
              />
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="border-t border-charcoal/10 bg-paper px-5 py-4 sm:px-8">
          <div className="mx-auto flex max-w-3xl gap-3">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  send(input);
                }
              }}
              disabled={sending}
              rows={2}
              placeholder="Tell Toni the situation..."
              className="min-h-14 flex-1 resize-none rounded-xl border border-charcoal/15 bg-paper-soft px-4 py-3 font-reading text-sm leading-relaxed text-charcoal outline-none transition focus:border-ember disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="self-end rounded-lg bg-ember px-5 py-3 font-sans text-sm font-bold text-paper transition hover:bg-ember-deep disabled:cursor-not-allowed disabled:opacity-45"
            >
              {sending ? "Thinking" : "Send"}
            </button>
          </div>
          <p className="mx-auto mt-2 max-w-3xl font-mono text-[11px] tracking-[0.12em] text-warm-500 uppercase">
            Enter to send · Shift+Enter for a new line · feedback is saved locally
          </p>
        </form>
      </section>
    </div>
  );
}

function MessageBubble({
  message,
  onRate,
  onSaveCorrection,
}: {
  message: UIMessage;
  onRate: (message: UIMessage, rating: FeedbackRating) => void;
  onSaveCorrection: (message: UIMessage, correction: string) => Promise<void>;
}) {
  const isUser = message.role === "user";
  const [correction, setCorrection] = useState("");
  const [savingCorrection, setSavingCorrection] = useState(false);
  const [correctionSaved, setCorrectionSaved] = useState(false);

  async function submitCorrection() {
    if (!correction.trim() || savingCorrection) return;
    setSavingCorrection(true);
    await onSaveCorrection(message, correction);
    setCorrectionSaved(true);
    setSavingCorrection(false);
  }

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={
          "max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap " +
          (isUser
            ? "rounded-br-md bg-ink text-paper"
            : "rounded-bl-md border border-charcoal/10 bg-paper font-reading text-charcoal")
        }
      >
        {message.pending ? "Toni is thinking..." : message.content}
        {message.escalated ? (
          <div className="mt-3 inline-flex rounded-md bg-sunrise/20 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.14em] text-ember-deep uppercase">
            Flagged for Tim
          </div>
        ) : null}
        {!isUser && !message.pending ? (
          <div className="mt-4 border-t border-charcoal/10 pt-3">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(feedbackLabels) as FeedbackRating[]).map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => onRate(message, rating)}
                  className={
                    "rounded-full border px-3 py-1 font-sans text-[12px] font-semibold transition " +
                    (message.feedback === rating
                      ? "border-ember bg-ember text-paper"
                      : "border-charcoal/15 bg-paper-soft text-charcoal hover:border-ember/50")
                  }
                >
                  {feedbackLabels[rating]}
                </button>
              ))}
            </div>
            <div className="mt-3 rounded-xl border border-charcoal/10 bg-paper-soft p-3">
              <label className="font-mono text-[10px] font-bold tracking-[0.14em] text-warm-500 uppercase">
                What would Tim say instead?
              </label>
              <textarea
                value={correction}
                onChange={(event) => {
                  setCorrection(event.target.value);
                  setCorrectionSaved(false);
                }}
                rows={3}
                placeholder="Rough is fine. Write the version that sounds more like you..."
                className="mt-2 w-full resize-none rounded-lg border border-charcoal/15 bg-paper px-3 py-2 font-reading text-sm leading-relaxed text-charcoal outline-none focus:border-ember"
              />
              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="font-sans text-[12px] text-warm-500">
                  {correctionSaved ? "Saved. This can become a golden example." : "Saved locally for prompt tuning."}
                </p>
                <button
                  type="button"
                  onClick={submitCorrection}
                  disabled={!correction.trim() || savingCorrection}
                  className="rounded-md bg-ink px-3 py-1.5 font-sans text-[12px] font-bold text-paper transition hover:bg-ink-deep disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {savingCorrection ? "Saving" : "Save correction"}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
