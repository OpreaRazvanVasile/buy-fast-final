import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpointMobile,breakpointTablet } from "../authentification/auth.styles";


export const CategoryPreviewConatiner=styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
@media screen and (width:1024px),(width:768px),(height:600px) {
  button{
    font-size:12px ;
  }
}

  @media screen and (width:280px) {
    width:140% ;
    margin-left:-2.4rem ;
    button{
      font-size:0.75rem ;
    }
   
      
  }
  @media screen and (width:540px) {
  
    button{
      font-size:0.65rem ;
    }
   
      
  }
  @media screen and (width:1280px) ,(height:800px) {
  
    button{
      font-size:0.85rem ;
    }
   
      
  }

   

`
export const TitleLink=styled(Link)`

font-size: 25px;
margin-bottom: 10px;
font-weight:bold;
color: rgb(99, 99, 99);
cursor: pointer;
`
export const Preview=styled.div`
  display: grid;
  grid-template-columns:repeat(5,1fr);
  column-gap: 20px;
  @media screen and (max-width:${breakpointTablet}) {
   
      display: grid;
      grid-template-columns:repeat(3,1fr);
      row-gap:20px ;
      // 0-750px
  }

  @media  screen and (width:912px) {

      display: grid;
      grid-template-columns:repeat(3,1fr);
      row-gap:20px ;
      column-gap:18px ;
    
     
      
    
  }
  @media screen and (max-width:${breakpointMobile}) {
   
      display: grid;
      grid-template-columns:repeat(1,1fr);
      row-gap:2.5rem ;
      //750- 1200px
  }
  @media screen and (width:540px) {

     display: grid;
     grid-template-columns:repeat(2,1fr);
     gap:1rem
    
    button{
    font-size:0.8rem ;
    }
 
   
   
 }
    

     
      
   
     
`


  
