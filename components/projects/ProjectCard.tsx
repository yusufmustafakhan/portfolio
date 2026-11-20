import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import GlassCard from "@/components/common/GlassCard";
import type { projects } from "@/data/projects";

type Project = (typeof projects)[number];

type Props = {
  project: Project;
  detailed?: boolean;
};

const statusStyles: Record<string, string> = {
  Production: "bg-emerald-500/15 text-emerald-300",
  "In Progress": "bg-amber-500/15 text-amber-300",
  Completed: "bg-sky-500/15 text-sky-300",
};

export default function ProjectCard({ project, detailed = false }: Props) {
  const statusClass = statusStyles[project.status] ?? "bg-slate-500/15 text-slate-300";

  return (
    <GlassCard className="flex h-full flex-col p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-sky-700/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
          {project.category}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}>
          {project.status}
        </span>
      </div>

      <h3 className="mt-5 text-balance text-2xl font-bold text-white">{project.title}</h3>
      <p className="mt-1 text-sm text-slate-500">{project.year}</p>

      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

      {detailed && (
        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Challenge</p>
            <p className="mt-2 leading-7 text-slate-300">{project.challenge}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Solution</p>
            <p className="mt-2 leading-7 text-slate-300">{project.solution}</p>
          </div>
        </div>
      )}

      {project.impact.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Impact</p>
          <ul className="mt-3 space-y-2">
            {project.impact.map((item) => (
              <li key={item} className="flex gap-3 text-slate-300">
                <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="mt-auto flex gap-4 pt-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              <FaGithub aria-hidden="true" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      )}
    </GlassCard>
  );
}
