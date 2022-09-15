import React from 'react'
import Logo from '../images/decor.png'

export default function Navbar (){
  return (
    <nav className="nav">
        <div>
           <img src={Logo} alt='logo' className="logo" />
       </div>

        <ul className="nav_item">
            <li>home</li>
            <li>about us</li>
            <li>services</li>
            <li>contact</li>
        </ul>     
    </nav>
  )
}