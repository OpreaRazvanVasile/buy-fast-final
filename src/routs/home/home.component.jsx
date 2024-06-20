import Directory from '../../componets/directory/directory.component'

import { addCollectionToDB } from '../../utils/fierbase/fierbase.utils'
import { SHOP_DATA } from './categories'
import { directoryCategoriesSelector } from '../../store/directory-categories/directory-category.selectors'
import { useSelector } from 'react-redux'
import ErorrMessage from '../../componets/error-message/error-message.component'
import Spinner from '../../componets/spinner/spinner.componet'
import { directoryDataIsLoadingSelector,directoryDataErrorSelector } from '../../store/directory-categories/directory-category.selectors'
import { useEffect } from 'react'


const Home = () => {
       const isLoading=useSelector(directoryDataIsLoadingSelector)
       const error=useSelector(directoryDataErrorSelector)
      const directoryData=useSelector(directoryCategoriesSelector)
    
      //  useEffect(()=>{
        
      //   const setData=async()=>{
      //     await addCollectionToDB('categories',SHOP_DATA)
      //   }
      //   setData()
      //  },[])
   
      if(isLoading===true){
        return (
        
            <div className="App">
    
               <Spinner/>
            </div>
        )
      }

      else if(error!==null){
        return(
        
                <div className="App">
        
                   <ErorrMessage message={error}/>
                </div>
            )
      }
      else{
         return (
        
        <div className="App">

            <Directory key={directoryData.id}  categories={directoryData}></Directory>
        </div>
    )
      }
    
}
export default Home


