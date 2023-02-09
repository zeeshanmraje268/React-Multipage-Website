import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Feel Free To Contact Us</h2>

        <iframe
          title="myTitle"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2962516060948!2d73.91198631489334!3d18.560677987385677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c145d47f1107%3A0xd7d22c971a8a9053!2sCoditas!5e0!3m2!1sen!2sin!4v1675355913109!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        
        <div className="container2">
          <h3 className="common-heading">Send us Thoughts</h3>
          <div className="contact-form">
            <form action="https://formspree.io/f/mbjedbed" method="POST">
              <input
                type="text"
                name="username"
                placeholder="Enter Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="useremail"
                placeholder="Enter Email"
                autoComplete="off"
                required
              />
              <textarea
                name="messege"
                id=""
                placeholder="Enter Your Messege ...."
                cols="30"
                rows="10"
                required
                autoComplete="off"
              ></textarea>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
        
      </Wrapper>
    </>
  );
};
const Wrapper = styled.a`
  .common-heading{
    text-align: center;
    color: ${({theme})=>theme.colors.helper};
    font-size: 3rem;
    margin-top: 8rem;
  }
  .container2 {
    padding: 1rem 0;
    max-width: 1200px;
    margin: 0 auto;
    height: 500px;
    
  }

  .contact-form {
    text-align: center;
  }
  input {
    display: block;
    margin: 0 auto;
    width: 60%;
    height: 40px;
    margin-bottom: 1.5rem;
    padding: 0.5rem 0.5rem;
    outline: none;
    border: 0.5px solid black;
    border-radius: 15px;
    font-weight: 500;
    font-size: 1.2rem;
  }
  input:hover,
  input:focus,
  input:active,
  textarea:hover,
  textarea:focus,
  textarea:active {
    outline: 0;
  }
  textarea {
    width: 60%;
    height: 90px;
    display: block;
    margin: 0 auto;
    padding: 0.5rem 0.5rem;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .btn {
    background-color: ${({ theme }) => theme.colors.helper};
    padding: 0.7rem 2rem;
    border-radius: 5px;
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
    cursor: pointer;
  }
  .btn:hover {
    transform: scale(0.98);
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background: white;
    color: ${({ theme }) => theme.colors.helper};
    border: 2px solid ${({ theme }) => theme.colors.helper};
  }

  @media (max-width:${({theme})=>theme.media.mobile} ) {
      .contact-form input{
        width: 90%;
      }
      .contact-form textarea{
        width: 90%;
      }
      .contact-form .btn{
        padding: 0.5rem 1.5rem;
      }
  }
`;
export default Contact;
