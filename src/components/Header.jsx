import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
       <MainHeader className='one'>
       
          <div className="head">
          <NavLink to='/'>
                <img src="./images/logo.png" alt="Logo" className='logo' />
                
            </NavLink>
            <Navbar/>
          </div>
        
       </MainHeader>
    </>
  )
}

const MainHeader=styled.a`
  
    
    width: 100%;
    position :fixed;
    top: 0;
    left: 0;
    z-index: 5;
  
  

 
.head{
  
  height: 5rem;
  background: ${({theme})=>theme.colors.bg};
  
  display: flex;
  padding: 0 6rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}

.logo{
  height: 3rem;
  
}
@media (max-width:${({theme})=>theme.media.mobile}) {
  
  .head{
    padding: 0 1.5rem;
  }
  .logo{
    height: 2.5rem;
  }
}
`

export default Header