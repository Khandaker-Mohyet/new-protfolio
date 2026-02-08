"use client";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magic-card";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for building modern UI.",
    icon: SiTailwindcss,
    color: "text-teal-500",
  },
  {
    name: "JavaScript",
    description: "Programming language for building interactive web apps.",
    icon: FaJsSquare,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript for scalable applications.",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "React",
    description: "Library for building reusable UI components.",
    icon: FaReact,
    color: "text-blue-400",
  },
  {
    name: "MongoDB",
    description: "NoSQL database for modern applications.",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for building backend services.",
    icon: FaNodeJs,
    color: "text-green-400",
  },
  {
    name: "Express.js",
    description: "Minimal backend framework for Node.js.",
    icon: SiExpress,
    color: "text-gray-500",
  },
  {
    name: "Firebase",
    description: "Backend-as-a-Service for authentication and hosting.",
    icon: SiFirebase,
    color: "text-orange-500",
  },
];

const SkillsSection = () => {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="lg:px-8 xl:px-[8%] py-4 mx-auto px-6">
        <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl text-xl dark:text-gray-400 mx-auto">
            Technologies and tools I use to build scalable and high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <MagicCard
                key={index}
                className="relative glass rounded-2xl p-6 gradient-border transition-all duration-300 hover:-translate-y-1 flex flex-col"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl animate-float flex items-center justify-start mb-4">
                  <Icon className={`w-10 h-10 ${skill.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;