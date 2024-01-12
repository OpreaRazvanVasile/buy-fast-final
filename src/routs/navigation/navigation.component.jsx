
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown-logo/crown.svg";

import {useContext, Fragment, useState } from "react";
import { signOutUser } from "../../utils/fierbase/fierbase.utils";
import IconCart from "../../componets/cart-icon/cart-icon.component";
import CartDropdown from "../../componets/cart-dropdown/cart-dropdown.component";
import { CartContex } from "../../contexts/cart-context/cart-context";
import { useSelector } from "react-redux";
import { selectCurrentUser,slectIsMouseOverEl } from "../../store/user/user.selector";


// import './navigation.styles.scss'
import { NavContainer,LogoConatier,NavLinksContainer,NavLink} from "./navigation.styles";


const Navigation = () => {


    const currnetUser =useSelector(selectCurrentUser)
    const[isMouseOverEl,setIsMouseOverEl] =useState(false)
   
   
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
            <NavContainer>
                <LogoConatier to='/'>
                    {<CrownLogo />}
                </LogoConatier>
                <NavLinksContainer>
                <NavLink to='/shop'>SHOP</NavLink>
                    {currnetUser?<NavLink
                     to='/auth' onMouseOver={userNameOnMauseOver} onClick={signOutUser}>SIGN OUT </NavLink>:
                     <NavLink  to='/auth' >SIGN IN</NavLink>
                    }
               <IconCart setCart={setCart}/>   
                   
                   
                </NavLinksContainer>
            </NavContainer>
                { isCartOpen?<CartDropdown/>:null}
            <Outlet />
        </Fragment>
    )
}
export default Navigation

