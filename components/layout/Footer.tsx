import { FaGithub, FaLinkedin, FaMicrosoft } from "react-icons/fa";
import type { IconType } from "react-icons";

import Container from "@/components/common/Container";
import { profile } from "@/data/profile";

const socialIcons: Record<string, IconType> = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  "Microsoft Learn": FaMicrosoft,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 text-sm text-slate-400 md:flex-row">
        <p>
          © {year} {profile.name}. {profile.title} at {profile.company}.
        </p>

        <div className="flex gap-6">
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
                className="transition hover:text-sky-400"
              >
                <Icon className="text-xl" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
