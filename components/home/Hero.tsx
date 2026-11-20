import { ArrowRight, Download, Mail } from "lucide-react";

import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import Button from "@/components/common/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <AnimatedSection>
      <section id="home" className="pt-36 pb-24 md:pt-44">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="inline-flex rounded-full border border-sky-700/40 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
                {profile.title} · {profile.company}
              </p>

              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
                {profile.heroDescription}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/experience">
                  View My Experience
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Button href="/contact" variant="secondary">
                  <Mail size={18} aria-hidden="true" />
                  Get in Touch
                </Button>
                <Button href={profile.resume} variant="secondary" download>
                  <Download size={18} aria-hidden="true" />
                  Résumé
                </Button>
              </div>
            </div>

            <div className="mx-auto">
              {profile.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-64 w-64 rounded-full border-4 border-sky-500/40 object-cover shadow-2xl shadow-sky-900/40 md:h-80 md:w-80"
                />
              ) : (
                <div className="flex h-64 w-64 items-center justify-center rounded-full border-4 border-sky-500/40 bg-gradient-to-br from-sky-600 to-cyan-500 text-7xl font-bold text-white shadow-2xl shadow-sky-900/40 md:h-80 md:w-80">
                  {initials}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {profile.stats.map((stat) => (
              <GlassCard key={stat.label} className="p-6 text-center">
                <p className="text-3xl font-bold text-sky-400 sm:text-4xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
}
