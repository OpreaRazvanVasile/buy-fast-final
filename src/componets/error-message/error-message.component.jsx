import { MessageContainer } from "./error-message.styles"
import { Paragraf } from "./error-message.styles"
import Spinner from "../spinner/spinner.componet"


const ErorrMessage=({message})=>{
   return (
      <>
   <MessageContainer>
    <Paragraf>{message.stack.slice(0,message.stack.indexOf('('))}
    <Spinner/>
    </Paragraf>
   
   </MessageContainer>
    </>
    
    
   )
}

export default ErorrMessage