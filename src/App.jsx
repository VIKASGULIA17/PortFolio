"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Homepage from "./Component/HeroSection/HeroSection";
import SkillSet from "./Component/SkillSet/SkillSet";
// Import the About Me page from the correct path
import AboutMe from "./Pages/AboutME";
import Contact from "./Component/Contact/Contact";
import ProjectsSection from "./Pages/Project";
import Qualifications from "./Component/Qualifications/Qualifications";
import Home from "./Pages/Home";
import BlogSection from "@/Pages/Blogs";
import { UpdateFollower } from "react-mouse-follower";


const App = () => {
  return (

      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/skillset" element={<SkillSet />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Blog" element={<BlogSection />} />

        </Routes>
      </BrowserRouter>
    
       

  );
};

export default App;
