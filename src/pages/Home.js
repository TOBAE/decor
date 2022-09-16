import React from 'react'
import "../index.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Cards from "../components/Cards";




function Home() {
  return (
    <div>
        <Navbar />
        <Main />
        <About />
        <Cards />  
    </div>
  )
}

export default Home