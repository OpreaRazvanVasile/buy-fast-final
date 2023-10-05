
 import { useEffect,useState,useContext} from "react"
  import { UserContext } from "../../contexts/user-context/user.context"


import InputForm from "../input-form/input-form.component"
 import Button from "../button/button.component"

import { createUsersDocument,auth, singInWithGoogle,redirectSingIn,singInWithEmail}
    from "../../utils/fierbase/fierbase.utils"
import { getRedirectResult } from "firebase/auth"    
import './sign-in.styles.scss'







const defaultInputData={
    email:'',
    password:'',

}


const SignIn=()=>{
    const[formInputData,setFormInputData]=useState(defaultInputData)
     const {currnetUser}=useContext(UserContext)
    
    const {email,password}=formInputData
        useEffect(()=>{
        const redirectResponse=async function(){
            
    
            const response= await getRedirectResult(auth)
            if(response){
                const createDocumentDB=await createUsersDocument(response.user)  
                
            }
        
        } 
        redirectResponse()
    
    
    },[])
        
    const logWithGoogle=async function(){
        if (currnetUser) return signOutAlert(); 

        const response=await singInWithGoogle()
        const createDocumentDB=await createUsersDocument(response.user)
         return createDocumentDB
        
      }

         
      
      const changeHandler=function(event){
        event.preventDefault()
       const{name,value}=event.target
       setFormInputData(()=>{return{...formInputData,[name]:value}})
      

    
      
       }
    
    
    const submitHandler=async(e)=>{
    e.preventDefault()
        if(currnetUser) return signOutAlert() ;
        const {user}=await  singInWithEmail(email,password)
     
    
         
        
        
        setFormInputData(defaultInputData)
        
        
       
    
}
 
 const signOutAlert=()=>alert(`you must log out of the  ${currnetUser.email.slice(0,6)} account`.toLocaleUpperCase())

 
  const signInWithRedirect=async()=>{
       if(!currnetUser) {
           await redirectSingIn();

       } 
       else {
        
        signOutAlert()
       }
    

    

  }
    
        return (
        <div className="sign-in-container">
            
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>

        <form onSubmit={submitHandler}>
        <InputForm label="Email" type="email" required name="email" onChange={changeHandler} value={email}></InputForm>
        <InputForm label="Password" type="password"required name="password"value={password} onChange={changeHandler}></InputForm>
        <div className="btn-container">
        <Button type='submit' children='Sign In'/>
        <Button type='button' typeButton='google'  onClick={logWithGoogle} children='Google'/>
        <Button type='button' typeButton='redirect' children='Redirect' onClick={signInWithRedirect}/>
        </div>
        </form>
      
   
        </div>
    )



    

}





export default SignIn