import styled from "styled-components";
export const breakpointTablet='1000px'
export const breakpointMobile='750px'

export const AuthContainer=styled.div`
 display:flex;
 justify-content:space-between ;
 width:980px;
 margin:30px auto ;
 @media screen and (width:1024px) {
    margin:-1rem ;
    
}
@media screen and (max-width:${breakpointTablet}) {
    display:flex ;
    flex-direction: column;
    width:100%;
    gap:80px
    
  
    
    
}
@media screen and (max-width:${breakpointMobile}) {
    display:flex ;
    flex-direction: column;
    width:auto ;
  
    
}

` 