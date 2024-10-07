import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import {  Link } from "react-router-dom";
import Resume from "../../assets/resume.pdf"
const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const data = [
    {
      Name: "Home",
      link: "#Homepage",
    },
    {
      Name: "Resume",
      link: Resume,
    },
    {
      Name: "About",
      link: "#About",
    },
    {
      Name: "Project",
      link: "#Project",
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="xl:fixed flex items-center justify-between xl:w-full xl:px-16  bg-[#6366F1] text-white xl:z-20 px-4 opacity-90 h-12 md:h-16 lg:h-20 xl:h-20 2xl:h-20 hd:h-40">
        <div className=" h2 hd:text-[100px]">Portfolio</div>
        
        <div className="xl:hidden md:hidden">
          <button
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
            className="text-3xl text-white"
          >
            <MdMenu />
          </button>
        </div>

        <div className="xl:flex xl:gap-5 xl:text-lg xl:font-light xl:transition-transform xl:duration-300 xl:transform hidden  md:block text-white space-x-6 mx-9 my-4 h5 hd:text-[50px]">
          {data.map((item, index) => (
            <a
              key={index}
              className="xl:px-4 xl:py-2 hover:bg-slate-700 rounded-md "
              href={item.link}
            >
              {item.Name}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-slate-800 text-white p-8 transition-transform duration-300 transform ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <button
          onClick={() => setIsSideMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          &times;
        </button>
        <div className="flex flex-col gap-4 mt-8">
          {data.map((item, index) => (
            <a
              key={index}
              className="text-xl rounded-md px-4 py-2"
              href={item.link}
              onClick={() => setIsSideMenuOpen(false)}
            >
              {item.Name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
