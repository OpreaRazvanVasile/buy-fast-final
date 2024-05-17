import styled from "styled-components";
import { Link } from "react-router-dom";

const breakepointMobile='768px'
const breakepointTablet='1024px'
export const NavContainer=styled.div`

height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;

@media screen and (width:360px) {
        width:100% ;
         } 

 @media screen and (width:280px) {
   width:125% ;
   margin-left:-0.46rem ;
 }

`

export const LogoConatier=styled(Link)`
       height: 100%;
       width: 70px;
      padding: 25px;

      @media screen and (width:280px) {
        margin-left:-2rem ;
}
      
`

export const NavLinksContainer=styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

@media screen and (max-width: ${breakepointMobile}) {
        width: 100%;
        height: auto;
        padding-top:3vh;
}


@media screen and (width:280px){
.nav-links-container{
        width:50px ;
        margin-left:-1rem ;
    }
}

@media screen and (max-width:${breakepointTablet})  {
        width:auto ;
}
       
       

`

export const NavLink=styled(Link)`


padding: 10px 15px;
cursor: pointer;

@media screen and (max-width:375px) {
font-size:14.3px ;
        
}
@media screen and (width:280px) {
        font-size:2vh ;
        padding: auto;
                
}



`


