
import { Outlet } from "react-router";
import { ReactComponent as CrownLogo } from "../../assets/crown-logo/crown.svg";
import { Fragment, useState } from "react";
import IconCart from "../../componets/cart-icon/cart-icon.component";
import CartDropdown from "../../componets/cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser} from "../../store/user/user.selector";
import { NavContainer,LogoConatier,NavLinksContainer,NavLink} from "./navigation.styles";
import { isCartOpenSelector } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";
import { signOutStart } from "../../store/user/user.actions";

const Navigation = () => {

    const dispatch=useDispatch()
    const currnetUser =useSelector(selectCurrentUser)
    const[isMouseOverEl,setIsMouseOverEl] =useState(false)
   
     const isCartOpen=useSelector(isCartOpenSelector)
    const[target,setTarget]=useState('')


      
    const setCart=()=>
        (!isCartOpen)?dispatch(setIsCartOpen(true)):
         dispatch(setIsCartOpen(false))

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
                     to='/auth' onMouseOver={userNameOnMauseOver} onClick={()=>{
                        dispatch(signOutStart())
                     }}>SIGN OUT </NavLink>:
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

