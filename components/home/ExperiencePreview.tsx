import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperiencePreview() {
  const recent = experience.slice(0, 2);

  return (
    <AnimatedSection>
      <section id="experience" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Recent Roles"
            description="From cloud operations to leading technical partner alliances across the Microsoft CSP ecosystem."
          />

          <div className="space-y-8">
            {recent.map((exp) => (
              <ExperienceCard key={`${exp.company}-${exp.role}-${exp.period}`} {...exp} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/experience" variant="secondary">
              View Full Career Journey
            </Button>
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
}
