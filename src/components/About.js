import React from 'react'
import AboutImg from '../images/about_img.png'
import { loremIpsum } from 'react-lorem-ipsum'

export default function About (){
  return (
    <div className="about_container">
        <div className='about_img'>
            <img src={AboutImg} alt='about' />
        </div>

        <div className="about_text">
            <h1>welcome to decor</h1>
            <p> {loremIpsum()} </p>

            <button className="btn2">learn more</button>
        </div>
    </div>
  )
}