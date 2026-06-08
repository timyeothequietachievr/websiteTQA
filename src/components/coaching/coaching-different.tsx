import { ContainedBand } from "@/components/revamp/primitives";
import { COACHING_DIFFERENT, type CoachingDifferentParagraph } from "@/lib/coaching-content";

function DifferentParagraph({ segments }: CoachingDifferentParagraph) {
  return (
    <p>
      {segments.map((segment, index) =>
        segment.bold ? (
          <strong key={index} className="font-semibold text-ink">
            {segment.text}
          </strong>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </p>
  );
}

function IdentitySkillsGraphic() {
  return (
    <div
      className="@container flex min-h-[clamp(120px,28vw,220px)] w-full items-center justify-center overflow-hidden rounded-lg bg-ink-deep px-4 py-8 shadow-[0_20px_40px_-24px_rgba(26,26,58,0.45)] ring-1 ring-ink/20 sm:min-h-[clamp(140px,24vw,240px)] sm:px-6 sm:py-10 lg:px-8 lg:py-12"
      aria-hidden
    >
      <p
        className="font-display max-w-full text-center font-semibold leading-tight tracking-tight text-paper"
        style={{
          fontSize: "clamp(22px, 11cqw, 56px)",
          letterSpacing: "-0.03em",
        }}
      >
        <span className="inline-block">identity</span>
        <span className="mx-1.5 inline-block text-ember sm:mx-3" style={{ fontWeight: 400 }}>
          |
        </span>
        <span className="inline-block">skills</span>
      </p>
    </div>
  );
}

export function CoachingDifferent() {
  return (
    <ContainedBand tone="sunrise" padY="clamp(40px, 5vw, 64px)" className="border-t border-charcoal/10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-8">
          <h2 className="order-1 font-display text-2xl font-semibold text-ink sm:text-3xl lg:col-start-1 lg:row-start-1">
            {COACHING_DIFFERENT.title}
          </h2>

          <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <IdentitySkillsGraphic />
          </div>

          <div className="order-3 space-y-4 font-reading text-[17px] leading-relaxed text-ink/85 lg:col-start-1 lg:row-start-2">
            {COACHING_DIFFERENT.paragraphs.map((paragraph, index) => (
              <DifferentParagraph key={index} segments={paragraph.segments} />
            ))}
          </div>
        </div>
      </div>
    </ContainedBand>
  );
}
