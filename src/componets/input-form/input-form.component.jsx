import { validatePassword } from 'firebase/auth'
import {Group,Input,Label} from'./input-form.styles.jsx'


const InputForm=({label,value,...otherProps})=>{
   


return(
     <Group>
       
         <Input value={value} {...otherProps}></Input>
        <Label shrink={value.length>0?true:undefined}>{label}</Label>
         </Group>
)

}



export default InputForm