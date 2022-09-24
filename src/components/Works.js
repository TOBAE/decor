import React from 'react'
import Styled from 'styled-components'
import Work1 from '../images/work1.png'
import Work2 from '../images/work2.png'
import Work3 from '../images/work3.png'
import Work4 from '../images/work4.png'
import Work5 from '../images/work5.png'

export default function Works(){
    return (
        <>
           <TestimonialHeadind>
               <h1>our works</h1>
           </TestimonialHeadind>

          <GridContainer>
             <Img1 src={Work1} alt='' />
             <Img2 src={Work2} alt='' />
             <Img3 src={Work3} alt='' />
             <Img4 src={Work4} alt='' />
             <Img5 src={Work5} alt='' />
            
          </GridContainer>
        </>
    )
}

// Stylings

const TestimonialHeadind = Styled.div`
    text-align: center;
    text-transform: capitalize;
    font-size: 1rem;
    margin-top: 80px;
`

const GridContainer = Styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    padding: 30px 100px 0;
`

const Img1 = Styled.img`
    width: 95%;
`

const Img2 = Styled.img`
    width: 95%;
`

const Img3 = Styled.img`
    width: 95%;
`

const Img4 = Styled.img`
    width: 95%;
`

const Img5 = Styled.img`
    width: 95%;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
`