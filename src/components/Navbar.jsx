import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleNav=()=>{
    setMenu(!menu);
  }
  return (
    <>
      <Nav>
        
          <ul className={menu? "navbar-list-mobile":"navbar-list"} onClick={()=>setMenu(false)}>
            <NavLink to="/" className="nav-link">
              <li> Home </li>
            </NavLink>
            <NavLink to="/about" className="nav-link">
              <li> About </li>
            </NavLink>
            <NavLink to="/services" className="nav-link">
              <li> Services </li>
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              <li> Contact </li>
            </NavLink>
          </ul>

          <div className="menu-icon" onClick={handleNav}>
          {!menu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX}  />}
          </div>
        
      </Nav>
    </>
  );
};

const Nav = styled.a`
  .navbar-list {
    display: flex;
    gap: 0 3rem;
    list-style: none;
  }

  .nav-link {
    text-decoration: none;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
  }
  .nav-link:hover,
  .nav-link:focus {
    color: ${({ theme }) => theme.colors.helper};
    transition: all 1.2s ease-out;
    -webkit-transition: all 1.2s ease-out;
    -moz-transition: all 1.2s ease-out;
    -o-transition: all 1.2s ease-out;
  }

  

  .menu-icon{
        display: none;
      }

  @media  (max-width:850px ) {
      .menu-icon{
        display: block;
        font-size: 1.5rem;
      }
      .navbar-list{
        display: none;
      }

      .navbar-list-mobile{
        position: absolute;
        display:block;
        list-style: none;
        height: 100vh;
        top: 75px;
        left: 0;
        width: 100vw;
        padding-top: 120px;
        background-color: ${({theme})=>theme.colors.bg};
        z-index: 5;
      }
      .navbar-list-mobile .nav-link{
        font-size: 3.5rem;
        text-align: center;
        
        
      }
      
  }

  
`;

export default Navbar;
