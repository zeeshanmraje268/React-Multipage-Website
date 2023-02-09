import React from "react";
import { useState } from "react";
import data from "./menuApi";
import styled from "styled-components";
const Services = () => {
  const [api] = useState(data);
  return (
    <ServicePage>
      <div className="one">
      <div className="container" >
      <h2 className="common-heading">Our Services</h2>
      <h3>We advise leaders on strategy, marketing, organization and IT</h3>
        <div className="grid grid-column-three">
          {api.map((curElem) => {
            return (
              <div className="top">
              <div className="card">
                <div className="overlay">
                  <img src={curElem.img} className="card-img" alt="Computer Services" />
                </div>
                <h2>{curElem.desc} </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis asperiores dicta reprehenderit perferendis nihil
                  delectus?
                </p>
                <button className="btn">Read More</button>
              </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </ServicePage>
  );
};

const ServicePage = styled.a`
  .one{
    background: ${({theme})=>theme.colors.bg2};
  }
  .container {
    padding: 2rem 0;
    max-width: 1200px;
    margin: 0 auto;
   
  }
  .grid {
    display: grid;
  }
  .card p{
    width: 80%;
    text-align: center;
  }
  .card h2{
    color: ${({theme})=>theme.colors.helper};
  }
  .top{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-column-three {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1.5rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  h3{
    text-align: center;
    font-size: 2rem;
    color: ${({theme})=>theme.colors.heading};
    margin-bottom: 2.5rem;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    padding-bottom: 1rem;
    border-radius: 1rem;
    width: 350px;
    
    background-color: white;
  }
  .card-img {
    width: 350px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;  
    
  }

  .overlay{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: all 0.5s linear;
    cursor: pointer;
    
  }

  .overlay::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme})=>theme.colors.helper};
    z-index: 1;
    opacity: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    transform: translateY(80%);
    transition: all 2s ease;
    -moz-transition: all 2s ease;
    -o-transition: all 2s ease;
    -webkit-transition: all 0.6s ease;
  }

  .overlay:hover.overlay::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme})=>theme.colors.helper};
    z-index: 1;
    opacity: 0.5;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    transform: translateY(0%);
    transition: all 2s ease;
    -moz-transition: all 2s ease;
    -o-transition: all 2s ease;
    -webkit-transition: all 0.6s ease;
  }

  

  .btn {
    background: white;
    padding: 0.6rem 1.2rem;
    border: none;
    color: ${({ theme }) => theme.colors.helper};
    cursor: pointer;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.colors.helper};
  }
  .btn:hover {
    background: ${({ theme }) => theme.colors.helper}; 
    transform: scale(0.96);
    color: white;
  }

  .common-heading{
    text-align: center;
    color: ${({theme})=>theme.colors.helper};
    font-size: 3rem;
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  @media (max-width:${({theme})=>theme.media.mobile} ) {
      .grid{
        display: grid;
      }
      .grid-column-three{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

      }
      .card{
        width: 300px;
      }
      .card-img {
    width: 300px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;  
    
  }
      .common-heading{
    text-align: center;
    color: ${({theme})=>theme.colors.helper};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  h3{
    text-align: center;
    font-size: 1.2rem;
    color: ${({theme})=>theme.colors.heading};
    margin-bottom: 1rem;
  }
  h2{
    font-size: 1.7rem;
  }
  .btn {
    background: white;
    padding: 0.4rem 0.5rem;
    border: none;
    color: ${({ theme }) => theme.colors.helper};
    cursor: pointer;
    border-radius: 3px;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.colors.helper};
  }

  }
`;
export default Services;
