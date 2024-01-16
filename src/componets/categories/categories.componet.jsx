
import CategoryPreview from '../../componets/category-preview/category-preview.component'
import { Fragment } from 'react'

import { selectorCategoires} from '../../store/categories/categories.selector'
import { useSelector } from 'react-redux'
import { selectorIsLoading } from '../../store/categories/categories.selector'
import Spinner from '../spinner/spinner.componet'
const CategoriesComponent=()=>{

  const isLoading=useSelector(selectorIsLoading)
  const categories=useSelector(selectorCategoires)




   const categoriesEntries=Object.entries(categories)


   
      if(isLoading){
        return (
          <Fragment>
            <Spinner/>
          </Fragment>
        )
      }
      else{
        return(
            <Fragment>
             
          {categoriesEntries.map(([title,value])=><CategoryPreview key={title} title={title} value={value}></CategoryPreview>)}
            </Fragment>
        )
      }
     
       
}
export default CategoriesComponent