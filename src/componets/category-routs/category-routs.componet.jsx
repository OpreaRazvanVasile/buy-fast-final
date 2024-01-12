
import {CategoriesRouts,CategoriesTitle} from'./category-routs.styles.jsx'
import { useParams } from "react-router"

import { useEffect,useContext,useState } from "react"

import { useSelector } from 'react-redux'
import { selectorCategoires } from '../../store/categories/categories.selector.js'
import ProductItem from "../product-item/product-item.component"
import { hasPointerEvents } from '@testing-library/user-event/dist/utils'


const CategoryRouts=()=>{
    const {category}=useParams()
    const categories=useSelector(selectorCategoires)
    const [products,setProducts]=useState([])
   
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

    },[category,categories])


    return(  
        <>
            <CategoriesTitle>{category.toLocaleUpperCase()}</CategoriesTitle>
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