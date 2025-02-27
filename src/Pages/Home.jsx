import React from 'react'
import Homepage from '@/Component/HeroSection/HeroSection'
import SkillSet from '@/Component/SkillSet/SkillSet'
import Project from "@/Pages/Project"
import Footer from '@/Component/Footer/Footer'
import About from '@/Component/About/About'

const Home = () => {
  return (
    <div className='classname="overflow-hidden"'>
        <Homepage />
        <SkillSet />
        <About />
        <Project />

        <Footer />

    </div>
  )
}

export default Home