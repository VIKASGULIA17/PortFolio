import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button"; 
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Resume from "../../assets/Resume_vikas.pdf";


const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);


  const [scrolled, setScrolled] = useState(false);
const [TextColor, setTextColor] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/90 md:backdrop-blur-md shadow-md text-white" : "bg-[#15131C] text-white"
      }`}
    >
      <div className="container hidden mx-auto px-4 py-4 md:flex items-center justify-between">
        <div className="text-xl font-bold text-[#5B5DDC]">Portfolio</div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`${TextColor=="Home"?"text-[#5B5DDC]":"text-white"} hover:text-[#5B5DDC] font-bold text-lg transition-colors`}  onClick={()=>{
            setTextColor("Home")
          }}>
            Home
          </Link>
          <Link to="/aboutme" className={`${TextColor=="About"?"text-[#5B5DDC]":"text-white"} hover:text-[#5B5DDC] font-bold text-lg transition-colors`} onClick={()=>{
            setTextColor("About")
          }}>
            About
          </Link>
          <Link to="/projects" className={`${TextColor=="Project"?"text-[#5B5DDC]":"text-white"} hover:text-[#5B5DDC] font-bold text-lg transition-colors`} onClick={()=>{
            setTextColor("Project")
          }}>
            Projects
          </Link>
          <Link to="/Blog" className={`${TextColor=="Contact"?"text-[#5B5DDC]":"text-white"} hover:text-[#5B5DDC] font-bold text-lg transition-colors`} onClick={()=>{
            setTextColor("Contact")
          }}>
            Blogs
          </Link>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5B5DDC] font-bold text-lg"
          >
            Resume
          </a>
        </nav>
        <Button className="bg-[#5B5DDC] hover:bg-[#4A4CBB] text-white">
          <Link to='/contact'>
          Contact Me
          </Link>
        </Button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div className="text-xl font-bold text-[#5B5DDC]">Portfolio</div>
        <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
          <MdMenu className="text-2xl text-white" />
        </button>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed md:hidden z-20 top-0 right-0 h-full bg-[#15131C] text-white p-8 transition-transform duration-300 transform ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full duration-300"
        } `}
      >
        <button
          onClick={() => setIsSideMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          &times;
        </button>
        <div className="flex flex-col gap-4 mt-8 ">
        <Link to="/" className="text-xl p-4 text-center w-[150px] rounded-2xl duration-500 hover:bg-[#2b89e8d0]">
            Home
          </Link>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl p-4 text-center w-[150px] rounded-2xl duration-500 hover:bg-[#2b89e8d0]"
          >
            Resume
          </a>
          <Link to="/aboutme" className="text-xl p-4 text-center w-[150px] rounded-2xl duration-500 hover:bg-[#2b89e8d0]">
            About
          </Link>
          <Link to="/projects" className="text-xl p-4 text-center w-[150px] rounded-2xl duration-500 hover:bg-[#2b89e8d0]">
            Projects
          </Link>
          <Link to="/blog" className="text-xl p-4 text-center w-[150px] rounded-2xl duration-500 hover:bg-[#2b89e8d0]">
            blog
          </Link>
        
        </div>
      </div>
    </header>
  );
};

export default Navbar;
