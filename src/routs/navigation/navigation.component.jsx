
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown-logo/crown.svg";
import { UserContext } from "../../contexts/user-context/user.context";
import {useContext, Fragment, useState } from "react";
import { signOutUser } from "../../utils/fierbase/fierbase.utils";
import IconCart from "../../componets/cart-icon/cart-icon.component";
import CartDropdown from "../../componets/cart-dropdown/cart-dropdown.component";
import { CartContex } from "../../contexts/cart-context/cart-context";


import './navigation.styles.scss'


const Navigation = () => {
     
    const{currnetUser,isMouseOverEl,setIsMouseOverEl}=useContext(UserContext)
    const {isCartOpen,setIsCartOpen}=useContext(CartContex)
    const[target,setTarget]=useState('')


      
    const setCart=()=>
        (!isCartOpen)?setIsCartOpen(true):
         setIsCartOpen(false)

         const styleOnMouseOver=(text,color,font)=>{
                if(target){
                    target.textContent=text
                    target.style.color=color
                    target.style.fontWeight=font

                }
          
          
              }     
         
         const userNameOnMauseOver=(e)=>{
          setTarget(e.target)
             
     
        if(!isMouseOverEl){
            setIsMouseOverEl(true)
            const currentUserName=currnetUser.email.slice(0,6).toUpperCase()
            styleOnMouseOver(currentUserName,'grey','bolder')
            
        
        }
        else{
            setIsMouseOverEl(false)
            styleOnMouseOver('SIGN OUT','black','normal')
           
        } 
       
       
   
       
     }
     
   
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    {<CrownLogo />}
                </Link>
                <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>SHOP</Link>
                    {currnetUser?<Link className="nav-link"  
                     to='/auth' onMouseOver={userNameOnMauseOver} onClick={signOutUser}>SIGN OUT </Link>:
                     <Link className="nav-link"  to='/auth' >SIGN IN</Link>
                    }
               <IconCart setCart={setCart}/>   
                   
                   
                </div>
            </div>
                { isCartOpen?<CartDropdown/>:null}
            <Outlet />
        </Fragment>
    )
}
export default Navigation

