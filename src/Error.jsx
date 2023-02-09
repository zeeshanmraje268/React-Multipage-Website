import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <Wrapper>
    <div className="container">
    <figure>
    <img src="./images/error.svg" alt="404 error" />
    <NavLink to='/' >
    <button className='btn'>Go Back</button>
    </NavLink>
    </figure>
    
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.a`
.container{
    max-width:1100px;
    padding: 9rem 0;
    margin: 0 auto;
}

figure{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
}
img{
    width: 500px;
}
.btn{
    background-color: ${({theme})=>theme.colors.helper};
    padding: 0.7rem 1.5rem;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
}
`
export default Error