import React from "react";
import {
  Code,
  Database,
  FileCode,
  Flame,
  LayoutGrid,
  PanelLeft,
  Sigma,
  Terminal,
  Wind,
} from "lucide-react";
// Adjust the import path for Progress as needed based on your project structure
import { Progress } from "@/Component/Progress/Progress";

export default function SkillsSection() {
  const skills = [
    { name: "Python", icon: <Terminal className="h-6 w-6" />, proficiency: 95 },
    { name: "C/C++", icon: <Code className="h-6 w-6" />, proficiency: 95 },
    { name: "MySQL", icon: <Database className="h-6 w-6" />, proficiency: 80 },
    { name: "React", icon: <Flame className="h-6 w-6" />, proficiency: 65 },
    { name: "Tailwind CSS", icon: <Wind className="h-6 w-6" />, proficiency: 90 },
    { name: "PHP", icon: <FileCode className="h-6 w-6" />, proficiency: 75 },
    { name: "HTML", icon: <FileCode className="h-6 w-6" />, proficiency: 95 },
    { name: "CSS", icon: <LayoutGrid className="h-6 w-6" />, proficiency: 90 },
    { name: "JavaScript", icon: <FileCode className="h-6 w-6" />, proficiency: 75 },
    { name: "Pandas", icon: <PanelLeft className="h-6 w-6" />, proficiency: 90 },
    { name: "NumPy", icon: <Sigma className="h-6 w-6" />, proficiency: 85 },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#121212] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#5B5DDC] mb-4">
            Skills & Language Proficiency
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px]">
            A collection of programming languages, frameworks, and tools I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-zinc-800 text-[#5B5DDC] group-hover:bg-[#5B5DDC]/10 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium">{skill.name}</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">Proficiency</span>
                  <span className="text-sm font-medium text-[#5B5DDC]">{skill.proficiency}%</span>
                </div>
                <Progress
                  value={skill.proficiency}
                  className="h-2 bg-zinc-800"
                  indicatorClassName="bg-gradient-to-r from-[#5B5DDC] to-[#7577E1]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
