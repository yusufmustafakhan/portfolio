import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="SKILLS & EXPERTISE"
            title="Partner Ecosystem & Microsoft Cloud Expertise"
            description="Partner strategy, CSP operations, Microsoft Cloud platforms, and the tools I use every day to make partner operations predictable at scale."
          />

          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur sm:p-8"
              >
                <h3 className="mb-8 text-2xl font-bold text-white">{category.title}</h3>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <span className="min-w-0 break-words text-slate-300">{skill.name}</span>
                        <span className="shrink-0 font-semibold text-sky-400">{skill.level}%</span>
                      </div>

                      <div
                        className="h-3 overflow-hidden rounded-full bg-slate-800"
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
}
