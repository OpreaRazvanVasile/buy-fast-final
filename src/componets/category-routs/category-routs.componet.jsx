
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
    //{hats:[],snekers:[]}


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

   
}



export default CategoryRouts