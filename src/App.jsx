"use client"
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage'
import List from './Components/List/List'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Project from './Components/Projects/Project'
import Leetcode from './Components/Leetcode/Leetcode'
import { UpdateFollower } from 'react-mouse-follower';
const App = () => {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route>
          <Route path="Navbar" element={<Navbar />} />
          <Route path="Project" element={<Project />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <div className='w-full h-screen bg-slate-300 overflow-x-hidden'> 
      
    
        

      <Navbar />

      <Homepage />
      <List />
      <Leetcode />
      <About />
      <Project />
      <Contact /> 
        
    </div>
    </>
  )
}
export default App