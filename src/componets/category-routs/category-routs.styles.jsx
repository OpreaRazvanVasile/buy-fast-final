import styled from "styled-components";
import { breakpointMobile,breakpointTablet } from "../authentification/auth.styles";

export const CategoriesRouts=styled.div`
display: grid;
grid-template-columns:repeat(5,1fr);
column-gap: 20px;
row-gap:40px;
@media screen and (max-width:${breakpointTablet}) {
    margin-top:-2rem;
      
    grid-template-columns:repeat(4,1fr);
    button{
      font-size:11px ;
    }
    @media screen and (width:768px) {
      width:110% ;
      margin-left:-2.35rem ;
      column-gap: 13px;
      button{
        font-size:12px ;
      }
    }
  
}
  @media screen and (max-width:${breakpointMobile}) {
    
    grid-template-columns:1fr;
    @media screen and (width:540px) {
      grid-template-columns:repeat(2,1fr);
      
    }
    @media screen and (width:280px) {
      padding:none ;
      margin:0 auto ;
      width:139% ;
      margin-left:-2.4rem ; 
      
    }
  
}

@media screen and (width:1280px) ,(width:1024px),(height:600px) {
  button{
    font-size:12px ;
  }
  
}
@media screen and (width:280px) {
 margin-top:-2.3rem;
  
}

`

export const CategoriesTitle=styled.h2`
text-align: center;
font-weight:800 ;
font-size:1.65rem ;
color:rgb(94, 93, 93) ;
cursor: pointer;
`

