
import styled from "styled-components";
import Button from '../button/button.component'

export const CartDropdownConatiner=styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
opacity:.93;
.empty-message {
  font-size: 18px;
  margin: 50px auto;
}
@media screen and (max-width:750px) {
  opacity:.85;
  margin-top:0.5rem
}
@media screen and (width:412px) {
  margin-top:2rem

}
@media screen and (width:280px) {
  opacity:.75;
  position: absolute;
  left:2.35rem;
   padding: 15px;
   

  button {
  
    font-size:0.55rem ;
  }
  
}
`
export const CartItems=styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow-y: auto; 
overflow-x: hidden; 

`
export const ButtonStyle=styled(Button)`
  margin-top: auto;
  font-size:0.66rem ;

`

  
 