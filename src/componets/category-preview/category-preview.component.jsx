
import ProductItem from "../product-item/product-item.component"


import {CategoryPreviewConatiner,TitleLink,Preview} from'./category-preview.styles.jsx'

const CategoryPreview=({title,value})=>{
    
    const lastFourElements=function(items){
        const arr=[]
        for(let i=items.length-1;i>=items.length-5;i--){
             
                arr.push(items[i])
    
    
        }
        return arr
    
       }

    return (
        <CategoryPreviewConatiner key={title}>
               
                  
              <TitleLink  to={`/shop/${title}`}>{title.toLocaleUpperCase()}</TitleLink>
             <Preview>
                {    
                    lastFourElements(value).map(product=>{
                  

                     return(  <ProductItem key={product.id} product={product}></ProductItem>)   
                  })
                }
                </Preview>
                <br/>
                </CategoryPreviewConatiner>
    )
     

}

export default CategoryPreview