import React from 'react'
import Navbar from '../Navbar/Navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>The ultimate dessert</HeroH1>
          <HeroP>
            Ready In 2 minutes
          </HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>

  )
}

export default Hero
