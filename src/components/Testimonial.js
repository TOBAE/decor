import React from 'react'
import Styled from 'styled-components'
import { loremIpsum } from 'react-lorem-ipsum'
import TestimonialElip1 from '../images/testimonial_elip1.png'
import TestimonialImg1 from '../images/testimonial_img1.png'
import TestimonialElip2 from '../images/testimonial_elip2.png'
import TestimonialImg2 from '../images/testimonial_img2.png'
import TestimonialStar from '../images/Star.png'


export default function Testimonial() {
    return(
        <>
           <TestimonialHeadind>
               <h1>what they said about us</h1>
           </TestimonialHeadind>

           <FirstRow>
                <ImgSection>
                   <Img src={TestimonialElip1} alt='' />

                   <BorderContainer>
                      <ImgPix src={TestimonialImg1} alt='' />
                      
                      <ImgText>
                         <ImgHeading2>jessica john</ImgHeading2>
                         <Hr />
                         <ImgHeading4>programmer</ImgHeading4>
                         <ImgStar src= {TestimonialStar} alt='' />
                         <ImgStar src= {TestimonialStar} alt='' />
                         <ImgStar src= {TestimonialStar} alt='' />
                         <ImgStar src= {TestimonialStar} alt='' />
                         <ImgStar src= {TestimonialStar} alt='' />
                      </ImgText>
                   </BorderContainer>
                </ImgSection>

                <Para>{loremIpsum()}</Para>
           </FirstRow>

           <SecondRow>
           <Para>{loremIpsum()}</Para>

                <ImgSection>

                   <BorderContainer2>
                      <ImgPix src={TestimonialImg2} alt='' />
                      
                      <ImgText>
                         <ImgHeading2>john williams</ImgHeading2>
                         <Hr />
                         <ImgHeading4>freelancer</ImgHeading4>
                         <ImgStar src= {TestimonialStar} alt='' />
                         <ImgStar src= {TestimonialStar} alt='' />
                         <ImgStar src= {TestimonialStar} alt='' />
                         <ImgStar src= {TestimonialStar} alt='' />
                         <ImgStar src= {TestimonialStar} alt='' />
                      </ImgText>
                   </BorderContainer2>

                   <Img src={TestimonialElip2} alt='' />
                </ImgSection>

           </SecondRow>
        </>

    )    
}


// STYLING

const TestimonialHeadind = Styled.div`
    text-align: center;
    text-transform: capitalize;
    font-size: 1rem;
    margin-top: 80px;
`

const FirstRow = Styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 30px 80px 0;
`

const SecondRow = Styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    padding: 30px 80px 0;
`


const ImgSection = Styled.div`
    display: flex;
    text-transform: capitalize;
`   

const Img = Styled.img`
    width: 50px;
    height: 115px;
    margin: 0;
` 

const BorderContainer = Styled.div`
    display: flex;
    width: 330px;
    height: 80px;
    align-items: center;
    padding: 5px 10px;
    margin-left: -35px;
    margin-top: 12px;
    background-color: #fff;
    box-shadow: 3px 3px 5px #aaaaaa;
    border-radius: 50px;
`

const BorderContainer2 = Styled.div`
    display: flex;
    width: 330px;
    height: 80px;
    align-items: center;
    padding: 5px 10px;
    margin-right: -36px;
    margin-top: 12px;
    background-color: #fff;
    box-shadow: 3px 3px 5px #aaaaaa;
    border-radius: 50px;
`

const ImgPix = Styled.img`
    width: 60px;
    height: 60px;
` 

const ImgText = Styled.div`
    margin-left: 30px;
`  

const ImgHeading2 = Styled.h2`
    margin: 0;
    font-size: 1.2rem;
`  

const ImgHeading4 = Styled.h4`
    margin: 0;
    font-size: 1rem;
` 
const Hr = Styled.hr`
    width: 160px;
    border-color: gray;
` 

const ImgStar = Styled.img`
    width: 16px;
    margin-top: 5px;
` 

const Para = Styled.p`
    width: 50%;
    margin-top: -3px;
` 