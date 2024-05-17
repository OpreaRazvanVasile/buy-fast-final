import styled from "styled-components";

import { breakpointMobile } from "../authentification/auth.styles";


export const DirectoryContainer=styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top:-7px ;

@media screen and (max-width:${breakpointMobile}) {
    display:grid ;
    grid-template-columns:repeat(1,1fr) ;
    @media screen and (width:540px) {
       width: 110%;
       margin-left:-1rem ;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
    }
    @media screen and (width:280px) {
       width:145% ;
       margin-left: -2.87em;
       
       
      
        
      }
    }
`


   