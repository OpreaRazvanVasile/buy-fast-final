
import CategoryPreview from '../../componets/category-preview/category-preview.component'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectorCategoires } from '../../store/categories/categories.selector'

const CategoriesComponent=()=>{


   const categories=useSelector(selectorCategoires)
   console.log(categories)
  
   const categoriesEntries=Object.entries(categories)

      
        return(
            <Fragment>
          {categoriesEntries.map(([title,value])=><CategoryPreview key={title} title={title} value={value}></CategoryPreview>)}
            </Fragment>
        )
     
       
}
export default CategoriesComponent