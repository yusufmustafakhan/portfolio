import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  const classes = [
    "rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur-xl transition-all duration-300",
    hover &&
      "hover:-translate-y-2 hover:border-sky-500 hover:shadow-sky-900/20 motion-reduce:hover:translate-y-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
