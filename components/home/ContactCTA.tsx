import { Mail, Download, MapPin, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin, FaMicrosoft } from "react-icons/fa";
import type { IconType } from "react-icons";

import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { profile } from "@/data/profile";

const socialIcons: Record<string, IconType> = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  "Microsoft Learn": FaMicrosoft,
};

const cardClass =
  "flex h-full flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center";

export default function ContactCTA() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-24">
        <Container>
          <div className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl sm:p-12">
            <SectionHeading
              eyebrow="LET'S CONNECT"
              title="Let's Grow the Microsoft Partner Ecosystem Together"
              description="Whether you're at Microsoft, a distributor, a reseller, or a technology partner — I'd love to talk about partner strategy, CSP enablement, governance, and making Microsoft Cloud & AI work at scale."
            />

            {/* Contact Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <a href={`mailto:${profile.email}`} className={`${cardClass} transition hover:border-sky-500`}>
                <Mail className="h-8 w-8 text-sky-400" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">Email</h3>
                <p className="mt-2 break-all text-slate-400">{profile.email}</p>
              </a>

              <div className={cardClass}>
                <MapPin className="h-8 w-8 text-sky-400" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">Location</h3>
                <p className="mt-2 text-slate-400">{profile.location}</p>
              </div>

              <div className={cardClass}>
                <Briefcase className="h-8 w-8 text-sky-400" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">Availability</h3>
                <p className="mt-2 text-slate-400">{profile.availability}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-14 flex flex-wrap justify-center gap-4">
              <Button href="/contact">
                <Mail size={18} aria-hidden="true" />
                Contact Me
              </Button>

              <Button href={profile.resume} variant="secondary" download>
                <Download size={18} aria-hidden="true" />
                Download Résumé
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center gap-8">
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
                    className="rounded-lg text-slate-400 transition hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <Icon className="text-3xl" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
}
