import React from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Connect from './component/Connect';
import './App.css'
import Testimonials from './component/Testimonials';


const App = () => {
  return (
    <div className="scroll-smooth bg-animated min-h-screen text-white">
      <Navbar />
      <section id="profile" className="pt-20">
        <Profile />
      </section>
      <section id="experience" className="pt-20">
        <Experience />
      </section>
      <section id="projects" className="pt-20">
        <Projects />
      </section>
      <section id="connect" className="pt-20">
        <Connect />
      </section>
      {/* <section id="testimonials" className="pt-20">
       <Testimonials/>
      </section> */}
    </div>
  )

}

export default App
