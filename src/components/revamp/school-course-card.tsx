type SchoolTone = "ember" | "sunrise" | "ink" | "maroon";

const PALETTE: Record<SchoolTone, { bg: string; fg: string; muted: string; stripe: string }> = {
  ember: { bg: "#D54A2F", fg: "#F5F0D3", muted: "rgba(245,240,211,0.72)", stripe: "rgba(245,240,211,0.06)" },
  sunrise: { bg: "#E5A402", fg: "#2B2B52", muted: "rgba(43,43,82,0.72)", stripe: "rgba(43,43,82,0.06)" },
  ink: { bg: "#2B2B52", fg: "#F5F0D3", muted: "rgba(245,240,211,0.72)", stripe: "rgba(245,240,211,0.06)" },
  maroon: { bg: "#8A2A1C", fg: "#F5F0D3", muted: "rgba(245,240,211,0.72)", stripe: "rgba(245,240,211,0.06)" },
};

const TONES: SchoolTone[] = ["ember", "ink", "sunrise", "maroon", "ember", "ink"];

export const SCHOOL_COURSES = [
  { title: "Public speaking" },
  { title: "Difficult conversations" },
  { title: "Say no (politely)" },
  { title: "Facilitation" },
  { title: "Networking" },
  { title: "Executive communication & stakeholder influence" },
  { title: "Meetings: speak up & be seen" },
  { title: "Be more visible" },
  { title: "Interviews" },
  { title: "Management & leadership" },
  { title: "Small talk & introducing yourself with confidence" },
] as const;

function topicNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function tileStyle(tone: SchoolTone) {
  const colors = PALETTE[tone];
  return {
    background: colors.bg,
    color: colors.fg,
    backgroundImage: `repeating-linear-gradient(135deg, ${colors.stripe} 0 14px, transparent 14px 28px)`,
  };
}

function SchoolCourseCard({ title, index }: { title: string; index: number }) {
  const tone = TONES[index % TONES.length];
  const colors = PALETTE[tone];

  return (
    <div className="block rounded-lg ring-1 ring-charcoal/10">
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg" style={tileStyle(tone)}>
        <p
          className="pointer-events-none absolute -right-2 -top-4 font-display font-bold leading-none select-none"
          style={{
            fontSize: "clamp(88px, 14vw, 120px)",
            color: colors.muted,
            opacity: 0.22,
            letterSpacing: "-0.04em",
          }}
          aria-hidden
        >
          {topicNumber(index)}
        </p>
        <p
          className="absolute right-5 top-5 font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
          style={{ color: colors.muted }}
        >
          Topic
        </p>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p
            className="font-display max-w-[20ch] font-semibold leading-[1.08] tracking-[-0.02em]"
            style={{ fontSize: "clamp(19px, 2.2vw, 26px)", textWrap: "balance" }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SchoolCourseGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SCHOOL_COURSES.map((course, index) => (
        <SchoolCourseCard key={course.title} title={course.title} index={index} />
      ))}
    </div>
  );
}
