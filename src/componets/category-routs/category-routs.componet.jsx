
import {CategoriesRouts,CategoriesTitle} from'./category-routs.styles.jsx'
import { useParams } from "react-router"

import { useEffect,useState } from "react"

import { useSelector } from 'react-redux'
import { selectorCategoires, selectorError } from '../../store/categories/categories.selector.js'
import ProductItem from "../product-item/product-item.component"
import { hasPointerEvents } from '@testing-library/user-event/dist/utils'
import { selectorIsLoading } from '../../store/categories/categories.selector.js'

import Spinner from '../spinner/spinner.componet.jsx'
import ErorrMessage from '../error-message/error-message.component.jsx'


const CategoryRouts=()=>{
    
    const {category}=useParams()
    const categories=useSelector(selectorCategoires)
    const isLoading=useSelector(selectorIsLoading)
    const errorData=useSelector(selectorError);

    const [products,setProducts]=useState([])

  

    useEffect(()=>{
        
    
      
    setProducts(categories[category]) 
   

    },[category,categories])
    
    

    if(isLoading){
        return (
        <>
            <Spinner/>
        </>
    )
    }

    else if(errorData!==null){
        return (
            <ErorrMessage message={errorData}></ErorrMessage>
        )
    }
    else {
        return (
            <>
            <CategoriesTitle>{category.toLocaleUpperCase()}</CategoriesTitle>
           
            <br></br>
        <CategoriesRouts>
           {
             products&&products.sort((a,b)=>a.id-b.id).map(product=>
                
            <ProductItem key={product.id} product={product}></ProductItem>)
           }  

        </CategoriesRouts>
        </>
        )
    }

   
}



export default CategoryRouts