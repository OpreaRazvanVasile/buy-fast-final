
import './category-routs.styles.scss'
import { useParams } from "react-router"

import { useEffect,useContext,useState } from "react"

import { CategoriesContext } from "../../contexts/categories-context/categories.contex"
import ProductItem from "../product-item/product-item.component"
import { hasPointerEvents } from '@testing-library/user-event/dist/utils'


const CategoryRouts=()=>{
    const {category}=useParams()
    const {categories}=useContext(CategoriesContext)
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
            <div className='categoires-routes-title'>{category.toLocaleUpperCase()}</div>
            <br></br>
        <div className='categoires-routes-container'>
           {
             products&&products.map(product=>
                
            <ProductItem key={product.id} product={product}></ProductItem>)
           }  

        </div>
        </>
    )
    

   
}



export default CategoryRouts