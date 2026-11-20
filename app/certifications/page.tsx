import type { Metadata } from "next";

import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import CertificationCard from "@/components/certifications/CertificationCard";
import { certifications } from "@/data/certifications";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Microsoft certifications across Azure, AI, Microsoft 365 and Copilot, plus additional credentials, achievements, and publications.",
};

const microsoftCerts = certifications.filter((cert) => cert.issuer === "Microsoft");
const otherCerts = certifications.filter((cert) => cert.issuer !== "Microsoft");

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <AnimatedSection>
        <Container>
          <SectionHeading
            eyebrow="CERTIFICATIONS"
            title="Certifications & Achievements"
            description="Microsoft certifications across Azure, AI, Microsoft 365 and Copilot — plus additional credentials, achievements, and publications."
          />

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">
              Microsoft Certifications
              <span className="ml-3 rounded-full bg-sky-500/15 px-3 py-1 align-middle text-sm font-semibold text-sky-300">
                {microsoftCerts.length}
              </span>
            </h2>

            <Button href={profile.microsoftLearn} variant="secondary">
              View Microsoft Learn Profile
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {microsoftCerts.map((cert) => (
              <CertificationCard key={cert.id} {...cert} />
            ))}
          </div>

          {otherCerts.length > 0 && (
            <>
              <h2 className="mt-20 mb-8 text-2xl font-bold">Other Certifications & Achievements</h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {otherCerts.map((cert) => (
                  <CertificationCard key={cert.id} {...cert} />
                ))}
              </div>
            </>
          )}
        </Container>
      </AnimatedSection>
    </main>
  );
}
