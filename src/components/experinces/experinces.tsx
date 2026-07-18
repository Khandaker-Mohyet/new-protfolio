import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Instructor (Web Design & Development)",
    company: "Kapasia Skill Development Institute",
    period: "October 2025 – Running",
    description:
      "My responsibility is to teach web design and development concepts, assist students in solving coding problems, review their work, and ensure a supportive and effective learning environment as a mentor.",
    tech: ["JavaScript", "HTML5", "CSS3", "WordPress"],
    icon: GraduationCap,
  },
  {
    title: "Frontend Developer (CMS)",
    company: "Softvance Agency",
    period: "July 2025 – September 2025",
    description:
      "Built modern, responsive website experiences with CMS-focused workflows and polished front-end implementation.",
    tech: ["Webflow", "JavaScript", "HTML5", "CSS3"],
    icon: BriefcaseBusiness,
  },
  
];

const ExperincesSection = () => {
  return (
    <section id="experiences" className="relative overflow-hidden py-20">
      <AnimatedGridPattern
        numSquares={28}
        maxOpacity={0.08}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[160%]"
        )}
      />

      <div className="mx-auto px-6 py-4 lg:px-8 xl:px-[8%]">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Experience
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">My Journey So Far</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Professional experience and teaching roles shaped by practical web development and modern UI craftsmanship.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border/70 bg-background/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-muted/50 text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-medium text-muted-foreground">{item.company}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperincesSection;