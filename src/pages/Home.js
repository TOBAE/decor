import React from 'react'
import "../index.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Cards from "../components/Cards";
import Testimonial from "../components/Testimonial";
import Works from "../components/Works";



function Home() {
  return (
    <div>
        <Navbar />
        <Main />
        <About />
        <Cards /> 
        <Testimonial /> 
        <Works />
    </div>
  )
}

export default Home