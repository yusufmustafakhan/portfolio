import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <AnimatedSection>
      <section id="projects" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Featured Work"
            description="Frameworks, workflows, and dashboards that make Microsoft partner operations predictable at scale."
          />

          <div className="grid items-stretch gap-8 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
}
