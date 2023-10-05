
import ProductItem from "../product-item/product-item.component"
import './category-preview.styles.scss'

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
                  <h2 className="title"><span>{title.toLocaleUpperCase()}</span></h2>
           
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