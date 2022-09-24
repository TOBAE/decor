import React from 'react'
import { card } from '../data'
import Styled from 'styled-components'

export default function Cards() {
    // destructuring function
    const { items, heading } = card;
    return(
        <Section>
            <Heading>{ heading}</Heading>
            
                {items.map((item, index) => {
                    // destructuring
                    const { title, subtitle, icon, image } = item;
                    return (
                        <CardContainer key={index}>
                            <CardItems>
                                <CardImg src={image.type} alt='images' />
                                <div >
                                <CardText>
                                    <div>{icon}</div>
                                    
                                    <h4>{title}</h4>
                                    <CardPara>{subtitle}</CardPara>
                                </CardText>
                                </div>
                            </CardItems>
                        </CardContainer>
                    );
                })};
            
        </Section>
    )
}


// Styling

const Section = Styled.div`
    padding-top: 50px;
`;

const Heading = Styled.h1`
   text-align: center; 
   font-size: 1.8rem;
`;

const CardContainer = Styled.div`
   display: inline-flex;
   padding: 30px 50px 0;
`;

const CardItems = Styled.div`
   position:relative;
`;

 const CardImg = Styled.img`
     width: 320px;
     /* position: absolute; */
 `

const CardText = Styled.div`

    margin: 15px;
`;

const CardPara = Styled.div`
    width: 60%
`;