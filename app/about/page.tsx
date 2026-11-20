import type { Metadata } from "next";
import { MapPin, Briefcase, CalendarDays, GraduationCap } from "lucide-react";

import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import GlassCard from "@/components/common/GlassCard";
import Button from "@/components/common/Button";
import { profile, education } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.summary,
};

export default function AboutPage() {
  const quickFacts = [
    { icon: Briefcase, label: "Current Role", value: `${profile.title}, ${profile.company}` },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: CalendarDays, label: "Experience", value: `${profile.yearsExperience}+ years` },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <AnimatedSection>
        <Container>
          <SectionHeading
            eyebrow="ABOUT ME"
            title="Microsoft Partner Ecosystem Leader"
            description="Connecting Microsoft, distributors, resellers, and partners through technical strategy, CSP enablement, governance, and Microsoft Cloud & AI solutions."
          />

          {/* Summary & Mission */}
          <GlassCard className="p-6 sm:p-10" hover={false}>
            <p className="text-lg leading-8 text-slate-300">{profile.summary}</p>

            {profile.mission && (
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">
                  My Mission
                </p>
                <p className="text-lg leading-8 text-slate-300">{profile.mission}</p>
              </div>
            )}
          </GlassCard>

          {/* Quick Facts */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {quickFacts.map(({ icon: Icon, label, value }) => (
              <GlassCard key={label} className="p-6" hover={false}>
                <Icon className="h-7 w-7 text-sky-400" aria-hidden="true" />
                <p className="mt-4 text-sm uppercase tracking-widest text-slate-500">{label}</p>
                <p className="mt-1 font-semibold text-white">{value}</p>
              </GlassCard>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {profile.stats.map((stat) => (
              <GlassCard key={stat.label} className="p-6 text-center">
                <p className="text-4xl font-bold text-sky-400">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </GlassCard>
            ))}
          </div>

          {/* Core Expertise */}
          <div className="mt-20">
            <h2 className="mb-8 text-2xl font-bold">Core Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {profile.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-sky-700/40 bg-sky-500/10 px-4 py-2 text-sm text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <h2 className="mb-8 text-2xl font-bold">Education</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((edu) => (
                <GlassCard key={edu.school} className="p-6" hover={false}>
                  <GraduationCap className="h-7 w-7 text-sky-400" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold">{edu.school}</h3>
                  <p className="mt-1 text-slate-300">{edu.degree}</p>
                  <p className="mt-1 text-sm text-slate-500">{edu.period}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 flex flex-wrap justify-center gap-4">
            <Button href="/experience">View My Experience</Button>
            <Button href={profile.resume} variant="secondary" download>
              Download Résumé
            </Button>
            <Button href={profile.linkedin} variant="secondary">
              LinkedIn
            </Button>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}
