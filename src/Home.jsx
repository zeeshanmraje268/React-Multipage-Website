import React  from 'react'
import Hero from './components/Hero'
import Services from './Services'
import Contact from './Contact'
import { useGlobalContext } from './context'
import { useEffect } from 'react'
const Home = () => {
  
  
  const {updateHomePage}=useGlobalContext();

  useEffect(()=>updateHomePage(),[updateHomePage])

  return (
    <>
      <Hero  /> 
      <Services  />
      <Contact/>
    </>
  )
}

export default Home