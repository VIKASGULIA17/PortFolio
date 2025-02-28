import React from 'react'
import {
    Github,
    Instagram,
    Linkedin,
    Mail,
  } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-8 border-t border-zinc-800">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center gap-6 mb-6">
        <a href="https://github.com/VIKASGULIA17" className="text-zinc-400 hover:text-[#5B5DDC]">
          <Github className="size-5" />
        </a>
        <a href="https://www.linkedin.com/in/vikas-gulia-b28255298" className="text-zinc-400 hover:text-[#5B5DDC]">
          <Linkedin className="size-5" />
        </a>
        <a href="https://www.instagram.com/orewa__vikas" className="text-zinc-400 hover:text-[#5B5DDC]">
          <Instagram className="size-5" />
        </a>
      </div>
      <p className="text-zinc-500">
        © {new Date().getFullYear()} Vikas Gulia. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer