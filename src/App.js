import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Cards from './components/Cards'
// import Testimonial from './components/Testimonial'

import { loremIpsum } from 'react-lorem-ipsum'
import Card1 from './images/card2.png'
import Card2 from './images/work2.png'
import Card3 from './images/card3.png'
import CardImg1 from './images/card_icon.png'
import CardImg2 from './images/card_icon2.png'
import CardImg3 from './images/card_icon3.png'



function App() {
  return (
      <>
         <Navbar />
         <Main />
         <About />
         <Cards
           cover = {Card1}
           image = {CardImg1}
           text = 'Best Material'
           para = {loremIpsum()}
          />  

          <Cards
           cover = {Card2}
           image = {CardImg2}
           text = 'Original Painting'
           para = {loremIpsum()}
          /> 

          <Cards
           cover = {Card3}
           image = {CardImg3}
           text = 'Latest Design'
           para = {loremIpsum()}
          />

      </>
  );
}

export default App;


