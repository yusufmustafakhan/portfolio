import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import Skills from "@/components/skills/Skills";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CertificationGrid from "@/components/certifications/CertificationGrid";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ExperiencePreview />
      <Skills />
      <FeaturedProjects />
      <CertificationGrid />
      <ContactCTA />
    </main>
  );
}
