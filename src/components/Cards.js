import React from 'react'
import Styled from 'styled-components'


export default function Cards (props){
    return(
        <section className='cards_container'>
            <CardHeading>
                <h1>why you should choose us</h1>
            </CardHeading> 

            <CardItem>
                <CardCover style = {{
                    backgroundImage: `url('/images/card2.png')`
                }}>

                 <CardImg src={props.image} alt='' />

                 <CardText>
                 <h3> {props.text} </h3>
                 </CardText>

                 <p> {props.para} </p>
               </CardCover>      
            </CardItem>
        </section>
    )
}


const CardHeading = Styled.h1`
    text-align: center;
    text-transform: capitalize;
`;

const CardItem = Styled.div`
    padding: 50px 10px 0;
`;  

const CardCover = Styled.div`
    width: 260px;
    height: 100%;
    padding: 20px 40px 25px;
    /* background: linear-gradient(0deg, rgba(93,93,93,0.8), rgba(93,93,93,0.8), url({(props.cover)})); */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  `;

const CardImg = Styled.img`
    width: 30px;
    height: 35px;
    margin-top: 10px;
    color: #bc906f;
  `;

const CardText = Styled.h3`
    color: #bc906f;
    font-size: 1.3rem;
  `;