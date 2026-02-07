import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";

const skills = [
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for building modern UI.",
    icon: <SiTailwindcss className="text-6xl text-teal-500" />,
  },
  {
    name: "JavaScript",
    description: "Programming language for building interactive web apps.",
    icon: <FaJsSquare className="text-6xl text-yellow-500" />,
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript for scalable applications.",
    icon: <SiTypescript className="text-6xl text-blue-500" />,
  },
  {
    name: "React",
    description: "Library for building reusable UI components.",
    icon: <FaReact className="text-6xl text-blue-400" />,
  },
  {
    name: "MongoDB",
    description: "NoSQL database for modern applications.",
    icon: <SiMongodb className="text-6xl text-green-600" />,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for building backend services.",
    icon: <FaNodeJs className="text-6xl text-green-500" />,
  },
  {
    name: "Express.js",
    description: "Minimal backend framework for Node.js.",
    icon: <SiExpress className="text-6xl text-gray-600" />,
  },
  {
    name: "Firebase",
    description: "Backend-as-a-Service for authentication and hosting.",
    icon: <SiFirebase className="text-6xl text-orange-500" />,
  },
];

const SkillsSection = () => {
    return (
  <section className="py-20  transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build scalable and high-performance web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group
              relative
              rounded-2xl
              border border-gray-200 dark:border-slate-700
              bg-white/70 dark:bg-slate-800/70
              backdrop-blur-xl
              p-8
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            {/* Subtle Gradient Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>

            {/* Icon */}
            <div className="mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-slate-700 shadow-sm group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 relative z-10">
              {skill.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default SkillsSection;