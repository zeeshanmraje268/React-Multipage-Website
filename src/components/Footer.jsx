import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const blank="_blank";
const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="contact-short">
          <div>
            <p>Ready To get Started</p>
            <p>Talk to us today</p>
          </div>
          <div>
            <button className="btn">Get Staerted</button>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="grid grid-column-four">
              <div>
                <h3>Thapa Technical</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus, voluptas.
                </p>
              </div>
              <div>
                <h3>Subscribe to get important updates</h3>
                <input type="email" placeholder="Your Email" />
                <a href="https://www.linkedin.com/in/zeeshan-m-raje-0b8493232/" className="btn" target={blank}>SUBSCRIBE</a>
              </div>
              <div style={{ textAlign: "center" }}>
                <h3>Follow Us</h3>
                <div className="grid grid-column-three icons">
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
              <div>
                <h3>Call Us</h3>
                <p>+91 8308876504</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-column-two containers">
            <div>
              <p>@2023 DMSZ Software <a href="https://www.linkedin.com/in/zeeshan-m-raje-0b8493232/" target={blank} >(Zeeshan M. Raje)</a> </p>
            </div>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.a`

 
  .contact-short {
    max-width: 1100px;
    margin: 2rem auto;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 3.5rem 3.5rem;
    width: 60%;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 25px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-size: 1rem;
    line-height: 1;
    z-index: 1;
    position: relative;
  }
  .btn {
    background-color: ${({ theme }) => theme.colors.helper};
    padding: 1rem 2.5rem;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
  }
  .btn:hover {
    transform: scale(0.97);
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
  .footer {
    background: #08132d;
    color: white;
    margin-top: -5rem;
    z-index: -1;
  }
  .container {
    padding: 9rem 0;
    max-width: 1100px;
    margin: 0 auto;
  }
  .containers {
    padding: 0.5rem 0;
    max-width: 1100px;
    margin: 0 auto;
  }

  .containers p{
    color: white;
  }
  .grid {
    display: grid;
  }
  .grid-column-three {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .grid-column-two {
    display: grid;
    gap: 2rem;
    text-align: center;
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-column-four {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
  }
  
  .grid-column-four p{
    color: white;
    font-size: 0.8rem;
    
  }

  .footer input {
    padding: 0.8rem 2rem;
    border-radius: 5px;
    margin-top: -1rem;
    margin-bottom: 1.5rem;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icons a {
    color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icons a:hover{
    background-color: ${({theme})=>theme.colors.helper};
  }
  a{
    text-decoration: none;
    color: white;
  }

  @media (min-width: 300px) and (max-width:768px) {
    .grid-column-four {
   display: flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   text-align: center;
  }

  .grid-column-four input{
    display: inline-block;
  }
  .grid-column-two{
    display: flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
  }

  .contact-short{
    display: flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   width: 350px;
   margin-top: 6rem;
  }
  hr{
    margin-top: -6rem;
  }
  .contact-short .btn{
    margin-top: 1rem;
    padding: 0.6rem 1rem;
  }

  
  }

`;
export default Footer;
