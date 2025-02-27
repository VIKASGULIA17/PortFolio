import React from "react";
import { Button } from "@/components/ui/button"; 
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Photo from "@/assets/pictures/AboutPagePic.jpeg"

export default function AboutMe() {
  return (
    <section className="bg-[#121212] text-white py-28 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-[#5B5DDC] text-3xl md:text-4xl text-center pb-16 font-bold mb-8">About Me</h2>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start lg:gap-20">
          <div className="flex-shrink-0">
            <div className="relative w-60 h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#5B5DDC]">
              <img
                src={Photo}
                alt="Profile Picture"
                className="object-cover"
              />
            </div>

            <div className="flex justify-center mt-4 space-x-3">
              <a
                href="https://github.com/vikasgulia17"
                className="text-gray-300 hover:text-[#5B5DDC] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vikas-gulia-b28255298/"
                className="text-gray-300 hover:text-[#5B5DDC] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/orewa__vikas"
                className="text-gray-300 hover:text-[#5B5DDC] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="vikasgulia17@email.com"
                className="text-gray-300 hover:text-[#5B5DDC] transition-colors"
              >
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">Vikas Gulia</h3>
            <p className="text-[#5B5DDC] font-medium mb-4">Front End Developer</p>

            <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a passionate developer with a strong foundation in web development, specializing in React, HTML, CSS, Tailwind, and PHP. Alongside web development, I'm also focused on data science and problem-solving through DSA, continuously improving my skills by practicing on LeetCode.
            </p>

            <Button className="bg-[#5B5DDC] hover:bg-[#4A4CB8] text-white">
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
