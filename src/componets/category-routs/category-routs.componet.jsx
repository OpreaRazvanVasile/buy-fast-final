
import {CategoriesRouts,CategoriesTitle} from'./category-routs.styles.jsx'
import { useParams } from "react-router"

import { useEffect,useState } from "react"

import { useSelector } from 'react-redux'
import { selectorCategoires } from '../../store/categories/categories.selector.js'
import ProductItem from "../product-item/product-item.component"
import { hasPointerEvents } from '@testing-library/user-event/dist/utils'


const CategoryRouts=()=>{
    console.log(`render/re-render categoryRouts component `)
    const {category}=useParams()
    const categories=useSelector(selectorCategoires)
    console.log(categories)
    //{hats:[],snekers:[]}

    console.log(category)
    //shop/hats->category title 
    const [products,setProducts]=useState([])
    //[]
   
    /*
     []
     shop/heats
     [heatsArray]

    []
     shop/mens
     [mensArray]

    */

   

    useEffect(()=>{

      
    setProducts(categories[category]) 
    //categories['hats']
    //[...hatsArray]  

    },[category,categories])


    return(  
        <>
            <CategoriesTitle>{products?category.toLocaleUpperCase():''}</CategoriesTitle>
            {/* {//HATS} */}
            <br></br>
        <CategoriesRouts>
           {
             products&&products.map(product=>
                
            <ProductItem key={product.id} product={product}></ProductItem>)
           }  

        </CategoriesRouts>
        </>
    )
    

   
}



export default CategoryRouts