import type { Metadata } from "next";
import { Mail, MapPin, Briefcase, Download, CircleCheck } from "lucide-react";
import { FaGithub, FaLinkedin, FaMicrosoft } from "react-icons/fa";
import type { IconType } from "react-icons";

import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import GlassCard from "@/components/common/GlassCard";
import Button from "@/components/common/Button";
import ContactForm from "@/components/contact/ContactForm";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about Microsoft partner alliances, CSP operations, Partner Center governance, or career opportunities.",
};

const helpTopics = [
  "Microsoft partner alliances and technical partnerships",
  "CSP operations, billing and subscription lifecycle",
  "Partner Center governance, access and compliance",
  "MCA readiness and licensing escalations",
  "Partner enablement and go-to-market alignment",
];

const socialIcons: Record<string, IconType> = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  "Microsoft Learn": FaMicrosoft,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <AnimatedSection>
        <Container>
          <SectionHeading
            eyebrow="CONTACT"
            title="Let's Connect"
            description="Whether you're at Microsoft, a distributor, a reseller, or a technology partner — I'd love to hear from you."
          />

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left: details */}
            <div className="space-y-6 lg:col-span-2">
              <GlassCard className="p-6 sm:p-8" hover={false}>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-sky-400" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-sm text-slate-500">Email</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="break-all text-white transition hover:text-sky-400"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-sky-400" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p>{profile.location}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Briefcase className="mt-1 h-5 w-5 shrink-0 text-sky-400" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-slate-500">Availability</p>
                      <p>{profile.availability}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex gap-6 border-t border-white/10 pt-6">
                  {profile.socials.map((social) => {
                    const Icon = socialIcons[social.name];
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        title={social.name}
                        className="text-slate-400 transition hover:text-sky-400"
                      >
                        <Icon className="text-2xl" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-8" hover={false}>
                <h2 className="text-xl font-bold">What I can help with</h2>
                <ul className="mt-5 space-y-3">
                  {helpTopics.map((topic) => (
                    <li key={topic} className="flex gap-3 text-slate-300">
                      <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href={profile.resume} variant="secondary" download>
                    <Download size={18} aria-hidden="true" />
                    Download Résumé
                  </Button>
                </div>
              </GlassCard>
            </div>

            {/* Right: form */}
            <GlassCard className="p-6 sm:p-8 lg:col-span-3" hover={false}>
              <h2 className="mb-6 text-xl font-bold">Send a message</h2>
              <ContactForm email={profile.email} />
            </GlassCard>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}
