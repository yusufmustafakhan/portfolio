import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import CertificationCard from "@/components/certifications/CertificationCard";
import { certifications } from "@/data/certifications";

const microsoftCerts = certifications.filter((cert) => cert.issuer === "Microsoft");
const otherCerts = certifications.filter((cert) => cert.issuer !== "Microsoft");

export default function CertificationGrid() {
  return (
    <AnimatedSection>
      <section id="certifications" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="CERTIFICATIONS"
            title="Certifications & Achievements"
            description="Microsoft certifications across Azure, AI, Microsoft 365 and Copilot — plus additional credentials, achievements, and publications."
          />

          <h3 className="mb-8 text-2xl font-bold text-white">Microsoft Certifications</h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {microsoftCerts.map((cert) => (
              <CertificationCard key={cert.id} {...cert} />
            ))}
          </div>

          {otherCerts.length > 0 && (
            <>
              <h3 className="mt-20 mb-8 text-2xl font-bold text-white">
                Other Certifications & Achievements
              </h3>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {otherCerts.map((cert) => (
                  <CertificationCard key={cert.id} {...cert} />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </AnimatedSection>
  );
}
