
 import { useState} from "react"



import InputForm from "../input-form/input-form.component"
 import Button from "../button/button.component"
  
import {SignInContainer,BtnContainer}from'./sign-in.styles.jsx'
import { useDispatch, useSelector } from "react-redux"
import {  adminAuth } from "../../store/user/user.selector.js"


import { googleSignInStart ,signInWithEmailStart} from "../../store/user/user.actions.js"
import { useNavigate } from "react-router"



const defaultInputData={
    email:'',
    password:'',

}


const SignIn=()=>{
    const[formInputData,setFormInputData]=useState(defaultInputData)
    const dispatch=useDispatch()
   const {email,password}=formInputData
   const admin=useSelector(adminAuth)
   const nav=useNavigate()
 
    const logWithGoogle=()=>dispatch(googleSignInStart())

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
            {!admin?<>
                <Button type='submit' children='Sign In'/>
        <Button type='button' typebutton='google'  onClick={logWithGoogle} children='Google'/>
    
            </>:<>
            <Button type='submit'   onClick={()=>nav('/')} children='Buy-Fast'/>
            <Button type='submit'
            onClick={()=>window.location.href = 'https://admin-fast-buy.netlify.app/'} typebutton='google' children='Buy-Fast-Editor'/>
            </>}
       
        </BtnContainer>
        </form>
      
   
        </SignInContainer>
    )



    

}





export default SignIn