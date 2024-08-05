
 import {useEffect, useState} from "react"



import InputForm from "../input-form/input-form.component"
 import Button from "../button/button.component"
  
import {SignInContainer,BtnContainer}from'./sign-in.styles.jsx'
import { useDispatch } from "react-redux"


import { googleSignInStart ,googleRedirectSignInStart,signInWithEmailStart} from "../../store/user/user.actions.js"



const defaultInputData={
    email:'',
    password:'',

}


const SignIn=()=>{
    const[formInputData,setFormInputData]=useState(defaultInputData)
    const dispatch=useDispatch()
   const {email,password}=formInputData

 
    const logWithGoogle=()=>dispatch(googleSignInStart())
    const logWithGoogleRedirect=()=>dispatch(googleRedirectSignInStart())
        
    const submitHandler=(e)=>{
      e.preventDefault()
      dispatch(signInWithEmailStart(email,password))
     setFormInputData(defaultInputData)
     }
      
    const changeHandler=function(event){
     event.preventDefault()
     const{name,value}=event.target
     setFormInputData(()=>{return{...formInputData,[name]:value}})
        
    }
    
    
  

    
        return (
        <SignInContainer>
            
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>

        <form onSubmit={submitHandler}>
        <InputForm label="Email" type="email" required name="email" onChange={changeHandler} value={email}></InputForm>
        <InputForm label="Password" type="password"required name="password"value={password} onChange={changeHandler}></InputForm>
        <BtnContainer>
        <Button type='submit' children='Sign In'/>
        <Button type='button' typebutton='google'  onClick={logWithGoogle} children='Google'/>
        <Button type='button' typebutton='redirect' children='Redirect' onClick={logWithGoogleRedirect}/>
        </BtnContainer>
        </form>
      
   
        </SignInContainer>
    )



    

}





export default SignIn