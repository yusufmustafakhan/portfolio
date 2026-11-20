import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const variants = {
  primary:
    "bg-sky-600 text-white hover:bg-sky-500 hover:scale-105 motion-reduce:hover:scale-100",
  secondary:
    "border border-slate-700 text-white hover:border-sky-500 hover:bg-slate-900",
};

export default function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
  download = false,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  const isExternal = /^https?:\/\//.test(href);
  const isSpecial =
    href.startsWith("mailto:") || href.startsWith("tel:") || href.endsWith(".pdf");

  if (isExternal || isSpecial || download) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        download={download || undefined}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
