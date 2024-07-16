
import ProductItem from "../product-item/product-item.component"


import {CategoryPreviewConatiner,TitleLink,Preview} from'./category-preview.styles.jsx'

const CategoryPreview=({title,value})=>{
    console.log(value)


    return (
        <CategoryPreviewConatiner key={title}>
               
                  
             {value?<TitleLink  to={`/shop/${title}`}>{title.toLocaleUpperCase()}</TitleLink>:''}
             <Preview>
                {    
                
                  value?value.filter((_,index)=>index<5).map(product=>{
                        if(product) {
                            return(  <ProductItem key={product.id} product={product}></ProductItem>)  
                            
                        }
                            }):''
                }
                </Preview>
                <br/>
                </CategoryPreviewConatiner>
    )
     

}

export default CategoryPreview