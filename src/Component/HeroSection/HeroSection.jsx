import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, GitlabIcon as GitHub, Linkedin, Twitter, Instagram } from "lucide-react";
import Photo from "@/assets/pictures/MyImage.jpeg"
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen bg-color-3 text-color-5">
      
    
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-24 md:pt-24">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col-reverse items-center justify-center gap-8 py-12 md:flex-row md:gap-12 md:py-16">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <motion.div variants={item}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-color-1">
                Frontend Developer & Data Scientist
              </h2>
            </motion.div>
            <motion.div variants={item}>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-color-5 sm:text-5xl md:text-6xl lg:text-7xl">
                Creating <span className="text-color-1">Digital</span> Experiences
              </h1>
            </motion.div>
            <motion.div variants={item}>
              <p className="max-w-md text-lg text-color-4 md:text-xl">
                I build modern, responsive websites and applications with a focus on clean design and exceptional user experience.
              </p>
            </motion.div>
            <motion.div variants={item} className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link to='/projects'
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-color-1 px-6 font-medium text-white transition-all hover:bg-opacity-90"
              >
                <span className="relative">View My Work</span>
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-color-5 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              </Link>
              <Link
              to='/contact'
                className="inline-flex h-12 items-center justify-center rounded-md border border-color-1 bg-transparent px-6 font-medium text-color-1 transition-colors hover:bg-color-4/10"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div variants={item} className="flex justify-center gap-6 pt-4 md:justify-start">
              <a
                href="https://github.com/vikasgulia17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-color-1"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vikas-gulia-b28255298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-color-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/orewa__vikas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-color-1"
                aria-label="Twitter"
              >
                <Instagram size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex-1"
          >
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border-2 border-color-1 sm:h-80 sm:w-80 md:h-96 md:w-96 z-20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B5DDC]/20 to-transparent"></div>
              <img
                src={Photo}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#5B5DDC]/10 sm:h-40 sm:w-40 md:h-48 md:w-48"></div>
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#5B5DDC]/10 sm:h-32 sm:w-32 md:h-40 md:w-40"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-sm text-color-4">Scroll Down</span>
          <div className="h-6 w-1 rounded-full bg-color-1"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
