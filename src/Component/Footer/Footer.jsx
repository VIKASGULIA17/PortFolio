import React from 'react'
import {
    Github,
    Linkedin,
    Mail,
  } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-8 border-t border-zinc-800">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="text-zinc-400 hover:text-[#5B5DDC]">
          <Github className="size-5" />
        </a>
        <a href="#" className="text-zinc-400 hover:text-[#5B5DDC]">
          <Linkedin className="size-5" />
        </a>
        <a href="#" className="text-zinc-400 hover:text-[#5B5DDC]">
          <Mail className="size-5" />
        </a>
      </div>
      <p className="text-zinc-500">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer