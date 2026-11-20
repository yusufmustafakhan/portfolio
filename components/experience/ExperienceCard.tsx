import GlassCard from "@/components/common/GlassCard";

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
};

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
  highlights = [],
  technologies = [],
}: ExperienceCardProps) {
  const isCurrent = period.toLowerCase().includes("present");

  return (
    <GlassCard className="p-6 sm:p-8" hover={false}>
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold text-white">{company}</h3>
            {isCurrent && (
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                Current
              </span>
            )}
          </div>
          <p className="mt-1 font-medium text-sky-400">{role}</p>
        </div>

        <div className="text-sm text-slate-400 md:shrink-0 md:text-right">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>

      <p className="mt-6 leading-8 text-slate-300">{description}</p>

      {highlights.length > 0 && (
        <ul className="mt-6 space-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-slate-300">
              <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {technologies.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-sky-700/40 bg-sky-500/10 px-4 py-2 text-sm text-sky-300 transition hover:border-sky-500"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
