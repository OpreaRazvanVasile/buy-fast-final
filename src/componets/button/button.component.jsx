import { BaseButton } from "./button.styles"



const Button=({children,typebutton,...otherProps})=>{

 return <BaseButton typebutton={typebutton}  {...otherProps}>{children}</BaseButton>
}


export default Button