import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Layers,
  Terminal,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import Resume from "@/assets/Resume_vikas.pdf"
import { Button } from "../components/ui/button"; 
import Footer from "@/Component/Footer/Footer";
import Picture from "@/assets/pictures/MyImage.jpeg"

const AboutMe = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 flex flex-col">
      {/* Navigation */}
      

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#5B5DDC] to-[#8083FF] opacity-70 blur-sm"></div>
                <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-[#5B5DDC]/50 bg-zinc-900">
                  <img
                    src={Picture}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 size-24 rounded-full border-4 border-zinc-950 bg-[#5B5DDC] flex items-center justify-center text-white font-bold text-xl">
                  1+ YOE
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Hello, I'm </span>
                <span className="text-[#5B5DDC]">Vikas Gulia</span>
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-[#5B5DDC]"></div>
                <p className="text-xl text-zinc-400">Aspiring Data Scientist</p>
              </div>
              <p className="text-lg text-zinc-300 mb-8">
              I specialize in building modern web applications with React, along with a strong foundation in HTML, CSS, Tailwind, and PHP. I also have experience working with MySQL for database management. Apart from web development, I am deeply focused on data science, improving my problem-solving skills through DSA, and consistently working on LeetCode to sharpen my coding abilities.
              </p>
              <div className="flex gap-4 mb-10">
                  <a href={Resume}>
                <Button className="bg-[#5B5DDC] hover:bg-[#4A4CBB] text-white">

                  Download Resume <ExternalLink className="ml-2 size-4" />
                </Button>
                  </a>
                <Button
                  variant="outline"
                  className="border-[#5B5DDC] text-[#5B5DDC] hover:bg-[#5B5DDC]/10 hover:text-white"
                >
                  <Link to='/projects'>
                  View Projects 
                  </Link>
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/VIKASGULIA17"
                  className="size-10 rounded-full bg-zinc-800 hover:bg-[#5B5DDC] transition-colors flex items-center justify-center text-white"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vikas-gulia-b28255298"
                  className="size-10 rounded-full bg-zinc-800 hover:bg-[#5B5DDC] transition-colors flex items-center justify-center text-white"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="https://www.instagram.com/orewa__vikas"
                  className="size-10 rounded-full bg-zinc-800 hover:bg-[#5B5DDC] transition-colors flex items-center justify-center text-white"
                >
                  <Instagram className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
              <div className="h-1 w-20 bg-[#5B5DDC] mx-auto mb-10"></div>
              <p className="text-lg text-zinc-300 mb-6">
              I am a dedicated programmer with a passion for coding and problem-solving, aspiring to become a data scientist. My
      commitment to continuous learning drives me to deliver efficient, data-driven solutions. As an adaptable team
      player, I thrive in collaborative environments, consistently meeting and exceeding project goals.
              </p>
              <p className="text-lg text-zinc-300 mb-10">
                With a background in computer science and Commitment, I've developed a keen
                eye for detail and a commitment to writing clean, maintainable code. I believe in continuous
                learning and staying updated with the latest technologies and best practices.
              </p>

              <h3 className="text-2xl font-bold mb-6 text-white">My Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-[#5B5DDC] transition-colors">
                  <div className="size-12 rounded-lg bg-[#5B5DDC]/20 flex items-center justify-center mb-4">
                    <Code className="size-6 text-[#5B5DDC]" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Frontend Development
                  </h4>
                  <p className="text-zinc-400">
                    React, Next.js, TypeScript, Tailwind CSS, and modern JavaScript frameworks
                  </p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-[#5B5DDC] transition-colors">
                  <div className="size-12 rounded-lg bg-[#5B5DDC]/20 flex items-center justify-center mb-4">
                    <Terminal className="size-6 text-[#5B5DDC]" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Backend Development
                  </h4>
                  <p className="text-zinc-400">
                    Node.js, Express, GraphQL, REST APIs, and database design
                  </p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-[#5B5DDC] transition-colors">
                  <div className="size-12 rounded-lg bg-[#5B5DDC]/20 flex items-center justify-center mb-4">
                    <Layers className="size-6 text-[#5B5DDC]" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">UI/UX Design</h4>
                  <p className="text-zinc-400">
                    Figma, responsive design, accessibility, and user-centered design principles
                  </p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-[#5B5DDC] transition-colors">
                  <div className="size-12 rounded-lg bg-[#5B5DDC]/20 flex items-center justify-center mb-4">
                    <Cpu className="size-6 text-[#5B5DDC]" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Data science & Machine learning</h4>
                  <p className="text-zinc-400">
                    Python ,MYSQL , python libraries ,probability & statistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">My Journey</h2>
          <div className="h-1 w-20 bg-[#5B5DDC] mx-auto mb-16"></div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-zinc-700 pl-8 pb-8">
              <div className="absolute left-[-8px] top-0 size-4 rounded-full bg-[#5B5DDC]"></div>
              <div className="mb-2 text-sm text-[#5B5DDC] font-semibold">
                2025 - Present
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">
                Student
              </h3>
              <div className="text-zinc-400 mb-3">Institute of Information Technology & Management</div>
              <p className="text-zinc-300">
                Leading development of enterprise web applications, mentoring junior developers, and
                implementing best practices for code quality and performance.
              </p>
            </div>

            <div className="relative border-l-2 border-zinc-700 pl-8 pb-8">
              <div className="absolute left-[-8px] top-0 size-4 rounded-full bg-[#5B5DDC]"></div>
              <div className="mb-2 text-sm text-[#5B5DDC] font-semibold">
                2022-2023
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">
              Higher Secondary School
              </h3>
              <div className="text-zinc-400 mb-3">Spring Meadows public School</div>
              <p className="text-zinc-300">
                Developed responsive web applications using React and Redux, collaborated with designers
                to implement pixel-perfect UIs, and optimized application performance.
              </p>
            </div>

            <div className="relative border-l-2 border-zinc-700 pl-8">
              <div className="absolute left-[-8px] top-0 size-4 rounded-full bg-[#5B5DDC]"></div>
              <div className="mb-2 text-sm text-[#5B5DDC] font-semibold">
                2020-2021
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">High School</h3>
              <div className="text-zinc-400 mb-3">Hari Krishna Public Schoolg</div>
              <p className="text-zinc-300">
                Built websites and web applications for various clients, implemented responsive designs,
                and maintained existing codebases.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <Footer />

    </div>
  );
};

export default AboutMe;
