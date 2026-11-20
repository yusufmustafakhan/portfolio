import type { Metadata } from "next";

import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Governance frameworks, workflow automation, and dashboards for Microsoft partner and CSP operations.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <AnimatedSection>
        <Container>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Projects & Programs"
            description="Frameworks, workflows, and dashboards that make Microsoft partner operations predictable at scale."
          />

          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} detailed />
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}
