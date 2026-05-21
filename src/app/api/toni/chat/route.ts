import { NextRequest } from "next/server";
import { appendToniLog } from "@/lib/toni/logging";
import { buildToniSystemPrompt, type ToniChatMessage } from "@/lib/toni/prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ESCALATE_TAG_RE = /\[ESCALATE\]\s*$/m;

type Body = {
  conversationId?: string;
  messages?: ToniChatMessage[];
};

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as Body | null;
  const messages = body?.messages?.filter(isValidMessage) ?? [];

  if (messages.length === 0) {
    return new Response("messages is required", { status: 400 });
  }

  const conversationId = body?.conversationId || crypto.randomUUID();
  const latestUser = [...messages].reverse().find((message) => message.role === "user");

  try {
    const answer = await completeWithToni(messages);
    const escalated = ESCALATE_TAG_RE.test(answer);
    const cleanAnswer = escalated ? answer.replace(ESCALATE_TAG_RE, "").trimEnd() : answer;
    const responseText = escalated ? `${cleanAnswer}\n\n<<ESCALATED>>` : cleanAnswer;

    await appendToniLog("conversations.jsonl", {
      conversationId,
      user: latestUser?.content ?? "",
      assistant: cleanAnswer,
      escalated,
      messages,
    });

    return new Response(responseText, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Conversation-Id": conversationId,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    await appendToniLog("errors.jsonl", {
      conversationId,
      user: latestUser?.content ?? "",
      error: message,
    });

    return new Response(
      `Error talking to Toni's local model: ${message}\n\nCheck LLM_BASE_URL and make sure LM Studio or another OpenAI-compatible server is running.`,
      { status: 502, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }
}

async function completeWithToni(messages: ToniChatMessage[]) {
  const baseURL = (process.env.LLM_BASE_URL ?? "http://127.0.0.1:1234/v1").replace(/\/$/, "");
  const apiKey = process.env.LLM_API_KEY ?? "lm-studio";
  const model = process.env.LLM_MODEL ?? "local-model";

  const response = await fetch(`${baseURL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.6,
      stream: false,
      messages: [
        { role: "system", content: buildToniSystemPrompt() },
        ...messages,
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(detail || `LLM returned HTTP ${response.status}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("LLM returned an empty response");
  }

  return content;
}

function isValidMessage(value: ToniChatMessage): value is ToniChatMessage {
  return (
    value &&
    (value.role === "user" || value.role === "assistant") &&
    typeof value.content === "string" &&
    value.content.trim().length > 0
  );
}
