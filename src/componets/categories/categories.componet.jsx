
import CategoryPreview from '../../componets/category-preview/category-preview.component'
import { Fragment } from 'react'


const CategoriesComponent=({categories})=>{

    
   const categoriesEntries=Object.entries(categories)

      
        return(
            <Fragment>
          {categoriesEntries.map(([title,value])=><CategoryPreview key={title} title={title} value={value}></CategoryPreview>)}
            </Fragment>
        )
     
       
}
export default CategoriesComponent