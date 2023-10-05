
import { useState,useContext } from "react"
import InputForm from "../input-form/input-form.component"
import Button from "../button/button.component"
import './sign-up.styles.scss'
import { createUsersDocument, createAuthWithEmail,}
     from "../../utils/fierbase/fierbase.utils"

    



const defaultInputData={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}


const SignUp=()=>{
    const[formInputData,setFormInputData]=useState(defaultInputData)

    const {displayName,email,password,confirmPassword}=formInputData


    const changeHandler=function(event){
        event.preventDefault()
       const{name,value}=event.target
       setFormInputData(()=>{return{...formInputData,[name]:value}})
       console.log(formInputData)
    
      
       }
    
    
    const submitHandler=async(e)=>{
    e.preventDefault()
    if(password!==confirmPassword)return alert(`Password and Confirm Password don't match'`)
    
    const response=await createAuthWithEmail(email,password)
   
    if(response){
    
    if(response.user.displayName===null) response.user.displayName=displayName
    setFormInputData(defaultInputData)
    return await createUsersDocument(response.user)
    
    
    }
    
    }
    return (
        <div className="sign-up-container">
            
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
 
        <form onSubmit={submitHandler}>
        <InputForm label='Display Name' type='text' required name="displayName" onChange={changeHandler} value={displayName}></InputForm>
        <InputForm label="Email" type="email" required name="email" onChange={changeHandler} value={email}></InputForm>
        <InputForm label="Password" type="password"required name="password"value={password} onChange={changeHandler}></InputForm>
        <InputForm label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}></InputForm>
        <Button type='submit' children='Sing Up'/>
       
        </form>
        </div>
    )
}

export default SignUp