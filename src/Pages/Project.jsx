import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product catalog, shopping cart, and secure checkout process.",
      image: "https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
      image: "https://static.vecteezy.com/system/resources/previews/006/506/843/non_2x/unique-modern-flat-design-concept-of-task-management-for-website-and-mobile-website-easy-to-edit-and-customize-illustration-free-vector.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather information with interactive maps, forecasts, and location-based services.",
      image: "https://play-lh.googleusercontent.com/_q9Sm5CjBSJzdbi41S-OFuYJlpL65mNrDxvTTOhUh4z165EOTAYlsI9sKdZuGMv6YCY=w526-h296-rw",
      technologies: ["Vue.js", "Express", "OpenWeather API", "Mapbox"],
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "Data visualization platform for tracking engagement metrics across multiple social media channels.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nJ2mK80lp-qTnHLBKS_-fw7FZ5Nly8uQxw&s",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing projects and skills with a modern, responsive design.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKh7PTcPoUVdv7MgIAVGpEDD0amCk5EN-olw&s",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Shadcn"],
      demoUrl: "#",
      sourceUrl: "#",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-color-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-color-1 text-center md:text-left">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#222121] hover:shadow-[0_0_15px_rgba(91,93,220,110.3)] hover:-translate-y-1 rounded-xl overflow-hidden shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="relative h-60 w-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#5B5DDC]">{project.title}</h3>
                <p className="text-color-5 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-[#5B5DDC]/10 text-[#6f71e3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#5B5DDC] font-medium hover:text-[#4A4CB8] transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#5B5DDC] font-medium hover:text-[#4A4CB8] transition-colors"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
