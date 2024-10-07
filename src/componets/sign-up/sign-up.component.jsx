
import { useState} from "react"
import InputForm from "../input-form/input-form.component"
import Button from "../button/button.component"
import{SignUpCotainer} from'./sign-up.styles.jsx'
import { useDispatch, useSelector } from "react-redux"
import { signUpStart } from "../../store/user/user.actions.js"
import { selectCurrentUser } from "../../store/user/user.selector.js"


const defaultInputData={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}


const SignUp=()=>{
    const dispatch=useDispatch()
    const[formInputData,setFormInputData]=useState(defaultInputData)
   
  
  

    const {displayName,email,password,confirmPassword}=formInputData

  
      const changeHandler=function(event){
        event.preventDefault()
       const{name,value}=event.target
       setFormInputData(()=>{return{...formInputData,[name]:value}})
    
    
      
       }
    
    
    const submitHandler=async(e)=>{
    e.preventDefault()
    if(password!==confirmPassword)return alert(`Password and Confirm Password don't match'`)
   
    dispatch(signUpStart(email,password,displayName))
   
    setFormInputData(defaultInputData)
   
   

    
    }
    return (
        <SignUpCotainer>
            
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
 
        <form onSubmit={submitHandler}>
        <InputForm label='Display Name' type='text' required name="displayName" onChange={changeHandler} value={displayName}></InputForm>
        <InputForm label="Email" type="email" required name="email" onChange={changeHandler} value={email}></InputForm>
        <InputForm label="Password" type="password"required name="password"value={password} onChange={changeHandler}></InputForm>
        <InputForm label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}></InputForm>
        <Button type='submit' children='Sing Up'/>
       
        </form>
        </SignUpCotainer>
    )
}

export default SignUp