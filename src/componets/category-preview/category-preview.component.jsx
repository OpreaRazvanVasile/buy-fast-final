
import ProductItem from "../product-item/product-item.component"
import './category-preview.styles.scss'
import { Link } from "react-router-dom"

const CategoryPreview=({title,value})=>{
    const lastFourElements=function(items){
        const arr=[]
        for(let i=items.length-1;i>=items.length-5;i--){
             
                arr.push(items[i])
    
    
        }
        return arr
    
       }

    return (
        <div className="category-preview-container" key={title}>
                  <h2 className="title"><span>
                    <Link to={`${title}`}> {title.toLocaleUpperCase()}</Link>
                   </span></h2>
           
                 <div className='preview'>
                {    
                    lastFourElements(value).map(product=>{
                  

                     return(  <ProductItem key={product.id} product={product}></ProductItem>)   
                  })
                }
                </div>
                </div>
    )
     

}

export default CategoryPreview