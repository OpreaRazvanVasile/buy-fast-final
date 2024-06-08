import styled from "styled-components";
import { breakpointMobile, breakpointTablet } from "../authentification/auth.styles";
export const FormCotainer=styled.form`
 

`
export const ContainerOrderNotSent=styled.div`
display: flex;
flex-direction: column;
max-width:140%;
width:140%;



form{
   border:.1rem solid hsla(0, 0%, 63%, .25);
   margin-left:-20%;
   
}
button{
  margin-top:-1em;
  border-color:hsla(0, 0%, 15%, .25)
}
h2{
    margin-left:-25%;
    text-align:center;
    color:grey;
    text-transform:uppercase;
    text-shadow: 1px 1.4px 1px grey;
  }
  @media screen and (max-width:${breakpointMobile}){
    width:50%;
    margin-left:2.5rem;
    
  }
  @media screen and (width:412px){
    width:55%;
    margin-left:3.5rem;
    
  }
  @media screen and (width:414px)){
    width:54%;
    margin-left:4.5rem;
    
  }

  @media screen and (width:390px){
    width:48%;
    margin-left:4.5rem;
    
  }
  @media screen and (max-width:${breakpointTablet}){
    width:100%;
    margin-left:1.5rem;
    
  }
  @media screen and (max-width:540px){
    width:70%;
    margin-left:4.56rem;
    
  }


 
`