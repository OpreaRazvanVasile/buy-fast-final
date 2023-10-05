import React, { useState } from "react"
import { useNavigate } from "react-router"

import './directory-item.styles.scss'



const DirectoryItem = ({ category }) => {
   
    
   const nav=useNavigate()
    const categoryNavigation=()=>{
       return nav(`/shop/${category.title}`)
    }
    const shopNavigation=()=>{
       return nav('/shop')
    }
     console.log(category)
  
    return (
        <div className="item-directory-conatiner">
            <div className='background-image' style={{backgroundImage:`url(${category.imageUrl})`}}></div>
            
             
            <div className="directory-item-body-container">
                <h2 onClick={categoryNavigation}>{category.title.toUpperCase()}</h2>
                <p onClick={shopNavigation}>Shop Now</p>
            </div>

        </div>
    )
}
export default DirectoryItem