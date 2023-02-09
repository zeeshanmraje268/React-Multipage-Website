import { createGlobalStyle } from "styled-components";

export  const GlobalStyle= createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}


html{
  
  scroll-behavior: smooth;
 
}

h1{
  font-size: 6rem;
  font-weight: 900;
  color: ${({theme})=>theme.colors.heading};
}

h2{
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({theme})=>theme.colors.heading};
  text-align: center;
  margin: 1rem 0;
}

h3{
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 2rem;
  color: ${({theme})=>theme.colors.white};
}

p{
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme})=>theme.colors.text};
  line-height: 1.7;
}

a{
  text-decoration: none;
}
li{
  list-style: none;
}



`; 