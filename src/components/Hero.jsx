import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {  useGlobalContext } from "../context";
const Hero = (props) => {
  const {name,image} = useGlobalContext();
  return (
    <>
      <HeroSection>
        <div className="container">
          <div className="grid grid-column-two">
            <div className="hero-data">
              <p className="hero-top-data">This is me</p>
              <h1 className="hero-heading">{name}</h1>
              <p className="hero-para">
                I am {name} , a full stack developer and freelancer. I am
                persuing degree in Computer Engineering. I am an enthusiastic,
                self-motivated, reliable, responsible and hard working person.
              </p>
              <NavLink to="/contact">
                <button className="btn hireme">Hire Me</button>
              </NavLink>
            </div>
            <div className="hero-img">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </HeroSection>
    </>
  );
};

const HeroSection = styled.a`
  .container {
    padding: 9rem 0;
    max-width: 1100px;
    margin: 0 auto;
  }
  .grid {
    display: grid;
  }
  .grid-column-two {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  .hero-img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-img img {
    width: 450px;
  }

  .hero-top-data {
    color: ${({ theme }) => theme.colors.helper};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .hero-heading {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.heading};
    font-weight: 900;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .hero-para {
    width: 90%;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    font-size: 0.92rem;
    line-height: 1.5;
    margin: 1rem 0;
  }
  .btn {
    background: ${({ theme }) => theme.colors.helper};
    padding: 0.9rem 1.8rem;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .btn:hover {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    transform: scale(0.96);
  }
  @media (min-width:300px) and (max-width:850px) {
    .grid{
      display: grid;
    }
    .container{
      padding: 6rem 0;
      max-width: 850px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .grid-column-two{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .hero-para{
      
      width: 80%;
      font-size: 0.9rem;
      margin: 15px auto;
    }
    .hero-top-data{
      font-size: 0.8rem;
    }
    .hero-heading{
      font-size: 3rem;
    }
    .btn{
      padding: 0.8rem 1.8rem;
    }
    .hero-img img{
      display: none;
    }
  }
`;
export default Hero;
