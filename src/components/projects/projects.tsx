"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    name: "Chill Gamer",
    image1:
      "https://i.ibb.co.com/Ldzj8B88/Screenshot-2025-02-07-154625.png",
    image2:
      "https://i.ibb.co.com/Ldzj8B88/Screenshot-2025-02-07-154625.png",
    description:
      "Chill Gamer is a game review platform where users can explore, write, and share game reviews.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Firebase"],
    liveLink: "https://chill-gamer-493d7.web.app",
    github: "https://github.com/Khandaker-Mohyet/Chill-Gamer-client",
  },
  {
    name: "Car Booking Platform",
    image1:
      "https://i.ibb.co.com/LdWSGFxT/Screenshot-2025-02-07-154713.png",
    image2:
      "https://i.ibb.co.com/LdWSGFxT/Screenshot-2025-02-07-154713.png",
    description: "Car booking platform for exploring cars and reservations.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Firebase"],
    liveLink: "https://car-rental-750a3.web.app/",
    github: "https://github.com/Khandaker-Mohyet/Car-Rental",
  },
  { name: "Study Platform", 
    image1: "https://i.ibb.co.com/Q389MNxK/Screenshot-2025-02-07-154800.png", 
    image2: "https://i.ibb.co.com/Q389MNxK/Screenshot-2025-02-07-154800.png", description: "Collaborative study platform for students, tutors, and administrators.", 
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Firebase"], 
    liveLink: "https://study-platform-ba93a.web.app", 
    github: "https://github.com/Khandaker-Mohyet/Study-Platform", },
];

const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // ✅ ULTRA RELIABLE HEIGHT CALCULATION
  useEffect(() => {
    const updateHeight = () => {
      if (!contentRef.current) return;

      const totalHeight =
        contentRef.current.offsetHeight +
        contentRef.current.getBoundingClientRect().top;

      setHeight(totalHeight);
    };

    // initial
    setTimeout(updateHeight, 200);

    window.addEventListener("resize", updateHeight);
    window.addEventListener("load", updateHeight);

    // image load হলে আবার height নাও
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      img.addEventListener("load", updateHeight);
    });

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("load", updateHeight);

      imgs.forEach((img) => {
        img.removeEventListener("load", updateHeight);
      });
    };
  }, []);

  // ✅ BETTER OFFSET FOR FULL SECTION
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-background text-foreground
      px-5 lg:px-8 xl:px-[8%]"
    >
      <div className="pt-16 lg:pt-28">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Showcase of My Work
        </h2>

        <p className="text-muted-foreground max-w-md">
          A collection of my real-world projects and learning journey
        </p>
      </div>

      <div ref={contentRef} className="relative pb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            {/* ===== LEFT STICKY ===== */}
            <div
              className="sticky flex flex-col md:flex-row z-40 
              items-center top-32 self-start 
              max-w-xs lg:max-w-md md:w-[42%]"
            >
              {/* DOT */}
              <div
                className="h-10 absolute left-3 md:left-3 w-10 
                rounded-full bg-card border
                flex items-center justify-center"
              >
                <div
                  className="h-4 w-4 rounded-full 
                  bg-muted border"
                />
              </div>

              <div className="hidden md:block md:pl-20">
                <h3 className="text-4xl font-bold text-foreground">
                  {project.name}
                </h3>

                <p className="my-4 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                      bg-muted text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-lg 
                    bg-primary text-primary-foreground"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-lg 
                    border bg-card"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* ===== RIGHT CONTENT ===== */}
            <div className="relative pl-20 pr-4 md:pl-4 md:w-[58%]">
              {/* MOBILE */}
              <div className="md:hidden mb-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.name}
                </h3>

                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* IMAGES */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <img
                  src={project.image1}
                  className="rounded-xl shadow-lg w-[88%] mx-auto border bg-card"
                />
                <img
                  src={project.image2}
                  className="rounded-xl shadow-lg w-[88%] mx-auto border bg-card"
                />
              </div>
            </div>
          </div>
        ))}

        {/* ===== ANIMATED LINE ===== */}
        <div
          style={{ height }}
          className="absolute md:left-8 left-8 top-0 w-[2px]
          bg-gradient-to-b from-transparent 
          via-border to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px]
            bg-gradient-to-t from-primary via-blue-500 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
