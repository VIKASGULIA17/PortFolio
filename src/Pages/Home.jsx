import React from 'react'
import Homepage from '@/Component/HeroSection/HeroSection'
import Project from "@/Pages/Project"
import Footer from '@/Component/Footer/Footer'
import About from '@/Component/About/About'
import SkillsSection from "@/Pages/Skill-section";

const Home = () => {
  return (
    <div className='classname="overflow-hidden"'>
        <Homepage />
        <About />
        <Project />
        <SkillsSection />

        <Footer />

    </div>
  )
}

export default Home