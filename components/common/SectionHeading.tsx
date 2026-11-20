type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 ${isCenter ? "text-center" : "text-left"}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400 sm:tracking-[0.35em]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-400 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
