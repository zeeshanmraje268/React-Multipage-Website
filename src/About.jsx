import React from 'react'
import { useEffect } from 'react';
import Hero from './components/Hero'
import { useGlobalContext } from './context'

const About = () => {
  
  const {updateAboutPage}=useGlobalContext();

  useEffect(()=>updateAboutPage(),[updateAboutPage]);
  return (
    <div>
      <Hero  />
    </div>
  )
}

export default About