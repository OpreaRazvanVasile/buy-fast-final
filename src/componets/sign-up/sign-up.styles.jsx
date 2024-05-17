
import styled from "styled-components";
import { breakpointMobile,breakpointTablet } from "../authentification/auth.styles";
export const SignUpCotainer=styled.div`
display: flex;
flex-direction: column;
width:380px;

h2{
  margin: 10px 0;
}
@media screen and (width:1024px) {
  margin-top:1rem;
 
   
}
@media screen and (max-width:${breakpointTablet}) {
  margin:2rem auto ;
  width:80% ;
button{
  display:flex ;
  width:100% ;
}

}
@media screen and (max-width:${breakpointMobile}) {
  width:100% ;
  margin-top:2.5rem ;
  @media screen and (width:360px) {
    width:100% ;
    
  }
  
}

`

