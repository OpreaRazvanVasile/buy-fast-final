import { validatePassword } from 'firebase/auth'
import './input-form.styles.scss'

const InputForm=({label,...otherProps})=>

     <div className='group'>
         <input  className="form-input" {...otherProps}></input>
         {label? <label className={`${otherProps.value.length>0?'shrink':''} form-input-label`}>{label}
          </label>:""}
        
         </div>



export default InputForm