import type { Metadata } from "next";

import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career journey from cloud operations to leading technical partner alliances across the Microsoft CSP ecosystem.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <AnimatedSection>
        <Container>
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Career Journey"
            description="From cloud operations to leading technical partner alliances across the Microsoft CSP ecosystem."
          />

          <div className="space-y-8">
            {experience.map((exp) => (
              <ExperienceCard key={`${exp.company}-${exp.role}-${exp.period}`} {...exp} />
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}
