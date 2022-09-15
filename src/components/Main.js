import React from 'react'
import Hero from '../images/hero_img.png'
import { loremIpsum } from 'react-lorem-ipsum'

export default function Main (){
  return (
    <div className="main_container">
        <div className="main_text">
            <h1>home sweet home</h1>
            <h3>Our job is to make sure that</h3>
            <p> {loremIpsum()} </p>

            <div className="main_btn">
                <button className="btn1">make order</button>
                <button className="btn2">learn more</button>
            </div>
        </div>

        <div className='main_img'>
            <img src={Hero} alt='hero' />
        </div>
    </div>
  )
}