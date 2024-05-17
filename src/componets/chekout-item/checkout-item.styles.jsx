import styled from "styled-components";

const breakepointTablet='1020px';

export const ImgContainer=styled.div`
width: 23%;
padding-right: 20px;

`
export const Image=styled.img`
width: 100%;
height: 100%;
`
export const SpanName=styled.span`
width: 23vh;


`
export const SpanPrice=styled.span`
width: 23vh
`
export const SpanTotal=styled.span``
export const SpantTotalPrice=styled.span`
width: 26.5vh;
color:rgb(119, 119, 119) ;
 font-weight:549 ;
`
export const SpanQuantity=styled.span`
margin: 0 10px;

`
export const QuantityContainer=styled.div`
display: flex;
flex-direction:row;
width: 23vh


`
export const Arrow=styled.div`
display:flex ;
cursor: pointer;
transition:all;
&:hover{
    color:rgb(135, 133, 133) ;
   

}
`
export const RemoveButton=styled.div`
padding-left: 12px;
  cursor: pointer;
      &:hover{
        color:rgb(101, 101, 101) ;
       

    }
`

export const CheckoutItemContainer=styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 22px;
align-items: center;



@media screen and (max-width:750px) {
  width:125% ;
  ${SpanName} ,${SpanPrice},${QuantityContainer},${SpantTotalPrice}{
    width: 10vh;
    font-size:12px ;
  }
  ${RemoveButton}{
    position:relative;

    left:-1.5rem;
  
  }
}
@media screen and (width:540px) {
  margin-left:1.5rem ;
  
}

 @media screen and (width:280px) {
  margin-left:1.5rem ;
  ${SpanName} ,${SpanPrice},${QuantityContainer},${SpantTotalPrice}{
     width: 6.63vh;
     font-size:10px ;
     opacity:1
    
   }
   
  
  

`
   
