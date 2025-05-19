import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Ani_image from '@/assets/pictures/ani-gpt.png';

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ani-gpt",
      description:
        "Developed a responsive AI assistant platform, featuring an intuitive and friendly interface. The website delivers sophisticated responses while maintaining exceptional user experience across all devices.",
      image: Ani_image,
      technologies: ["React", "Javascript", "Tailwind css", "Framer-motion","Shadcn","Supabase"],
      demoUrl: "https://ani-gpt.netlify.app/",
      sourceUrl: "https://github.com/VIKASGULIA17/Gemini-Clone",
    },
    {
      id: 2,
      title: "Nerverse",
      description:
        "Developed NexVerse's official platform for IITM Janakpuri's tech society. Features an engaging interface showcasing events, activities, and member achievements.",
      image: "https://static.vecteezy.com/system/resources/previews/006/506/843/non_2x/unique-modern-flat-design-concept-of-task-management-for-website-and-mobile-website-easy-to-edit-and-customize-illustration-free-vector.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      demoUrl: "https://nexverse-lake.vercel.app/event/celestia",
      sourceUrl: "https://github.com/tejveer755/Nexverse",
    },
    
    
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Designed and built my professional portfolio. Features an intuitive interface showcasing my projects, skills, and experience with responsive design and smooth animations for optimal user engagement.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKh7PTcPoUVdv7MgIAVGpEDD0amCk5EN-olw&s",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Shadcn"],
      demoUrl: "https://vikasguliaportfolio.netlify.app/",
      sourceUrl: "https://github.com/VIKASGULIA17/PortFolio",
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
                  src={project.image}
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
