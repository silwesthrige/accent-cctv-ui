import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title} {accent && <span className="text-gradient">{accent}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base text-foreground/60 sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
