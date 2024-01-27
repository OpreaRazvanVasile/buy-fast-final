
import { Label,SelectStyle} from './select.styles'


  const SelectorForm=({label,options,onChange,...details})=>{
    

      return (
        <>
         <Label>{label}</Label>
        <SelectStyle options={options}  onChange={onChange} {...details}/>
        </>
      )
      

  }
  export default SelectorForm