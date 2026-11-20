import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import GlassCard from "@/components/common/GlassCard";
import Button from "@/components/common/Button";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <AnimatedSection>
      <section id="about" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="ABOUT ME"
            title="Microsoft Partner Ecosystem Leader"
            description="Connecting Microsoft, distributors, resellers, and partners through technical strategy, CSP enablement, governance, and Microsoft Cloud & AI solutions."
          />

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

            <div className="mt-8">
              <Button href="/about" variant="secondary">
                More About Me
              </Button>
            </div>
          </GlassCard>
        </Container>
      </section>
    </AnimatedSection>
  );
}
